<template>
  <div class="time-tracker" :class="status">
    <!-- Background layers -->
    <div class="bg-layer work-bg"></div>
    <div 
      ref="breakBg"
      class="bg-layer break-bg"
      :style="{ opacity: 0 }"
    ></div>

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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Button from './Button.vue'
import Icon from './Icon.vue'
import { animate } from 'motion'

const status = ref<'work' | 'break'>('work')
const workTime = ref(0)
const breakTime = ref(0)
const breakBg = ref<HTMLElement | null>(null)
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
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');

.time-tracker {
  width: 340px;
  height: 72px;
  position: relative;
  border-radius: var(--radius-28-fallback, 12px);
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
  
  /* Flex container to hold header and main-card vertically */
  display: flex;
  flex-direction: column;
}

@supports (corner-shape: superellipse(2)) {
  .time-tracker {
    border-radius: var(--radius-28-ideal, 12px);
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
  border-radius: inherit;
  z-index: 0;
}

.work-bg {
  background-color: #d1e6fa;
}

.break-bg {
  background-color: #f8ecc4;
  opacity: 0;
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
  z-index: 1; /* Below main card (z-index 2) */
  
  display: flex;
  align-items: flex-start; /* Align content wrapper to top */
  padding-top: 4px; /* Vertical alignment for 20px header area */
  
  /* Default background: Glass on Blue */
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(3px);
  padding-left: 12px;
  padding-right: 12px;
  
  /* Top-left and Top-right corners only */
  border-radius: var(--radius-28-fallback, 12px) var(--radius-28-fallback, 12px) 0 0;
  
  box-sizing: border-box;
  transition: background-color 0.3s ease;
}

.status-pill.on-break {
  background-color: #f8ecc4; /* Yellow on break */
  /* "on breaqk pill also white with blured semi transparejt" */
  background-color: rgba(255, 255, 255, 0.4); /* Revert to white blur */
}

@supports (corner-shape: superellipse(2)) {
  .status-pill {
    border-radius: var(--radius-28-ideal, 12px) var(--radius-28-ideal, 12px) 0 0;
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
  padding-right: 12px; /* Right padding from design */
}

.timer-pill-container {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  height: 100%;
}

.timer-wrapper {
  /* Base styles for timer wrappers */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  height: 20px; /* Fixed height for pill look */
  margin-top: 4px; /* Add margin here instead of padding on container to position vertically */
  
  /* Top corners rounded logic or full pill? Design looks like full pill or top-rounded */
  /* Since they sit behind the card, bottom radius doesn't matter much visually, 
     but consistency with status pill suggests top-rounded */
  border-radius: var(--radius-28-fallback, 12px) var(--radius-28-fallback, 12px) 0 0;
  
  box-sizing: border-box;
}

@supports (corner-shape: superellipse(2)) {
  .timer-wrapper {
    border-radius: var(--radius-28-ideal, 12px) var(--radius-28-ideal, 12px) 0 0;
    corner-shape: superellipse(var(--superK));
  }
}

.break-timer-wrapper {
  /* Second timer full width background till the left edge? */
  /* "seond timer full width backdgorund till the left edge" */
  /* Wait, does user mean extend to left edge of the component? */
  /* "seond timer full width backdgorund till the left edge" */
  /* If it extends to the left edge, it would cover the status pill? */
  /* Or does it mean just "full width of its own container"? */
  /* Looking at the image: The break timer has a yellow background. */
  /* If user says "full width backdgorund till the left edge", maybe they mean it extends BEHIND the status pill? */
  /* Or maybe they mean it fills the space between status pill and right edge? */
  
  /* Re-reading: "seond timer full width backdgorund till the left edge" */
  /* Maybe user means the yellow background should span from the right edge (where timer is) all the way to the left edge of the WIDGET? */
  /* But "overlapping the whole header except the work timer" in previous message suggests this. */
  /* And "For pill get back white blurred background" suggests status pill sits on top of it. */
  
  /* So:
     1. Yellow background spans whole header width (except work timer area).
     2. Status pill (white blur) sits on top of Yellow background.
     3. Break timer sits on Yellow background.
     
     So we need a yellow background that covers everything BUT is masked or layered correctly.
     
     Since the status pill is on the left, and break timer is on the right (to the left of work timer).
     If we put a yellow background on the break timer wrapper and extend it left:
  */
  background-color: #f8ecc4; /* Yellow */
  
  /* To extend to left edge: */
  /* We can't easily extend a flex child to the left edge of the parent's parent without absolute positioning. */
  /* Or we use the previous approach of a global header background? */
  
  /* But user said "when on break just add another wrapper for second timer and make it yellow". */
  /* And now "seond timer full width backdgorund till the left edge". */
  
  /* Let's assume for now just the wrapper is yellow, unless "till the left edge" means something else. */
  /* Ah, "till the left edge" might mean left edge of the TIMER PILL container? */
  /* Or left edge of the WIDGET. */
  
  /* If I look at the provided image in the previous turn: */
  /* The yellow bg starts from the left of the break timer text, and goes LEFT behind the "On break" pill. */
  
  /* So yes, global header yellow background is needed. */
  /* But user previously rejected global background saying "when on break just add another wrapper for second timer and make it yellow". */
  /* Contradictory instructions? */
  
  /* Let's try to interpret "seond timer full width backdgorund till the left edge" as: */
  /* The break timer wrapper itself should be wide enough? */
  
  /* Actually, if I make the break timer wrapper very wide to the left, and position it absolutely? */
  /* Or maybe revert to the `break-overlap-bg` idea but attached to the break timer? */
  
  /* Let's stick to the wrapper being yellow for now as strictly requested, 
     but "till the left edge" is tricky. */
     
  /* Maybe "left edge" means left edge of the timer pill group? */
}

.work-timer-wrapper {
  /* "right ands main timer has no background in both states" */
  background: transparent; 
  backdrop-filter: none;
  transition: background-color 0.3s ease;
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
  /* opacity: 0.5; */ /* Removed opacity dimming since we have distinct backgrounds */
}

/* 2. Main Card Container */
.main-card {
  position: relative; /* Relative to flow in flex column */
  z-index: 2;
  flex: 1; /* Take remaining height (72px - 20px = 52px) */
  width: 100%;
  background: white;
  border-radius: var(--radius-28-fallback, 12px);
  padding: 12px;
  box-sizing: border-box;
}

@supports (corner-shape: superellipse(2)) {
  .main-card {
    border-radius: var(--radius-28-ideal, 12px);
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