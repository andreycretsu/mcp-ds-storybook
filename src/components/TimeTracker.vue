<template>
  <!-- Main Container (Single Root) -->
  <div 
    ref="containerRef"
    class="tracker-container"
    :class="{ 'is-sticky': isSticky, 'is-dragging': isDragging }"
    @mousedown="startDrag"
    @click="handleContainerClick"
    :style="containerStyle"
  >
    <!-- 1. Sticky Content (Shown when sticky) -->
    <div 
      class="sticky-content-wrapper"
      :style="{ opacity: isSticky ? 1 : 0, pointerEvents: isSticky ? 'auto' : 'none' }"
    >
      <div class="sticky-content">
        <!-- Break Timer Section (Yellow Overlay) -->
        <div v-if="status === 'break'" class="sticky-timer-section break-section">
          <Icon 
            icon="mug" 
            size="S-16" 
            color="#1b1a18" 
          />
          <span class="sticky-timer" style="color: #1b1a18;">
            {{ formatTime(breakTime) }}
          </span>
        </div>

        <!-- Work Timer Section (Right/Default) -->
        <div class="sticky-timer-section work-section" :class="{ 'is-default': status === 'work' }">
           <Icon 
            icon="briefcase" 
            size="S-16" 
            :color="status === 'break' ? 'rgba(0, 15, 48, 0.5)' : '#000f30'" 
          />
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
      <!-- Drawer Section (Second Drawer) -->
      <div 
        ref="drawerRef" 
        class="drawer-section" 
        :style="{ height: '0px', opacity: 0 }"
      >
        <!-- Empty content for now -->
      </div>

      <!-- Trigger Handle -->
      <transition name="fade">
        <div 
          v-if="isHovered && !isDrawerOpen && !isSticky" 
          class="drawer-trigger"
          @click.stop="toggleDrawer"
        >
          <Icon 
            :icon="'chevron-up'" 
            size="XS-8" 
            color="white" 
          />
        </div>
      </transition>

      <!-- Main Time Tracker Widget Content -->
      <div 
        ref="trackerRef"
        class="time-tracker" 
        :class="{ 'is-collapsed': !isExpanded, [status]: true }"
        :style="{ opacity: isDrawerOpen ? 0.5 : 1, transition: 'opacity 0.3s ease' }"
        @mouseenter="isHovered = true" 
        @mouseleave="isHovered = false"
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
                <Icon 
                  :icon="status === 'work' ? 'briefcase' : 'mug'" 
                  size="S-12"
                  color="#000f30"
                />
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
                <span>📑</span>
              </div>
              <span class="project-name">Customer Success Strategy</span>
            </div>

            <!-- Right: Buttons -->
            <div class="actions">
              <transition name="fade" mode="out-in">
                <div v-if="isExpanded" class="actions-group">
                  <Button 
                    v-if="status === 'work'"
                    type="icon-only" 
                    size="24" 
                    tone="secondary" 
                    l-icon 
                    l-icon-name="mug"
                    @click.stop="toggleBreak"
                  />
                  <Button 
                    v-else
                    type="icon-only" 
                    size="24" 
                    tone="secondary" 
                    l-icon 
                    l-icon-name="briefcase"
                    @click.stop="toggleBreak"
                  />
                  
                  <Button 
                    type="icon-only" 
                    size="24" 
                    tone="secondary" 
                    l-icon 
                    l-icon-name="circle-stop"
                    @click.stop="stop"
                  />
                </div>
                <div v-else class="actions-group">
                   <!-- Play button to expand/restart -->
                   <Button 
                    type="icon-only" 
                    size="24" 
                    tone="secondary" 
                    l-icon 
                    l-icon-name="circle-play"
                    @click.stop="start"
                  />
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
import Icon from './Icon.vue'
import { animate } from 'motion'

const status = ref<'work' | 'break'>('work')
const workTime = ref(0)
const breakTime = ref(0)
const breakBg = ref<HTMLElement | null>(null)
const trackerRef = ref<HTMLElement | null>(null)
const headerGroup = ref<HTMLElement | null>(null)
const drawerRef = ref<HTMLElement | null>(null)
const containerRef = ref<HTMLElement | null>(null)
const isExpanded = ref(true)
const isHovered = ref(false)
const isDrawerOpen = ref(false)
const isSticky = ref(false)
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

  return {
    width: width,
    height: `${targetHeight}px`,
    transform: `translate(${position.value.x}px, ${position.value.y}px)`,
    cursor: isDragging.value ? 'grabbing' : 'grab',
    // Apply smooth transition for morphing effect
    transition: isDragging.value 
      ? 'none' 
      : 'width 0.5s cubic-bezier(0.19, 1, 0.22, 1), height 0.5s cubic-bezier(0.19, 1, 0.22, 1), transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
    borderRadius: isSticky.value ? '20px' : 'var(--radius-20-fallback, 12px)'
  }
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
  
  if (breakBg.value) {
    if (status.value === 'break') {
      // animate(breakBg.value, { opacity: 1 }, { duration: 0.3 }) 
    } else {
      // animate(breakBg.value, { opacity: 0 }, { duration: 0.3 })
    }
  }
}

const stop = () => {
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
  isExpanded.value = true
  startTimer()
}

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value
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
  
  const threshold = 50
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
  position.value = {
    x: e.clientX - dragStart.value.x,
    y: e.clientY - dragStart.value.y
  }
}

const stopDrag = async () => {
  isDragging.value = false
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
  
  const el = containerRef.value
  if (!el) return

  const rect = el.getBoundingClientRect()
  const parent = el.offsetParent || document.body
  const parentRect = parent.getBoundingClientRect()
  
  const threshold = 50
  // Use current Sticky Width for calculation
  const TARGET_STICKY_WIDTH = stickyWidth.value
  const TARGET_EXPANDED_HEIGHT = isExpanded.value ? EXPANDED_HEIGHT : 52
  
  // Calculate distances to parent edges
  const distLeft = rect.left - parentRect.left
  const distRight = parentRect.right - rect.right
  const distTop = rect.top - parentRect.top
  const distBottom = parentRect.bottom - rect.bottom
  
  let newX = position.value.x
  let newY = position.value.y
  let newIsSticky = false
  
  // Check edges
  const snapLeft = distLeft < threshold
  const snapRight = distRight < threshold
  const snapTop = distTop < threshold
  const snapBottom = distBottom < threshold
  
  if (snapLeft || snapRight || snapTop || snapBottom) {
    newIsSticky = true
    
    // Handle Horizontal Snapping
    if (snapLeft) {
      newX -= distLeft // Snap flush to left
    } else if (snapRight) {
      // Target: Right edge flush
      newX += distRight
      
      // If switching from Expanded to Sticky, compensate width change
      if (!isSticky.value) {
        newX += (EXPANDED_WIDTH - TARGET_STICKY_WIDTH)
      }
    }
    
    // Handle Vertical Snapping
    if (snapTop) {
      newY -= distTop // Snap flush to top
    } else if (snapBottom) {
       // Target: Bottom edge flush
       newY += distBottom
       
       // If switching from Expanded to Sticky, height shrinks
       if (!isSticky.value) {
         newY += (TARGET_EXPANDED_HEIGHT - STICKY_HEIGHT)
       }
    }
    
  } else {
    // Unstick logic
    if (isSticky.value) {
      newIsSticky = false
      
      // Check if we are near Right edge
      // Note: Use current sticky width here as we are starting FROM sticky
      if (distRight < threshold + (EXPANDED_WIDTH - TARGET_STICKY_WIDTH)) {
         newX -= (EXPANDED_WIDTH - TARGET_STICKY_WIDTH)
      }
      
      // Check if we are near Bottom edge
      if (distBottom < threshold + (TARGET_EXPANDED_HEIGHT - STICKY_HEIGHT)) {
         newY -= (TARGET_EXPANDED_HEIGHT - STICKY_HEIGHT)
      }
    }
  }

  if (newIsSticky !== isSticky.value) {
     isSticky.value = newIsSticky
     // await nextTick()
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
  /* border-radius is also controlled via inline styles */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  background: white;
  overflow: visible;
  z-index: 100;
}

@supports (corner-shape: superellipse(2)) {
  .tracker-container {
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
  border-radius: 20px; /* This creates the pill shape on top */
  z-index: 2;
  position: relative;
  box-shadow: 2px 0 4px rgba(0,0,0,0.02); /* Optional subtle separator */
  min-width: 110px;
}

@supports (corner-shape: superellipse(2)) {
  .break-section {
    corner-shape: superellipse(var(--superK));
  }
}

.work-section {
  background: transparent; /* Let container blue show through */
  z-index: 1;
  justify-content: center;
  min-width: 110px;
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
.status-text { font-size: 10px; color: #1b1a18; line-height: 1; }

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