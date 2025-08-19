<template>
  <div 
    :class="[
      'modal-footer',
      `modal-footer--status-${status}`
    ]"
  >
    <div v-if="leftButton" class="modal-footer__left-button">
      <Button 
        :label="leftButtonLabel" 
        variant="secondary" 
        size="md"
        :icon="leftButtonIcon"
        :iconPosition="leftButtonIconPosition"
        :state="leftButtonState"
      />
    </div>
    <div class="modal-footer__right-actions">
      <div v-if="rightButton1" class="modal-footer__right-button-1">
        <Button 
          :label="rightButton1Label" 
          variant="secondary" 
          size="md"
          :icon="rightButton1Icon"
          :iconPosition="rightButton1IconPosition"
          :state="rightButton1State"
        />
      </div>
      <div v-if="rightButton2" class="modal-footer__right-button-2">
        <Button 
          :label="rightButton2Label" 
          :variant="status === 'error' ? 'destructive' : 'primary'" 
          size="md"
          :icon="rightButton2Icon"
          :iconPosition="rightButton2IconPosition"
          :state="rightButton2State"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from './Button.vue'

interface ModalFooterProps {
  leftButton?: boolean
  leftButtonLabel?: string
  leftButtonIcon?: string
  leftButtonIconPosition?: 'left' | 'right'
  leftButtonState?: 'default' | 'hover' | 'active' | 'pressed' | 'disabled'
  rightButton1?: boolean
  rightButton1Label?: string
  rightButton1Icon?: string
  rightButton1IconPosition?: 'left' | 'right'
  rightButton1State?: 'default' | 'hover' | 'active' | 'pressed' | 'disabled'
  rightButton2?: boolean
  rightButton2Label?: string
  rightButton2Icon?: string
  rightButton2IconPosition?: 'left' | 'right'
  rightButton2State?: 'default' | 'hover' | 'active' | 'pressed' | 'disabled'
  status?: 'default' | 'success' | 'warning' | 'info' | 'error'
}

const props = withDefaults(defineProps<ModalFooterProps>(), {
  leftButton: true,
  leftButtonLabel: 'Cancel',
  leftButtonIcon: '',
  leftButtonIconPosition: 'left',
  leftButtonState: 'default',
  rightButton1: false,
  rightButton1Label: 'Secondary',
  rightButton1Icon: '',
  rightButton1IconPosition: 'left',
  rightButton1State: 'default',
  rightButton2: true,
  rightButton2Label: 'Confirm',
  rightButton2Icon: '',
  rightButton2IconPosition: 'left',
  rightButton2State: 'default',
  status: 'default'
})
</script>

<style scoped>
.modal-footer {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: flex-start;
  overflow: clip;
  padding: 12px 20px;
  position: relative;
  width: 100%;
  flex-shrink: 0;
  z-index: 1;
  min-height: 60px;
  box-sizing: border-box;
}

.modal-footer__left-button {
  flex-shrink: 0;
}

.modal-footer__right-actions {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  min-width: 0;
  min-height: 0;
  position: relative;
  flex-shrink: 0;
}

.modal-footer__right-button-1,
.modal-footer__right-button-2 {
  flex-shrink: 0;
}

/* Status-specific styling */
.modal-footer--status-error .modal-footer__right-button-2 {
  /* Destructive button styling is handled by the Button component */
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .modal-footer {
    gap: 16px;
    padding: 12px 16px;
    flex-direction: column;
    align-items: stretch;
  }
  
  .modal-footer__right-actions {
    justify-content: stretch;
    gap: 12px;
  }
  
  .modal-footer__right-button-1,
  .modal-footer__right-button-2 {
    flex: 1;
  }
}
</style>
