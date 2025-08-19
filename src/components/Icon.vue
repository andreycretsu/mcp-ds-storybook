<template>
  <div :class="['icon-container', sizeClass]">
    <i
      :class="computedClass"
      :style="computedStyle"
      :aria-label="ariaLabel"
      :aria-hidden="ariaHidden !== undefined ? ariaHidden : true"
      role="img"
    ></i>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  icon?: string // e.g. 'fa-solid fa-user', 'fa-regular fa-user', 'fa-brands fa-github', etc.
  status?: 'default' | 'success' | 'warning' | 'info' | 'error'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' // Five sizes from MCP/Figma
  color?: string
  spin?: boolean
  pulse?: boolean
  fixedWidth?: boolean
  customClass?: string
  ariaLabel?: string
  ariaHidden?: boolean
}>()

const sizeClass = computed(() => {
  switch (props.size) {
    case 'xs': return 'icon-xs'
    case 'sm': return 'icon-sm'
    case 'md': return 'icon-md'
    case 'lg': return 'icon-lg'
    case 'xl': return 'icon-xl'
    default: return 'icon-md'
  }
})

const computedClass = computed(() => {
  const statusIcons = {
    success: 'fa-solid fa-check',
    warning: 'fa-solid fa-exclamation-triangle',
    info: 'fa-solid fa-info-circle',
    error: 'fa-solid fa-times-circle',
    default: 'fa-solid fa-cog'
  }
  
  const iconClass = props.icon || statusIcons[props.status || 'default']
  
  const classes = [iconClass]
  
  if (props.spin) classes.push('fa-spin')
  if (props.pulse) classes.push('fa-pulse')
  if (props.fixedWidth) classes.push('fa-fw')
  if (props.customClass) classes.push(props.customClass)
  
  return classes
})

const computedStyle = computed(() => {
  const statusColors = {
    success: '#25bd5d',
    warning: '#e3b212',
    info: '#0072e5',
    error: '#e42e2e',
    default: '#476887'
  }
  
  return {
    color: props.color || statusColors[props.status || 'default'],
    fontSize: 'inherit', // Let the container control the size
  }
})
</script>

<style scoped>
.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  /* No background or border for clean look */
}

.icon-xs {
  width: 16px;
  height: 16px;
  font-size: 12px;
}

.icon-sm {
  width: 24px;
  height: 24px;
  font-size: 16px;
}

.icon-md {
  width: 32px;
  height: 32px;
  font-size: 20px;
}

.icon-lg {
  width: 48px;
  height: 48px;
  font-size: 24px;
}

.icon-xl {
  width: 64px;
  height: 64px;
  font-size: 32px;
}
</style> 