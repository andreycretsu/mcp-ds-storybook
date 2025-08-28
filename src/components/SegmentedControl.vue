<template>
  <div class="segmented-control">
    <div class="segmented-control-container">
      <SegmentItem
        v-for="(item, index) in items"
        :key="index"
        :label="item.label"
        :is-active="item.value === modelValue"
        :has-dropdown="item.dropdown"
        @click="handleSegmentClick(item)"
        @mouseenter="handleSegmentHover(item)"
        @mouseleave="handleSegmentLeave"
      />
      
      <!-- Dropdown Menu -->
      <div
        v-if="dropdownOpen && (activeDropdownItem || hoveredItem)"
        class="dropdown-menu"
        @click.stop
        @mouseenter="isHoveringDropdown = true"
        @mouseleave="isHoveringDropdown = false"
      >
        <div
          v-for="(option, optionIndex) in (hoveredItem || activeDropdownItem)?.dropdownOptions"
          :key="optionIndex"
          class="dropdown-item"
          :class="{ 'active': option.value === selectedDropdownValue }"
          @click="handleDropdownSelect(option)"
        >
          {{ option.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import SegmentItem from './SegmentItem.vue'

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
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'dropdown-change': [value: string]
}>()

const dropdownOpen = ref(false)
const selectedDropdownValue = ref('')
const hoveredItem = ref<SegmentedItem | null>(null)
const isHoveringDropdown = ref(false)

const hasDropdown = computed(() => {
  return props.items.some(item => item.dropdown)
})

const activeDropdownItem = computed(() => {
  return props.items.find(item => item.value === props.modelValue && item.dropdown)
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

const handleSegmentHover = (item: SegmentedItem) => {
  if (item.dropdown) {
    hoveredItem.value = item
    dropdownOpen.value = true
  }
}

const handleSegmentLeave = () => {
  // Add a small delay to allow moving to dropdown menu
  setTimeout(() => {
    if (!isHoveringDropdown.value) {
      hoveredItem.value = null
      dropdownOpen.value = false
    }
  }, 150)
}

const handleDropdownSelect = (option: DropdownOption) => {
  selectedDropdownValue.value = option.value
  emit('dropdown-change', option.value)
  dropdownOpen.value = false
  hoveredItem.value = null
  isHoveringDropdown.value = false
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
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.segmented-control-container {
  display: flex;
  background: transparent;
  border: 1px solid #d3dfeb;
  border-radius: 4px;
  padding: 0;
  gap: 0;
  position: relative;
  width: fit-content;
}



.dropdown-menu {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #d3dfeb;
  border-radius: 4px;
  box-shadow: 0px 1px 4px 0px rgba(9, 8, 61, 0.08);
  z-index: 1000;
  min-width: 120px;
}

.dropdown-item {
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 500;
  color: #476887;
  cursor: pointer;
  transition: background-color 0.15s ease;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.dropdown-item:hover {
  background: rgba(255, 255, 255, 0.8);
  color: #000f30;
}

.dropdown-item.active {
  background: rgba(255, 255, 255, 0.9);
  color: #000f30;
  font-weight: 500;
}

.dropdown-item:first-child {
  border-radius: 6px 6px 0 0;
}

.dropdown-item:last-child {
  border-radius: 0 0 6px 6px;
}

/* Responsive */
@media (max-width: 640px) {
  .dropdown-menu {
    min-width: 100px;
  }
}
</style>
