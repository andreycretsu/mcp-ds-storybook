<template>
  <div
    class="control-tile"
    :class="[
      `size-${size}`,
      `type-${type}`,
      { active, disabled: isDisabled, hover: isHovering }
    ]"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <!-- Left: Control or Icon -->
    <div class="left-slot">
      <template v-if="control">
        <div :class="['control', `control-${size}`]">
          <div class="control-container">
            <div class="control-icon">
              <!-- Control visual (e.g. checkmark) can be slotted here if needed -->
            </div>
            <div class="control-partial">
              <div class="control-rectangle"></div>
            </div>
          </div>
        </div>
      </template>
      <template v-else-if="icon">
        <Icon :icon="icon" :size="size === 'L' ? 'md' : 'sm'" :color="iconColor" :spin="iconSpin" :pulse="iconPulse" :fixedWidth="iconFixedWidth" />
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

const props = defineProps<{
  label: string
  description?: string
  size?: 'L' | 'M'
  type?: 'Fixed' | 'Hug'
  active?: boolean
  disabled?: boolean
  state?: 'Default' | 'Hover' | 'Disabled'
  control?: boolean
  icon?: string
  iconColor?: string
  iconSpin?: boolean
  iconPulse?: boolean
  iconFixedWidth?: boolean
  info?: boolean
  infoIconColor?: string
}>()

const isHover = ref(false)
const isDisabled = computed(() => props.disabled || props.state === 'Disabled')
const isHovering = computed(() => isHover.value || props.state === 'Hover')
</script>

<style scoped>
.control-tile {
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 6px;
  background: #fbfcfe;
  border: 1px solid #e5ecf3;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(.4,0,.2,1);
  min-height: 44px;
  min-width: 120px;
  box-sizing: border-box;
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
.control-tile:hover,
.control-tile.hover {
  border-color: #e5ecf3;
  background: #f6f9fb;
}
.control-tile.active {
  border-color: #2c8dff;
  background: #e5ecf3;
}
.control-tile.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
.left-slot {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  min-width: 20px;
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
  gap: 4px;
  flex: 1;
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