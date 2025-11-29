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
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '12px' | '8px' | '10px' | '16px' // Five sizes from MCP/Figma + custom sizes
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
    case '12px': return 'icon-12px'
    case '8px': return 'icon-8px'
    case '10px': return 'icon-10px'
    case '16px': return 'icon-16px'
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
  
  let iconClass = props.icon || statusIcons[props.status || 'default']

  // If icon name is provided without fa- prefix, assume solid style
  // This allows usage like 'user', 'plus', 'command' -> 'fa-solid fa-user', 'fa-solid fa-plus', etc.
  if (props.icon && !props.icon.includes('fa-')) {
    iconClass = `fa-solid fa-${props.icon}`
  }
  
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
/* Ensure Font Awesome weights and families are respected even if parent enforces a different weight */
:deep(.fa-solid), :deep(.fas) {
  font-weight: 900 !important;
  font-family: "Font Awesome 7 Pro" !important;
}
:deep(.fa-regular), :deep(.far) {
  font-weight: 400 !important;
  font-family: "Font Awesome 7 Pro" !important;
}
:deep(.fa-light), :deep(.fal) {
  font-weight: 300 !important;
  font-family: "Font Awesome 7 Pro" !important;
}
:deep(.fa-thin), :deep(.fat) {
  font-weight: 100 !important;
  font-family: "Font Awesome 7 Pro" !important;
}
:deep(.fa-duotone), :deep(.fad) {
  font-weight: 900 !important;
  font-family: "Font Awesome 7 Duotone" !important;
}
:deep(.fa-brands), :deep(.fab) {
  font-weight: 400 !important;
  font-family: "Font Awesome 7 Brands" !important;
}

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

.icon-12px {
  width: 12px;
  height: 12px;
  font-size: 10px;
}

.icon-10px {
  width: 10px;
  height: 10px;
  font-size: 10px;
}

.icon-8px {
  width: 8px;
  height: 8px;
  font-size: 8px;
}

.icon-16px {
  width: 16px;
  height: 16px;
  font-size: 16px;
}
</style> 