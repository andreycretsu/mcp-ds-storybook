<template>
  <div class="time-tracker" :class="status">
    <!-- Background layers -->
    <div class="bg-layer work-bg"></div>
    <div 
      ref="breakBg"
      class="bg-layer break-bg"
      :style="{ opacity: status === 'break' ? 1 : 0 }"
    ></div>

    <!-- Status Pill (Left) -->
    <div class="status-pill">
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
      <!-- Break Timer Background (Yellow) - Only visible when on break -->
      <div 
        class="break-timer-bg"
        :style="{ opacity: status === 'break' ? 1 : 0 }"
      ></div>

      <div class="timer-content">
        <transition name="fade">
          <span 
            v-if="status === 'break'" 
            class="timer break-timer"
          >
            {{ formatTime(breakTime) }}
          </span>
        </transition>

        <span 
          class="timer work-timer"
          :class="{ 'dimmed': status === 'break' }"
        >
          {{ formatTime(workTime) }}
        </span>
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
    if (status.value === 'break') {
      animate(breakBg.value, { opacity: 1 }, { duration: 0.3 })
    } else {
      animate(breakBg.value, { opacity: 0 }, { duration: 0.3 })
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
  
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(3px);
  padding-left: 12px;
  padding-right: 12px;
  
  /* Top-left and Top-right corners only */
  border-radius: var(--radius-28-fallback, 12px) var(--radius-28-fallback, 12px) 0 0;
  
  box-sizing: border-box;
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

/* Timer Pill - Right (New) */
.timer-pill {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  z-index: 1; /* Below main card (z-index 2) */
  
  /* Container setup */
  display: flex;
  /* No direct padding or background on container anymore, handled by children/layers */
  
  /* Top-left and Top-right corners only */
  border-radius: var(--radius-28-fallback, 12px) var(--radius-28-fallback, 12px) 0 0;
  
  box-sizing: border-box;
  overflow: hidden; /* Clip the background layer */
}

@supports (corner-shape: superellipse(2)) {
  .timer-pill {
    border-radius: var(--radius-28-ideal, 12px) var(--radius-28-ideal, 12px) 0 0;
    corner-shape: superellipse(var(--superK));
  }
}

/* Yellow background for break timer */
.break-timer-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f8ecc4; /* Yellow */
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;
}

/* Overlap Header BG - Special yellow bg that extends to left */
.break-overlap-bg {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  /* Extend very far to the left to cover the header space */
  width: 200%; 
  background-color: #f8ecc4;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;
  /* Start from right edge of timer pill and go left */
  transform-origin: right center;
}

.timer-content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: 4px;
  gap: 12px;
  padding-left: 12px;
  padding-right: 12px;
  
  /* Background logic:
     - Work state: Transparent (shows through to blue/white layers below)
     - Break state: Transparent (shows through to yellow layer below)
     
     Actually, user says: "the widget bg is always blue, but when the break timer is true than we have anpther yellow background overlapping the whole header except the work timer"
     
     Wait, "overlapping the whole header except the work timer".
     If it overlaps the whole header, it should be behind everything in the header area?
     
     Let's look at the provided image.
     It shows a yellow background covering the "On break" pill AND extending to the right, covering the break timer area.
     The Work timer seems to have a different background (blue/white).
     
     Wait, "except the work timer".
     
     If I look at the image:
     [On break (Yellow)] ------------------- [Break Timer (Yellow)] [Work Timer (Blue/White)]
     
     So the yellow background seems to be:
     1. Under the status pill (left)
     2. Under the break timer (right, first item)
     
     But NOT under the work timer (right, second item)?
     
     Re-reading user: "the widget bg is always blue, but when the break timer is true than we have anpther yellow background overlapping the whole header except the work timer"
     
     This implies:
     - The main widget background is blue (we have .work-bg).
     - When on break, a yellow background overlaps the "header" area.
     - BUT "except the work timer".
     
     So the work timer sits on top of the blue/white, while the break timer and status pill sit on yellow?
     
     If so, I need a yellow background layer that covers the top area, but is masked out or pushed behind the work timer?
     
     Or maybe the work timer has its OWN background that sits on top of the yellow?
     
     Let's try to handle the timer pill background specifically.
     
     If the yellow background is "overlapping the whole header", it might be the .break-bg layer we already have which covers the whole widget?
     But user said "overlapping the whole header".
     
     Let's adjust the .timer-content background.
     If I remove the blur/white bg from .timer-content, it will be transparent.
     Then I can put the yellow bg behind specific parts.
     
     But user said "For At work we don't show that background on timer".
     
     Let's make .timer-content transparent.
     And add backgrounds to individual timer elements? No, they are text.
     
     Maybe the structure is:
     [Yellow Header BG] (Visible on break)
     [Work Timer Pill] (Always Blue/White)
     
     If I separate the timers?
     
     Let's try to interpret "except the work timer".
     Maybe the work timer is in its own container with a white/blue background?
     
     Let's look at the image again.
     The work timer has a distinct blue/white rounded background.
     The break timer is just text on the yellow background.
     
     So:
     1. Break Timer (Left in pill): Text on Yellow.
     2. Work Timer (Right in pill): Text in a Pill with Blue/White BG.
     
     So the .timer-pill container shouldn't have a background.
     The .work-timer should have its own background.
     And the .break-timer should just be text.
     And the yellow background should be behind everything (except work timer).
     
     Let's try:
     - Remove .timer-pill background.
     - Add background to .work-timer (white/blue).
     - Ensure .break-bg (yellow) covers the header area.
     
     But .break-bg currently covers the WHOLE widget.
     "overlapping the whole header" - implies maybe just the top part?
     "as in my figma, the widget bg is always blue, but when the break timer is true than we have anpther yellow background overlapping the whole header"
     
     Okay, so if .break-bg is visible, it covers the blue .work-bg.
     And the work timer needs to sit ON TOP of that yellow background, retaining the blue/white look?
     
     Let's try giving .work-timer a specific background style.
     And removing the general pill background.
  */
  background: transparent; 
}

.work-timer {
  /* Give work timer its own pill look if needed, or just let it sit on top if it has a bg */
  /* From image: The work timer has a light blue background when on break? */
  /* "For At work we don't show that background on timer" - means transparent on work? */
  
  position: relative;
  z-index: 2; /* Above yellow bg */
  padding: 0 8px; /* Add some padding if it has a bg */
  border-radius: 4px; /* Small radius? */
  
  /* When on break, it needs to look different? */
  /* User says: "For At work we don't show that background on timer" */
  /* Implies: Work state -> No special bg. Break state -> Yellow bg everywhere EXCEPT work timer. */
  /* So Work timer needs to mask out the yellow? or have a blue bg? */
  
  /* Let's try giving it the .work-bg color when on break? */
  transition: background-color 0.3s ease;
}

.work-timer.dimmed {
   /* When on break (dimmed is true) */
   /* It should have the blue background to stand out from yellow? */
   /* "overlapping the whole header except the work timer" */
   background-color: #d1e6fa; /* Match work-bg */
   border-radius: 12px; /* Match pill radius or smaller? */
   height: 20px;
   display: flex;
   align-items: center;
   opacity: 1; /* Reset opacity since we are styling it */
   color: #1b1a18; /* Text color */
}

/* We need to override the .dimmed opacity: 0.5 if we use it for styling */
.timer.work-timer.dimmed {
  opacity: 1;
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