<template>
  <div class="icon-color-picker">
    <!-- Search Bar -->
    <div class="search-container">
      <div class="search-icon">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div class="search-input-container">
        <input 
          type="text" 
          placeholder="Search" 
          v-model="searchQuery"
          class="search-input"
        />
      </div>
    </div>

    <!-- Icon Grid with Internal Scroll -->
    <div class="grid-container">
      <div class="icon-grid" ref="iconGrid">
        <div 
          v-for="icon in filteredIcons" 
          :key="icon.name"
          class="icon-cell"
          @click="selectIcon(icon)"
          :class="{ 'selected': selectedIcon?.name === icon.name }"
        >
          <i :class="`fa-solid fa-${icon.name}`"></i>
        </div>
      </div>
    </div>

    <!-- Color Palette Footer -->
    <div class="footer">
      <div class="color-palette">
        <div 
          v-for="color in colorPalette" 
          :key="color"
          class="color-container"
          @click="selectColor(color)"
          :class="{ 'selected': selectedColor === color }"
        >
          <div 
            class="color-swatch" 
            :style="{ backgroundColor: color }"
          ></div>
        </div>
      </div>
      
      <div class="custom-color-section">
        <div class="color-input-frame">
          <input 
            type="text" 
            v-model="customColorHex"
            class="color-hex-input"
            placeholder="#9B74B7"
            @input="updateCustomColor"
          />
          <div class="eyedropper-icon">
            <i class="fa-solid fa-eye-dropper-full"></i>
          </div>
        </div>
        <div class="custom-color-container" :class="{ 'selected': selectedColor === customColor }">
          <div 
            class="color-swatch custom-swatch" 
            :style="{ backgroundColor: customColor }"
            @click="selectColor(customColor)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineEmits, defineProps } from 'vue'

// Props
interface Props {
  modelValue?: { icon: string; color: string } | null
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  disabled: false
})

// Emits
const emit = defineEmits<{
  'update:modelValue': [value: { icon: string; color: string } | null]
  'icon-selected': [icon: string]
  'color-selected': [color: string]
}>()

// Reactive data
const searchQuery = ref('')
const selectedIcon = ref<{ name: string } | null>(null)
const selectedColor = ref('#476887')
const customColorHex = ref('#9B74B7')
const customColor = ref('#9B74B7')
const visibleIconsCount = 130

// FontAwesome 6 Pro icons (extensive collection for designers)
const allIcons = ref([
  // Basic Icons
  { name: 'house' },
  { name: 'circle-user' },
  { name: 'image' },
  { name: 'file' },
  { name: 'camera' },
  { name: 'calendar' },
  { name: 'cloud' },
  { name: 'alarm-clock' },
  { name: 'truck' },
  { name: 'thumbs-up' },
  { name: 'face-smile' },
  { name: 'headphones' },
  { name: 'bell' },
  { name: 'user' },
  { name: 'comment' },
  { name: 'envelope' },
  { name: 'magnifying-glass' },
  { name: 'check' },
  { name: 'download' },
  { name: 'font-awesome' },
  
  // Navigation & UI
  { name: 'arrow-right' },
  { name: 'arrow-left' },
  { name: 'arrow-up' },
  { name: 'arrow-down' },
  { name: 'chevron-right' },
  { name: 'chevron-left' },
  { name: 'chevron-up' },
  { name: 'chevron-down' },
  { name: 'caret-right' },
  { name: 'caret-left' },
  { name: 'caret-up' },
  { name: 'caret-down' },
  { name: 'angles-right' },
  { name: 'angles-left' },
  { name: 'angles-up' },
  { name: 'angles-down' },
  
  // Actions & Controls
  { name: 'plus' },
  { name: 'minus' },
  { name: 'xmark' },
  { name: 'check' },
  { name: 'pencil' },
  { name: 'trash' },
  { name: 'gear' },
  { name: 'ellipsis' },
  { name: 'ellipsis-vertical' },
  { name: 'bars' },
  { name: 'grip' },
  { name: 'grip-vertical' },
  
  // Media & Content
  { name: 'play' },
  { name: 'pause' },
  { name: 'stop' },
  { name: 'forward' },
  { name: 'backward' },
  { name: 'volume-high' },
  { name: 'volume-low' },
  { name: 'volume-xmark' },
  { name: 'music' },
  { name: 'video' },
  { name: 'film' },
  { name: 'camera-retro' },
  { name: 'microphone' },
  { name: 'microphone-slash' },
  
  // Communication
  { name: 'phone' },
  { name: 'phone-slash' },
  { name: 'message' },
  { name: 'comments' },
  { name: 'at' },
  { name: 'hashtag' },
  { name: 'quote-left' },
  { name: 'quote-right' },
  
  // Files & Documents
  { name: 'folder' },
  { name: 'folder-open' },
  { name: 'file-text' },
  { name: 'file-pdf' },
  { name: 'file-image' },
  { name: 'file-video' },
  { name: 'file-audio' },
  { name: 'file-code' },
  { name: 'file-archive' },
  { name: 'clipboard' },
  { name: 'clipboard-check' },
  { name: 'clipboard-list' },
  
  // Social & Sharing
  { name: 'share' },
  { name: 'share-nodes' },
  { name: 'link' },
  { name: 'unlink' },
  { name: 'heart' },
  { name: 'thumbs-up' },
  { name: 'thumbs-down' },
  { name: 'star' },
  { name: 'bookmark' },
  
  // Status & Feedback
  { name: 'circle-check' },
  { name: 'circle-xmark' },
  { name: 'circle-info' },
  { name: 'circle-exclamation' },
  { name: 'triangle-exclamation' },
  { name: 'circle-question' },
  { name: 'shield-check' },
  { name: 'shield-xmark' },
  
  // Time & Calendar
  { name: 'clock' },
  { name: 'calendar-days' },
  { name: 'calendar-week' },
  { name: 'calendar-plus' },
  { name: 'calendar-minus' },
  { name: 'hourglass' },
  { name: 'stopwatch' },
  
  // Location & Maps
  { name: 'location-dot' },
  { name: 'location-pin' },
  { name: 'map' },
  { name: 'map-pin' },
  { name: 'compass' },
  { name: 'globe' },
  
  // Shopping & Commerce
  { name: 'cart-shopping' },
  { name: 'cart-plus' },
  { name: 'cart-arrow-down' },
  { name: 'bag-shopping' },
  { name: 'credit-card' },
  { name: 'money-bill' },
  { name: 'coins' },
  { name: 'receipt' },
  { name: 'tag' },
  { name: 'tags' },
  
  // Technology & Tools
  { name: 'laptop' },
  { name: 'desktop' },
  { name: 'mobile' },
  { name: 'tablet' },
  { name: 'wifi' },
  { name: 'bluetooth' },
  { name: 'usb' },
  { name: 'battery-full' },
  { name: 'battery-half' },
  { name: 'battery-empty' },
  { name: 'plug' },
  { name: 'power-off' },
  
  // Security & Privacy
  { name: 'lock' },
  { name: 'lock-open' },
  { name: 'key' },
  { name: 'eye' },
  { name: 'eye-slash' },
  { name: 'user-secret' },
  { name: 'fingerprint' },
  
  // Weather & Nature
  { name: 'sun' },
  { name: 'moon' },
  { name: 'cloud' },
  { name: 'cloud-rain' },
  { name: 'cloud-snow' },
  { name: 'bolt' },
  { name: 'rainbow' },
  { name: 'temperature-high' },
  { name: 'temperature-low' },
  { name: 'tree' },
  { name: 'leaf' },
  { name: 'snowflake' },
  
  // Transportation
  { name: 'car' },
  { name: 'truck' },
  { name: 'bicycle' },
  { name: 'motorcycle' },
  { name: 'bus' },
  { name: 'train' },
  { name: 'plane' },
  { name: 'ship' },
  { name: 'rocket' },
  { name: 'helicopter' },
  
  // Health & Medical
  { name: 'heart-pulse' },
  { name: 'stethoscope' },
  { name: 'pills' },
  { name: 'syringe' },
  { name: 'bandage' },
  { name: 'user-doctor' },
  { name: 'hospital' },
  { name: 'ambulance' },
  
  // Sports & Activities
  { name: 'futbol' },
  { name: 'basketball' },
  { name: 'baseball' },
  { name: 'tennis-ball' },
  { name: 'running' },
  { name: 'swimmer' },
  { name: 'bicycle' },
  { name: 'dumbbell' },
  { name: 'trophy' },
  { name: 'medal' },
  
  // Food & Dining
  { name: 'utensils' },
  { name: 'mug-hot' },
  { name: 'wine-glass' },
  { name: 'martini-glass' },
  { name: 'pizza-slice' },
  { name: 'hamburger' },
  { name: 'ice-cream' },
  { name: 'cake-candles' },
  { name: 'apple-whole' },
  { name: 'carrot' },
  
  // Education & Learning
  { name: 'graduation-cap' },
  { name: 'book' },
  { name: 'book-open' },
  { name: 'pencil' },
  { name: 'pen' },
  { name: 'highlighter' },
  { name: 'chalkboard' },
  { name: 'calculator' },
  { name: 'microscope' },
  { name: 'flask' },
  
  // Fun & Entertainment
  { name: 'gamepad' },
  { name: 'dice' },
  { name: 'chess' },
  { name: 'puzzle-piece' },
  { name: 'masks-theater' },
  { name: 'guitar' },
  { name: 'microphone-lines' },
  { name: 'headphones-simple' },
  { name: 'ticket' },
  { name: 'gift' },
  
  // Miscellaneous
  { name: 'magic-wand-sparkles' },
  { name: 'sparkles' },
  { name: 'fire' },
  { name: 'snowman' },
  { name: 'ghost' },
  { name: 'skull' },
  { name: 'poo' },
  { name: 'robot' },
  { name: 'alien' },
  { name: 'hand' },
  { name: 'handshake' },
  { name: 'thumbs-up' },
  { name: 'peace' },
  { name: 'yin-yang' }
])

// Color palette (exact colors from Figma)
const colorPalette = ref([
  '#476887', // Default neutral
  '#2CDE6D', // Green
  '#E3B212', // Yellow  
  '#E42E2E', // Red
  '#0072E5', // Blue
  '#0ECAE4', // Cyan
  '#7201E5', // Violet
  '#E40097'  // Rose
])

// Computed
const filteredIcons = computed(() => {
  if (!searchQuery.value) return allIcons.value
  return allIcons.value.filter(icon => 
    icon.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

// Methods
const selectIcon = (icon: { name: string }) => {
  selectedIcon.value = icon
  emit('icon-selected', icon.name)
  updateModelValue()
}

const selectColor = (color: string) => {
  selectedColor.value = color
  emit('color-selected', color)
  updateModelValue()
}

const updateCustomColor = () => {
  const hex = customColorHex.value
  if (hex.match(/^#[0-9A-F]{6}$/i)) {
    customColor.value = hex
    selectedColor.value = hex
    emit('color-selected', hex)
    updateModelValue()
  }
}

const updateModelValue = () => {
  if (selectedIcon.value && selectedColor.value) {
    emit('update:modelValue', {
      icon: selectedIcon.value.name,
      color: selectedColor.value
    })
  }
}
</script>

<style scoped>
.icon-color-picker {
  width: 344px;
  height: 400px;
  background: #ffffff;
  border: 1px solid #d3dfeb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08), 0px 0px 2px 0px rgba(0, 0, 0, 0.06);
}

/* Search Bar */
.search-container {
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  gap: 8px;
  border-bottom: 1px solid #e5ecf3;
  flex-shrink: 0;
}

.search-icon {
  width: 16px;
  height: 16px;
  color: #476887;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.search-input-container {
  flex: 1;
  min-width: 0;
}

.search-input {
  width: 100%;
  border: none;
  outline: none;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #476887;
  background: transparent;
}

.search-input::placeholder {
  color: #476887;
}

/* Grid Container - Autolayout equivalent with proper scrolling */
.grid-container {
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

.icon-cell.selected {
  background-color: #e5ecf3;
}

.icon-cell i {
  font-size: 18px;
  color: v-bind(selectedColor);
  font-weight: 900;
  text-align: center;
  line-height: 1;
}

/* Footer - Autolayout equivalent */
.footer {
  height: 48px;
  background: #fbfcfe;
  border-radius: 0 0 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  gap: 12px;
  flex-shrink: 0;
  box-sizing: border-box;
}

.color-palette {
  display: flex;
  gap: 4px;
  align-items: center;
}

.color-container {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  padding: 2px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.color-container:hover {
  background-color: #e5ecf3;
}

.color-container.selected {
  background-color: #ffffff;
  box-shadow: 0 0 0 2px #476887;
  border-radius: 50%;
}

.color-swatch {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

/* Custom Color Section - Proper autolayout */
.custom-color-section {
  display: flex;
  align-items: center;
  gap: 8px;
}

.color-input-frame {
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 4px;
  padding: 4px 8px;
  border: 1px solid #e5ecf3;
  height: 20px;
  box-sizing: border-box;
  gap: 4px;
}

.color-hex-input {
  border: none;
  outline: none;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #000000;
  background: transparent;
  width: 52px;
  min-width: 0;
}

.eyedropper-icon {
  width: 12px;
  height: 12px;
  color: #476887;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.custom-color-container {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  padding: 2px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-color-container:hover {
  background-color: #e5ecf3;
}

.custom-color-container.selected {
  background-color: #ffffff;
  box-shadow: 0 0 0 2px #476887;
  border-radius: 50%;
}

.custom-swatch {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}
</style> 