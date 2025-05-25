<template>
  <div :class="['icon-container', sizeClass]">
    <i
      :class="computedClass"
      :style="computedStyle"
      :aria-label="ariaLabel"
      :aria-hidden="ariaHidden !== undefined ? ariaHidden : true"
      role="img"
    />
  </div>
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
.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0; /* Optional background color */
  border: 1px solid #ccc; /* Optional border */
}

.icon-xs {
  width: 16px;
  height: 16px;
}

.icon-sm {
  width: 24px;
  height: 24px;
}

.icon-md {
  width: 32px;
  height: 32px;
}

.icon-lg {
  width: 48px;
  height: 48px;
}

.icon-xl {
  width: 64px;
  height: 64px;
}
</style> 