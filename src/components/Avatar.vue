<template>
  <div 
    :class="[
      'avatar',
      `avatar--size-${size}`,
      { 'avatar--white-border': whiteBorder }
    ]"
    :style="{ width: avatarSize, height: avatarSize }"
  >
    <div class="avatar__content">
      <!-- Initials State -->
      <div 
        v-if="!unassigned" 
        class="avatar__initials"
        :style="{ 
          fontSize: initialsSize,
          fontWeight: initialsFontWeight
        }"
      >
        {{ initials }}
      </div>
      
      <!-- Unassigned State (Ghost Icon) -->
      <div 
        v-else 
        class="avatar__unassigned"
      >
        <i 
          class="avatar__ghost"
          :style="{ fontSize: ghostSize }"
        >
          ghost
        </i>
      </div>
    </div>
    
    <!-- Avatar Badge (optional) -->
    <div 
      v-if="showBadge" 
      class="avatar__badge"
      :style="badgeStyle"
    ></div>
    
    <!-- Status Indicator (optional) -->
    <div 
      v-if="showStatus" 
      class="avatar__status"
      :style="statusStyle"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface AvatarProps {
  /** Avatar initials (1-2 characters) */
  initials?: string
  /** Size in pixels */
  size?: 12 | 16 | 20 | 24 | 32 | 36 | 40 | 48 | 64 | 72 | 152
  /** Show white border around avatar */
  whiteBorder?: boolean
  /** Show unassigned state (ghost icon) */
  unassigned?: boolean
  /** Show badge indicator */
  showBadge?: boolean
  /** Show status indicator */
  showStatus?: boolean
}

const props = withDefaults(defineProps<AvatarProps>(), {
  initials: 'A',
  size: 24,
  whiteBorder: false,
  unassigned: false,
  showBadge: false,
  showStatus: false
})

const avatarSize = computed(() => `${props.size}px`)

const initialsSize = computed(() => {
  // Exact font sizes from Figma
  const sizeMap: Record<number, number> = {
    12: 10,
    16: 10,
    20: 10,
    24: 12,
    32: 14,
    36: 14,
    40: 16,
    48: 18,
    64: 24,
    72: 24,
    152: 52
  }
  return `${sizeMap[props.size]}px`
})

const initialsFontWeight = computed(() => {
  // Font weights from Figma: Medium (500) for smaller sizes, Semi Bold (600) for larger
  return props.size >= 48 ? 600 : 500
})

const ghostSize = computed(() => {
  // Exact ghost icon sizes from Figma
  const sizeMap: Record<number, number> = {
    12: 8,
    16: 8,
    20: 10,
    24: 14,
    32: 14,
    36: 18,
    40: 22,
    48: 28,
    64: 32, // Not in Figma but estimated
    72: 36, // Not in Figma but estimated
    152: 76 // Not in Figma but estimated
  }
  return `${sizeMap[props.size]}px`
})

const badgeSize = computed(() => {
  // Exact badge sizes from Figma
  const sizeMap: Record<number, number> = {
    12: 4,
    16: 4,
    20: 4,
    24: 12,
    32: 12,
    36: 12,
    40: 16,
    48: 16,
    64: 20,
    72: 20,
    152: 36
  }
  return sizeMap[props.size]
})

const statusSize = computed(() => {
  // Exact status sizes from Figma
  const sizeMap: Record<number, number> = {
    12: 4,
    16: 4,
    20: 4,
    24: 6,
    32: 6,
    36: 6,
    40: 8,
    48: 8,
    64: 10, // Not in Figma but estimated
    72: 10, // Not in Figma but estimated
    152: 20 // Not in Figma but estimated
  }
  return sizeMap[props.size]
})

const badgeStyle = computed(() => {
  const size = badgeSize.value
  const offset = Math.round(size * 0.5)
  return {
    width: `${size}px`,
    height: `${size}px`,
    top: `-${offset}px`,
    right: `-${offset}px`,
    borderWidth: `${Math.max(1, Math.round(size * 0.25))}px`
  }
})

const statusStyle = computed(() => {
  const size = statusSize.value
  const offset = Math.round(size * 0.5)
  return {
    width: `${size}px`,
    height: `${size}px`,
    bottom: `-${offset}px`,
    left: `-${offset}px`,
    borderWidth: `${Math.max(1, Math.round(size * 0.25))}px`
  }
})
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.avatar {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  box-sizing: border-box;
  flex-shrink: 0;
}

.avatar--white-border {
  border: 1px solid #ffffff;
}

.avatar__content {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.avatar__initials {
  width: 100%;
  height: 100%;
  background-color: #edf2f7;
  color: #2c8dff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  text-align: center;
  line-height: 1;
  letter-spacing: 0;
  border-radius: 50%;
}

.avatar__unassigned {
  width: 100%;
  height: 100%;
  background-color: #edf2f7;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.avatar__ghost {
  font-family: 'Font Awesome 6 Pro', 'Font Awesome 6 Free', sans-serif;
  font-weight: 900;
  color: #476887;
  text-align: center;
  line-height: 1;
  letter-spacing: 0.48px;
}

.avatar__badge {
  position: absolute;
  background-color: #476887;
  border: 1px solid #ffffff;
  border-radius: 50%;
  box-sizing: border-box;
}

.avatar__status {
  position: absolute;
  background-color: #76eaa0;
  border: 1px solid #ffffff;
  border-radius: 50%;
  box-sizing: border-box;
}

/* Ensure proper scaling for all sizes */
.avatar--size-12 {
  min-width: 12px;
  min-height: 12px;
}

.avatar--size-16 {
  min-width: 16px;
  min-height: 16px;
}

.avatar--size-20 {
  min-width: 20px;
  min-height: 20px;
}

.avatar--size-24 {
  min-width: 24px;
  min-height: 24px;
}

.avatar--size-32 {
  min-width: 32px;
  min-height: 32px;
}

.avatar--size-36 {
  min-width: 36px;
  min-height: 36px;
}

.avatar--size-40 {
  min-width: 40px;
  min-height: 40px;
}

.avatar--size-48 {
  min-width: 48px;
  min-height: 48px;
}

.avatar--size-64 {
  min-width: 64px;
  min-height: 64px;
}

.avatar--size-72 {
  min-width: 72px;
  min-height: 72px;
}

.avatar--size-152 {
  min-width: 152px;
  min-height: 152px;
}
</style> 