<template>
  <!-- Main Container (Single Root) -->
  <div 
    ref="containerRef"
    class="tracker-container"
    :class="{ 'is-sticky': isSticky, 'is-dragging': isDragging }"
    @mousedown="startDrag"
    @click="handleContainerClick"
    :style="containerStyle"
    @mouseenter="isHovered = true" 
    @mouseleave="isHovered = false"
  >
    <!-- 1. Sticky Content (Shown when sticky) -->
    <div 
      class="sticky-content-wrapper"
      :style="{ opacity: isSticky ? 1 : 0, pointerEvents: isSticky ? 'auto' : 'none' }"
    >
      <div class="sticky-content">
        <!-- Break Timer Section (Yellow Overlay) -->
        <div v-if="status === 'break'" class="sticky-timer-section break-section">
          <svg :viewBox="icons.mug.viewBox" width="16" height="16" fill="#1b1a18" style="display: block;">
            <path :d="icons.mug.path" />
          </svg>
          <span class="sticky-timer" style="color: #1b1a18;">
            {{ formatTime(breakTime) }}
          </span>
        </div>

        <!-- Work Timer Section (Right/Default) -->
        <div class="sticky-timer-section work-section" :class="{ 'is-default': status === 'work' }">
           <svg :viewBox="icons.briefcase.viewBox" width="16" height="16" :fill="status === 'break' ? 'rgba(0, 15, 48, 0.5)' : '#000f30'" style="display: block;">
             <path :d="icons.briefcase.path" />
           </svg>
           <span class="sticky-timer" :style="{ color: '#000f30', opacity: status === 'break' ? 0.5 : 1 }">
              {{ formatTime(workTime) }}
            </span>
        </div>
      </div>
    </div>

    <!-- 2. Expanded Content (Shown when expanded) -->
    <div 
      class="expanded-content-wrapper"
      :style="{ opacity: isSticky ? 0 : 1, pointerEvents: isSticky ? 'none' : 'auto' }"
    >
      <!-- Minimize Button -->
      <transition name="fade">
        <div 
          v-if="isHovered && !isDrawerOpen && !isSticky" 
          class="minimize-trigger"
          @click.stop="minimize"
        >
          <svg :viewBox="icons.minus.viewBox" width="10" height="10" fill="white" style="display: block;">
            <path :d="icons.minus.path" />
          </svg>
        </div>
      </transition>

      <!-- Drawer Section (Second Drawer) -->
      <div 
        ref="drawerRef" 
        class="drawer-section" 
        :style="{ height: '0px', opacity: 0 }"
      >
        <!-- Empty content for now -->
      </div>

      <!-- Main Time Tracker Widget Content -->
      <div 
        ref="trackerRef"
        class="time-tracker" 
        :class="{ 'is-collapsed': !isExpanded, [status]: true }"
        :style="{ opacity: isDrawerOpen ? 0.5 : 1, transition: 'opacity 0.3s ease' }"
      >
        <!-- Background layers -->
        <div class="bg-layer work-bg"></div>
        <div 
          ref="breakBg"
          class="bg-layer break-bg"
          :style="{ opacity: 0 }"
        ></div>

        <!-- Header Elements (Hidden when collapsed) -->
        <div v-show="isExpanded" class="header-group" ref="headerGroup">
          <!-- Status Pill (Left) -->
          <div 
            class="status-pill"
            :class="{ 'on-break': status === 'break' }"
          >
            <div class="status-content">
              <div class="status-icon-wrapper">
                <svg v-if="status === 'work'" :viewBox="icons.briefcase.viewBox" width="12" height="12" fill="#000f30" style="display: block;">
                  <path :d="icons.briefcase.path" />
                </svg>
                <svg v-else :viewBox="icons.mug.viewBox" width="12" height="12" fill="#000f30" style="display: block;">
                  <path :d="icons.mug.path" />
                </svg>
              </div>
              <span class="status-text">{{ status === 'work' ? 'At work' : 'On break' }}</span>
            </div>
          </div>

          <!-- Timer Pill (Right) -->
          <div class="timer-pill">
            <div class="timer-pill-container">
              <transition name="fade">
                <!-- Break timer wrapper gets yellow background when on break -->
                <div 
                  v-if="status === 'break'" 
                  class="timer-wrapper break-timer-wrapper"
                >
                  <span class="timer break-timer">
                    {{ formatTime(breakTime) }}
                  </span>
                </div>
              </transition>

              <!-- Work timer wrapper has NO background in either state -->
              <div 
                class="timer-wrapper work-timer-wrapper"
                :class="{ 'dimmed': status === 'break' }"
              >
                <span 
                  class="timer work-timer"
                >
                  {{ formatTime(workTime) }}
                </span>
              </div>
            </div>
          </div>

          <!-- Header Container (Spacer) -->
          <div class="tracker-header">
            <!-- Spacer for layout balance -->
          </div>
        </div>

        <!-- 2. White Card Container (Project Info + Actions) -->
        <div class="main-card">
          <div class="card-content">
            <!-- Left: Project Info -->
            <div class="project-info">
              <div class="project-icon">
                <span>{{ props.projectEmoji }}</span>
              </div>
              <span class="project-name">{{ props.projectName }}</span>
            </div>

            <!-- Right: Buttons -->
            <div class="actions">
              <transition name="fade" mode="out-in">
                <div v-if="isExpanded" class="actions-group">
                  <transition name="fade">
                    <Button 
                      v-if="isHovered || isDrawerOpen"
                      type="icon-only" 
                      size="24" 
                      tone="secondary" 
                      @click.stop="toggleDrawer"
                    >
                      <template #l-icon="{ color }">
                        <svg :viewBox="icons.penToSquare.viewBox" width="12" height="12" :fill="color" style="display: block;">
                          <path :d="icons.penToSquare.path" />
                        </svg>
                      </template>
                    </Button>
                  </transition>

                  <Button 
                    v-if="status === 'work'"
                    type="icon-only" 
                    size="24" 
                    tone="secondary" 
                    @click.stop="toggleBreak"
                  >
                    <template #l-icon="{ color }">
                      <svg :viewBox="icons.mug.viewBox" width="12" height="12" :fill="color" style="display: block;">
                        <path :d="icons.mug.path" />
                      </svg>
                    </template>
                  </Button>
                  <Button 
                    v-else
                    type="icon-only" 
                    size="24" 
                    tone="secondary" 
                    @click.stop="toggleBreak"
                  >
                    <template #l-icon="{ color }">
                      <svg :viewBox="icons.briefcase.viewBox" width="12" height="12" :fill="color" style="display: block;">
                        <path :d="icons.briefcase.path" />
                      </svg>
                    </template>
                  </Button>
                  
                  <Button 
                    type="icon-only" 
                    size="24" 
                    tone="secondary" 
                    @click.stop="stop"
                  >
                    <template #l-icon="{ color }">
                      <svg :viewBox="icons.circleStop.viewBox" width="12" height="12" :fill="color" style="display: block;">
                        <path :d="icons.circleStop.path" />
                      </svg>
                    </template>
                  </Button>
                </div>
                <div v-else class="actions-group">
                   <!-- Play button to expand/restart -->
                   <Button 
                    type="icon-only" 
                    size="24" 
                    tone="secondary" 
                    @click.stop="start"
                  >
                    <template #l-icon="{ color }">
                      <svg :viewBox="icons.circlePlay.viewBox" width="12" height="12" :fill="color" style="display: block;">
                        <path :d="icons.circlePlay.path" />
                      </svg>
                    </template>
                  </Button>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick, computed } from 'vue'
import Button from './Button.vue'
import { animate } from 'motion'

const icons = {
  mug: {
    viewBox: '0 0 576 512',
    path: 'M64 64c0-17.7 14.3-32 32-32l352 0c70.7 0 128 57.3 128 128S518.7 288 448 288c0 53-43 96-96 96l-192 0c-53 0-96-43-96-96L64 64zm448 96c0-35.3-28.7-64-64-64l0 128c35.3 0 64-28.7 64-64zM64 448l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 512c-17.7 0-32-14.3-32-32s14.3-32 32-32z'
  },
  briefcase: {
    viewBox: '0 0 512 512',
    path: 'M200 48l112 0c4.4 0 8 3.6 8 8l0 40-128 0 0-40c0-4.4 3.6-8 8-8zm-56 8l0 40-80 0C28.7 96 0 124.7 0 160l0 96 512 0 0-96c0-35.3-28.7-64-64-64l-80 0 0-40c0-30.9-25.1-56-56-56L200 0c-30.9 0-56 25.1-56 56zM512 304l-192 0 0 16c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-16-192 0 0 112c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-112z'
  },
  chevronUp: {
    viewBox: '0 0 448 512',
    path: 'M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z'
  },
  chevronDown: {
    viewBox: '0 0 448 512',
    path: 'M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'
  },
  minus: {
    viewBox: '0 0 448 512',
    path: 'M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z'
  },
  circleStop: {
    viewBox: '0 0 512 512',
    path: 'M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM192 160l128 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32z'
  },
  circlePlay: {
    viewBox: '0 0 512 512',
    path: 'M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z'
  },
  penToSquare: {
    viewBox: '0 0 512 512',
    path: 'M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z'
  }
}

// Define Props for customization
const props = withDefaults(defineProps<{
  projectName?: string
  projectEmoji?: string
  initialWorkTime?: number
  initialBreakTime?: number
  initialStatus?: 'work' | 'break'
  snapThreshold?: number
}>(), {
  projectName: 'Customer Success Strategy',
  projectEmoji: '📑',
  initialWorkTime: 0,
  initialBreakTime: 0,
  initialStatus: 'work',
  snapThreshold: 50
})

// Define Emits for integration
const emit = defineEmits<{
  (e: 'status-change', status: 'work' | 'break'): void
  (e: 'stop', times: { workTime: number, breakTime: number }): void
  (e: 'start'): void
}>()

const status = ref<'work' | 'break'>(props.initialStatus)
const workTime = ref(props.initialWorkTime)
const breakTime = ref(props.initialBreakTime)
const breakBg = ref<HTMLElement | null>(null)
const trackerRef = ref<HTMLElement | null>(null)
const headerGroup = ref<HTMLElement | null>(null)
const drawerRef = ref<HTMLElement | null>(null)
const containerRef = ref<HTMLElement | null>(null)
const isExpanded = ref(true)
const isHovered = ref(false)
const isDrawerOpen = ref(false)
const isSticky = ref(false)
const stickySide = ref<'left' | 'right' | 'top' | 'bottom' | null>(null)
const position = ref({ x: 0, y: 0 })
const isDragging = ref(false)
const dragStart = ref({ x: 0, y: 0 })
let timerInterval: number | null = null

// --- Dimensions for Magnetic/Sticky Logic ---
const EXPANDED_WIDTH = 340
const EXPANDED_HEIGHT = 72
const STICKY_HEIGHT = 40 // Match radius 20px (40px diameter)

// Dynamic width for sticky view depending on content (single vs dual timer)
const stickyWidth = computed(() => {
  // Single timer: Icon (16) + Gap (8) + Time (60) + Padding (12*2) ~= 110
  // Double timer: 110 + 110 = 220
  return status.value === 'break' ? 220 : 110
})

const containerStyle = computed(() => {
  const width = isSticky.value ? `${stickyWidth.value}px` : `${EXPANDED_WIDTH}px`
  
  const targetHeight = isSticky.value 
    ? STICKY_HEIGHT 
    : (isExpanded.value ? EXPANDED_HEIGHT : 52)

  let style: Record<string, string | number> = {
    width: width,
    height: `${targetHeight}px`,
    transform: `translate(${position.value.x}px, ${position.value.y}px)`,
    cursor: isDragging.value ? 'grabbing' : 'grab',
    // Apply smooth transition for morphing effect
    transition: isDragging.value 
      ? 'none' 
      : 'width 0.5s cubic-bezier(0.19, 1, 0.22, 1), height 0.5s cubic-bezier(0.19, 1, 0.22, 1), transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
  }

  // Apply rotation if sticky to right edge
  if (isSticky.value && stickySide.value === 'right') {
    const w = stickyWidth.value
    const h = STICKY_HEIGHT
    // Shift right to keep the edge flush after rotation
    const shiftX = (w - h) / 2
    style.transform = `translate(${position.value.x}px, ${position.value.y}px) translate(${shiftX}px, 0) rotate(-90deg)`
  }
  
  // Apply rotation if sticky to left edge
  if (isSticky.value && stickySide.value === 'left') {
    const w = stickyWidth.value
    const h = STICKY_HEIGHT
    // Shift left to keep the edge flush after rotation
    const shiftX = -(w - h) / 2
    style.transform = `translate(${position.value.x}px, ${position.value.y}px) translate(${shiftX}px, 0) rotate(90deg)`
  }

  return style
})

const formatTime = (seconds: number) => {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}

const startTimer = () => {
  if (timerInterval) clearInterval(timerInterval)
  timerInterval = setInterval(() => {
    if (status.value === 'work') {
      workTime.value++
    } else {
      breakTime.value++
      workTime.value++
    }
  }, 1000)
}

const toggleBreak = () => {
  status.value = status.value === 'work' ? 'break' : 'work'
  emit('status-change', status.value)
  
  if (breakBg.value) {
    if (status.value === 'break') {
      // animate(breakBg.value, { opacity: 1 }, { duration: 0.3 }) 
    } else {
      // animate(breakBg.value, { opacity: 0 }, { duration: 0.3 })
    }
  }
}

const stop = () => {
  emit('stop', { workTime: workTime.value, breakTime: breakTime.value })
  workTime.value = 0
  breakTime.value = 0
  status.value = 'work'
  if (breakBg.value) {
    animate(breakBg.value, { opacity: 0 }, { duration: 0.3 })
  }
  // Collapse widget
  isExpanded.value = false
  
  // Stop timer
  if (timerInterval) clearInterval(timerInterval)
  timerInterval = null
}

const start = () => {
  emit('start')
  isExpanded.value = true
  startTimer()
}

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value
}

const minimize = async () => {
  isSticky.value = true
  stickySide.value = 'bottom'
  
  const el = containerRef.value
  if (!el) return
  
  const parent = el.offsetParent || document.body
  const parentRect = parent.getBoundingClientRect()
  
  // Snap to bottom immediately
  // Current X is maintained but clamped?
  // Let's clamp X to parent width - sticky width
  
  const TARGET_STICKY_WIDTH = stickyWidth.value
  let newX = position.value.x
  
  // Clamp X
  if (newX < 0) newX = 0
  if (newX + TARGET_STICKY_WIDTH > parentRect.width) {
    newX = parentRect.width - TARGET_STICKY_WIDTH
  }
  
  // Set Y to bottom edge (0 padding)
  const newY = parentRect.height - STICKY_HEIGHT
  
  position.value = { x: newX, y: newY }
}

const handleContainerClick = () => {
  if (isSticky.value && !isDragging.value) {
    expandSticky()
  }
}

const expandSticky = async () => {
  if (isDragging.value) return
  
  const el = containerRef.value
  if (!el) return

  const rect = el.getBoundingClientRect()
  const parent = el.offsetParent || document.body
  const parentRect = parent.getBoundingClientRect()
  
  const threshold = props.snapThreshold
  // Use current computed sticky width logic for accurate calculation
  const currentStickyWidth = stickyWidth.value
  
  // Calculate distances to parent edges
  const distRight = parentRect.right - rect.right
  const distBottom = parentRect.bottom - rect.bottom
  
  let newX = position.value.x
  let newY = position.value.y
  
  // If snapped Right, expand to Left
  if (distRight < threshold) {
    // Shift left by width difference
    newX -= (EXPANDED_WIDTH - currentStickyWidth)
  }
  
  // If snapped Bottom, expand Up
  if (distBottom < threshold) {
    // Shift up by height difference
    // Note: Need to account for current Expanded Height (72 or 52)
    const targetExpandedHeight = isExpanded.value ? EXPANDED_HEIGHT : 52
    newY -= (targetExpandedHeight - STICKY_HEIGHT)
  }
  
  isSticky.value = false
  stickySide.value = null
  // await nextTick() // Not strictly needed if we rely on reactive state + transition
  
  // requestAnimationFrame(() => {
    position.value = { x: newX, y: newY }
  // })
}

const startDrag = (e: MouseEvent) => {
  // Prevent drag if clicking buttons or triggers
  if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('.drawer-trigger')) return
  
  isDragging.value = true
  dragStart.value = { x: e.clientX - position.value.x, y: e.clientY - position.value.y }
  
  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', stopDrag)
}

const onDrag = (e: MouseEvent) => {
  if (!isDragging.value) return
  
  // Update position naturally
  let newX = e.clientX - dragStart.value.x
  let newY = e.clientY - dragStart.value.y
  
  const el = containerRef.value
  if (el) {
    const parent = el.offsetParent || document.body
    const parentRect = parent.getBoundingClientRect()
    
    // If sticky, constrain movement
    if (isSticky.value) {
      // Constrain Y to bottom (allow no vertical movement)
      // Or allow dragging along bottom edge? "drag it around the bottom edge only"
      // So Y is fixed.
      
      // We must enforce bottom edge Y.
      // Ensure we use the correct height (Sticky Height)
      newY = parentRect.height - STICKY_HEIGHT
      
      // Constrain X to parent bounds
      const currentW = stickyWidth.value
      if (newX < 0) newX = 0
      if (newX + currentW > parentRect.width) newX = parentRect.width - currentW
      
    } else {
      // Normal dragging (Expanded)
      // Just bounds checking?
      // Or free dragging?
      // Let's apply bounds checking so it doesn't fly off.
      
      const currentW = EXPANDED_WIDTH // approx or actual rect?
      // Using actual rect is better but position is top-left relative.
      
      // Just let it drag freely for now, logic in stopDrag handles boundaries if needed.
      // But we REMOVED auto-minimize logic here.
    }
  }
  
  position.value = { x: newX, y: newY }
}

const stopDrag = async () => {
  isDragging.value = false
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
  
  // Ensure boundaries on stop
  const el = containerRef.value
  if (!el) return

  const rect = el.getBoundingClientRect()
  const parent = el.offsetParent || document.body
  const parentRect = parent.getBoundingClientRect()
  
  let newX = position.value.x
  let newY = position.value.y
  
  const currentW = isSticky.value ? stickyWidth.value : EXPANDED_WIDTH
  const currentH = isSticky.value ? STICKY_HEIGHT : (isExpanded.value ? EXPANDED_HEIGHT : 52)
  
  // Clamp to viewport
  if (newX < 0) newX = 0
  if (newX + currentW > parentRect.width) newX = parentRect.width - currentW
  if (newY < 0) newY = 0
  if (newY + currentH > parentRect.height) newY = parentRect.height - currentH
  
  // If sticky, enforce bottom edge exactly (0 padding)
  if (isSticky.value) {
    newY = parentRect.height - STICKY_HEIGHT
  }
  
  requestAnimationFrame(() => {
    position.value = { x: newX, y: newY }
  })
}

const handleClickOutside = (event: MouseEvent) => {
  if (isDrawerOpen.value && containerRef.value && !containerRef.value.contains(event.target as Node)) {
    isDrawerOpen.value = false
  }
}

watch(isDrawerOpen, (newValue) => {
  if (drawerRef.value) {
    const targetHeight = newValue ? "216px" : "0px"
    const targetOpacity = newValue ? 1 : 0
    
    animate(
      drawerRef.value,
      { height: targetHeight, opacity: targetOpacity },
      { type: "spring", stiffness: 400, damping: 30 }
    )
  }
})

watch(isExpanded, (newValue) => {
  if (trackerRef.value) {
    const targetHeight = newValue ? "72px" : "52px"
    animate(
      trackerRef.value,
      { height: targetHeight },
      { type: "spring", stiffness: 500, damping: 30 }
    )
  }
  
  if (headerGroup.value) {
    const targetOpacity = newValue ? 1 : 0
    animate(
      headerGroup.value,
      { opacity: targetOpacity },
      { duration: 0.2, easing: "ease-out" }
    )
  }
})

onMounted(() => {
  startTimer()
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval)
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');

.tracker-container {
  position: relative;
  /* Width and Height are controlled via inline styles for animation */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  background: white;
  overflow: visible;
  z-index: 100;
  
  /* Use Design Tokens for Border Radius */
  border-radius: var(--radius-20-fallback, 8px); /* Default fallback */
}

@supports (corner-shape: superellipse(2)) {
  .tracker-container {
    border-radius: var(--radius-20-ideal, 20px);
    corner-shape: superellipse(var(--superK));
  }
}

.sticky-content-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  overflow: hidden;
  border-radius: inherit;
  transition: opacity 0.3s ease;
  background: #d1e6fa; /* Default to Work Blue */
  z-index: 20;
}

@supports (corner-shape: superellipse(2)) {
  .sticky-content-wrapper {
    corner-shape: superellipse(var(--superK));
  }
}

.sticky-content {
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 100%;
  font-family: 'Inter', sans-serif;
}

.sticky-timer-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 12px;
  flex: 1; /* Distribute space evenly? Or sized by content? */
  height: 100%;
  box-sizing: border-box;
}

.break-section {
  background: #f8ecc4;
  z-index: 2;
  position: relative;
  box-shadow: 2px 0 4px rgba(0,0,0,0.02); /* Optional subtle separator */
  min-width: 110px;
  
  /* Use Design Tokens */
  border-radius: var(--radius-20-fallback, 8px);
}

@supports (corner-shape: superellipse(2)) {
  .break-section {
    border-radius: var(--radius-20-ideal, 20px);
    corner-shape: superellipse(var(--superK));
  }
}

.work-section {
  background: transparent; /* Let container blue show through */
  z-index: 1;
  justify-content: center;
  min-width: 110px;
  
  /* Use Design Tokens */
  border-radius: var(--radius-20-fallback, 8px);
}

@supports (corner-shape: superellipse(2)) {
  .work-section {
    border-radius: var(--radius-20-ideal, 20px);
    corner-shape: superellipse(var(--superK));
  }
}

/* When work section is the only one displayed (default state) */
.work-section.is-default {
  background: transparent;
}

.sticky-timer {
  font-family: 'Space Mono', monospace;
  font-size: 12px;
  line-height: 1;
}

.expanded-content-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  transition: opacity 0.3s ease;
  background: white; /* Restore white bg for expanded view */
  border-radius: inherit; /* Ensure white bg follows radius */
}

@supports (corner-shape: superellipse(2)) {
  .expanded-content-wrapper {
    corner-shape: superellipse(var(--superK));
  }
}

.drawer-section {
  position: absolute;
  bottom: 100%;
  left: 0;
  width: 100%;
  background: white;
  border-radius: var(--radius-20-fallback, 12px);
  margin-bottom: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transform-origin: bottom center;
  z-index: 10;
}

@supports (corner-shape: superellipse(2)) {
  .drawer-section {
    border-radius: var(--radius-20-ideal, 12px);
    corner-shape: superellipse(var(--superK));
  }
}

.drawer-trigger {
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(107, 114, 128, 0.5);
  backdrop-filter: blur(4px);
  border-radius: 12px;
  cursor: pointer;
  z-index: 5;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.05);
  margin-bottom: 4px;
}

.minimize-trigger {
  position: absolute;
  top: -16px; /* 12px height + 4px gap */
  right: 0;
  width: 24px;
  height: 16px; /* Increased height to bridge the gap */
  display: flex;
  align-items: center; /* This might center it too low if height is 16px. We want content at top? */
  padding-bottom: 4px; /* Push content up by 4px? No, padding adds to size if box-sizing content-box */
  box-sizing: border-box; /* Include padding in height */
  justify-content: center;
  background: rgba(107, 114, 128, 0.5); /* This will color the bridge too? */
  /* We only want the top part colored. */
  background: transparent;
  z-index: 5;
  cursor: pointer;
}

.minimize-trigger::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 12px;
  background: rgba(107, 114, 128, 0.5);
  backdrop-filter: blur(4px);
  border-radius: 12px;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.05);
}

.minimize-trigger svg {
  z-index: 1; /* Ensure icon is above pseudo-element */
  margin-bottom: 4px; /* Lift icon back up into the visual pill */
}

.time-tracker {
  width: 100%;
  height: 100%; /* Fill the animating container */
  position: relative;
  border-radius: var(--radius-20-fallback, 12px);
  overflow: hidden; /* Inner clipping for backgrounds/layers */
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  transform: translateZ(0);
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  background: white;
  z-index: 2;
}

@supports (corner-shape: superellipse(2)) {
  .time-tracker {
    border-radius: var(--radius-20-ideal, 12px);
    corner-shape: superellipse(var(--superK));
  }
}

/* Reuse existing styles for internals */
.bg-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease;
  border-radius: var(--radius-20-fallback, 12px);
  z-index: 0;
}

@supports (corner-shape: superellipse(2)) {
  .bg-layer {
    border-radius: var(--radius-20-ideal, 12px);
    corner-shape: superellipse(var(--superK));
  }
}

.work-bg { background-color: #d1e6fa; }
.break-bg { background-color: #f8ecc4; opacity: 0; }

.tracker-header {
  position: relative;
  z-index: 1;
  height: 20px;
  width: 100%;
}

.status-pill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 3;
  display: flex;
  align-items: flex-start;
  padding-top: 4px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(3px);
  padding-left: 12px;
  padding-right: 12px;
  border-radius: var(--radius-20-fallback, 12px) var(--radius-20-fallback, 12px) 0 0;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
}

.status-pill.on-break { background-color: rgba(255, 255, 255, 0.4); }

@supports (corner-shape: superellipse(2)) {
  .status-pill {
    border-radius: var(--radius-20-ideal, 12px) var(--radius-20-ideal, 12px) 0 0;
    corner-shape: superellipse(var(--superK));
  }
}

.status-content { display: flex; align-items: center; gap: 4px; }
.status-icon-wrapper { display: flex; align-items: center; justify-content: center; width: 12px; height: 12px; }
.status-text { font-size: 10px; color: #1b1a18; line-height: 1; user-select: none; }

.timer-pill {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}

.timer-pill-container { display: flex; align-items: flex-start; height: 100%; }

.timer-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  height: 20px;
  border-radius: var(--radius-20-fallback, 12px) var(--radius-20-fallback, 12px) 0 0;
  box-sizing: border-box;
  position: relative;
}

@supports (corner-shape: superellipse(2)) {
  .timer-wrapper {
    border-radius: var(--radius-20-ideal, 12px) var(--radius-20-ideal, 12px) 0 0;
    corner-shape: superellipse(var(--superK));
  }
}

.break-timer-wrapper { background-color: transparent; }

.break-timer-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 360px;
  background-color: #f8ecc4;
  z-index: -1;
  border-radius: var(--radius-20-fallback, 12px) var(--radius-20-fallback, 12px) 0 0;
}

@supports (corner-shape: superellipse(2)) {
  .break-timer-wrapper::before {
    border-radius: var(--radius-20-ideal, 12px) var(--radius-20-ideal, 12px) 0 0;
    corner-shape: superellipse(var(--superK));
  }
}

.work-timer-wrapper {
  background: transparent;
  backdrop-filter: none;
  transition: background-color 0.3s ease;
  z-index: 2;
}

.work-timer-wrapper.dimmed { background-color: transparent; opacity: 0.5; }

.timer {
  font-family: 'Space Mono', monospace;
  font-size: 12px;
  color: #1b1a18;
  line-height: 1;
  user-select: none;
}

.main-card {
  position: relative;
  z-index: 4;
  flex: 1;
  width: 100%;
  background: white;
  border-radius: var(--radius-20-fallback, 12px);
  padding: 12px;
  box-sizing: border-box;
}

@supports (corner-shape: superellipse(2)) {
  .main-card {
    border-radius: var(--radius-20-ideal, 12px);
    corner-shape: superellipse(var(--superK));
  }
}

.card-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  gap: 8px;
}

.project-info {
  display: flex;
  align-items: center;
  gap: 9px;
  flex: 1;
  min-width: 0;
}

.project-icon {
  width: 28px;
  height: 28px;
  background: #f8cbcb;
  border-radius: var(--radius-18-fallback, 8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

@supports (corner-shape: superellipse(2)) {
  .project-icon {
    border-radius: var(--radius-18-ideal, 8px);
    corner-shape: superellipse(var(--superK));
  }
}

.project-name {
  font-size: 14px;
  color: #1b1a18;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
}

.actions { display: flex; gap: 8px; flex-shrink: 0; }
.actions-group { display: flex; gap: 8px; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>