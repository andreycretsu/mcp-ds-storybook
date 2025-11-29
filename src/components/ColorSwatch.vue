<template>
  <div 
    class="color-container"
    @click="selectColor"
    :class="[{ 'selected': isSelected }, size]"
    role="button"
    tabindex="0"
    :aria-label="`Select ${color} color`"
    @keydown.enter="selectColor"
    @keydown.space.prevent="selectColor"
  >
    <div 
      class="color-swatch" 
      :style="{ backgroundColor: color }"
    ></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  color: string
  isSelected?: boolean
  size?: 'small' | 'medium' | 'large'
}

const props = withDefaults(defineProps<Props>(), {
  isSelected: false,
  size: 'medium'
})

const emit = defineEmits<{
  'color-selected': [color: string]
}>()

const selectColor = () => {
  emit('color-selected', props.color)
}
</script>

<style scoped>
.color-container {
  border-radius: 4px;
  padding: 2px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.color-container.small {
  width: 16px;
  height: 16px;
  padding: 1px;
}

.color-container.medium {
  width: 20px;
  height: 20px;
  padding: 2px;
}

.color-container.large {
  width: 24px;
  height: 24px;
  padding: 3px;
}

.color-container:hover {
  background-color: #e5ecf3;
  border-radius: 20px;
}

.color-container:focus {
  background-color: #e5ecf3;
  outline: 2px solid #0072E5;
  outline-offset: 1px;
}

.color-container.selected {
  background-color: #ffffff;
  border-radius: 20px;
}

.color-container.selected .color-swatch {
  background-color: #476887 !important;
}

.color-swatch {
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

.color-container.small .color-swatch {
  width: 12px;
  height: 12px;
}

.color-container.medium .color-swatch {
  width: 16px;
  height: 16px;
}

.color-container.large .color-swatch {
  width: 20px;
  height: 20px;
}
</style> 