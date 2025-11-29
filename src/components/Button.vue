<template>
  <div 
    :class="[
      'button',
      `button--type-${type}`,
      `button--tone-${tone}`,
      `button--state-${state}`,
      `button--size-${size}`,
      {
        'button--disabled': state === 'disable',
        'button--loading': state === 'loading',
        'button--success': state === 'success'
      }
    ]"
    :data-name="`type=${type}, tone=${tone}, state=${state}, size=${size}`"
    :style="buttonStyle"
  >
    <!-- Focus effect overlay -->
    <div v-if="state === 'focus'" class="button__focus-effect"></div>
    
    <!-- Left Icon (always rendered when lIcon is true, hidden with opacity during loading/success) -->
    <div v-if="lIcon && state !== 'loading' && state !== 'success'" class="button__icon-left">
      <Icon 
        :icon="lIconName" 
        :size="sizeConfig.iconSize"
        :color="iconColor"
      />
    </div>
    <!-- Placeholder to maintain size during loading/success -->
    <div v-else-if="lIcon" class="button__icon-left" style="opacity: 0; pointer-events: none;">
      <Icon 
        :icon="lIconName" 
        :size="sizeConfig.iconSize"
        :color="iconColor"
      />
    </div>
    
    <!-- Loading Icon (centered when loading) -->
    <div v-if="state === 'loading'" class="button__loader">
      <Spinner 
        :size="sizeConfig.spinnerSize"
        :style="{ color: iconColor }"
      />
    </div>
    
    <!-- Success Icon -->
    <div v-if="state === 'success'" class="button__icon-success">
      <Icon 
        icon="fa-solid fa-check" 
        :size="sizeConfig.iconSize"
        :color="iconColor"
      />
    </div>
    
    <!-- Label Container (always rendered to maintain size, hidden with opacity when loading) -->
    <div v-if="type !== 'icon-only'" class="button__label-container">
      <div v-if="state === 'success' && successMessage" class="button__label">{{ successMessage }}</div>
      <div v-else-if="label && label.trim() !== ''" class="button__label">{{ label }}</div>
      <div v-else class="button__label" style="visibility: hidden;">{{ label || 'Button' }}</div>
    </div>
    
    <!-- Right Icon (always rendered when rIcon is true, hidden with opacity during loading/success) -->
    <div v-if="rIcon && state !== 'loading' && state !== 'success'" class="button__icon-right">
      <Icon 
        :icon="rIconName" 
        :size="sizeConfig.iconSize"
        :color="iconColor"
      />
    </div>
    <!-- Placeholder to maintain size during loading/success -->
    <div v-else-if="rIcon" class="button__icon-right" style="opacity: 0; pointer-events: none;">
      <Icon 
        :icon="rIconName" 
        :size="sizeConfig.iconSize"
        :color="iconColor"
      />
    </div>
    
    <!-- Keyboard Shortcut -->
    <Kbd 
      v-if="kbd && state !== 'loading' && state !== 'success'"
      size="S-16"
      :value="kbdValue"
      :combined="kbdCombined"
      :icon1="kbdIcon1"
      :icon2="kbdIcon2"
      :icon3="kbdIcon3"
      :modeIcon1="kbdModeIcon1"
      :modeIcon2="kbdModeIcon2"
      :modeIcon3="kbdModeIcon3"
      class="button__kbd"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Icon from './Icon.vue'
import Kbd from './Kbd.vue'
import Spinner from './Spinner.vue'

interface ButtonProps {
  lIcon?: boolean
  rIcon?: boolean
  lIconName?: string
  rIconName?: string
  label?: string
  kbd?: boolean
  kbdValue?: '1' | '2' | '3'
  kbdCombined?: boolean
  kbdIcon1?: string
  kbdIcon2?: string
  kbdIcon3?: string
  kbdModeIcon1?: boolean
  kbdModeIcon2?: boolean
  kbdModeIcon3?: boolean
  successMessage?: string
  dynamicPrimary?: string
  type?: 'default' | 'stretched' | 'icon-only'
  tone?: 'primary' | 'secondary' | 'destructive' | 'dark'
  state?: 'default' | 'hover' | 'press' | 'focus' | 'disable' | 'loading' | 'success'
  size?: '24' | '32' | '36' | '40' | number | string
}

const props = withDefaults(defineProps<ButtonProps>(), {
  lIcon: false,
  rIcon: false,
  lIconName: 'fa-solid fa-arrow-left',
  rIconName: 'fa-solid fa-arrow-right',
  label: 'Button',
  kbd: false,
  kbdValue: '1',
  kbdCombined: false,
  kbdIcon1: 'command',
  kbdIcon2: 'shift',
  kbdIcon3: 'arrow-left',
  kbdModeIcon1: true,
  kbdModeIcon2: true,
  kbdModeIcon3: true,
  successMessage: 'Success',
  type: 'default',
  tone: 'primary',
  state: 'default',
  size: '24'
})

// Size configuration
const sizeConfig = computed(() => {
  const sizeMap: Record<string, any> = {
    '24': { 
      height: '24px', 
      paddingX: '6px', 
      paddingXIconOnly: '10px', 
      paddingY: '6px', 
      fontSize: '12px', 
      fontWeight: '500',
      iconSize: '12px', 
      gap: '2px', 
      spinnerSize: '12px' 
    },
    '32': { 
      height: '32px', 
      paddingX: '8px', 
      paddingXIconOnly: '12px', 
      paddingY: '8px', 
      fontSize: '14px', 
      fontWeight: '500',
      iconSize: '16px', 
      gap: '2px', 
      spinnerSize: '16px' // 16px to match icon
    },
    '36': { 
      height: '36px', 
      paddingX: '8px', 
      paddingXIconOnly: '14px', 
      paddingY: '10px', 
      fontSize: '14px', 
      fontWeight: '500',
      iconSize: '20px', 
      gap: '2px', 
      spinnerSize: '20px' 
    },
    '40': { 
      height: '40px', 
      paddingX: '12px', 
      paddingXIconOnly: '12px', 
      paddingY: '10px', 
      fontSize: '16px', 
      fontWeight: '500',
      iconSize: '20px', 
      gap: '4px', 
      spinnerSize: '20px' 
    }
  }
  
  const sizeKey = String(props.size)
  return sizeMap[sizeKey] || sizeMap['24']
})

// Background colors based on tone and state
const backgroundColor = computed(() => {
  if (props.state === 'success') {
    return '#3d5c7a' // var(--color-neutral-dark-100)
  }
  
  if (props.state === 'disable') {
    return getBackgroundColor(props.tone, 'default')
  }
  
  // If tone is primary and dynamicPrimary is set, use it for background
  if (props.tone === 'primary' && props.dynamicPrimary) {
    return props.dynamicPrimary
  }
  
  return getBackgroundColor(props.tone, props.state)
})

function getBackgroundColor(tone: string, state: string): string {
  const colors: Record<string, Record<string, string>> = {
    primary: {
      default: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.08) 100%), linear-gradient(90deg, rgb(44, 141, 255) 0%, rgb(44, 141, 255) 100%)',
      hover: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.08) 100%), linear-gradient(90deg, rgb(18, 127, 254) 0%, rgb(18, 127, 254) 100%)',
      press: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.08) 100%), linear-gradient(90deg, rgb(69, 154, 254) 0%, rgb(69, 154, 254) 100%)'
    },
    secondary: {
      default: 'linear-gradient(to top, #ffffff 0%, #e5ecf3 100%)',
      hover: 'linear-gradient(to top, #fbfcfe 0%, #dce5ef 100%)',
      press: 'linear-gradient(to top, #ffffff 0%, #edf2f7 100%)'
    },
    destructive: {
      default: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.08) 100%), linear-gradient(90deg, rgb(233, 88, 88) 0%, rgb(233, 88, 88) 100%)',
      hover: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.08) 100%), linear-gradient(90deg, rgb(228, 46, 46) 0%, rgb(228, 46, 46) 100%)',
      press: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.08) 100%), linear-gradient(90deg, rgb(237, 119, 119) 0%, rgb(237, 119, 119) 100%)'
    },
    dark: {
      default: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.08) 100%), linear-gradient(90deg, rgb(36, 60, 92) 0%, rgb(36, 60, 92) 100%)',
      hover: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.08) 100%), linear-gradient(90deg, rgb(80, 99, 125) 0%, rgb(80, 99, 125) 100%)',
      press: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.08) 100%), linear-gradient(90deg, rgb(113, 128, 149) 0%, rgb(113, 128, 149) 100%)'
    }
  }
  
  return colors[tone]?.[state] || colors.primary.default
}

// Icon color based on tone
const iconColor = computed(() => {
  if (props.state === 'success') {
    return '#ffffff'
  }
  
  if (props.tone === 'secondary') {
    return '#000f30'
  }
  
  return '#ffffff'
})


// Button style with background and dynamic sizing
const buttonStyle = computed(() => {
  const config = sizeConfig.value
  const isIconOnly = props.type === 'icon-only'
  
  const paddingX = isIconOnly ? config.paddingXIconOnly : config.paddingX
  
  const baseStyle: Record<string, string> = {
    height: config.height,
    maxHeight: config.height,
    padding: `${config.paddingY} ${paddingX}`,
    fontSize: config.fontSize,
    fontWeight: config.fontWeight,
    gap: config.gap
  }

  // Success state uses solid background color, others use gradient
  if (props.state === 'success') {
    return {
      ...baseStyle,
      backgroundColor: backgroundColor.value
    }
  }
  
  // Dynamic primary also uses solid color if provided
  if (props.tone === 'primary' && props.dynamicPrimary) {
    return {
      ...baseStyle,
      backgroundColor: backgroundColor.value
    }
  }

  return {
    ...baseStyle,
    backgroundImage: backgroundColor.value
  }
})
</script>

<style scoped>
.button {
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Gap, height, padding, font-size are set dynamically via style binding */
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  line-height: 0;
  white-space: nowrap;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.14);
  
  /* Superellipse corner shape */
  corner-shape: superellipse(var(--superK));
  /* Fallback for browsers that don't support corner-shape */
  border-radius: 12px;
}

/* Stretched type */
.button--type-stretched {
  width: 320px;
}

/* Icon containers */
.button__icon-left,
.button__icon-right,
.button__icon-success,
.button__loader {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;
}

.button__loader {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

/* Label container */
.button__label-container {
  display: flex;
  align-items: center;
  padding: 0 2px;
  flex-shrink: 0;
}

.button__label {
  font-family: 'Inter', sans-serif;
  font-weight: inherit; /* Inherit from button container */
  font-size: inherit; /* Inherit from button container */
  line-height: 0;
  white-space: nowrap;
  color: inherit;
}

/* Keyboard shortcut */
.button__kbd {
  flex-shrink: 0;
}

/* Text colors */
.button--tone-primary .button__label,
.button--tone-primary .button__icon-left,
.button--tone-primary .button__icon-right,
.button--tone-primary .button__loader {
  color: #ffffff;
}

.button--tone-secondary .button__label,
.button--tone-secondary .button__icon-left,
.button--tone-secondary .button__icon-right {
  color: #000f30;
}

.button--tone-destructive .button__label,
.button--tone-destructive .button__icon-left,
.button--tone-destructive .button__icon-right,
.button--tone-destructive .button__loader {
  color: #ffffff;
}

.button--tone-dark .button__label,
.button--tone-dark .button__icon-left,
.button--tone-dark .button__icon-right,
.button--tone-dark .button__loader {
  color: #ffffff;
}

/* Success state - always white text and icons, regardless of tone */
.button--state-success .button__label,
.button--state-success .button__icon-success,
.button--state-success.button--tone-primary .button__label,
.button--state-success.button--tone-secondary .button__label,
.button--state-success.button--tone-destructive .button__label,
.button--state-success.button--tone-dark .button__label {
  color: #ffffff !important;
}

/* Disabled state */
.button--state-disable {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Loading state - hide other content with opacity but keep layout space */
.button--state-loading .button__icon-left,
.button--state-loading .button__icon-right,
.button--state-loading .button__label-container {
  opacity: 0;
  /* Keep elements in layout to maintain button size - don't remove from flow */
}

/* Focus effect */
.button__focus-effect {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0);
  border-radius: 4px;
  box-shadow: 
    0px 0px 0px 1px rgba(114, 1, 229, 0.1),
    0px 0px 0px 1px #ffffff,
    0px 0px 0px 2px #7201e5;
  pointer-events: none;
}
</style>