<template>
  <div 
    :class="[
      'kbd',
      `kbd--size-${size}`,
      `kbd--value-${value}`
    ]"
    :data-name="`size=${size}, value=${value}`"
  >
    <!-- Single key (value=1) -->
    <template v-if="value === '1'">
      <KbdAtom 
        :size="atomSize"
        :icon="icon1"
        :text="false"
        :modeIcon="modeIcon1"
      />
    </template>
    
    <!-- Two keys (value=2) -->
    <template v-if="value === '2'">
      <KbdAtom 
        :size="atomSize"
        :icon="icon2"
        :text="false"
        :modeIcon="modeIcon2"
      />
      <KbdAtom 
        :size="atomSize"
        :icon="icon1"
        :text="false"
        :modeIcon="modeIcon1"
      />
      <!-- Connector between keys -->
      <KbdConnector 
        :size="size"
        :combined="combined"
        class="kbd__connector kbd__connector--first"
      />
    </template>
    
    <!-- Three keys (value=3) -->
    <template v-if="value === '3'">
      <KbdAtom 
        :size="atomSize"
        :icon="icon3"
        :text="false"
        :modeIcon="modeIcon3"
      />
      <KbdAtom 
        :size="atomSize"
        :icon="icon2"
        :text="false"
        :modeIcon="modeIcon2"
      />
      <KbdAtom 
        :size="atomSize"
        :icon="icon1"
        :text="false"
        :modeIcon="modeIcon1"
      />
      <!-- Connectors between keys -->
      <KbdConnector 
        :size="size"
        :combined="combined"
        class="kbd__connector kbd__connector--first"
      />
      <KbdConnector 
        :size="size"
        :combined="combined"
        class="kbd__connector kbd__connector--second"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import KbdAtom from './KbdAtom.vue'
import KbdConnector from './KbdConnector.vue'

interface KbdProps {
  combined?: boolean
  size?: 'M-20' | 'S-16'
  value?: '1' | '2' | '3'
  icon1?: string
  icon2?: string
  icon3?: string
  modeIcon1?: boolean
  modeIcon2?: boolean
  modeIcon3?: boolean
}

const props = withDefaults(defineProps<KbdProps>(), {
  combined: true,
  size: 'M-20',
  value: '1',
  icon1: 'circle-dashed',
  icon2: 'circle-dashed',
  icon3: 'circle-dashed',
  modeIcon1: true,
  modeIcon2: true,
  modeIcon3: true
})

// Map size to atom size
const atomSize = computed(() => {
  return props.size === 'S-16' ? '16' : '20'
})
</script>

<style scoped>
.kbd {
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 2px;
  filter: drop-shadow(0px 0.4px 1px rgba(0, 0, 0, 0.14));
}

.kbd--size-M-20 {
  gap: 4px;
}

.kbd--size-S-16 {
  gap: 2px;
}

/* Position connectors between keys */
.kbd__connector {
  position: absolute;
  top: 0;
  pointer-events: none;
  z-index: 1;
}

/* Position connectors between keys - at the end of first key, spanning the gap */
.kbd__connector--first {
  /* Position at end of first key (24px width) */
  left: 24px;
}

.kbd--size-S-16 .kbd__connector--first {
  /* Position at end of first key (20px width) */
  left: 20px;
}

.kbd__connector--second {
  /* Position at end of second key: 24px (first) + 4px (gap) + 24px (second) = 52px */
  left: 52px;
}

.kbd--size-S-16 .kbd__connector--second {
  /* Position at end of second key: 20px (first) + 2px (gap) + 20px (second) = 42px */
  left: 42px;
}
</style>

