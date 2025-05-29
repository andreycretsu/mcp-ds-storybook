<template>
  <div class="color-palette">
    <ColorSwatch
      v-for="color in colors"
      :key="color"
      :color="color"
      :is-selected="selectedColor === color"
      :size="props.size"
      @color-selected="onColorSelected"
    />
  </div>
</template>

<script setup lang="ts">
import ColorSwatch from './ColorSwatch.vue'

interface Props {
  colors: string[]
  selectedColor?: string | null
  size?: 'small' | 'medium' | 'large'
}

const props = withDefaults(defineProps<Props>(), {
  colors: () => [],
  selectedColor: null,
  size: 'medium'
})

const emit = defineEmits<{
  'color-selected': [color: string]
}>()

const onColorSelected = (color: string) => {
  emit('color-selected', color)
}
</script>

<style scoped>
.color-palette {
  display: flex;
  gap: 4px;
  align-items: center;
}
</style> 