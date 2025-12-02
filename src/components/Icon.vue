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
  size?: 'XS-8' | 'S-12' | 'M-16' | 'L-20' | 'XL-24' | string // Sizes from MCP/Figma
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
    case 'XS-8': return 'icon-XS-8'
    case 'S-12': return 'icon-S-12'
    case 'M-16': return 'icon-M-16'
    case 'L-20': return 'icon-L-20'
    case 'XL-24': return 'icon-XL-24'
    default: return 'icon-M-16'
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
  font-family: "Font Awesome 6 Free", "Font Awesome 6 Pro", sans-serif !important;
}
:deep(.fa-regular), :deep(.far) {
  font-weight: 400 !important;
  font-family: "Font Awesome 6 Free", "Font Awesome 6 Pro", sans-serif !important;
}
:deep(.fa-light), :deep(.fal) {
  font-weight: 300 !important;
  font-family: "Font Awesome 6 Pro", "Font Awesome 6 Free", sans-serif !important;
}
:deep(.fa-thin), :deep(.fat) {
  font-weight: 100 !important;
  font-family: "Font Awesome 6 Pro", "Font Awesome 6 Free", sans-serif !important;
}
:deep(.fa-duotone), :deep(.fad) {
  font-weight: 900 !important;
  font-family: "Font Awesome 6 Duotone", "Font Awesome 6 Pro", "Font Awesome 6 Free", sans-serif !important;
}
:deep(.fa-brands), :deep(.fab) {
  font-weight: 400 !important;
  font-family: "Font Awesome 6 Brands", sans-serif !important;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  /* No background or border for clean look */
}

/* Ensure the Font Awesome icon element fills the container and centers the glyph */
.icon-container i {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.icon-XS-8 {
  width: 8px;
  height: 8px;
  min-width: 8px;
  min-height: 8px;
  font-size: 8px;
  line-height: 1;
}

.icon-S-12 {
  width: 12px;
  height: 12px;
  min-width: 12px;
  min-height: 12px;
  font-size: 10px;
  line-height: 1;
}

.icon-M-16 {
  width: 16px;
  height: 16px;
  min-width: 16px;
  min-height: 16px;
  font-size: 14px;
  line-height: 1;
}

.icon-L-20 {
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
  font-size: 18px;
  line-height: 1;
}

.icon-XL-24 {
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  font-size: 22px;
  line-height: 1;
}
</style> 