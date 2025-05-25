<template>
  <i
    :class="computedClass"
    :style="computedStyle"
    :aria-label="ariaLabel"
    :aria-hidden="ariaHidden !== undefined ? ariaHidden : true"
    role="img"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  icon: string // e.g. 'fa-solid fa-user', 'fa-regular fa-user', 'fa-brands fa-github', 'fa-light fa-user', etc.
  size?: string // e.g. '24px', '1.5em', '2rem'
  color?: string
  spin?: boolean
  pulse?: boolean
  fixedWidth?: boolean
  customClass?: string
  ariaLabel?: string
  ariaHidden?: boolean
}>()

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
    fontSize: props.size,
    color: props.color,
  }
})
</script> 