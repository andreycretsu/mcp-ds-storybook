<template>
  <div 
    :class="[
      'close-action',
      `close-action--state-${state}`
    ]"
    :data-name="`State=${state}`"
  >
    <div class="close-action__icon">
      <Icon 
        icon="fa-solid fa-xmark" 
        size="sm"
        color="#476887"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from './Icon.vue'

interface CloseActionProps {
  state?: 'default' | 'hover' | 'active' | 'focus' | 'disabled'
}

const props = withDefaults(defineProps<CloseActionProps>(), {
  state: 'default'
})
</script>

<style scoped>
.close-action {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  position: relative;
  border-radius: 4px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  box-sizing: border-box;
}

.close-action__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

/* State variants */
.close-action--state-default {
  background-color: transparent;
}

.close-action--state-hover {
  background-color: #f6f9fb;
}

.close-action--state-active {
  background-color: #e5ecf3;
}

.close-action--state-focus {
  background-color: #f6f9fb;
  outline: 2px solid #338eea;
  outline-offset: 2px;
}

.close-action--state-disabled {
  background-color: transparent;
  cursor: not-allowed;
  opacity: 0.5;
}

.close-action--state-disabled .close-action__icon {
  opacity: 0.5;
}
</style>
