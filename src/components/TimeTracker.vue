<template>
  <div class="time-tracker" :class="status">
    <!-- Background layers -->
    <div class="bg-layer work-bg"></div>
    <div 
      ref="breakBg"
      class="bg-layer break-bg"
      :style="{ opacity: status === 'break' ? 1 : 0 }"
    ></div>

    <!-- Status Bar (Top) -->
    <div class="status-bar">
      <!-- Status Pill Container -->
      <div class="status-pill-wrapper">
        <div class="status-pill">
          <div class="status-icon-wrapper">
            <Icon 
              :icon="status === 'work' ? 'briefcase' : 'mug-hot'" 
              size="S-12"
              color="#000f30"
            />
          </div>
          <span class="status-text">{{ status === 'work' ? 'At work' : 'On break' }}</span>
        </div>
        <!-- SVG Connector for the smooth corner transition -->
        <div class="pill-connector">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- This path draws the inverse curve to make it look connected like a tab -->
            <path 
              d="M0 12C0 5.37258 5.37258 0 12 0V12H0Z" 
              fill="rgba(255, 255, 255, 0.4)"
            />
          </svg>
        </div>
      </div>

      <!-- Timers (Right aligned in status bar) -->
      <div class="timers">
        <!-- Break Timer (Only visible when on break) -->
        <transition name="fade">
          <span 
            v-if="status === 'break'" 
            class="timer break-timer"
          >
            {{ formatTime(breakTime) }}
          </span>
        </transition>

        <!-- Work Timer (Dimmed when on break) -->
        <span 
          class="timer work-timer"
          :class="{ 'dimmed': status === 'break' }"
        >
          {{ formatTime(workTime) }}
        </span>
      </div>
    </div>

    <!-- Main Card (Bottom) -->
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
            l-icon-name="mug-hot"
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
      // Both increment during break
      workTime.value++
    }
  }, 1000)
}

const toggleBreak = () => {
  status.value = status.value === 'work' ? 'break' : 'work'
  
  // Animate background
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
  /* Use radius-28 token or fallback */
  border-radius: var(--radius-28-fallback, 12px);
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
}

/* Modern browsers with corner-shape support */
@supports (corner-shape: superellipse(2)) {
  .time-tracker {
    border-radius: var(--radius-28-ideal, 12px);
    corner-shape: superellipse(var(--superK));
  }
}

/* Backgrounds */
.bg-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease;
  border-radius: inherit; /* Inherit radius from parent */
}

.work-bg {
  background-color: #d1e6fa; /* var(--color/additional/blue/75) */
}

.break-bg {
  background-color: #f8ecc4; /* var(--color/additional/yellow/100) */
  opacity: 0;
}

/* Status Bar */
.status-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Fill full height so backgrounds are visible */
  padding: 4px 12px 0 0; /* Top padding for alignment, no left padding for full width background strip */
  box-sizing: border-box;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* Align items to top */
}

.status-pill-wrapper {
  display: flex;
  align-items: flex-end; /* Align connector to bottom of pill */
  position: relative;
}

.status-pill {
  display: flex;
  align-items: center;
  gap: 4px;
  
  /* Glassmorphism effect from design */
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(3px);
  padding: 0 12px; 
  /* Only rounded on bottom-right corner */
  border-radius: 0 0 var(--radius-28-fallback, 12px) 0; 
  
  width: fit-content;
  height: 20px; /* Fixed height matching screenshot inspection */
  box-sizing: border-box;
}

@supports (corner-shape: superellipse(2)) {
  .status-pill {
    border-radius: 0 0 var(--radius-28-ideal, 12px) 0;
    corner-shape: superellipse(var(--superK));
  }
}

.pill-connector {
  width: 12px;
  height: 12px;
  /* Positioned to the right of the pill */
  display: flex;
  align-items: flex-start; /* Align top to match pill bottom edge logic */
}

.status-pill-wrapper {
  align-items: flex-start; /* Align to top */
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

.timers {
  display: flex;
  align-items: center;
  gap: 12px; /* Spacing between timers */
  margin-top: 4px; /* Align vertically with status pill */
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

/* Main Card */
.main-card {
  position: absolute;
  top: 20px; /* Matches original design */
  left: 0;
  width: 100%;
  height: calc(100% - 20px);
  background: white;
  /* Same radius logic as the main container */
  border-radius: var(--radius-28-fallback, 12px);
  padding: 12px;
  box-sizing: border-box;
  z-index: 2;
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
  background: #f8cbcb; /* var(--additional/red/100) */
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