<template>
  <div class="icon-grid-container">
    <div class="icon-grid" ref="iconGrid">
      <div 
        v-for="icon in filteredIcons" 
        :key="icon.name"
        class="icon-cell"
        @click="selectIcon(icon)"
        :class="{ 'selected': selectedIcon?.name === icon.name }"
        role="button"
        tabindex="0"
        :aria-label="`Select ${icon.name} icon`"
        @keydown.enter="selectIcon(icon)"
        @keydown.space.prevent="selectIcon(icon)"
      >
        <i :class="`fa-solid fa-${icon.name}`" :style="{ color: iconColor }"></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Icon {
  name: string
}

interface Props {
  icons: Icon[]
  searchQuery?: string
  selectedIcon?: Icon | null
  iconColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  icons: () => [],
  searchQuery: '',
  selectedIcon: null,
  iconColor: '#476887'
})

const emit = defineEmits<{
  'icon-selected': [icon: Icon]
}>()

const filteredIcons = computed(() => {
  if (!props.searchQuery) return props.icons
  return props.icons.filter(icon => 
    icon.name.toLowerCase().includes(props.searchQuery.toLowerCase())
  )
})

const selectIcon = (icon: Icon) => {
  emit('icon-selected', icon)
}
</script>

<style scoped>
.icon-grid-container {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e5ecf3;
}

.icon-grid {
  flex: 1;
  padding: 12px;
  display: grid;
  grid-template-columns: repeat(10, 32px);
  gap: 0;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(71, 104, 135, 0.3) transparent;
  grid-auto-rows: 32px;
  align-content: start;
}

.icon-grid::-webkit-scrollbar {
  width: 8px;
}

.icon-grid::-webkit-scrollbar-track {
  background: transparent;
}

.icon-grid::-webkit-scrollbar-thumb {
  background-color: rgba(71, 104, 135, 0.3);
  border-radius: 4px;
  border: 2px solid transparent;
  background-clip: content-box;
}

.icon-grid::-webkit-scrollbar-thumb:hover {
  background-color: rgba(71, 104, 135, 0.5);
}

.icon-cell {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
  box-sizing: border-box;
}

.icon-cell:hover {
  background-color: #f1f5f8;
}

.icon-cell:focus {
  background-color: #f1f5f8;
  outline: 2px solid #476887;
  outline-offset: 1px;
}

.icon-cell.selected {
  background-color: #e5ecf3;
}

.icon-cell i {
  font-size: 18px;
  font-weight: 900;
  text-align: center;
  line-height: 1;
  transition: color 0.2s ease;
}
</style> 