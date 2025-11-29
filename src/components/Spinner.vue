<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="['spinner', `spinner--size-${computedSizeName}`, className]"
    :style="computedStyle"
    role="status"
    aria-label="Loading"
    v-bind="$attrs"
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | number | string
  color?: string
}>(), {
  size: 'md'
})

const computedSizeName = computed(() => {
  if (typeof props.size === 'string' && ['sm', 'md', 'lg', 'xl'].includes(props.size)) {
    return props.size
  }
  return 'custom'
})

const computedStyle = computed(() => {
  const styles: Record<string, string> = {}
  
  if (props.color) {
    styles.color = props.color
  }

  // If it's a custom numeric/string size (not a preset name)
  if (computedSizeName.value === 'custom' && props.size) {
    const s = typeof props.size === 'number' ? `${props.size}px` : props.size
    styles.width = s
    styles.height = s
  }

  return styles
})
</script>

<style scoped>
.spinner {
  animation: spin 1s linear infinite;
}

.spinner--size-sm {
  width: 12px;
  height: 12px;
}

.spinner--size-md {
  width: 16px;
  height: 16px;
}

.spinner--size-lg {
  width: 24px;
  height: 24px;
}

.spinner--size-xl {
  width: 32px;
  height: 32px;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>