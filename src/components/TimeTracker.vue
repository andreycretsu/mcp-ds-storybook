<template>
  <div 
    class="tracker-container" 
    ref="containerRef"
    @mouseenter="isHovered = true" 
    @mouseleave="isHovered = false"
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
        v-if="isHovered && !isDrawerOpen" 
        class="drawer-trigger"
        @click="toggleDrawer"
      >
        <Icon 
          :icon="'chevron-up'" 
          size="XS-8" 
          color="white" 
        />
      </div>
    </transition>

    <!-- Main Time Tracker Widget -->
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
              <span>😂</span>
            </div>
            <span class="project-name">Project name</span>
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
                  @click="toggleBreak"
                />
                <Button 
                  v-else
                  type="icon-only" 
                  size="24" 
                  tone="secondary" 
                  l-icon 
                  l-icon-name="briefcase"
                  @click="toggleBreak"
                />
                
                <Button 
                  type="icon-only" 
                  size="24" 
                  tone="secondary" 
                  l-icon 
                  l-icon-name="circle-stop"
                  @click="stop"
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
                  @click="start"
                />
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
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
let timerInterval: number | null = null

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
    // Keeping logic if we ever need global bg animation back, but currently opaque 0
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

const handleClickOutside = (event: MouseEvent) => {
  if (isDrawerOpen.value && containerRef.value && !containerRef.value.contains(event.target as Node)) {
    isDrawerOpen.value = false
  }
}

watch(isDrawerOpen, (newValue) => {
  if (drawerRef.value) {
    const targetHeight = newValue ? "216px" : "0px" // 3x height of widget (72px * 3)
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
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');

.tracker-container {
  position: relative;
  width: 340px;
  /* Allows drawer to expand upwards absolutely */
  border-radius: var(--radius-20-fallback, 12px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05); /* Main widget shadow moved here to avoid clipping */
}

@supports (corner-shape: superellipse(2)) {
  .tracker-container {
    border-radius: var(--radius-20-ideal, 12px);
    corner-shape: superellipse(var(--superK));
  }
}

.drawer-section {
  position: absolute;
  bottom: 100%; /* Positioned above the widget */
  left: 0;
  width: 100%;
  background: white;
  border-radius: var(--radius-20-fallback, 12px);
  margin-bottom: 8px; /* Spacing from trigger/widget */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05); /* Lighter shadow as requested */
  overflow: hidden;
  transform-origin: bottom center;
  z-index: 10; /* Ensure it's on top */
}

@supports (corner-shape: superellipse(2)) {
  .drawer-section {
    border-radius: var(--radius-20-ideal, 12px);
    corner-shape: superellipse(var(--superK));
  }
}

.drawer-trigger {
  position: absolute;
  top: -16px; /* 12px height + 4px gap */
  left: 50%;
  transform: translateX(-50%);
  width: 40px; /* Slightly larger width */
  height: 12px; /* Slightly larger height */
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(107, 114, 128, 0.5); /* Gray semi-transparent */
  backdrop-filter: blur(4px); /* Optional: add some blur */
  border-radius: 12px; /* Capsule shape */
  cursor: pointer;
  z-index: 5;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.05);
  margin-bottom: 4px; /* Add gap from widget */
}

/* Adjust positioning to be "above the widget 4px padding" */
/* .drawer-trigger rule is defined above */

.time-tracker {
  width: 340px;
  height: 72px; /* Initial Expanded height */
  position: relative;
  border-radius: var(--radius-20-fallback, 12px);
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  /* transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1); */ /* Disabled CSS transition for motion spring */
  
  /* Flex container to hold header and main-card vertically */
  display: flex;
  flex-direction: column;
  
  /* Fix for clipping bugs in Safari/Chrome with overflow:hidden and border-radius */
  transform: translateZ(0);
  -webkit-mask-image: -webkit-radial-gradient(white, black); /* Safari overflow fix */
  background: white; /* Ensure it has background */
  z-index: 2;
  /* box-shadow moved to container to avoid clipping by mask-image */
}

.time-tracker.is-collapsed {
  /* Height is now controlled by JS animation */
}

@supports (corner-shape: superellipse(2)) {
  .time-tracker {
    border-radius: var(--radius-20-ideal, 12px);
    corner-shape: superellipse(var(--superK));
  }
}

/* Backgrounds (absolute to cover whole area behind content) */
.bg-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease;
  border-radius: var(--radius-20-fallback, 12px); /* Explicit radius matching parent */
  z-index: 0;
}

@supports (corner-shape: superellipse(2)) {
  .bg-layer {
    border-radius: var(--radius-20-ideal, 12px);
    corner-shape: superellipse(var(--superK));
  }
}

.work-bg {
  background-color: #d1e6fa;
}

.break-bg {
  background-color: #f8ecc4;
  opacity: 0;
}

/* Header Group Wrapper */
.header-group {
  /* Wrapper to group header elements for transition */
}

/* 1. Header Container */
.tracker-header {
  position: relative;
  z-index: 1;
  height: 20px; /* Fixed height for header area */
  width: 100%;
  /* No content needed, just spacing */
}

/* Status Pill - Left */
.status-pill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 3; /* Higher than timer wrappers (which are in .timer-pill z-index 1) */
  
  display: flex;
  align-items: flex-start; /* Align content wrapper to top */
  padding-top: 4px; /* Vertical alignment for 20px header area */
  
  /* Default background: Glass on Blue */
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(3px);
  padding-left: 12px;
  padding-right: 12px;
  
  /* Top-left and Top-right corners only */
  border-radius: var(--radius-20-fallback, 12px) var(--radius-20-fallback, 12px) 0 0;
  
  box-sizing: border-box;
  transition: background-color 0.3s ease;
}

.status-pill.on-break {
  background-color: rgba(255, 255, 255, 0.4); /* Keep white blurred even on break */
}

@supports (corner-shape: superellipse(2)) {
  .status-pill {
    border-radius: var(--radius-20-ideal, 12px) var(--radius-20-ideal, 12px) 0 0;
    corner-shape: superellipse(var(--superK));
  }
}

.status-content {
  display: flex;
  align-items: center; /* Center icon and text relative to each other */
  gap: 4px;
}

.status-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
}

.status-text {
  font-size: 10px;
  color: #1b1a18;
  line-height: 1;
}

/* Timer Pill - Right */
.timer-pill {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  z-index: 1; /* Below main card (z-index 2) */
  
  /* Container setup for right alignment */
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  /* padding-top: 4px; */ /* Remove top padding as requested "remove top margins from timers" */
  /* padding-right: 12px; */ /* Remove right padding as requested "remove right green padding from this div" */
}

.timer-pill-container {
  display: flex;
  align-items: flex-start;
  /* gap: 12px; */ /* Removed gap as requested "remove the spacer between timer wrappers" */
  height: 100%;
}

.timer-wrapper {
  /* Base styles for timer wrappers */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  height: 20px; /* Fixed height for pill look */
  /* margin-top: 4px; */ /* Remove margin as requested "remove mragings from timer wrpappers from both" */
  
  /* Top corners rounded logic or full pill? Design looks like full pill or top-rounded */
  /* Since they sit behind the card, bottom radius doesn't matter much visually, 
     but consistency with status pill suggests top-rounded */
  border-radius: var(--radius-20-fallback, 12px) var(--radius-20-fallback, 12px) 0 0;
  
  box-sizing: border-box;
  position: relative; /* For z-index stacking */
}

@supports (corner-shape: superellipse(2)) {
  .timer-wrapper {
    border-radius: var(--radius-20-ideal, 12px) var(--radius-20-ideal, 12px) 0 0;
    corner-shape: superellipse(var(--superK));
  }
}

.break-timer-wrapper {
  background-color: transparent; /* Wrapper itself transparent */
}

/* Extend yellow background to the left using pseudo-element */
.break-timer-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0; /* Anchor to right of wrapper */
  height: 100%;
  width: 360px; /* Fixed width larger than widget (340px) to ensure it reaches left edge */
  background-color: #f8ecc4;
  z-index: -1; /* Behind the text content of this wrapper */
  border-radius: var(--radius-20-fallback, 12px) var(--radius-20-fallback, 12px) 0 0;
}

@supports (corner-shape: superellipse(2)) {
  .break-timer-wrapper::before {
    border-radius: var(--radius-20-ideal, 12px) var(--radius-20-ideal, 12px) 0 0;
    corner-shape: superellipse(var(--superK));
  }
}

.work-timer-wrapper {
  /* "right ands main timer has no background in both states" */
  background: transparent; 
  backdrop-filter: none;
  transition: background-color 0.3s ease;
  z-index: 2; /* Ensure work timer sits on top of any extending yellow bg */
}

.work-timer-wrapper.dimmed {
  /* No background change on dim */
  background-color: transparent;
}

.timer {
  font-family: 'Space Mono', monospace;
  font-size: 12px;
  color: #1b1a18;
  line-height: 1;
}

.dimmed {
  opacity: 0.5;
}

/* 2. Main Card Container */
.main-card {
  position: relative; /* Relative to flow in flex column */
  z-index: 4; /* "white card shouldmbe on top in terms of z index" - higher than status-pill (3) */
  flex: 1; /* Take remaining height (72px - 20px = 52px) */
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
}

.project-info {
  display: flex;
  align-items: center;
  gap: 9px;
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
  max-width: 100px;
}

.actions {
  display: flex;
  gap: 8px;
}

.actions-group {
  display: flex;
  gap: 8px;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>