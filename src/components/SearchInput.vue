<template>
  <div class="search-input">
    <div class="search-icon">
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <div class="input-container">
      <input 
        type="text" 
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :disabled="disabled"
        class="input-field"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string
  placeholder?: string
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
  placeholder: 'Search',
  disabled: false
})

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<style scoped>
.search-input {
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

.input-container {
  flex: 1;
  min-width: 0;
}

.input-field {
  width: 100%;
  border: none;
  outline: none;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #476887;
  background: transparent;
}

.input-field::placeholder {
  color: #476887;
}

.input-field:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style> 