<template>
  <i
    :class="[computedClass, sizeClass]"
    :style="computedStyle"
    :aria-label="ariaLabel"
    :aria-hidden="ariaHidden !== undefined ? ariaHidden : true"
    role="img"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  icon: string // e.g. 'fa-solid fa-user', 'fa-regular fa-user', 'fa-brands fa-github', etc.
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
  return [
    props.icon,
    {
      'fa-spin': props.spin,
      'fa-pulse': props.pulse,
      'fa-fw': props.fixedWidth,
    },
    props.customClass
  ]
})

const computedStyle = computed(() => {
  return {
    color: props.color,
  }
})
</script>

<style scoped>
.icon-xs { font-size: 12px; }
.icon-sm { font-size: 16px; }
.icon-md { font-size: 20px; }
.icon-lg { font-size: 24px; }
.icon-xl { font-size: 32px; }
</style> 