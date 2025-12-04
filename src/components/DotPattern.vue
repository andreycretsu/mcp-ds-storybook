<template>
  <div class="dot-pattern" :style="patternStyle"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface DotPatternProps {
  width?: number
  height?: number
  cx?: number
  cy?: number
  cr?: number
  className?: string
}

const props = withDefaults(defineProps<DotPatternProps>(), {
  width: 16,
  height: 16,
  cx: 1,
  cy: 1,
  cr: 1,
  className: ''
})

const patternStyle = computed(() => {
  return {
    backgroundImage: `radial-gradient(circle, ${props.className || 'currentColor'} ${props.cr}px, transparent ${props.cr}px)`,
    backgroundSize: `${props.width}px ${props.height}px`,
    backgroundPosition: '0 0'
  }
})
</script>

<style scoped>
.dot-pattern {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  border-radius: inherit;
  opacity: 0.15;
}
</style>

