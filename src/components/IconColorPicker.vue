<template>
  <div class="icon-color-picker">
    <!-- Search Input -->
    <SearchInput
      v-model="searchQuery"
      placeholder="Search"
    />

    <!-- Icon Grid -->
    <IconGrid
      :icons="allIcons"
      :search-query="searchQuery"
      :selected-icon="selectedIcon"
      :icon-color="selectedColor"
      @icon-selected="selectIcon"
    />

    <!-- Color Selection Footer -->
    <div class="footer">
      <!-- Color Palette -->
      <ColorPalette
        :colors="colorPalette"
        :selected-color="selectedColor"
        @color-selected="selectColor"
      />
      
      <!-- Custom Color Section -->
      <div class="custom-color-section">
        <HexColorInput
          v-model="customColorHex"
          @color-change="updateCustomColor"
        />
        <ColorSwatch
          :color="customColor"
          :is-selected="selectedColor === customColor"
          @color-selected="selectColor"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SearchInput from './SearchInput.vue'
import IconGrid from './IconGrid.vue'
import ColorPalette from './ColorPalette.vue'
import ColorSwatch from './ColorSwatch.vue'
import HexColorInput from './HexColorInput.vue'

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

// The IconGrid component now handles filtering internally

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

const updateCustomColor = (hex: string) => {
  customColor.value = hex
  selectedColor.value = hex
  emit('color-selected', hex)
  updateModelValue()
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

/* Footer - Clean layout for composed components */
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

/* Custom Color Section - Proper autolayout */
.custom-color-section {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style> 