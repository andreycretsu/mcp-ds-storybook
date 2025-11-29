<template>
  <div 
    :class="[
      'badge',
      `badge--size-${size}`,
      `badge--emphasis-${emphasis}`,
      `badge--color-${color}`
    ]"
  >
    <div class="badge__body">
      <!-- Icon (FontAwesome) -->
      <i 
        v-if="showIcon && !showAvatar"
        :class="['badge__icon', iconClass]"
        :style="{ fontSize: iconSize }"
      >
        {{ icon }}
      </i>
      
      <!-- Avatar -->
      <Avatar
        v-if="showAvatar && !showIcon"
        :initials="avatarInitials"
        :size="avatarSize"
        :unassigned="unassigned"
        :showBadge="showAvatarBadge"
        :showStatus="showStatus"
      />
      
      <!-- Label Text -->
      <span class="badge__label">{{ label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Avatar from './Avatar.vue'

export interface BadgeProps {
  /** Badge text content */
  label: string
  /** Size variant */
  size?: 'S' | 'M' | 'L'
  /** Emphasis level */
  emphasis?: 'Low' | 'High'
  /** Color variant */
  color?: 'Green' | 'Blue' | 'Yellow' | 'Red' | 'Cyan' | 'Violet' | 'Rose' | 'White' | 'Grey'
  /** Show icon instead of avatar */
  showIcon?: boolean
  /** FontAwesome icon name */
  icon?: string
  /** Show avatar instead of icon */
  showAvatar?: boolean
  /** Avatar initials (1-2 characters) */
  avatarInitials?: string
  /** Show unassigned state (ghost icon) */
  unassigned?: boolean
  /** Show avatar badge indicator */
  showAvatarBadge?: boolean
  /** Show status indicator */
  showStatus?: boolean
}

const props = withDefaults(defineProps<BadgeProps>(), {
  size: 'M',
  emphasis: 'Low',
  color: 'Green',
  showIcon: false,
  icon: 'circle-small',
  showAvatar: false,
  avatarInitials: 'A',
  unassigned: false,
  showAvatarBadge: false,
  showStatus: false
})

const iconClass = computed(() => {
  return 'fa-solid'
})

const iconSize = computed(() => {
  switch (props.size) {
    case 'L': return '14px'
    case 'M': return '10px'
    case 'S': return '8px'
    default: return '10px'
  }
})

const avatarSize = computed(() => {
  // Correct avatar sizes for each badge size based on Figma
  switch (props.size) {
    case 'L': return 16 // Badge L uses 16px avatar
    case 'M': return 12 // Badge M uses 12px avatar  
    case 'S': return 12 // Badge S uses 12px avatar
    default: return 12
  }
})
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  box-sizing: border-box;
}

.badge__body {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 100%;
  padding: 0 8px;
}

.badge__icon {
  font-family: 'Font Awesome 6 Pro', 'Font Awesome 6 Free', sans-serif;
  font-weight: 900;
  text-align: center;
  line-height: 1;
}

.badge__label {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  text-align: center;
  line-height: 1;
  letter-spacing: 0;
}

/* Size Variants */
.badge--size-L {
  height: 24px;
  border-radius: 6px;
}

.badge--size-L .badge__body {
  padding: 4px 8px;
}

.badge--size-L .badge__label {
  font-size: 14px;
  line-height: 14px;
}

.badge--size-M {
  height: 20px;
  border-radius: 4px;
}

.badge--size-M .badge__body {
  padding: 4px 6px;
}

.badge--size-M .badge__label {
  font-size: 12px;
  line-height: 12px;
}

.badge--size-S {
  height: 16px;
  border-radius: 4px;
}

.badge--size-S .badge__body {
  padding: 2px 6px;
}

.badge--size-S .badge__label {
  font-size: 10px;
  line-height: 10px;
}

/* Low Emphasis Color Variants */
.badge--emphasis-Low.badge--color-Green {
  background-color: #caf7db;
  border: 1px solid #caf7db;
}

.badge--emphasis-Low.badge--color-Green .badge__icon,
.badge--emphasis-Low.badge--color-Green .badge__label {
  color: #0f4e26;
}

.badge--emphasis-Low.badge--color-Blue {
  background-color: #bfdcf9;
  border: 1px solid #bfdcf9;
}

.badge--emphasis-Low.badge--color-Blue .badge__icon,
.badge--emphasis-Low.badge--color-Blue .badge__label {
  color: #003972;
}

.badge--emphasis-Low.badge--color-Yellow {
  background-color: #f8ecc4;
  border: 1px solid #f8ecc4;
}

.badge--emphasis-Low.badge--color-Yellow .badge__icon,
.badge--emphasis-Low.badge--color-Yellow .badge__label {
  color: #624d08;
}

.badge--emphasis-Low.badge--color-Red {
  background-color: #f8cbcb;
  border: 1px solid #f8cbcb;
}

.badge--emphasis-Low.badge--color-Red .badge__icon,
.badge--emphasis-Low.badge--color-Red .badge__label {
  color: #721717;
}

.badge--emphasis-Low.badge--color-Cyan {
  background-color: #c3f2f8;
  border: 1px solid #c3f2f8;
}

.badge--emphasis-Low.badge--color-Cyan .badge__icon,
.badge--emphasis-Low.badge--color-Cyan .badge__label {
  color: #054750;
}

.badge--emphasis-Low.badge--color-Violet {
  background-color: #dcc0f9;
  border: 1px solid #dcc0f9;
}

.badge--emphasis-Low.badge--color-Violet .badge__icon,
.badge--emphasis-Low.badge--color-Violet .badge__label {
  color: #440189;
}

.badge--emphasis-Low.badge--color-Rose {
  background-color: #f8bfe5;
  border: 1px solid #f8bfe5;
}

.badge--emphasis-Low.badge--color-Rose .badge__icon,
.badge--emphasis-Low.badge--color-Rose .badge__label {
  color: #72004b;
}

.badge--emphasis-Low.badge--color-White {
  background-color: #ffffff;
  border: 1px solid #e5ecf3;
}

.badge--emphasis-Low.badge--color-White .badge__icon,
.badge--emphasis-Low.badge--color-White .badge__label {
  color: #3d5c7a;
}

.badge--emphasis-Low.badge--color-Grey {
  background-color: #f1f5f8;
  border: 1px solid #e5ecf3;
}

.badge--emphasis-Low.badge--color-Grey .badge__icon,
.badge--emphasis-Low.badge--color-Grey .badge__label {
  color: #3d5c7a;
}

/* High Emphasis Color Variants */
.badge--emphasis-High.badge--color-Green {
  background-color: #1f9b4c;
  border: 1px solid #1f9b4c;
}

.badge--emphasis-High.badge--color-Green .badge__icon,
.badge--emphasis-High.badge--color-Green .badge__label {
  color: #ffffff;
}

.badge--emphasis-High.badge--color-Blue {
  background-color: #338eea;
  border: 1px solid #338eea;
}

.badge--emphasis-High.badge--color-Blue .badge__icon,
.badge--emphasis-High.badge--color-Blue .badge__label {
  color: #ffffff;
}

.badge--emphasis-High.badge--color-Yellow {
  background-color: #e3b212;
  border: 1px solid #e3b212;
}

.badge--emphasis-High.badge--color-Yellow .badge__icon,
.badge--emphasis-High.badge--color-Yellow .badge__label {
  color: #ffffff;
}

.badge--emphasis-High.badge--color-Red {
  background-color: #e95858;
  border: 1px solid #e95858;
}

.badge--emphasis-High.badge--color-Red .badge__icon,
.badge--emphasis-High.badge--color-Red .badge__label {
  color: #ffffff;
}

.badge--emphasis-High.badge--color-Cyan {
  background-color: #0cacc2;
  border: 1px solid #0cacc2;
}

.badge--emphasis-High.badge--color-Cyan .badge__icon,
.badge--emphasis-High.badge--color-Cyan .badge__label {
  color: #ffffff;
}

.badge--emphasis-High.badge--color-Violet {
  background-color: #a35aee;
  border: 1px solid #a35aee;
}

.badge--emphasis-High.badge--color-Violet .badge__icon,
.badge--emphasis-High.badge--color-Violet .badge__label {
  color: #ffffff;
}

.badge--emphasis-High.badge--color-Rose {
  background-color: #ed59bb;
  border: 1px solid #ed59bb;
}

.badge--emphasis-High.badge--color-Rose .badge__icon,
.badge--emphasis-High.badge--color-Rose .badge__label {
  color: #ffffff;
}

.badge--emphasis-High.badge--color-Grey {
  background-color: #476887;
  border: 1px solid #476887;
}

.badge--emphasis-High.badge--color-Grey .badge__icon,
.badge--emphasis-High.badge--color-Grey .badge__label {
  color: #ffffff;
}
</style> 