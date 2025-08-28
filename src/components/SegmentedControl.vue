<template>
  <div class="segmented-control">
    <div class="segmented-control-container">
      <template v-for="(item, index) in items" :key="index">
        <div 
          :ref="el => { if (el) segmentRefs[index] = el }"
          class="segment-wrapper"
        >
          <SegmentItem
            :label="getSegmentLabel(item)"
            :is-active="item.value === modelValue"
            :has-dropdown="item.dropdown"
            :fixed-width="item.label === 'Company' || item.label === 'My'"
            @click="() => handleSegmentClick(item)"
            @mouseenter="handleSegmentHover(item, index)"
            @mouseleave="handleSegmentLeave"
          />

        </div>
        <!-- Separator between segments (except last one) -->
        <div 
          v-if="index < items.length - 1" 
          class="segment-separator"
        ></div>
      </template>
      
      <!-- Dropdown Menu -->
      <div
        v-if="dropdownOpen && (activeDropdownItem || hoveredItem)"
        class="dropdown-menu"
        :style="{ 
          width: getDropdownWidth(),
          left: getDropdownPosition()
        }"
        @click.stop
        @mouseenter="isHoveringDropdown = true"
        @mouseleave="isHoveringDropdown = false"
      >
        <div
          v-for="(option, optionIndex) in (hoveredItem || activeDropdownItem)?.dropdownOptions"
          :key="optionIndex"
          class="dropdown-item"
          :class="{ 'active': option.value === selectedDropdownValue }"
          @click="handleDropdownSelect(option)"
        >
          {{ option.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import SegmentItem from './SegmentItem.vue'

export interface SegmentedItem {
  label: string
  value: string
  dropdown?: boolean
  dropdownOptions?: DropdownOption[]
}

export interface DropdownOption {
  label: string
  value: string
}

interface Props {
  modelValue: string
  items: SegmentedItem[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'dropdown-change': [value: string]
}>()

const dropdownOpen = ref(false)
const selectedDropdownValue = ref('')
const hoveredItem = ref<SegmentedItem | null>(null)
const hoveredIndex = ref<number>(-1)
const isHoveringDropdown = ref(false)
const isClicking = ref(false)
const segmentRefs = ref<HTMLElement[]>([])

const hasDropdown = computed(() => {
  return props.items.some(item => item.dropdown)
})

const activeDropdownItem = computed(() => {
  return props.items.find(item => item.value === props.modelValue && item.dropdown)
})

const getSegmentLabel = (item: SegmentedItem) => {
  // If this is a dropdown item and we have a selected value, show the selected option label
  if (item.dropdown && selectedDropdownValue.value && item.dropdownOptions) {
    const selectedOption = item.dropdownOptions.find(option => option.value === selectedDropdownValue.value)
    if (selectedOption) {
      return selectedOption.label
    }
  }
  // Otherwise show the original item label
  return item.label
}

const getDropdownWidth = () => {
  const index = hoveredIndex.value >= 0 ? hoveredIndex.value : props.items.findIndex(item => item.value === (activeDropdownItem.value?.value))
  if (index >= 0 && segmentRefs.value[index]) {
    const segmentElement = segmentRefs.value[index]
    const rect = segmentElement.getBoundingClientRect()
    return `${rect.width}px`
  }
  return '120px'
}

const getDropdownPosition = () => {
  const index = hoveredIndex.value >= 0 ? hoveredIndex.value : props.items.findIndex(item => item.value === (activeDropdownItem.value?.value))
  if (index >= 0 && segmentRefs.value[index]) {
    const segmentElement = segmentRefs.value[index]
    const rect = segmentElement.getBoundingClientRect()
    const containerRect = segmentElement.closest('.segmented-control-container')?.getBoundingClientRect()
    if (containerRect) {
      return `${rect.left - containerRect.left}px`
    }
  }
  return '0px'
}

const handleSegmentClick = (item: SegmentedItem) => {
  // Always update the model value when clicking a segment
  emit('update:modelValue', item.value)
  
  if (item.dropdown) {
    // For dropdown items, toggle the dropdown
    dropdownOpen.value = !dropdownOpen.value
    if (dropdownOpen.value && item.dropdownOptions && item.dropdownOptions.length > 0) {
      // Set first dropdown option as default when opening
      selectedDropdownValue.value = item.dropdownOptions[0].value
      emit('dropdown-change', item.dropdownOptions[0].value)
    }
  } else {
    // Regular segment click - close dropdown
    dropdownOpen.value = false
    hoveredItem.value = null
    hoveredIndex.value = -1
  }
}

const handleSegmentHover = (item: SegmentedItem, index: number) => {
  // Show dropdown instantly on hover for dropdown items
  if (item.dropdown) {
    hoveredItem.value = item
    hoveredIndex.value = index
    dropdownOpen.value = true
  }
}

const handleSegmentLeave = () => {
  // Add a small delay to allow moving to dropdown menu
  setTimeout(() => {
    if (!isHoveringDropdown.value) {
      hoveredItem.value = null
      dropdownOpen.value = false
    }
  }, 150)
}

const handleDropdownSelect = (option: DropdownOption) => {
  selectedDropdownValue.value = option.value
  emit('dropdown-change', option.value)
  dropdownOpen.value = false
  hoveredItem.value = null
  hoveredIndex.value = -1
  isHoveringDropdown.value = false
  
  // Keep the dropdown segment active when an option is selected
  // The modelValue should remain as the segment value, not the dropdown option value
}



// Close dropdown when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement
  if (!target.closest('.segmented-control')) {
    dropdownOpen.value = false
  }
}

// Watch for modelValue changes to close dropdown if needed
watch(() => props.modelValue, (newValue) => {
  const currentItem = props.items.find(item => item.value === newValue)
  if (!currentItem?.dropdown) {
    dropdownOpen.value = false
  }
})

// Add click outside listener
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.segmented-control {
  display: inline-flex;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.segmented-control-container {
  display: flex;
  background: #e5ecf3;
  border: none;
  border-radius: 6px;
  padding: 4px;
  gap: 0;
  position: relative;
  width: fit-content;
}

.segment-separator {
  width: 0;
  height: 20px;
  position: relative;
  flex-shrink: 0;
}

.segment-separator::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: -0.5px;
  right: -0.5px;
  background: #d3dfeb;
  width: 1px;
}

.segment-wrapper {
  position: relative;
}



.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  background: white;
  border: 1px solid #d3dfeb;
  border-radius: 4px;
  box-shadow: 0px 1px 4px 0px rgba(9, 8, 61, 0.08);
  z-index: 1000;
  min-width: fit-content;
}

.dropdown-item {
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 500;
  color: #476887;
  cursor: pointer;
  transition: background-color 0.15s ease;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.dropdown-item:hover {
  background: rgba(255, 255, 255, 0.8);
  color: #000f30;
}

.dropdown-item.active {
  background: rgba(255, 255, 255, 0.9);
  color: #000f30;
  font-weight: 500;
}

.dropdown-item:first-child {
  border-radius: 6px 6px 0 0;
}

.dropdown-item:last-child {
  border-radius: 0 0 6px 6px;
}

/* Responsive */
@media (max-width: 640px) {
  .dropdown-menu {
    min-width: 100px;
  }
}
</style>
