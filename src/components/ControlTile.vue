<template>
  <div
    class="control-tile"
    :class="[
      `size-${size || 'M'}`,
      `type-${type || 'Fixed'}`,
      { disabled, active }
    ]"
  >
    <div v-if="showControlVisual" class="control">
      <div class="control-container">
        <div class="control-icon">
          <!-- No icon here, just the control visual -->
        </div>
        <div class="control-partial">
          <div class="control-rectangle"></div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="label-container">
        <span class="label">{{ label }}</span>
        <div v-if="showIconVisual" class="icon-container">
          <div class="small-icon">
            <Icon :icon="icon" :size="iconSize" :color="iconColor" :spin="iconSpin" :pulse="iconPulse" :fixedWidth="iconFixedWidth" />
          </div>
        </div>
        <div v-if="showInfoIcon" class="icon-container info-icon">
          <div class="small-icon">
            <Icon icon="fa-solid fa-info-circle" :size="iconSize" :color="infoIconColor" />
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
  size?: 'S' | 'M' | 'L'
  type?: 'Fixed' | 'Hug'
  disabled?: boolean
  active?: boolean
  control?: boolean
  showInfoIcon?: boolean
  icon?: string
  iconColor?: string
  iconSpin?: boolean
  iconPulse?: boolean
  iconFixedWidth?: boolean
  infoIconColor?: string
}>()

const isHover = ref(false)

// Map ControlTile size to Icon size
const iconSize = computed(() => {
  switch (props.size) {
    case 'S': return 'xs'
    case 'M': return 'sm'
    case 'L': return 'md'
    default: return 'sm'
  }
})

// Icon and control are mutually exclusive
const showIconVisual = computed(() => !!props.icon)
const showControlVisual = computed(() => !props.icon && !!props.control)
// Info icon is independent
const showInfoIcon = computed(() => !!props.showInfoIcon)
</script>

<style scoped>
.control-tile {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  cursor: pointer;
  transition: all 0.2s ease;
}

.control-tile:hover {
  border-color: #D1D5DB;
  background: #F9FAFB;
}

.control-tile.active {
  border-color: #2563EB;
  background: #EFF6FF;
}

.control-tile.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.control {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.size-M .control {
  width: 16px;
  height: 16px;
}

.size-S .control {
  width: 12px;
  height: 12px;
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

.size-M .control-icon {
  width: 12px;
  height: 12px;
  top: 2px;
  left: 2px;
}

.size-S .control-icon {
  width: 8px;
  height: 8px;
  top: 2px;
  left: 2px;
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
  top: 9px;
  left: 4px;
  width: 12px;
  height: 2px;
  background: #000000;
}

.size-M .control-rectangle {
  top: 7px;
  left: 3px;
  width: 10px;
  height: 2px;
}

.size-S .control-rectangle {
  top: 5px;
  left: 2px;
  width: 8px;
  height: 1px;
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

.size-S .label-container {
  height: 12px;
}

.label {
  font-family: Inter, sans-serif;
  font-weight: 500;
  color: #111827;
}

.size-M .label {
  font-size: 12px;
  line-height: 16px;
}

.size-S .label {
  font-size: 10px;
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

.size-M .icon-container {
  width: 12px;
  height: 12px;
}

.size-S .icon-container {
  width: 8px;
  height: 8px;
}

.small-icon {
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.size-M .small-icon {
  width: 10px;
  height: 10px;
}

.size-S .small-icon {
  width: 8px;
  height: 8px;
}

.description {
  font-family: Inter, sans-serif;
  font-size: 12px;
  line-height: 16px;
  color: #6B7280;
  font-weight: 400;
}

.size-M .description {
  font-size: 10px;
  line-height: 12px;
}

.size-S .description {
  font-size: 8px;
  line-height: 10px;
}

/* Size variants */
.size-S {
  min-width: 80px;
}

.size-M {
  min-width: 120px;
}

.size-L {
  min-width: 160px;
}

/* Type variants */
.type-Fixed {
  width: 100%;
}

.type-Hug {
  width: fit-content;
}

.info-icon {
  margin-left: 4px;
}
</style> 