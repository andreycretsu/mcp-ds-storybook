<template>
  <div class="snackbar" :class="[`snackbar--${variant}`]">
    <div class="snackbar__body">
      <!-- Icon (optional) -->
      <div v-if="showIcon" class="snackbar__icon">
        <div v-if="variant === 'loader'" class="snackbar__loader">
          <div class="snackbar__loader-circle"></div>
        </div>
        <Icon 
          v-else 
          :icon="iconName" 
          size="sm"
          :class="'snackbar__icon-component'"
        />
      </div>
      
      <!-- Message Text -->
      <span class="snackbar__message">{{ message }}</span>
    </div>
    
    <!-- Actions -->
    <div class="snackbar__actions">
      <!-- Action Buttons (optional) -->
      <template v-if="actions && actions.length > 0">
        <button
          v-for="(action, index) in actions"
          :key="index"
          :class="[
            'snackbar__action-btn',
            `snackbar__action-btn--${action.emphasis || 'low'}`,
            `snackbar__action-btn--${action.color || 'white'}`
          ]"
          @click="handleAction(action)"
        >
          <Icon 
            v-if="action.icon" 
            :icon="action.icon" 
            size="xs"
            class="snackbar__action-icon"
          />
          {{ action.label }}
        </button>
      </template>
      
      <!-- Close Button -->
      <button 
        v-if="showCloseButton"
        class="snackbar__close"
        @click="handleClose"
        aria-label="Close notification"
      >
        <Icon icon="fa-solid fa-xmark" size="xs" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Icon from './Icon.vue'

export interface SnackBarAction {
  label: string
  emphasis?: 'low' | 'high'
  color?: 'green' | 'blue' | 'yellow' | 'red' | 'cyan' | 'violet' | 'rose' | 'white' | 'grey'
  icon?: string
  handler: () => void
}

export interface SnackBarProps {
  /** Notification message */
  message: string
  /** Visual variant */
  variant?: 'neutral' | 'success' | 'attention' | 'critical' | 'information' | 'loader'
  /** Show icon */
  showIcon?: boolean
  /** Show close button */
  showCloseButton?: boolean
  /** Action buttons */
  actions?: SnackBarAction[]
}

const props = withDefaults(defineProps<SnackBarProps>(), {
  variant: 'neutral',
  showIcon: false,
  showCloseButton: true,
  actions: () => []
})

const emit = defineEmits<{
  close: []
  action: [action: SnackBarAction]
}>()

const iconName = computed(() => {
  switch (props.variant) {
    case 'neutral': return 'fa-solid fa-circle-dashed'
    case 'success': return 'fa-solid fa-circle-check'
    case 'attention': return 'fa-solid fa-triangle-exclamation'
    case 'critical': return 'fa-solid fa-circle-exclamation'
    case 'information': return 'fa-solid fa-circle-info'
    case 'loader': return '' // Loader uses custom animation
    default: return 'fa-solid fa-circle-dashed'
  }
})

const handleClose = () => {
  emit('close')
}

const handleAction = (action: SnackBarAction) => {
  action.handler()
  emit('action', action)
}
</script>

<style scoped>
.snackbar {
  display: flex;
  align-items: center;
  background-color: #000f30;
  border-radius: 6px;
  padding: 12px;
  gap: 12px;
  height: 40px;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  color: #ffffff;
  min-width: 300px;
  max-width: 600px;
}

.snackbar__body {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.snackbar__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.snackbar__icon-component {
  line-height: 1;
  text-align: center;
}

.snackbar__message {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0;
  flex: 1;
}

.snackbar__actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

/* Action Button Styles */
.snackbar__action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 20px;
  padding: 0 8px;
  border-radius: 4px;
  border: none;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

.snackbar__action-icon {
  flex-shrink: 0;
}

/* Action Button Emphasis - Low */
.snackbar__action-btn--low {
  background-color: transparent;
  border: 1px solid #91a4b7;
}

.snackbar__action-btn--low:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Action Button Emphasis - High */
.snackbar__action-btn--high {
  border: 1px solid transparent;
}

.snackbar__action-btn--high:hover {
  opacity: 0.9;
}

/* Action Button Colors - Low Emphasis */
.snackbar__action-btn--low.snackbar__action-btn--white {
  color: #ffffff;
  border-color: #91a4b7;
}

.snackbar__action-btn--low.snackbar__action-btn--blue {
  color: #59a3ee;
  border-color: #59a3ee;
}

.snackbar__action-btn--low.snackbar__action-btn--green {
  color: #76eaa0;
  border-color: #76eaa0;
}

.snackbar__action-btn--low.snackbar__action-btn--red {
  color: #ed7777;
  border-color: #ed7777;
}

.snackbar__action-btn--low.snackbar__action-btn--yellow {
  color: #edcd65;
  border-color: #edcd65;
}

/* Action Button Colors - High Emphasis */
.snackbar__action-btn--high.snackbar__action-btn--blue {
  background-color: #59a3ee;
  color: #ffffff;
}

.snackbar__action-btn--high.snackbar__action-btn--green {
  background-color: #76eaa0;
  color: #000000;
}

.snackbar__action-btn--high.snackbar__action-btn--red {
  background-color: #ed7777;
  color: #ffffff;
}

.snackbar__action-btn--high.snackbar__action-btn--yellow {
  background-color: #edcd65;
  color: #000000;
}

.snackbar__action-btn--high.snackbar__action-btn--white {
  background-color: #ffffff;
  color: #000000;
}

.snackbar__close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  padding: 0;
  transition: opacity 0.2s ease;
}

.snackbar__close:hover {
  opacity: 0.8;
}

/* Loader Animation */
.snackbar__loader {
  position: relative;
  width: 20px;
  height: 20px;
}

.snackbar__loader-circle {
  position: absolute;
  width: 17.5px;
  height: 17.5px;
  border: 1.25px solid #91a4b7;
  border-radius: 50%;
  border-top: 1.25px solid #ffffff;
  animation: spin 1s linear infinite;
  top: 1.25px;
  left: 1.25px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Icon Colors by Variant */
.snackbar--neutral .snackbar__icon-component {
  color: #ffffff;
}

.snackbar--success .snackbar__icon-component {
  color: #76eaa0;
}

.snackbar--attention .snackbar__icon-component {
  color: #edcd65;
}

.snackbar--critical .snackbar__icon-component {
  color: #ed7777;
}

.snackbar--information .snackbar__icon-component {
  color: #59a3ee;
}

.snackbar--loader .snackbar__loader-circle {
  border-color: #91a4b7;
  border-top-color: #ffffff;
}
</style> 