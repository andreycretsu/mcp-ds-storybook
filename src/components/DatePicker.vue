<template>
  <div class="datepicker" :class="{ 'datepicker--with-sidebar': showSidebar }">
    <!-- Search Field - Natural Language Input -->
    <div class="datepicker__search">
      <div class="datepicker__search-container">
        <input
          v-model="naturalLanguageInput"
          type="text"
          class="datepicker__search-input"
          :placeholder="searchLabel"
          @keydown.enter="parseNaturalLanguage"
          @blur="parseNaturalLanguage"
        />
      </div>
    </div>

    <!-- Main Content -->
    <div class="datepicker__content">
      <!-- Sidebar with Quick Actions (Optional) -->
      <div v-if="showSidebar" class="datepicker__sidebar">
        <div class="datepicker__quick-actions">
          <button
            v-for="action in quickActions"
            :key="action.key"
            :class="[
              'datepicker__quick-action',
              { 'datepicker__quick-action--active': selectedQuickAction === action.key }
            ]"
            @click="handleQuickAction(action)"
          >
            {{ action.label }}
          </button>
        </div>
        
        <!-- Gradient Overlay -->
        <div class="datepicker__sidebar-gradient"></div>
      </div>

      <!-- Calendar Container -->
      <div class="datepicker__calendar-container">
        <!-- Calendar Header -->
        <div class="datepicker__calendar-header">
          <div class="datepicker__month-year">
            <button class="datepicker__month-btn" @click="toggleMonthDropdown">
              {{ currentMonthName }}
            </button>
            <button class="datepicker__year-btn" @click="toggleYearDropdown">
              {{ currentYear }}
            </button>
          </div>
          
          <div class="datepicker__nav-arrows">
            <button class="datepicker__nav-arrow" @click="previousMonth">
              <Icon icon="fa-solid fa-chevron-up" size="xs" />
            </button>
            <button class="datepicker__nav-arrow" @click="nextMonth">
              <Icon icon="fa-solid fa-chevron-down" size="xs" />
            </button>
          </div>
        </div>

        <!-- Fixed Week Headers -->
        <div class="datepicker__week-headers">
          <div v-for="day in weekDays" :key="day" class="datepicker__week-header">
            {{ day }}
          </div>
        </div>

        <!-- Scrollable Calendar - Single Continuous Grid -->
        <div 
          class="datepicker__calendar-scroll"
          @scroll="handleScroll"
          ref="scrollContainer"
        >
          <div class="datepicker__calendar-grid">
            <button
              v-for="(date, dateIndex) in allDates"
              :key="`${date.year}-${date.month}-${date.day}-${dateIndex}`"
              :class="[
                'datepicker__date-cell',
                {
                  'datepicker__date-cell--other-month': !isDateInDisplayedMonth(date),
                  'datepicker__date-cell--selected': isDateSelected(date),
                  'datepicker__date-cell--in-range': isDateInRange(date),
                  'datepicker__date-cell--start': isStartDate(date),
                  'datepicker__date-cell--end': isEndDate(date),
                  'datepicker__date-cell--today': isToday(date)
                }
              ]"
              @click="selectDate(date)"
            >
              {{ date.day }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="datepicker__footer">
      <span class="datepicker__footer-text">{{ footerText }}</span>
      <Icon icon="fa-solid fa-circle-exclamation" size="xs" class="datepicker__footer-icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, onMounted } from 'vue'
import Icon from './Icon.vue'

export interface DatePickerDate {
  year: number
  month: number
  day: number
  isCurrentMonth: boolean
}

export interface DatePickerMonth {
  year: number
  month: number
  dates: DatePickerDate[]
  monthName: string
  yearNumber: number
}

export interface DatePickerProps {
  /** Selected start date */
  startDate?: Date | null
  /** Selected end date */
  endDate?: Date | null
  /** Search field label */
  searchLabel?: string
  /** Footer text */
  footerText?: string
  /** Minimum selectable date */
  minDate?: Date
  /** Maximum selectable date */
  maxDate?: Date
  /** Show sidebar with quick actions */
  showSidebar?: boolean
}

const props = withDefaults(defineProps<DatePickerProps>(), {
  searchLabel: 'When...',
  footerText: '136.0 hours, 28.0 days',
  startDate: null,
  endDate: null,
  showSidebar: false
})

const emit = defineEmits<{
  'update:startDate': [date: Date | null]
  'update:endDate': [date: Date | null]
  'quick-action': [action: string]
}>()

// Quick actions configuration
const quickActions = [
  { key: 'today', label: 'Today' },
  { key: 'tomorrow', label: 'Tomorrow' },
  { key: 'this-week', label: 'This week' },
  { key: 'next-week', label: 'Next week' },
  { key: 'this-month', label: 'This month' },
  { key: 'next-month', label: 'Next month' },
  { key: 'this-year', label: 'This year' },
  { key: 'next-year', label: 'Next year' }
]

const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

// Reactive state
const currentDisplayMonth = ref(new Date()) // Start at current month
const selectedStartDate = ref<Date | null>(props.startDate)
const selectedEndDate = ref<Date | null>(props.endDate)
const selectedQuickAction = ref<string | null>(null)
const scrollContainer = ref<HTMLElement>()
const naturalLanguageInput = ref<string>('')

// Date range selection state
const isSelectingRange = ref(false)

// Scrollable months state
const visibleMonths = ref<DatePickerMonth[]>([])
const monthHeight = 216 // Height per month view

// Computed properties
const currentYear = computed(() => currentDisplayMonth.value.getFullYear())
const currentMonthName = computed(() => {
  return currentDisplayMonth.value.toLocaleDateString('en-US', { month: 'long' })
})

// Flatten all dates into a single continuous array
const allDates = computed(() => {
  const dates: DatePickerDate[] = []
  for (const monthData of visibleMonths.value) {
    dates.push(...monthData.dates)
  }
  return dates
})

// Calculate row height for scrolling (6 rows per month)
const rowHeight = 36 // 32px height + 4px gap

// Initialize continuous calendar dates (no duplicates)
const initializeMonths = () => {
  // Set the start and end years for the picker
  const startYear = 2015
  const endYear = 2035
  const startDate = new Date(startYear, 0, 1) // Jan 1, 2015
  const endDate = new Date(endYear, 11, 31) // Dec 31, 2035

  // Generate all dates in the range
  const allDatesArray: DatePickerDate[] = []
  const currentDate = new Date(startDate)

  while (currentDate <= endDate) {
    allDatesArray.push({
      year: currentDate.getFullYear(),
      month: currentDate.getMonth(),
      day: currentDate.getDate(),
      isCurrentMonth: true // Will be used for styling
    })
    // Move to next day
    currentDate.setDate(currentDate.getDate() + 1)
  }

  // Pad the beginning to start on Monday
  const firstDate = allDatesArray[0]
  const firstDayOfWeek = (new Date(firstDate.year, firstDate.month, firstDate.day).getDay() + 6) % 7
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    const padDate = new Date(firstDate.year, firstDate.month, firstDate.day - (i + 1))
    allDatesArray.unshift({
      year: padDate.getFullYear(),
      month: padDate.getMonth(),
      day: padDate.getDate(),
      isCurrentMonth: false
    })
  }

  // Pad the end to complete the last week
  const totalCells = Math.ceil(allDatesArray.length / 7) * 7
  const lastDate = allDatesArray[allDatesArray.length - 1]
  for (let i = allDatesArray.length; i < totalCells; i++) {
    const padDate = new Date(lastDate.year, lastDate.month, lastDate.day + (i - allDatesArray.length + 1))
    allDatesArray.push({
      year: padDate.getFullYear(),
      month: padDate.getMonth(),
      day: padDate.getDate(),
      isCurrentMonth: false
    })
  }

  // Create a single month object containing all dates
  visibleMonths.value = [{
    year: startYear,
    month: 0,
    dates: allDatesArray,
    monthName: new Date(startYear, 0, 1).toLocaleDateString('en-US', { month: 'long' }),
    yearNumber: startYear
  }]
}

// Scroll handlers
const handleScroll = (event: Event) => {
  const container = event.target as HTMLElement
  const scrollTop = container.scrollTop
  const containerHeight = container.clientHeight

  // Calculate how many rows fit in the viewport
  const rowsInView = Math.floor(containerHeight / rowHeight)
  // Find the first visible row index
  const firstVisibleRow = Math.floor(scrollTop / rowHeight)
  // Find the last visible row index
  const lastVisibleRow = firstVisibleRow + rowsInView - 1

  // For each month, count how many of its rows are visible
  const monthRowMap: Record<string, {start: number, end: number, year: number, month: number}> = {}
  let currentRow = 0
  let prevMonthKey = ''
  for (let i = 0; i < visibleMonths.value[0].dates.length; i += 7) {
    const date = visibleMonths.value[0].dates[i]
    const key = `${date.year}-${date.month}`
    if (key !== prevMonthKey) {
      monthRowMap[key] = { start: currentRow, end: currentRow, year: date.year, month: date.month }
      prevMonthKey = key
    }
    monthRowMap[key].end = currentRow
    currentRow++
  }

  // Find which month has the most rows visible in the viewport
  let maxVisibleRows = -1
  let activeMonthKey = ''
  let activeMonthRow = -1
  for (const key in monthRowMap) {
    const { start, end, year, month } = monthRowMap[key]
    // Count how many rows of this month are visible
    const visibleRows = Math.max(0, Math.min(lastVisibleRow, end) - Math.max(firstVisibleRow, start) + 1)
    // Prefer the month further down if equal
    if (
      visibleRows > maxVisibleRows ||
      (visibleRows === maxVisibleRows && start > activeMonthRow)
    ) {
      maxVisibleRows = visibleRows
      activeMonthKey = key
      activeMonthRow = start
    }
  }

  // Always switch to the month with the most visible rows
  if (activeMonthKey) {
    const { year, month } = monthRowMap[activeMonthKey]
    currentDisplayMonth.value = new Date(year, month, 1)
  }
}

const scrollToCurrentMonth = async () => {
  await nextTick()
  const container = scrollContainer.value
  if (!container || !visibleMonths.value[0]) return
  
  // Find a date in the current month
  const targetYear = currentDisplayMonth.value.getFullYear()
  const targetMonth = currentDisplayMonth.value.getMonth()
  
  const dateIndex = visibleMonths.value[0].dates.findIndex(date => 
    date.year === targetYear && date.month === targetMonth
  )
  
  if (dateIndex !== -1) {
    // Scroll to the row containing this date
    const rowIndex = Math.floor(dateIndex / 7)
    const scrollTop = rowIndex * rowHeight
    container.scrollTop = scrollTop
  }
}

// Navigation methods
const previousMonth = () => {
  currentDisplayMonth.value = new Date(
    currentDisplayMonth.value.getFullYear(), 
    currentDisplayMonth.value.getMonth() - 1, 
    1
  )
  scrollToCurrentMonth()
}

const nextMonth = () => {
  currentDisplayMonth.value = new Date(
    currentDisplayMonth.value.getFullYear(), 
    currentDisplayMonth.value.getMonth() + 1, 
    1
  )
  scrollToCurrentMonth()
}

// Date selection methods
const selectDate = (date: DatePickerDate) => {
  // All dates are now valid and selectable
  const selectedDateObj = new Date(date.year, date.month, date.day)
  
  // If selecting a date from a different month, update the display
  if (!isDateInDisplayedMonth(date)) {
    currentDisplayMonth.value = new Date(date.year, date.month, 1)
  }
  
  // Date range selection logic
  if (!selectedStartDate.value) {
    // First selection - set start date
    selectedStartDate.value = selectedDateObj
    selectedEndDate.value = null
    isSelectingRange.value = true
  } else if (!selectedEndDate.value) {
    // Second selection - set end date
    if (selectedDateObj >= selectedStartDate.value) {
      selectedEndDate.value = selectedDateObj
    } else {
      // If selected date is before start, swap them
      selectedEndDate.value = selectedStartDate.value
      selectedStartDate.value = selectedDateObj
    }
    isSelectingRange.value = false
  } else {
    // Both dates selected - start new selection
    selectedStartDate.value = selectedDateObj
    selectedEndDate.value = null
    isSelectingRange.value = true
  }
  
  emit('update:startDate', selectedStartDate.value)
  emit('update:endDate', selectedEndDate.value)
}

const isDateSelected = (date: DatePickerDate): boolean => {
  const dateObj = new Date(date.year, date.month, date.day)
  
  if (selectedStartDate.value && !selectedEndDate.value) {
    // Only start date selected
    return dateObj.getTime() === selectedStartDate.value.getTime()
  }
  
  if (selectedStartDate.value && selectedEndDate.value) {
    // Both dates selected - check if in range
    return dateObj.getTime() >= selectedStartDate.value.getTime() && 
           dateObj.getTime() <= selectedEndDate.value.getTime()
  }
  
  return false
}

const isDateInRange = (date: DatePickerDate): boolean => {
  if (!selectedStartDate.value || !selectedEndDate.value) return false
  
  const dateObj = new Date(date.year, date.month, date.day)
  return dateObj.getTime() > selectedStartDate.value.getTime() && 
         dateObj.getTime() < selectedEndDate.value.getTime()
}

const isStartDate = (date: DatePickerDate): boolean => {
  if (!selectedStartDate.value) return false
  const dateObj = new Date(date.year, date.month, date.day)
  return dateObj.getTime() === selectedStartDate.value.getTime()
}

const isEndDate = (date: DatePickerDate): boolean => {
  if (!selectedEndDate.value) return false
  const dateObj = new Date(date.year, date.month, date.day)
  return dateObj.getTime() === selectedEndDate.value.getTime()
}

const isToday = (date: DatePickerDate): boolean => {
  const today = new Date()
  return (
    today.getFullYear() === date.year &&
    today.getMonth() === date.month &&
    today.getDate() === date.day
  )
}

// Check if date is in the currently displayed month (for gray styling)
const isDateInDisplayedMonth = (date: DatePickerDate): boolean => {
  const displayedYear = currentDisplayMonth.value.getFullYear()
  const displayedMonth = currentDisplayMonth.value.getMonth()
  
  return date.year === displayedYear && date.month === displayedMonth
}

// Quick action handlers
const handleQuickAction = (action: any) => {
  selectedQuickAction.value = action.key
  emit('quick-action', action.key)
  
  // You can implement specific date logic here
  const today = new Date()
  let targetDate = new Date(today)
  
  switch (action.key) {
    case 'today':
      targetDate = today
      break
    case 'tomorrow':
      targetDate.setDate(today.getDate() + 1)
      break
    case 'this-week':
      // Set to start of this week (Monday)
      const dayOfWeek = (today.getDay() + 6) % 7
      targetDate.setDate(today.getDate() - dayOfWeek)
      break
    // Add more cases as needed
  }
  
  selectedStartDate.value = targetDate
  selectedEndDate.value = null
  currentDisplayMonth.value = new Date(targetDate.getFullYear(), targetDate.getMonth(), 1)
  emit('update:startDate', selectedStartDate.value)
  emit('update:endDate', selectedEndDate.value)
  
  // Scroll to the target month
  scrollToCurrentMonth()
}

const toggleMonthDropdown = () => {
  // Implement month dropdown if needed
}

const toggleYearDropdown = () => {
  // Implement year dropdown if needed
}

// Natural language date parsing
const parseNaturalLanguage = () => {
  const input = naturalLanguageInput.value.toLowerCase().trim()
  if (!input) return
  
  const today = new Date()
  let startDate: Date | null = null
  let endDate: Date | null = null
  
  // Parse common single-day patterns
  if (input === 'today') {
    startDate = new Date(today)
    endDate = new Date(today)
  } else if (input === 'tomorrow') {
    startDate = new Date(today)
    startDate.setDate(today.getDate() + 1)
    endDate = new Date(startDate)
  } else if (input === 'yesterday') {
    startDate = new Date(today)
    startDate.setDate(today.getDate() - 1)
    endDate = new Date(startDate)
  } else if (input.match(/^(the day after tomorrow|day after tomorrow)$/)) {
    startDate = new Date(today)
    startDate.setDate(today.getDate() + 2)
    endDate = new Date(startDate)
  } else if (input.match(/^(the day before yesterday|day before yesterday)$/)) {
    startDate = new Date(today)
    startDate.setDate(today.getDate() - 2)
    endDate = new Date(startDate)
  }
  
  // Parse week patterns
  else if (input.match(/^(this week|current week)$/)) {
    const dayOfWeek = (today.getDay() + 6) % 7
    startDate = new Date(today)
    startDate.setDate(today.getDate() - dayOfWeek)
    endDate = new Date(startDate)
    endDate.setDate(startDate.getDate() + 6)
  } else if (input.match(/^(next week|following week)$/)) {
    const dayOfWeek = (today.getDay() + 6) % 7
    startDate = new Date(today)
    startDate.setDate(today.getDate() - dayOfWeek + 7)
    endDate = new Date(startDate)
    endDate.setDate(startDate.getDate() + 6)
  } else if (input.match(/^(last week|previous week|past week)$/)) {
    const dayOfWeek = (today.getDay() + 6) % 7
    startDate = new Date(today)
    startDate.setDate(today.getDate() - dayOfWeek - 7)
    endDate = new Date(startDate)
    endDate.setDate(startDate.getDate() + 6)
  } else if (input.match(/^(rest of (this )?week|remainder of (this )?week)$/)) {
    startDate = new Date(today)
    const dayOfWeek = (today.getDay() + 6) % 7
    endDate = new Date(today)
    endDate.setDate(today.getDate() + (6 - dayOfWeek))
  }
  
  // Parse month patterns
  else if (input.match(/^(this month|current month)$/)) {
    startDate = new Date(today.getFullYear(), today.getMonth(), 1)
    endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0)
  } else if (input.match(/^(next month|following month)$/)) {
    startDate = new Date(today.getFullYear(), today.getMonth() + 1, 1)
    endDate = new Date(today.getFullYear(), today.getMonth() + 2, 0)
  } else if (input.match(/^(last month|previous month|past month)$/)) {
    startDate = new Date(today.getFullYear(), today.getMonth() - 1, 1)
    endDate = new Date(today.getFullYear(), today.getMonth(), 0)
  } else if (input.match(/^(rest of (this )?month|remainder of (this )?month)$/)) {
    startDate = new Date(today)
    endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0)
  }
  
  // Parse quarter patterns (business terms)
  else if (input.match(/^(this quarter|current quarter|q[1-4])$/)) {
    const quarter = Math.floor(today.getMonth() / 3)
    startDate = new Date(today.getFullYear(), quarter * 3, 1)
    endDate = new Date(today.getFullYear(), quarter * 3 + 3, 0)
  } else if (input.match(/^(next quarter|following quarter)$/)) {
    const quarter = Math.floor(today.getMonth() / 3) + 1
    const year = quarter > 3 ? today.getFullYear() + 1 : today.getFullYear()
    const adjustedQuarter = quarter > 3 ? 0 : quarter
    startDate = new Date(year, adjustedQuarter * 3, 1)
    endDate = new Date(year, adjustedQuarter * 3 + 3, 0)
  }
  
  // Parse year patterns
  else if (input.match(/^(this year|current year)$/)) {
    startDate = new Date(today.getFullYear(), 0, 1)
    endDate = new Date(today.getFullYear(), 11, 31)
  } else if (input.match(/^(next year|following year)$/)) {
    startDate = new Date(today.getFullYear() + 1, 0, 1)
    endDate = new Date(today.getFullYear() + 1, 11, 31)
  } else if (input.match(/^(last year|previous year|past year)$/)) {
    startDate = new Date(today.getFullYear() - 1, 0, 1)
    endDate = new Date(today.getFullYear() - 1, 11, 31)
  }
  
  // Parse weekend patterns
  else if (input.match(/^(this weekend|coming weekend)$/)) {
    const dayOfWeek = (today.getDay() + 6) % 7
    const daysUntilSaturday = dayOfWeek <= 5 ? 5 - dayOfWeek : 6
    startDate = new Date(today)
    startDate.setDate(today.getDate() + daysUntilSaturday)
    endDate = new Date(startDate)
    endDate.setDate(startDate.getDate() + 1)
  } else if (input.match(/^(next weekend|following weekend)$/)) {
    const dayOfWeek = (today.getDay() + 6) % 7
    const daysUntilNextSaturday = dayOfWeek <= 5 ? 5 - dayOfWeek + 7 : 13
    startDate = new Date(today)
    startDate.setDate(today.getDate() + daysUntilNextSaturday)
    endDate = new Date(startDate)
    endDate.setDate(startDate.getDate() + 1)
  } else if (input.match(/^(last weekend|previous weekend|past weekend)$/)) {
    const dayOfWeek = (today.getDay() + 6) % 7
    const daysToLastSaturday = dayOfWeek <= 5 ? dayOfWeek + 2 : dayOfWeek - 5
    startDate = new Date(today)
    startDate.setDate(today.getDate() - daysToLastSaturday)
    endDate = new Date(startDate)
    endDate.setDate(startDate.getDate() + 1)
  }
  
  // Parse casual range patterns
  else if (input.match(/^(couple of days|few days|several days)$/)) {
    startDate = new Date(today)
    endDate = new Date(today)
    endDate.setDate(today.getDate() + 3)
  } else if (input.match(/^(couple of weeks|few weeks|several weeks)$/)) {
    startDate = new Date(today)
    endDate = new Date(today)
    endDate.setDate(today.getDate() + 14)
  } else if (input.match(/^(couple of months|few months|several months)$/)) {
    startDate = new Date(today)
    endDate = new Date(today)
    endDate.setMonth(today.getMonth() + 3)
  }
  
  // Parse "from now" patterns
  else if (input.match(/^(a week from now|one week from now|1 week from now)$/)) {
    startDate = new Date(today)
    startDate.setDate(today.getDate() + 7)
    endDate = new Date(startDate)
  } else if (input.match(/^(a month from now|one month from now|1 month from now)$/)) {
    startDate = new Date(today)
    startDate.setMonth(today.getMonth() + 1)
    endDate = new Date(startDate)
  }
  
  // Parse business/work patterns
  else if (input.match(/^(end of (this )?week|eow)$/)) {
    const dayOfWeek = (today.getDay() + 6) % 7
    startDate = new Date(today)
    startDate.setDate(today.getDate() + (4 - dayOfWeek)) // Friday
    endDate = new Date(startDate)
  } else if (input.match(/^(end of (this )?month|eom)$/)) {
    startDate = new Date(today.getFullYear(), today.getMonth() + 1, 0)
    endDate = new Date(startDate)
  } else if (input.match(/^(beginning of (next )?week|start of (next )?week|bow)$/)) {
    const dayOfWeek = (today.getDay() + 6) % 7
    startDate = new Date(today)
    startDate.setDate(today.getDate() - dayOfWeek + 7)
    endDate = new Date(startDate)
  } else if (input.match(/^(beginning of (next )?month|start of (next )?month|bom)$/)) {
    startDate = new Date(today.getFullYear(), today.getMonth() + 1, 1)
    endDate = new Date(startDate)
  }
  
  else {
    // Parse numeric patterns like "next 2 weeks", "in 3 days", "2 weeks from now"
    const patterns = [
      // Forward patterns
      { regex: /(?:next|in|for the next)\s+(\d+)\s+days?/, unit: 'day', multiplier: 1 },
      { regex: /(?:next|in|for the next)\s+(\d+)\s+weeks?/, unit: 'week', multiplier: 1 },
      { regex: /(?:next|in|for the next)\s+(\d+)\s+months?/, unit: 'month', multiplier: 1 },
      { regex: /(\d+)\s+days?\s+(?:from\s+now|ahead|forward)/, unit: 'day', multiplier: 1 },
      { regex: /(\d+)\s+weeks?\s+(?:from\s+now|ahead|forward)/, unit: 'week', multiplier: 1 },
      { regex: /(\d+)\s+months?\s+(?:from\s+now|ahead|forward)/, unit: 'month', multiplier: 1 },
      
      // Backward patterns
      { regex: /(\d+)\s+days?\s+(?:ago|back|before)/, unit: 'day', multiplier: -1 },
      { regex: /(\d+)\s+weeks?\s+(?:ago|back|before)/, unit: 'week', multiplier: -1 },
      { regex: /(\d+)\s+months?\s+(?:ago|back|before)/, unit: 'month', multiplier: -1 },
      { regex: /(?:past|last|previous)\s+(\d+)\s+days?/, unit: 'day', multiplier: -1 },
      { regex: /(?:past|last|previous)\s+(\d+)\s+weeks?/, unit: 'week', multiplier: -1 },
      { regex: /(?:past|last|previous)\s+(\d+)\s+months?/, unit: 'month', multiplier: -1 },
      
      // Range patterns
      { regex: /(?:over the )?(?:next|coming)\s+(\d+)\s+days?/, unit: 'day', multiplier: 1, isRange: true },
      { regex: /(?:over the )?(?:next|coming)\s+(\d+)\s+weeks?/, unit: 'week', multiplier: 1, isRange: true },
      { regex: /(?:over the )?(?:next|coming)\s+(\d+)\s+months?/, unit: 'month', multiplier: 1, isRange: true },
    ]
    
    for (const pattern of patterns) {
      const match = input.match(pattern.regex)
      if (match) {
        const amount = parseInt(match[1])
        const direction = pattern.multiplier
        
        if (pattern.unit === 'day') {
          if (pattern.isRange) {
            startDate = new Date(today)
            endDate = new Date(today)
            endDate.setDate(today.getDate() + (amount * direction))
          } else {
            startDate = new Date(today)
            startDate.setDate(today.getDate() + (amount * direction))
            endDate = new Date(startDate)
          }
        } else if (pattern.unit === 'week') {
          if (direction > 0) {
            // Find next Monday for forward ranges
            const dayOfWeek = (today.getDay() + 6) % 7
            const daysUntilNextMonday = dayOfWeek === 0 ? 7 : 7 - dayOfWeek
            startDate = new Date(today)
            startDate.setDate(today.getDate() + daysUntilNextMonday)
            
            endDate = new Date(startDate)
            endDate.setDate(startDate.getDate() + (amount * 7) - 1)
          } else {
            // For backward ranges
            startDate = new Date(today)
            startDate.setDate(today.getDate() + (amount * 7 * direction))
            endDate = new Date(startDate)
            endDate.setDate(startDate.getDate() + 6)
          }
        } else if (pattern.unit === 'month') {
          startDate = new Date(today)
          startDate.setMonth(today.getMonth() + (amount * direction))
          startDate.setDate(1)
          endDate = new Date(startDate.getFullYear(), startDate.getMonth() + amount, 0)
        }
        break
      }
    }
  }
  
  // Update the selected dates if parsing was successful
  if (startDate && endDate) {
    selectedStartDate.value = startDate
    selectedEndDate.value = endDate
    currentDisplayMonth.value = new Date(startDate.getFullYear(), startDate.getMonth(), 1)
    
    emit('update:startDate', selectedStartDate.value)
    emit('update:endDate', selectedEndDate.value)
    
    // Scroll to the target month
    scrollToCurrentMonth()
    
    // Update the input to show the parsed result
    const startStr = startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    const endStr = endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    if (startDate.getTime() === endDate.getTime()) {
      naturalLanguageInput.value = startStr
    } else {
      naturalLanguageInput.value = `${startStr} - ${endStr}`
    }
  }
}

// Initialize on mount
onMounted(() => {
  initializeMonths()
  nextTick(() => {
    scrollToCurrentMonth()
  })
})
</script>

<style scoped>
.datepicker {
  width: 300px;
  height: 346px; /* Exact Figma height */
  background-color: #ffffff;
  border: 1px solid #d3dfeb;
  border-radius: 10px;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  transition: width 0.2s ease;
  display: flex;
  flex-direction: column;
}

.datepicker--with-sidebar {
  width: 460px; /* 300px + 160px sidebar */
}

.datepicker__search {
  height: 40px;
  background-color: #ffffff;
  border-bottom: 1px solid #e5ecf3;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  flex-shrink: 0;
}

.datepicker__search-container {
  flex: 1;
  padding: 0 8px;
}

.datepicker__search-input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #000f30;
  padding: 0;
}

.datepicker__search-input::placeholder {
  color: #476887;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
}

.datepicker__content {
  flex: 1;
  display: flex;
  min-height: 0;
}

.datepicker__sidebar {
  width: 160px;
  background-color: #fbfcfe;
  position: relative;
  overflow: hidden;
  border-right: 1px solid #e5ecf3;
}

.datepicker__quick-actions {
  padding: 4px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.datepicker__quick-action {
  width: 152px;
  height: 32px;
  background: none;
  border: none;
  border-radius: 6px;
  padding: 0 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #000f30;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.datepicker__quick-action:hover {
  background-color: rgba(0, 15, 48, 0.05);
}

.datepicker__quick-action--active {
  background-color: #59a3ee;
  color: #ffffff;
}

.datepicker__sidebar-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 55px;
  background: linear-gradient(to bottom, transparent 0%, #fbfcfe 100%);
  pointer-events: none;
}

.datepicker__calendar-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.datepicker__calendar-header {
  height: 32px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: #ffffff;
}

.datepicker__month-year {
  display: flex;
  align-items: center;
  gap: 0;
}

.datepicker__month-btn,
.datepicker__year-btn {
  background: none;
  border: none;
  border-radius: 6px;
  padding: 4px 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #000f30;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.datepicker__month-btn:hover,
.datepicker__year-btn:hover {
  background-color: rgba(0, 15, 48, 0.05);
}

.datepicker__nav-arrows {
  display: flex;
  gap: 4px;
}

.datepicker__nav-arrow {
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.datepicker__nav-arrow:hover {
  background-color: rgba(0, 15, 48, 0.05);
}

.datepicker__week-headers {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  padding: 0 12px 4px 12px;
  background-color: #ffffff;
  flex-shrink: 0;
}

.datepicker__week-header {
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #6c869f;
}

.datepicker__calendar-scroll {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  padding: 12px;
}

.datepicker__calendar-scroll::-webkit-scrollbar {
  display: none;
}

.datepicker__calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 36px);
  gap: 4px 0; /* 4px row gap, 0px column gap */
  justify-content: center;
}

.datepicker__date-cell {
  width: 36px;
  height: 32px;
  background: none;
  border: none;
  border-radius: 4px; /* Default 4px radius */
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #000f30;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

/* Default state - Current month */
.datepicker__date-cell {
  background-color: transparent;
  color: #000f30;
}

/* Default state - Other month (gray) */
.datepicker__date-cell--other-month {
  color: #91a4b7;
}

/* Hover state - Current month */
.datepicker__date-cell:hover {
  background-color: #edf2f7;
  color: #000f30;
}

/* Hover state - Other month */
.datepicker__date-cell--other-month:hover {
  background-color: #edf2f7;
  color: #91a4b7;
}

/* Today state - Default */
.datepicker__date-cell--today {
  border: 1px solid #2c8dff;
  background-color: transparent;
  color: #000f30;
  border-radius: 4px; /* Keep 4px radius for today */
}

.datepicker__date-cell--today.datepicker__date-cell--other-month {
  border: 1px solid #2c8dff;
  background-color: transparent;
  color: #91a4b7;
  border-radius: 4px; /* Keep 4px radius for today */
}

/* Today state - Hover */
.datepicker__date-cell--today:hover {
  border: 1px solid #2c8dff;
  background-color: #edf2f7;
  color: #000f30;
  border-radius: 4px; /* Keep 4px radius for today */
}

.datepicker__date-cell--today.datepicker__date-cell--other-month:hover {
  border: 1px solid #2c8dff;
  background-color: #edf2f7;
  color: #91a4b7;
  border-radius: 4px; /* Keep 4px radius for today */
}

/* Today state - Active/Selected */
.datepicker__date-cell--today.datepicker__date-cell--selected,
.datepicker__date-cell--today.datepicker__date-cell--start,
.datepicker__date-cell--today.datepicker__date-cell--end {
  background-color: #2c8dff;
  border: none;
  color: #ffffff;
  font-weight: 500;
  border-radius: 4px; /* Keep 4px radius for today */
}

/* Range start/end states - Partial border radius */
.datepicker__date-cell--start,
.datepicker__date-cell--selected {
  background-color: #2c8dff;
  color: #ffffff;
  font-weight: 500;
  border-radius: 4px 0 0 4px; /* Left corners rounded for start date */
}

.datepicker__date-cell--end {
  background-color: #2c8dff;
  color: #ffffff;
  font-weight: 500;
  border-radius: 0 4px 4px 0; /* Right corners rounded for end date */
}

/* Range start/end hover states - Partial border radius */
.datepicker__date-cell--start:hover,
.datepicker__date-cell--selected:hover {
  background-color: #127ffe;
  color: #ffffff;
  font-weight: 500;
  border-radius: 4px 0 0 4px; /* Left corners rounded for start date */
}

.datepicker__date-cell--end:hover {
  background-color: #127ffe;
  color: #ffffff;
  font-weight: 500;
  border-radius: 0 4px 4px 0; /* Right corners rounded for end date */
}

/* Special case: when start and end are the same date (single date selection) */
.datepicker__date-cell--start.datepicker__date-cell--end {
  border-radius: 4px; /* Full border radius when start = end */
}

.datepicker__date-cell--start.datepicker__date-cell--end:hover {
  border-radius: 4px; /* Full border radius when start = end */
}

/* In-range (interval) state - Default - NO border radius */
.datepicker__date-cell--in-range {
  background-color: rgba(44, 141, 255, 0.2);
  color: #000f30;
  font-weight: 400;
  border-radius: 0; /* NO border radius for in-range */
}

.datepicker__date-cell--in-range.datepicker__date-cell--other-month {
  background-color: rgba(44, 141, 255, 0.2);
  color: #91a4b7;
  font-weight: 400;
  border-radius: 0; /* NO border radius for in-range */
}

/* In-range (interval) state - Hover - NO border radius */
.datepicker__date-cell--in-range:hover {
  background-color: rgba(44, 141, 255, 0.3);
  color: #000f30;
  font-weight: 400;
  border-radius: 0; /* NO border radius for in-range */
}

.datepicker__date-cell--in-range.datepicker__date-cell--other-month:hover {
  background-color: rgba(44, 141, 255, 0.3);
  color: #91a4b7;
  font-weight: 400;
  border-radius: 0; /* NO border radius for in-range */
}

.datepicker__footer {
  height: 40px;
  background-color: #fbfcfe;
  border-top: 1px solid #e5ecf3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  flex-shrink: 0;
}

.datepicker__footer-text {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000f30;
}

.datepicker__footer-icon {
  color: #6c869f;
}
</style> 