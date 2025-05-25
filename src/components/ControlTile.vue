<template>
  <div
    class="control-tile"
    :class="[
      `size-${size}`,
      `type-${type}`,
      { 'state-active': isActive, 'state-disabled': disabled, hover: isHovering } 
    ]"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @click="onTileClick"
    :tabindex="disabled ? -1 : 0"
    :aria-disabled="disabled"
  >
    <!-- Left: Control or Icon (mutually exclusive) -->
    <div v-if="showLeft" class="left-slot">
      <Control
        v-if="showControl"
        :type="controlTypeSafe"
        :size="controlSize"
        :state="controlState"
        :active="isActive"
      />
      <Icon
        v-else-if="showIcon"
        :icon="iconClass"
        :size="size === 'L' ? 'md' : 'sm'"
        :color="iconColor"
        :spin="iconSpin"
        :pulse="iconPulse"
        :fixedWidth="iconFixedWidth"
      />
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

const props = defineProps({
  label: { type: String, required: true },
  description: { type: String, default: '' },
  size: { type: String, default: 'L' },
  type: { type: String, default: 'Fixed' },
  disabled: { type: Boolean, default: false },
  control: { type: Boolean, default: false },
  controlType: { type: String, default: 'checkbox' },
  icon: { type: String, default: '' },
  iconColor: { type: String, default: '' },
  iconSpin: { type: Boolean, default: false },
  iconPulse: { type: Boolean, default: false },
  iconFixedWidth: { type: Boolean, default: false },
  info: { type: Boolean, default: false },
  infoIconColor: { type: String, default: '' },
})

const isActive = ref(false)
const isHovering = ref(false)

function onTileClick() {
  if (!props.disabled) isActive.value = !isActive.value
}
function onMouseEnter() { isHovering.value = true }
function onMouseLeave() { isHovering.value = false }

// Icon class masking
const iconClass = computed(() => props.icon ? `fa-solid fa-${props.icon}` : '')

// Map size for Control.vue
const controlSize = computed(() => props.size === 'L' ? 'M' : 'S')
// Only allow valid controlType
const controlTypeSafe = computed<"checkbox" | "toggle" | "radio">(() => {
  return ['checkbox', 'toggle', 'radio'].includes(props.controlType) ? props.controlType as 'checkbox' | 'toggle' | 'radio' : 'checkbox'
})
// Control state: hover if tile is hovered, disabled if tile is disabled, else default
const controlState = computed(() => {
  if (props.disabled) return 'disabled'
  if (isHovering.value) return 'hover'
  return 'default'
})
// Mutual exclusivity: only one of icon or control
const showControl = computed(() => !!props.control && !props.icon)
const showIcon = computed(() => !!props.icon && !props.control)
const showLeft = computed(() => showControl.value || showIcon.value)
</script>

<style scoped>
.control-tile {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  border-radius: 8px;
  background: #fbfcfe;
  border: 1px solid #e5ecf3;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(.4,0,.2,1);
  min-height: 60px;
  min-width: 160px;
  box-sizing: border-box;
  padding: 20px 24px;
}
.size-M {
  padding: 12px 16px;
  min-width: 120px;
  min-height: 44px;
  border-radius: 6px;
  gap: 12px;
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
.state-active.hover {
  border-color: #2c8dff;
  background: #f6f9fb;
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
  margin-right: 0;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 2px;
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