<template>
  <div
    class="control-tile"
    :class="[
      size ? `size-${size}` : '',
      type ? `type-${type}` : '',
      { 'state-active': isActive, 'state-disabled': disabled, hover: isHovering },
      leftSlot === 'control' ? 'leftslot-control' : leftSlot === 'icon' ? 'leftslot-icon' : '',
      leftSlot === 'control' && controlType === 'toggle' ? 'leftslot-toggle' : ''
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
      />
    </div>
    <div class="content">
      <div class="label-container">
        <span class="label">{{ label }}</span>
        <div v-if="info" class="icon-container info-icon">
          <div class="small-icon">
            <Icon icon="fa-solid fa-circle-info" size="xs" />
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
  leftSlot: { type: String, default: 'none' }, // 'none' | 'icon' | 'control'
  icon: { type: String, default: '' }, // only if leftSlot === 'icon'
  controlType: { type: String, default: 'checkbox' }, // only if leftSlot === 'control'
  info: { type: Boolean, default: false },
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
const controlTypeSafe = computed<"checkbox" | "toggle" | "radio">(() => {
  return ['checkbox', 'toggle', 'radio'].includes(props.controlType) ? props.controlType as 'checkbox' | 'toggle' | 'radio' : 'checkbox'
})
const controlState = computed(() => {
  if (props.disabled) return 'disabled'
  if (isHovering.value) return 'hover'
  return 'default'
})
const showControl = computed(() => props.leftSlot === 'control')
const showIcon = computed(() => props.leftSlot === 'icon')
const showLeft = computed(() => showControl.value || showIcon.value)
</script>

<style scoped>
.control-tile {
  display: flex;
  align-items: flex-start;
  border-radius: 8px;
  background: #fbfcfe;
  border: 1px solid #e5ecf3;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(.4,0,.2,1);
  min-height: 60px;
  min-width: 160px;
  box-sizing: border-box;
}
.size-M {
  padding: 8px;
  min-width: 120px;
  min-height: 44px;
  border-radius: 6px;
}
.size-L {
  padding: 12px;
  min-width: 160px;
  min-height: 60px;
  border-radius: 8px;
}
.type-Fixed {
  width: 100%;
}
.type-Hug {
  width: fit-content !important;
  min-width: 0 !important;
  max-width: none !important;
  flex: none !important;
}
.state-default {
  border-color: #e5ecf3;
  background: #fbfcfe;
}
.state-active {
  border-color: #2c8dff;
  background: #fbfcfe;
  /* Figma active shadow effect */
  box-shadow: 0 0 0 4px rgba(44, 141, 255, 0.12), 0 1.5px 6px 0 rgba(44, 141, 255, 0.10);
}
.state-active.hover {
  border-color: #2c8dff;
  background: #f6f9fb;
  box-shadow: 0 0 0 4px rgba(44, 141, 255, 0.16), 0 1.5px 6px 0 rgba(44, 141, 255, 0.12);
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
  align-items: center;
  justify-content: flex-start;
  /* No width, min-width, or max-width. Let it hug content. */
}
.size-L .left-slot {
  margin-right: 12px;
}
.size-M .left-slot {
  margin-right: 8px;
}
.size-L.leftslot-control.leftslot-toggle .left-slot {
  width: 32px;
  min-width: 32px;
  max-width: 32px;
}
.size-M.leftslot-control.leftslot-toggle .left-slot {
  width: 28px;
  min-width: 28px;
  max-width: 28px;
}
.size-L.leftslot-control:not(.leftslot-toggle) .left-slot,
.size-L.leftslot-icon .left-slot {
  width: 20px;
  min-width: 20px;
  max-width: 20px;
}
.size-M.leftslot-control:not(.leftslot-toggle) .left-slot,
.size-M.leftslot-icon .left-slot {
  width: 16px;
  min-width: 16px;
  max-width: 16px;
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
  user-select: none;
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
  user-select: none;
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