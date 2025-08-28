<template>
  <div class="segmented-control" :class="{ 'has-dropdown': hasDropdown }">
    <div class="segmented-control-container">
      <button
        v-for="(item, index) in items"
        :key="index"
        class="segment-button"
        :class="{
          'active': item.value === modelValue,
          'has-dropdown': item.dropdown,
          'dropdown-open': item.value === modelValue && item.dropdown && dropdownOpen,
          'first': index === 0,
          'last': index === items.length - 1
        }"
        @click="handleSegmentClick(item)"
        @mouseenter="handleMouseEnter(item)"
        @mouseleave="handleMouseLeave"
      >
        <span class="segment-text">{{ item.label }}</span>
        <svg
          v-if="item.dropdown"
          class="dropdown-icon"
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
        
        <!-- Dropdown Menu -->
        <div
          v-if="item.dropdown && item.value === modelValue && dropdownOpen"
          class="dropdown-menu"
          @click.stop
        >
          <div
            v-for="(option, optionIndex) in item.dropdownOptions"
            :key="optionIndex"
            class="dropdown-item"
            :class="{ 'active': option.value === selectedDropdownValue }"
            @click="handleDropdownSelect(option)"
          >
            {{ option.label }}
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

export interface SegmentedItem {
  label: string
  value: string
  dropdown?: boolean
  dropdownOptions?: DropdownOption[]
}

export interface DropdownOption {
  label: string
  value: string
}

interface Props {
  modelValue: string
  items: SegmentedItem[]
  size?: 'small' | 'medium' | 'large'
  variant?: 'default' | 'outline'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
  variant: 'default'
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'dropdown-change': [value: string]
}>()

const dropdownOpen = ref(false)
const selectedDropdownValue = ref('')
const hoveredItem = ref<SegmentedItem | null>(null)

const hasDropdown = computed(() => {
  return props.items.some(item => item.dropdown)
})

const handleSegmentClick = (item: SegmentedItem) => {
  if (item.dropdown) {
    // Toggle dropdown for dropdown items
    if (item.value === props.modelValue) {
      dropdownOpen.value = !dropdownOpen.value
    } else {
      dropdownOpen.value = true
      emit('update:modelValue', item.value)
      // Set first dropdown option as default
      if (item.dropdownOptions && item.dropdownOptions.length > 0) {
        selectedDropdownValue.value = item.dropdownOptions[0].value
        emit('dropdown-change', item.dropdownOptions[0].value)
      }
    }
  } else {
    // Regular segment click
    dropdownOpen.value = false
    emit('update:modelValue', item.value)
  }
}

const handleDropdownSelect = (option: DropdownOption) => {
  selectedDropdownValue.value = option.value
  emit('dropdown-change', option.value)
  dropdownOpen.value = false
}

const handleMouseEnter = (item: SegmentedItem) => {
  hoveredItem.value = item
}

const handleMouseLeave = () => {
  hoveredItem.value = null
}

// Close dropdown when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement
  if (!target.closest('.segmented-control')) {
    dropdownOpen.value = false
  }
}

// Watch for modelValue changes to close dropdown if needed
watch(() => props.modelValue, (newValue) => {
  const currentItem = props.items.find(item => item.value === newValue)
  if (!currentItem?.dropdown) {
    dropdownOpen.value = false
  }
})

// Add click outside listener
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.segmented-control {
  display: inline-flex;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.segmented-control-container {
  display: flex;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 2px;
  gap: 0;
}

.segment-button {
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: transparent;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  min-width: 0;
  flex: 1;
}

.segment-button:hover {
  background: #f1f5f9;
  color: #475569;
}

.segment-button.active {
  background: #3b82f6;
  color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.segment-button.active:hover {
  background: #2563eb;
}

.segment-button.has-dropdown {
  padding-right: 12px;
}

.dropdown-icon {
  transition: transform 0.2s ease;
  flex-shrink: 0;
}

.segment-button.dropdown-open .dropdown-icon {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  min-width: 120px;
}

.dropdown-item {
  padding: 8px 12px;
  font-size: 14px;
  color: #374151;
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.dropdown-item:hover {
  background: #f9fafb;
}

.dropdown-item.active {
  background: #eff6ff;
  color: #1d4ed8;
  font-weight: 500;
}

.dropdown-item:first-child {
  border-radius: 6px 6px 0 0;
}

.dropdown-item:last-child {
  border-radius: 0 0 6px 6px;
}

/* Size variants */
.segmented-control.size-small .segment-button {
  padding: 6px 12px;
  font-size: 12px;
}

.segmented-control.size-large .segment-button {
  padding: 12px 20px;
  font-size: 16px;
}

/* Variant styles */
.segmented-control.variant-outline .segmented-control-container {
  background: transparent;
  border: 1px solid #d1d5db;
}

.segmented-control.variant-outline .segment-button:hover {
  background: #f9fafb;
}

.segmented-control.variant-outline .segment-button.active {
  background: #1f2937;
  color: white;
}

/* Responsive */
@media (max-width: 640px) {
  .segment-button {
    padding: 6px 12px;
    font-size: 13px;
  }
  
  .dropdown-menu {
    min-width: 100px;
  }
}
</style>
