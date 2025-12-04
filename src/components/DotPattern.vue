<template>
  <div class="dot-pattern">
    <svg class="dot-pattern-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          :id="patternId"
          x="0"
          y="0"
          width="66.66666666666667"
          height="66.66666666666667"
          patternUnits="userSpaceOnUse"
        >
          <circle
            r="3.75"
            cx="0"
            cy="0"
            :fill="color"
            stroke="none"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" :fill="`url(#${patternId})`" />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface DotPatternProps {
  color?: string
}

const props = withDefaults(defineProps<DotPatternProps>(), {
  color: 'hsl(261, 60%, 38%)'
})

// Generate unique pattern ID based on color to avoid conflicts
const patternId = computed(() => {
  const hash = props.color.replace(/[^a-zA-Z0-9]/g, '').substring(0, 10)
  return `dot-pattern-${hash}`
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
  z-index: 1;
  border-radius: inherit;
  overflow: hidden;
}

.dot-pattern-svg {
  width: 100%;
  height: 100%;
  opacity: 0.15;
}
</style>

