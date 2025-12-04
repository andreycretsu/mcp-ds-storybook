<template>
  <div class="dot-pattern" :style="patternStyle"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface DotPatternProps {
  size?: number
  radius?: number
  gap?: number
  color?: string
}

const props = withDefaults(defineProps<DotPatternProps>(), {
  size: 16,
  radius: 1.5,
  gap: 4,
  color: 'rgba(0, 0, 0, 0.08)'
})

const patternStyle = computed(() => {
  const dotSize = props.size
  const dotRadius = props.radius
  const dotColor = props.color
  
  return {
    backgroundImage: `radial-gradient(circle, ${dotColor} ${dotRadius}px, transparent ${dotRadius}px)`,
    backgroundSize: `${dotSize}px ${dotSize}px`,
    backgroundPosition: '0 0',
    backgroundRepeat: 'repeat'
  }
})
</script>

<style scoped>
.dot-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  opacity: 0.6;
  z-index: 1;
  border-radius: inherit;
}
</style>

