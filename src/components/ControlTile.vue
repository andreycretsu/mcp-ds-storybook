<template>
  <div
    class="control-tile"
    :class="[
      `size-${size}`,
      `type-${type}`,
      `state-${state}`,
      { hover: isHovering }
    ]"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <!-- Left: Control or Icon -->
    <div class="left-slot">
      <template v-if="control">
        <Control
          :type="controlType"
          :size="controlSize"
          :state="controlState"
          :active="controlActive"
        />
      </template>
      <template v-else-if="icon">
        <Icon :icon="iconClass" :size="size === 'L' ? 'md' : 'sm'" :color="iconColor" :spin="iconSpin" :pulse="iconPulse" :fixedWidth="iconFixedWidth" />
      </template>
    </div>
    <div class="content">
      <div class="label-container">
        <span class="label">{{ label }}</span>
        <div v-if="info" class="icon-container info-icon">
          <div class="small-icon">
            <Icon icon="fa-solid fa-circle-info" size="xs" :color="infoIconColor || '#91a4b7'" />
          </div>
        </div>
      </div>
      <div v-if="description" class="description">{{ description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Icon from './Icon.vue'
import Control from './Control.vue'

const props = defineProps<{
  label: string
  description?: string
  size?: 'L' | 'M'
  type?: 'Fixed' | 'Hug'
  state?: 'default' | 'active' | 'disabled'
  control?: boolean
  controlType?: 'checkbox' | 'toggle' | 'radio'
  active?: boolean
  icon?: string // Only the icon name, e.g. 'house'
  iconColor?: string
  iconSpin?: boolean
  iconPulse?: boolean
  iconFixedWidth?: boolean
  info?: boolean
  infoIconColor?: string
}>()

const isHover = ref(false)
const isHovering = computed(() => isHover.value)

// Boolean defaults for Storybook toggles
const control = computed(() => props.control ?? false)
const info = computed(() => props.info ?? false)

// Icon class masking
const iconClass = computed(() => props.icon ? `fa-solid fa-${props.icon}` : '')

// Map size and state for Control.vue
const controlSize = computed(() => props.size === 'L' ? 'M' : 'S')
const controlState = computed(() => props.state === 'active' ? 'default' : props.state)
const controlActive = computed(() => props.state === 'active' ? true : !!props.active)
</script>

<style scoped>
.control-tile {
  display: flex;
  align-items: flex-start;
  gap: 12px; /* Figma: 12px between icon/control and text */
  border-radius: 6px;
  background: #fbfcfe;
  border: 1px solid #e5ecf3;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(.4,0,.2,1);
  min-height: 44px;
  min-width: 120px;
  box-sizing: border-box;
  padding: 0; /* Remove default padding, use size classes */
}
.size-L {
  padding: 20px 24px;
  min-width: 160px;
  min-height: 60px;
  border-radius: 6px;
}
.size-M {
  padding: 12px 16px;
  min-width: 120px;
  min-height: 44px;
  border-radius: 4px;
}
.type-Fixed {
  width: 100%;
}
.type-Hug {
  width: fit-content;
}
.state-default {
  border-color: #e5ecf3;
  background: #fbfcfe;
}
.state-active {
  border-color: #2c8dff;
  background: #e5ecf3;
}
.state-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
.control-tile.hover {
  border-color: #e5ecf3;
  background: #f6f9fb;
}
.left-slot {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-width: 20px;
  margin-right: 0; /* gap handles spacing */
}
.control-L {
  width: 20px;
  height: 20px;
}
.control-M {
  width: 16px;
  height: 16px;
}
.control {
  flex-shrink: 0;
}
.control-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.control-icon {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.control-partial {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.control-rectangle {
  position: absolute;
  background: #ffffff;
  border-radius: 1px;
}
.control-L .control-rectangle {
  top: 9px;
  left: 4px;
  width: 12px;
  height: 2px;
}
.control-M .control-rectangle {
  top: 7px;
  left: 3px;
  width: 10px;
  height: 2px;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 2px; /* Figma: 2px between label and description */
  flex: 1;
  align-items: flex-start;
}
.label-container {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 20px;
}
.size-M .label-container {
  height: 16px;
}
.label {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  color: #000f30;
}
.size-L .label {
  font-size: 14px;
  line-height: 14px;
}
.size-M .label {
  font-size: 12px;
  line-height: 12px;
}
.icon-container {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.small-icon {
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.description {
  font-family: 'Inter', sans-serif;
  color: #3d5c7a;
  font-weight: 400;
}
.size-L .description {
  font-size: 12px;
  line-height: 16px;
}
.size-M .description {
  font-size: 10px;
  line-height: 12px;
}
.info-icon {
  margin-left: 4px;
}
</style> 