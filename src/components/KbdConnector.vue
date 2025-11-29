<template>
  <div 
    :class="[
      'kbd-connector',
      `kbd-connector--size-${size}`,
      {
        'kbd-connector--combined': combined
      }
    ]"
    :data-name="`kbd-connector`"
  >
    <svg 
      v-if="combined"
      :class="`kbd-connector__svg kbd-connector__svg--size-${size} kbd-connector__svg--combined-${combined}`"
      :viewBox="svgViewBox"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        :d="svgPath"
        fill="white" 
        fill-opacity="0.4"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface KbdConnectorProps {
  size?: 'M-20' | 'S-16'
  combined?: boolean
}

const props = withDefaults(defineProps<KbdConnectorProps>(), {
  size: 'M-20',
  combined: true
})

// SVG viewBox - use narrow viewBox for S-16 always
const svgViewBox = computed(() => {
  if (props.size === 'S-16') {
    return '0 0 2 6' // Exact viewBox from Figma for S-16
  }
  return '0 0 4 10' // Default viewBox for M-20
})

// SVG path - use exact path from Figma for S-16 always
const svgPath = computed(() => {
  if (props.size === 'S-16') {
    // Exact path from Figma for S-16 size
    return 'M2 6C2 5.00589 1.5 4.2 1 4.2C0.5 4.2 0 5.00589 0 6V0C0 0.994113 0.5 1.8 1 1.8C1.5 1.8 2 0.994113 2 0V6Z'
  }
  return 'M4 10C4 8.34315 3 7 2 7C1 7 0 8.34315 0 10V0C0 1.65685 1 3 2 3C3 3 4 1.65685 4 0V10Z'
})
</script>

<style scoped>
.kbd-connector {
  position: relative;
  width: 4px;
  height: 20px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.kbd-connector--size-S-16 {
  height: 16px;
  width: 2px;
}

/* Ensure S-16 is always 2px wide regardless of combined state */
.kbd-connector--size-S-16.kbd-connector--combined {
  width: 2px;
}

.kbd-connector__svg {
  width: 4px;
  height: 20px;
  display: block;
  filter: drop-shadow(0px 0.4px 1px rgba(0, 0, 0, 0.14));
}

/* S-16 size: 2px width, 6px tall shape centered in 16px container */
.kbd-connector__svg--size-S-16 {
  width: 2px !important;
  height: 6px !important;
  display: block;
  margin: auto 0; /* Center vertically */
}
</style>

