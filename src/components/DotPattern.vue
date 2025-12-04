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
  size: 20,
  radius: 1,
  gap: 4,
  color: 'rgba(0, 0, 0, 0.05)'
})

const patternStyle = computed(() => ({
  backgroundImage: `radial-gradient(circle, ${props.color} ${props.radius}px, transparent ${props.radius}px)`,
  backgroundSize: `${props.size}px ${props.size}px`,
  backgroundPosition: '0 0'
}))
</script>

<style scoped>
.dot-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  opacity: 0.4;
}
</style>

