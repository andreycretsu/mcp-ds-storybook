<template>
  <div
    v-if="isVisible"
    ref="bannerRef"
    role="banner"
    :class="[
      'banner',
      `banner--variant-${variant}`,
      `banner--size-${size}`,
      className
    ]"
    v-bind="$attrs"
  >
    <!-- Dot grid pattern overlay for all variants -->
    <DotPattern 
      :color="getDotPatternColor()"
    />

    <div class="banner__content">
      <div class="banner__left">
        <div v-if="icon" class="banner__icon">
          <slot name="icon">
            <Icon 
              v-if="typeof icon === 'string'" 
              :icon="icon" 
              size="sm" 
              :color="getIconColor()"
            />
            <component v-else :is="icon" />
          </slot>
        </div>
        <div class="banner__text">
          <span class="banner__message">
            <slot></slot>
          </span>
          <a
            v-if="linkText"
            :href="linkHref || '#'"
            class="banner__link"
            @click="handleLinkClick"
          >
            {{ linkText }}
          </a>
        </div>
      </div>
      <div class="banner__right">
        <div v-if="actionText" :class="getButtonWrapperClass()">
          <Button
            :label="actionText"
            :variant="getButtonVariant()"
            size="sm"
            @click="handleAction"
          />
        </div>
        <button
          v-if="dismissible"
          type="button"
          class="banner__close"
          @click="handleDismiss"
          aria-label="Dismiss banner"
        >
          <Icon icon="fa-solid fa-xmark" size="sm" color="#6b7280" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Icon from './Icon.vue'
import Button from './Button.vue'
import DotPattern from './DotPattern.vue'

export interface BannerProps {
  variant?: 'default' | 'info' | 'success' | 'warning' | 'error' | 'promotional' | 'muted'
  size?: 'default' | 'sm' | 'lg'
  icon?: string | any
  linkText?: string
  linkHref?: string
  actionText?: string
  actionVariant?: 'primary' | 'secondary' | 'ghost' | 'dark' | 'white' | 'destructive'
  dismissible?: boolean
  visible?: boolean
  className?: string
}

const props = withDefaults(defineProps<BannerProps>(), {
  variant: 'default',
  size: 'default',
  dismissible: true,
  visible: true,
  actionVariant: 'secondary',
  className: ''
})

const emit = defineEmits<{
  'link-click': []
  'action': []
  'dismiss': []
  'update:visible': [value: boolean]
}>()

const bannerRef = ref<HTMLElement | null>(null)
const isVisible = ref(props.visible)

watch(() => props.visible, (newValue) => {
  isVisible.value = newValue
})

const handleDismiss = () => {
  isVisible.value = false
  emit('update:visible', false)
  emit('dismiss')
}

const handleLinkClick = (e: Event) => {
  if (props.linkHref === '#') {
    e.preventDefault()
  }
  emit('link-click')
}

const handleAction = () => {
  emit('action')
}

const getButtonVariant = (): 'primary' | 'secondary' | 'ghost' | 'dark' | 'white' | 'destructive' => {
  return props.actionVariant
}

const getButtonWrapperClass = (): string => {
  if (props.variant === 'promotional') {
    return 'banner__button-wrapper--promotional'
  }
  if (props.variant === 'success') {
    return 'banner__button-wrapper--success'
  }
  return ''
}

const getIconColor = (): string => {
  const colorMap: Record<string, string> = {
    info: '#2563eb',
    warning: '#d97706',
    error: '#dc2626',
    success: '#059669',
    default: '#6b7280',
    muted: '#6b7280',
    promotional: '#1f2937'
  }
  return colorMap[props.variant] || colorMap.default
}

const getDotPatternColor = (): string => {
  // Using HSL format to match the SVG pattern structure
  // Colors are converted to HSL for consistency with the pattern
  const colorMap: Record<string, string> = {
    default: 'hsl(0, 0%, 45%)', // Gray
    info: 'hsl(217, 91%, 60%)', // Blue
    success: 'hsl(142, 71%, 45%)', // Green
    warning: 'hsl(43, 96%, 56%)', // Amber
    error: 'hsl(0, 84%, 60%)', // Red
    promotional: 'hsl(142, 71%, 45%)', // Green (same as success)
    muted: 'hsl(0, 0%, 55%)' // Light gray
  }
  return colorMap[props.variant] || colorMap.default
}

// Expose children prop for slot content
defineExpose({
  bannerRef
})
</script>

<style scoped>
.banner {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 8px 12px;
  font-size: 14px;
  transition: all 0.2s ease;
  overflow: hidden;
  isolation: isolate;
  border-radius: 6px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
}

.banner__content {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
}

.banner__left {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;
}

.banner__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.banner__text {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  min-width: 0;
}

.banner__message {
  font-size: 14px;
  line-height: 1.5;
}

.banner__link {
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 4px;
  flex-shrink: 0;
  cursor: pointer;
  transition: text-decoration 0.2s ease;
}

.banner__link:hover {
  text-decoration: none;
}

.banner__right {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.banner__close {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 4px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  outline: none;
}

.banner__close:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.banner__close:focus {
  outline: 2px solid #6b7280;
  outline-offset: 2px;
}

/* Variant: Default */
.banner--variant-default {
  background: linear-gradient(to right, #ffffff, #ffffff);
  border: 0.5px solid #e5e7eb;
  color: #1f2937;
}

/* Variant: Info */
.banner--variant-info {
  background: linear-gradient(to right, #eff6ff, #ffffff);
  border: 0.5px solid #bfdbfe;
  color: #1e3a8a;
}

.banner--variant-info :deep(.banner__icon) {
  color: #2563eb;
}

/* Variant: Success */
.banner--variant-success {
  background: linear-gradient(to right, #d9f9e5, #ffffff);
  border: 0.5px solid #95eeb6;
  color: #000f30;
}

/* Variant: Warning */
.banner--variant-warning {
  background: linear-gradient(to right, #fffbeb, #ffffff);
  border: 0.5px solid #fde68a;
  color: #78350f;
}

.banner--variant-warning :deep(.banner__icon) {
  color: #d97706;
}

/* Variant: Error */
.banner--variant-error {
  background: linear-gradient(to right, #fef2f2, #ffffff);
  border: 0.5px solid #fecaca;
  color: #991b1b;
}

.banner--variant-error :deep(.banner__icon) {
  color: #dc2626;
}

/* Variant: Promotional */
.banner--variant-promotional {
  background: linear-gradient(to right, #d9f9e5, #ffffff);
  border: 0.5px solid #95eeb6;
  color: #000f30;
}

/* Variant: Muted */
.banner--variant-muted {
  background: linear-gradient(to right, rgba(249, 250, 251, 0.5), #ffffff);
  border: 0.5px solid #e5e7eb;
  color: #6b7280;
}

/* Size: Small */
.banner--size-sm {
  padding: 6px 10px;
  font-size: 12px;
}

.banner--size-sm .banner__message {
  font-size: 12px;
}

.banner--size-sm .banner__link {
  font-size: 12px;
}

/* Size: Large */
.banner--size-lg {
  padding: 10px 16px;
  font-size: 16px;
}

.banner--size-lg .banner__message {
  font-size: 16px;
}

.banner--size-lg .banner__link {
  font-size: 16px;
}

.banner__button-wrapper--promotional :deep(.button) {
  border-color: #10b981 !important;
  color: #047857 !important;
}

.banner__button-wrapper--promotional :deep(.button:hover),
.banner__button-wrapper--promotional :deep(.button.button--state-hover) {
  background-color: #d1fae5 !important;
  border-color: #10b981 !important;
}

.banner__button-wrapper--success :deep(.button) {
  border-color: #059669 !important;
  color: #047857 !important;
}

.banner__button-wrapper--success :deep(.button:hover),
.banner__button-wrapper--success :deep(.button.button--state-hover) {
  background-color: #d1fae5 !important;
  border-color: #059669 !important;
}
</style>

