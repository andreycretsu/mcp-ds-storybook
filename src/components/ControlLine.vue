<template>
  <div
    class="control-line"
    :class="[
      `control-line--type-${type}`,
      `control-line--size-${size}`,
      `control-line--state-${state}`,
      { 'control-line--active': isActive, 'control-line--disabled': disabled }
    ]"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    :aria-disabled="disabled"
    :tabindex="disabled ? -1 : 0"
    :style="{ cursor: disabled ? 'not-allowed' : 'pointer' }"
  >
    <div class="control-line__control">
      <Control
        :type="type as 'toggle' | 'checkbox' | 'radio'"
        :size="size as 'M' | 'S'"
        :state="state as 'default' | 'disabled' | 'hover'"
        :active="isActive"
        :partial="partial"
        :disabled="disabled"
        :hover="isHovering"
      />
    </div>
    <div class="control-line__content" :class="{ 'control-line__content--right': !labelAlign }">
      <div class="control-line__label-row">
        <span class="control-line__label">{{ label }}</span>
        <span v-if="optional" class="control-line__optional">(Optional)</span>
        <span v-if="icon" class="control-line__icon">
          <i :class="['fa-solid', `fa-${icon}`]"></i>
        </span>
      </div>
      <div v-if="description" class="control-line__description">{{ description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue'
import Control from './Control.vue'

const props = defineProps({
  type: { type: String, default: 'toggle' }, // 'toggle' | 'checkbox' | 'radio'
  size: { type: String, default: 'M' }, // 'M' | 'S'
  state: { type: String, default: 'default' }, // 'default' | 'error' | 'disabled'
  active: { type: Boolean, default: false },
  labelAlign: { type: Boolean, default: true }, // true = left, false = right
  label: { type: String, default: 'Control label' },
  description: { type: String, default: '' },
  optional: { type: Boolean, default: false },
  icon: { type: String, default: '' },
  partial: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false }
})

const emit = defineEmits(['update:active', 'change'])

const isActive = ref(props.active)
const isHovering = ref(false)

watch(() => props.active, (val) => { isActive.value = val })

const handleClick = () => {
  if (props.disabled) return
  isActive.value = !isActive.value
  emit('update:active', isActive.value)
  emit('change', isActive.value)
}
const handleMouseEnter = () => {
  if (props.disabled) return
  isHovering.value = true
}
const handleMouseLeave = () => {
  isHovering.value = false
}
</script>

<style scoped>
.control-line {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  user-select: none;
  min-width: 200px;
}
.control-line--disabled {
  opacity: 0.5;
  pointer-events: none;
}
.control-line__control {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.control-line__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.control-line__content--right {
  align-items: flex-end;
}
.control-line__label-row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.control-line__label {
  color: #000f30;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}
.control-line__optional {
  color: #6c869f;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}
.control-line__icon {
  color: #91a4b7;
  font-size: 12px;
  display: flex;
  align-items: center;
}
.control-line__description {
  color: #3d5c7a;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  margin-top: 2px;
}
.control-line--size-M {
  align-items: center;
}
</style> 