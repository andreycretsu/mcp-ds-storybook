<template>
  <div 
    class="segment-item"
    :class="{
      'active': isActive,
      'inactive': !isActive,
      'has-dropdown': hasDropdown,
      'fixed-width': fixedWidth
    }"
    @click="handleClick"
    @mousedown="() => console.log('Mouse down on:', props.label)"
    @mouseup="() => console.log('Mouse up on:', props.label)"
  >
    <!-- Active state border and shadow -->
    <div 
      v-if="isActive" 
      class="active-border"
      aria-hidden="true"
    ></div>
    
    <div class="content">
      <span class="text">{{ label }}</span>
      <div v-if="hasDropdown" class="dropdown-icon">
        <svg 
          width="12" 
          height="12" 
          viewBox="0 0 12 12" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M3 4.5L6 7.5L9 4.5" 
            stroke="currentColor" 
            stroke-width="1.5" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string
  isActive: boolean
  hasDropdown?: boolean
  fixedWidth?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  click: []
}>()

const handleClick = (event: Event) => {
  event.preventDefault()
  event.stopPropagation()
  
  // Add temporary visual feedback to the segment item, not the text
  const segmentItem = (event.target as HTMLElement).closest('.segment-item') as HTMLElement
  if (segmentItem) {
    segmentItem.style.backgroundColor = '#ff0000'
    setTimeout(() => {
      segmentItem.style.backgroundColor = ''
    }, 200)
  }
  
  emit('click')
}
</script>

<style scoped>
.segment-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  min-height: 16px;
  min-width: fit-content;
  flex-shrink: 0;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.segment-item.fixed-width {
  width: 72px;
}

.content {
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  z-index: 1;
}

.text {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
}

/* Active state */
.segment-item.active {
  background: #ffffff;
}

.segment-item.active .text {
  color: #000f30;
}

.active-border {
  position: absolute;
  top: -0.5px;
  left: -0.5px;
  right: -0.5px;
  bottom: -0.5px;
  border: 1px solid #d3dfeb;
  border-radius: 4.5px;
  box-shadow: 0px 1px 4px 0px rgba(9, 8, 61, 0.08);
  pointer-events: none;
}

/* Inactive state */
.segment-item.inactive {
  background: transparent;
}

.segment-item.inactive .text {
  color: #476887;
}

/* Dropdown icon */
.dropdown-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

.dropdown-icon svg {
  width: 12px;
  height: 12px;
}

.segment-item.active .dropdown-icon svg {
  color: #000f30;
}

.segment-item.inactive .dropdown-icon svg {
  color: #000f30;
}

/* Hover effects */
.segment-item.active:hover {
  background: #f6f9fb;
}

.segment-item.inactive:hover {
  background: #d3dfeb;
}

.segment-item.inactive:hover .text {
  color: #000f30;
}
</style>
