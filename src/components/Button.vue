<template>
  <div 
    :class="[
      'button',
      `button--variant-${variant}`,
      `button--size-${size}`,
      `button--state-${state}`,
      {
        'button--icon-only': !label || label.trim() === ''
      }
    ]"
    :data-name="`Variant=${variant}, Size=${size}, State=${state}`"
  >
    <div class="button__content">
      <div v-if="icon && iconPosition === 'left'" class="button__icon-left">
        <Icon 
          :icon="getIconClass(icon)" 
          :size="iconSize"
          :color="iconColor"
        />
      </div>
      <div v-if="label && label.trim() !== ''" class="button__label">{{ label }}</div>
      <div v-if="icon && iconPosition === 'right'" class="button__icon-right">
        <Icon 
          :icon="getIconClass(icon)" 
          :size="iconSize"
          :color="iconColor"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Icon from './Icon.vue'

interface ButtonProps {
  label?: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark' | 'white' | 'destructive'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  state?: 'default' | 'hover' | 'active' | 'pressed' | 'disabled'
  icon?: string
  iconPosition?: 'left' | 'right'
  disabled?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  label: 'Button',
  variant: 'primary',
  size: 'md',
  state: 'default',
  iconPosition: 'left',
  disabled: false
})

const iconSize = computed(() => {
  switch (props.size) {
    case 'xs':
      return 'xs' // 10px icon for S size (24px height)
    case 'sm':
      return 'sm' // 14px icon for M size (32px height)
    case 'md':
      return 'sm' // 14px icon for L size (36px height)
    case 'lg':
      return 'md' // 18px icon for XL size (40px height)
    default:
      return 'sm'
  }
})

const iconColor = computed(() => {
  // Icon colors based on variant and state
  const colors = {
    primary: {
      default: '#ffffff',
      hover: '#ffffff',
      active: '#ffffff',
      pressed: '#ffffff'
    },
    secondary: {
      default: '#000f30',
      hover: '#000f30',
      active: '#000f30',
      pressed: '#000f30'
    },
    ghost: {
      default: '#2c8dff',
      hover: '#2c8dff',
      active: '#2c8dff',
      pressed: '#2c8dff'
    },
    dark: {
      default: '#fdfdfe',
      hover: '#fdfdfe',
      active: '#fdfdfe',
      pressed: '#fdfdfe'
    },
    white: {
      default: '#000f30',
      hover: '#000f30',
      active: '#000f30',
      pressed: '#000f30'
    },
    destructive: {
      default: '#ffffff',
      hover: '#ffffff',
      active: '#ffffff',
      pressed: '#ffffff'
    }
  }
  
  return colors[props.variant as keyof typeof colors]?.[props.state as keyof typeof colors.primary] || colors.primary.default
})

// Helper function to ensure Font Awesome Pro icons work
const getIconClass = (iconName: string) => {
  // If it's already a full Font Awesome class, return as is
  if (iconName && iconName.indexOf('fa-') === 0) {
    return iconName
  }
  
  // Common short icon name mappings to full Font Awesome classes
  const iconMappings: Record<string, string> = {
    // Common icons
    'user': 'fa-solid fa-user',
    'plus': 'fa-solid fa-plus',
    'minus': 'fa-solid fa-minus',
    'times': 'fa-solid fa-xmark',
    'xmark': 'fa-solid fa-xmark',
    'check': 'fa-solid fa-check',
    'gear': 'fa-solid fa-gear',
    'cog': 'fa-solid fa-gear',
    'settings': 'fa-solid fa-gear',
    'arrow-right': 'fa-solid fa-arrow-right',
    'arrow-left': 'fa-solid fa-arrow-left',
    'arrow-up': 'fa-solid fa-arrow-up',
    'arrow-down': 'fa-solid fa-arrow-down',
    'home': 'fa-solid fa-home',
    'search': 'fa-solid fa-search',
    'edit': 'fa-solid fa-pen',
    'delete': 'fa-solid fa-trash',
    'save': 'fa-solid fa-save',
    'download': 'fa-solid fa-download',
    'upload': 'fa-solid fa-upload',
    'close': 'fa-solid fa-xmark',
    'menu': 'fa-solid fa-bars',
    'heart': 'fa-solid fa-heart',
    'star': 'fa-solid fa-star',
    'eye': 'fa-solid fa-eye',
    'eye-slash': 'fa-solid fa-eye-slash',
    'lock': 'fa-solid fa-lock',
    'unlock': 'fa-solid fa-unlock',
    'calendar': 'fa-solid fa-calendar',
    'clock': 'fa-solid fa-clock',
    'phone': 'fa-solid fa-phone',
    'envelope': 'fa-solid fa-envelope',
    'map-marker': 'fa-solid fa-location-dot',
    'link': 'fa-solid fa-link',
    'external-link': 'fa-solid fa-external-link-alt',
    'share': 'fa-solid fa-share',
    'print': 'fa-solid fa-print',
    'camera': 'fa-solid fa-camera',
    'video': 'fa-solid fa-video',
    'music': 'fa-solid fa-music',
    'file': 'fa-solid fa-file',
    'folder': 'fa-solid fa-folder',
    'image': 'fa-solid fa-image',
    'play': 'fa-solid fa-play',
    'pause': 'fa-solid fa-pause',
    'stop': 'fa-solid fa-stop',
    'volume': 'fa-solid fa-volume-up',
    'mute': 'fa-solid fa-volume-mute',
    'refresh': 'fa-solid fa-sync',
    'sync': 'fa-solid fa-sync',
    'undo': 'fa-solid fa-undo',
    'redo': 'fa-solid fa-redo',
    'copy': 'fa-solid fa-copy',
    'paste': 'fa-solid fa-paste',
    'cut': 'fa-solid fa-cut',
    'bold': 'fa-solid fa-bold',
    'italic': 'fa-solid fa-italic',
    'underline': 'fa-solid fa-underline',
    'list': 'fa-solid fa-list',
    'grid': 'fa-solid fa-th',
    'table': 'fa-solid fa-table',
    'chart': 'fa-solid fa-chart-bar',
    'analytics': 'fa-solid fa-chart-line',
    'dashboard': 'fa-solid fa-tachometer-alt',
    'notification': 'fa-solid fa-bell',
    'message': 'fa-solid fa-comment',
    'chat': 'fa-solid fa-comments',
    'group': 'fa-solid fa-users',
    'team': 'fa-solid fa-user-friends',
    'project': 'fa-solid fa-project-diagram',
    'task': 'fa-solid fa-tasks',
    'todo': 'fa-solid fa-check-square',
    'calendar-alt': 'fa-solid fa-calendar-alt',
    'clock-alt': 'fa-solid fa-clock',
    'location': 'fa-solid fa-map-marker-alt',
    'globe': 'fa-solid fa-globe',
    'world': 'fa-solid fa-globe',
    'flag': 'fa-solid fa-flag',
    'trophy': 'fa-solid fa-trophy',
    'medal': 'fa-solid fa-medal',
    'certificate': 'fa-solid fa-certificate',
    'graduation-cap': 'fa-solid fa-graduation-cap',
    'book': 'fa-solid fa-book',
    'newspaper': 'fa-solid fa-newspaper',
    'magazine': 'fa-solid fa-newspaper',
    'blog': 'fa-solid fa-blog',
    'article': 'fa-solid fa-file-alt',
    'document': 'fa-solid fa-file-alt',
    'pdf': 'fa-solid fa-file-pdf',
    'word': 'fa-solid fa-file-word',
    'excel': 'fa-solid fa-file-excel',
    'powerpoint': 'fa-solid fa-file-powerpoint',
    'zip': 'fa-solid fa-file-archive',
    'code': 'fa-solid fa-code',
    'terminal': 'fa-solid fa-terminal',
    'database': 'fa-solid fa-database',
    'server': 'fa-solid fa-server',
    'cloud': 'fa-solid fa-cloud',
    'wifi': 'fa-solid fa-wifi',
    'signal': 'fa-solid fa-signal',
    'battery': 'fa-solid fa-battery-full',
    'plug': 'fa-solid fa-plug',
    'lightbulb': 'fa-solid fa-lightbulb',
    'bulb': 'fa-solid fa-lightbulb',
    'idea': 'fa-solid fa-lightbulb',
    'light': 'fa-solid fa-lightbulb',
    'fire': 'fa-solid fa-fire',
    'flame': 'fa-solid fa-fire',
    'water': 'fa-solid fa-tint',
    'drop': 'fa-solid fa-tint',
    'leaf': 'fa-solid fa-leaf',
    'tree': 'fa-solid fa-tree',
    'flower': 'fa-solid fa-seedling',
    'plant': 'fa-solid fa-seedling',
    'sun': 'fa-solid fa-sun',
    'moon': 'fa-solid fa-moon',
    'star-half': 'fa-solid fa-star-half-alt',
    'star-empty': 'fa-regular fa-star',
    'heart-empty': 'fa-regular fa-heart',
    'eye-regular': 'fa-regular fa-eye',
    'calendar-regular': 'fa-regular fa-calendar',
    'clock-regular': 'fa-regular fa-clock',
    'envelope-regular': 'fa-regular fa-envelope',
    'file-regular': 'fa-regular fa-file',
    'folder-regular': 'fa-regular fa-folder',
    'user-regular': 'fa-regular fa-user',
    'heart-regular': 'fa-regular fa-heart',
    'star-regular': 'fa-regular fa-star',
    'eye-slash-regular': 'fa-regular fa-eye-slash',
    'calendar-alt-regular': 'fa-regular fa-calendar-alt',
    'clock-alt-regular': 'fa-regular fa-clock',
    'envelope-open': 'fa-regular fa-envelope-open',
    'file-alt-regular': 'fa-regular fa-file-alt',
    'folder-open': 'fa-regular fa-folder-open',
    'user-circle': 'fa-regular fa-user-circle',
    'user-circle-solid': 'fa-solid fa-user-circle',
    'user-friends': 'fa-solid fa-user-friends',
    'user-plus': 'fa-solid fa-user-plus',
    'user-minus': 'fa-solid fa-user-minus',
    'user-edit': 'fa-solid fa-user-edit',
    'user-cog': 'fa-solid fa-user-cog',
    'user-shield': 'fa-solid fa-user-shield',
    'user-lock': 'fa-solid fa-user-lock',
    'user-check': 'fa-solid fa-user-check',
    'user-times': 'fa-solid fa-user-times',
    'user-clock': 'fa-solid fa-user-clock',
    'user-tag': 'fa-solid fa-user-tag',
    'user-graduate': 'fa-solid fa-user-graduate',
    'user-tie': 'fa-solid fa-user-tie',
    'user-ninja': 'fa-solid fa-user-ninja',
    'user-astronaut': 'fa-solid fa-user-astronaut',
    'user-md': 'fa-solid fa-user-md',
    'user-nurse': 'fa-solid fa-user-nurse',
    'user-injured': 'fa-solid fa-user-injured',
    'user-secret': 'fa-solid fa-user-secret',
    'user-slash': 'fa-solid fa-user-slash',
    'user-headset': 'fa-solid fa-user-headset',
    'user-hard-hat': 'fa-solid fa-user-hard-hat',
    'user-construction': 'fa-solid fa-user-hard-hat',
    'user-helmet': 'fa-solid fa-user-hard-hat',
    'user-graduate-solid': 'fa-solid fa-user-graduate',
    'user-tie-solid': 'fa-solid fa-user-tie',
    'user-ninja-solid': 'fa-solid fa-user-ninja',
    'user-astronaut-solid': 'fa-solid fa-user-astronaut',
    'user-md-solid': 'fa-solid fa-user-md',
    'user-nurse-solid': 'fa-solid fa-user-nurse',
    'user-injured-solid': 'fa-solid fa-user-injured',
    'user-secret-solid': 'fa-solid fa-user-secret',
    'user-slash-solid': 'fa-solid fa-user-slash',
    'user-headset-solid': 'fa-solid fa-user-headset',
    'user-hard-hat-solid': 'fa-solid fa-user-hard-hat',
    'user-construction-solid': 'fa-solid fa-user-hard-hat',
    'user-helmet-solid': 'fa-solid fa-user-hard-hat'
  }
  
  return iconMappings[iconName] || `fa-solid fa-${iconName}`
}
</script>

<style scoped>
.button {
  position: relative;
  border-radius: 6px;
  width: fit-content;
  min-width: fit-content;
  cursor: pointer;
  transition: all 0.2s ease;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  line-height: 1;
}

.button__content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 4px; /* Default gap between icon and label */
}

.button--size-xs .button__content {
  gap: 2px; /* Smaller gap for xs size */
}

.button--size-sm .button__content {
  gap: 4px; /* Default gap for sm size */
}

.button--size-md .button__content {
  gap: 4px; /* Default gap for md size */
}

.button--size-lg .button__content {
  gap: 4px; /* Default gap for lg size */
}

.button--icon-only .button__content {
  gap: 0; /* No gap for icon-only buttons */
}

.button__label {
  white-space: nowrap;
}

.button__icon-left,
.button__icon-right {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* Size variants with exact Figma dimensions */
.button--size-xs {
  height: 24px;
  font-size: 12px; /* S size font */
  border-radius: 4px;
}

.button--size-xs:not(.button--icon-only) {
  padding: 4px 6px; /* py-1 px-1.5 */
}

.button--size-xs.button--icon-only {
  padding: 6px 10px; /* py-1.5 px-2.5 */
}

.button--size-sm {
  height: 32px;
  font-size: 12px; /* M size font */
  border-radius: 6px;
}

.button--size-sm:not(.button--icon-only) {
  padding: 8px; /* p-[8px] */
}

.button--size-sm.button--icon-only {
  padding: 8px 12px; /* py-2 px-3 */
}

.button--size-md {
  height: 36px;
  font-size: 14px; /* L size font */
  border-radius: 6px;
}

.button--size-md:not(.button--icon-only) {
  padding: 10px 8px; /* py-2.5 px-2 */
}

.button--size-md.button--icon-only {
  padding: 10px 14px; /* py-2.5 px-3.5 */
}

.button--size-lg {
  height: 40px;
  font-size: 16px; /* XL size font */
  border-radius: 6px;
}

.button--size-lg:not(.button--icon-only) {
  padding: 10px 12px; /* py-2.5 px-3 */
}

.button--size-lg.button--icon-only {
  padding: 10px 14px; /* py-2.5 px-3.5 */
}

/* Primary variant */
.button--variant-primary {
  background-color: #2c8dff;
  border-color: #2c8dff;
  color: #ffffff;
}

.button--variant-primary.button--state-hover {
  background-color: #127ffe;
  border-color: #127ffe;
}

.button--variant-primary.button--state-active,
.button--variant-primary.button--state-pressed {
  background-color: #459afe;
  border-color: #459afe;
}

/* Secondary variant */
.button--variant-secondary {
  background-color: #e5ecf3;
  border-color: #e5ecf3;
  color: #000f30;
}

.button--variant-secondary.button--state-hover {
  background-color: #dae0e7;
  border-color: #dae0e7;
}

.button--variant-secondary.button--state-active,
.button--variant-secondary.button--state-pressed {
  background-color: #ced4db;
  border-color: #ced4db;
}

/* Ghost variant */
.button--variant-ghost {
  background-color: transparent;
  border-color: transparent;
  color: #2c8dff;
}

.button--variant-ghost.button--state-hover {
  background-color: #e5ecf3;
  border-color: transparent;
}

.button--variant-ghost.button--state-active,
.button--variant-ghost.button--state-pressed {
  background-color: #dae0e7;
  border-color: transparent;
}

/* Dark variant */
.button--variant-dark {
  background-color: #243c5c;
  border-color: #243c5c;
  color: #fdfdfe;
}

.button--variant-dark.button--state-hover {
  background-color: #50637d;
  border-color: #50637d;
}

.button--variant-dark.button--state-active,
.button--variant-dark.button--state-pressed {
  background-color: #718095;
  border-color: #718095;
}

/* White variant */
.button--variant-white {
  background-color: #ffffff;
  border-color: #e5ecf3;
  color: #000f30;
}

.button--variant-white.button--state-hover {
  background-color: #f9fafc;
  border-color: #e5ecf3;
}

.button--variant-white.button--state-active,
.button--variant-white.button--state-pressed {
  background-color: #f2f6f9;
  border-color: #e5ecf3;
}

/* Destructive variant */
.button--variant-destructive {
  background-color: #e95858;
  border-color: #e95858;
  color: #ffffff;
}

.button--variant-destructive.button--state-hover {
  background-color: #d64545;
  border-color: #d64545;
}

.button--variant-destructive.button--state-active,
.button--variant-destructive.button--state-pressed {
  background-color: #c23a3a;
  border-color: #c23a3a;
}

/* Disabled state */
.button--state-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .button--size-lg {
    height: 40px;
    font-size: 14px;
    padding: 0 14px;
  }
  
  .button--size-lg .button__content {
    padding: 0 10px;
    gap: 8px;
  }
}
</style>
