<template>
  <div 
    :class="[
      'kbd-atom',
      `kbd-atom--size-${size}`,
      {
        'kbd-atom--text': isTextMode
      }
    ]"
    :data-name="`size=${size}, icon=${icon}, text=${isTextMode ? 'yes' : 'no'}`"
  >
    <!-- Icon mode - use Icon component -->
    <Icon 
      v-if="!isTextMode"
      :icon="icon"
      :size="iconSize"
      :color="iconColor"
      class="kbd-atom__icon"
    />
    
    <!-- Text mode - use plain text for letters -->
    <span v-if="isTextMode" class="kbd-atom__text">
      {{ displayText }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Icon from './Icon.vue'

interface KbdAtomProps {
  textValue?: string
  size?: '20' | '16'
  icon?: string
  text?: boolean
  modeIcon?: boolean
}

const props = withDefaults(defineProps<KbdAtomProps>(), {
  textValue: 'Esc',
  size: '20',
  icon: 'no',
  text: true,
  modeIcon: true
})

// Logic to determine if we should show text or icon
const isTextMode = computed(() => {
  // If modeIcon is explicitly false, force text mode
  return !props.modeIcon
})

// Text to display
const displayText = computed(() => {
  if (props.icon && props.icon !== 'no') {
    return props.icon
  }
  return props.textValue
})


// Icon size based on atom size - Figma: 8px for 16, 10px for 20
const iconSize = computed(() => {
  // Use XS-8 for size 16 (8px icon)
  // Use S-12 for size 20 (12px container, 10px font)
  return props.size === '16' ? 'XS-8' : 'S-12'
})

// Icon color
const iconColor = computed(() => {
  return '#000f30'
})
</script>

<style scoped>
.kbd-atom {
  position: relative;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  corner-shape: superellipse(var(--superK));
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex-shrink: 0;
}

/* Size 20 (M) */
.kbd-atom--size-20 {
  height: 20px;
  width: 24px;
}

.kbd-atom--size-20.kbd-atom--text {
  min-width: 24px;
  padding: 4px 6px;
  overflow: clip;
}

/* Size 16 (S) */
.kbd-atom--size-16 {
  height: 16px;
  width: 20px;
  border-radius: 6px;
}

.kbd-atom--size-16.kbd-atom--text {
  min-width: 16px;
  padding: 4px;
  overflow: clip;
}

/* Icon - using Icon component directly */
.kbd-atom__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* Ensure Icon component container is centered */
.kbd-atom__icon :deep(.icon-container) {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Text container */
.kbd-atom__text {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 10px;
  line-height: 0;
  color: #000f30;
  text-align: center;
  white-space: nowrap;
}

.kbd-atom--size-16 .kbd-atom__text {
  font-size: 8px;
}
</style>

