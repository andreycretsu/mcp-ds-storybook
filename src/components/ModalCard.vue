<template>
  <div 
    :class="[
      'modal-card',
      `modal-card--size-${size}`,
      `modal-card--status-${status}`,
      `modal-card--type-${type}`
    ]"
    :data-name="`size=${size}, status=${status}, type=${type}`"
  >
    <div class="modal-card__container">
      <!-- Header Section -->
      <ModalHeader
        :headIcon="headIcon"
        :title="title"
        :description="description"
        :status="status"
        :closeActionState="closeActionState"
        :showBadge="showBadge"
        :badgeLabel="badgeLabel"
        :badgeColor="badgeColor"
        :badgeEmphasis="badgeEmphasis"
      />

      <!-- Content Area - Only show when contentArea is true -->
      <div v-if="contentArea" class="modal-card__content-area">
        <ContentArea :type="contentType" />
      </div>

      <!-- Footer -->
      <ModalFooter
        :leftButton="leftButton"
        :leftButtonLabel="leftButtonLabel"
        :leftButtonState="leftButtonState"
        :leftButtonIcon="leftButtonIcon"
        :leftButtonIconPosition="leftButtonIconPosition"
        :rightButton1="rightButton1"
        :rightButton1Label="rightButton1Label"
        :rightButton1State="rightButton1State"
        :rightButton1Icon="rightButton1Icon"
        :rightButton1IconPosition="rightButton1IconPosition"
        :rightButton2="rightButton2"
        :rightButton2Label="rightButton2Label"
        :rightButton2State="rightButton2State"
        :rightButton2Icon="rightButton2Icon"
        :rightButton2IconPosition="rightButton2IconPosition"
        :status="status"
      />
    </div>
    <div class="modal-card__border"></div>
  </div>
</template>

<script setup lang="ts">
import ModalHeader from './ModalHeader.vue'
import ModalFooter from './ModalFooter.vue'
import ContentArea from './ContentArea.vue'

interface ModalCardProps {
  headIcon?: boolean
  title?: string
  description?: string
  contentArea?: boolean
  contentType?: 'inputs' | 'multi-section' | 'text' | 'rich-text' | 'table'
  leftButton?: boolean
  leftButtonLabel?: string
  leftButtonIcon?: string
  leftButtonIconPosition?: 'left' | 'right'
  leftButtonState?: 'default' | 'hover' | 'active' | 'focus' | 'disabled'
  rightButton1?: boolean
  rightButton1Label?: string
  rightButton1Icon?: string
  rightButton1IconPosition?: 'left' | 'right'
  rightButton1State?: 'default' | 'hover' | 'active' | 'focus' | 'disabled'
  rightButton2?: boolean
  rightButton2Label?: string
  rightButton2Icon?: string
  rightButton2IconPosition?: 'left' | 'right'
  rightButton2State?: 'default' | 'hover' | 'active' | 'focus' | 'disabled'
  size?: 's' | 'm' | 'l'
  status?: 'default' | 'success' | 'warning' | 'info' | 'error'
  type?: 'default' | 'form' | 'confirmation' | 'information' | 'warning' | 'error'
  closeActionState?: 'default' | 'hover' | 'active' | 'focus' | 'disabled'
  showBadge?: boolean
  badgeLabel?: string
  badgeColor?: 'Green' | 'Blue' | 'Yellow' | 'Red' | 'Cyan' | 'Violet' | 'Rose' | 'White' | 'Grey'
  badgeEmphasis?: 'Low' | 'High'
}

const props = withDefaults(defineProps<ModalCardProps>(), {
  headIcon: true,
  title: 'Modal Title',
  description: 'This is a description of what this modal does.',
  contentArea: true,
  contentType: 'inputs',
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
  size: 's',
  status: 'default',
  type: 'default',
  closeActionState: 'default',
  showBadge: false,
  badgeLabel: '',
  badgeColor: 'White',
  badgeEmphasis: 'Low'
})
</script>

<style scoped>
.modal-card {
  position: relative;
  background-color: #ffffff;
  border-radius: 10px;
  width: fit-content;
  min-width: fit-content;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-card__container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  isolation: isolate;
  box-sizing: border-box;
}

.modal-card__content-area {
  position: relative;
  width: 100%;
  z-index: 2;
  flex: 1;
  min-height: 0;
  box-sizing: border-box;
}

.modal-card__border {
  position: absolute;
  border: 1px solid #d3dfeb;
  border-radius: 10.5px;
  inset: -0.5px;
  pointer-events: none;
  box-shadow: 0px 6px 16px 0px rgba(9, 8, 61, 0.12);
}

/* Size variants with exact Figma dimensions and hug content behavior */
.modal-card--size-s {
  width: 480px;
  min-width: 480px;
  max-width: 480px;
}

.modal-card--size-m {
  width: 760px;
  min-width: 760px;
  max-width: 760px;
}

.modal-card--size-l {
  width: 1040px;
  min-width: 1040px;
  max-width: 1040px;
}

/* Type variants */
.modal-card--type-form {
  /* Form-specific styling */
}

.modal-card--type-confirmation {
  /* Confirmation-specific styling */
}

.modal-card--type-information {
  /* Information-specific styling */
}

.modal-card--type-warning {
  /* Warning-specific styling */
}

.modal-card--type-error {
  /* Error-specific styling */
}

/* Status variants */
.modal-card--status-success {
  /* Success-specific styling */
}

.modal-card--status-warning {
  /* Warning-specific styling */
}

.modal-card--status-info {
  /* Info-specific styling */
}

.modal-card--status-error {
  /* Error-specific styling */
}

/* Responsive design with hug content */
@media (max-width: 1200px) {
  .modal-card--size-l {
    width: calc(100vw - 32px);
    min-width: 480px;
    max-width: calc(100vw - 32px);
  }
}

@media (max-width: 900px) {
  .modal-card--size-m,
  .modal-card--size-l {
    width: calc(100vw - 32px);
    min-width: 480px;
    max-width: calc(100vw - 32px);
  }
}

@media (max-width: 600px) {
  .modal-card--size-s,
  .modal-card--size-m,
  .modal-card--size-l {
    width: calc(100vw - 16px);
    min-width: 320px;
    max-width: calc(100vw - 16px);
  }
}
</style>
