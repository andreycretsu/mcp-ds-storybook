<template>
  <div class="hex-color-input">
    <div class="input-frame">
      <input 
        type="text" 
        :value="modelValue"
        @input="handleInput"
        @blur="validateAndFormat"
        :placeholder="placeholder"
        class="hex-input"
        maxlength="7"
      />
      <div class="eyedropper-icon">
        <i class="fa-solid fa-eye-dropper-full"></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue?: string
  placeholder?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  placeholder: '#9B74B7',
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'color-change': [color: string]
}>()

const isValidHex = (hex: string): boolean => {
  return /^#[0-9A-F]{6}$/i.test(hex)
}

const handleInput = (event: Event) => {
  let value = (event.target as HTMLInputElement).value
  
  // Auto-add # if not present
  if (value.length > 0 && !value.startsWith('#')) {
    value = '#' + value
  }
  
  // Convert to uppercase for consistency
  value = value.toUpperCase()
  
  emit('update:modelValue', value)
  
  // Emit color change if valid
  if (isValidHex(value)) {
    emit('color-change', value)
  }
}

const validateAndFormat = () => {
  let value = props.modelValue
  
  // Try to fix common issues
  if (value && !value.startsWith('#')) {
    value = '#' + value
  }
  
  if (value && value.length === 4) {
    // Convert short hex to long hex (#RGB -> #RRGGBB)
    value = '#' + value.slice(1).split('').map(char => char + char).join('')
  }
  
  if (value && isValidHex(value)) {
    emit('update:modelValue', value.toUpperCase())
    emit('color-change', value.toUpperCase())
  }
}

const inputClass = computed(() => ({
  'hex-input': true,
  'valid': isValidHex(props.modelValue),
  'invalid': props.modelValue.length > 0 && !isValidHex(props.modelValue)
}))
</script>

<style scoped>
.hex-color-input {
  display: flex;
  align-items: center;
}

.input-frame {
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 4px;
  padding: 4px 8px;
  border: 1px solid #e5ecf3;
  height: 20px;
  box-sizing: border-box;
  gap: 4px;
  transition: border-color 0.2s ease;
}

.input-frame:hover {
  border-color: #d3dfeb;
}

.input-frame:focus-within {
  border-color: #476887;
  box-shadow: 0 0 0 1px #476887;
}

.hex-input {
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

.hex-input::placeholder {
  color: #999999;
}

.hex-input.invalid {
  color: #e42e2e;
}

.hex-input.valid {
  color: #2cde6d;
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
  cursor: pointer;
  transition: color 0.2s ease;
}

.eyedropper-icon:hover {
  color: #2c5677;
}
</style> 