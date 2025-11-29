<template>
  <div class="modal-header">
    <div class="modal-header__content">
      <div v-if="headIcon" class="modal-header__head-icon">
        <Icon 
          :status="status" 
          :icon="getStatusIcon(status)"
        />
      </div>
      <div class="modal-header__title-section">
        <div class="modal-header__title">{{ title }}</div>
        <div v-if="showBadge" class="modal-header__badge">
          <Badge 
            :label="badgeLabel"
            :color="badgeColor"
            :emphasis="badgeEmphasis"
            size="M"
          />
        </div>
      </div>
      <div class="modal-header__description">{{ description }}</div>
    </div>
    <div class="modal-header__close-action">
      <CloseAction :state="closeActionState" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from './Icon.vue'
import CloseAction from './CloseAction.vue'
import Badge from './Badge.vue'

interface ModalHeaderProps {
  headIcon?: boolean
  title?: string
  description?: string
  status?: 'default' | 'success' | 'warning' | 'info' | 'error'
  closeActionState?: 'default' | 'hover' | 'active' | 'focus' | 'disabled'
  showBadge?: boolean
  badgeLabel?: string
  badgeColor?: 'Green' | 'Blue' | 'Yellow' | 'Red' | 'Cyan' | 'Violet' | 'Rose' | 'White' | 'Grey'
  badgeEmphasis?: 'Low' | 'High'
}

const props = withDefaults(defineProps<ModalHeaderProps>(), {
  headIcon: true,
  title: 'Modal Title',
  description: 'This is a description of what this modal does.',
  status: 'default',
  closeActionState: 'default',
  showBadge: false,
  badgeLabel: 'New',
  badgeColor: 'Blue',
  badgeEmphasis: 'Low'
})

const getStatusIcon = (status: string) => {
  const icons = {
    success: 'fa-solid fa-check',
    warning: 'fa-solid fa-exclamation-triangle',
    info: 'fa-solid fa-info-circle',
    error: 'fa-solid fa-times-circle',
    default: 'fa-solid fa-cog'
  }
  return icons[status as keyof typeof icons] || icons.default
}
</script>

<style scoped>
.modal-header {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px 20px 12px 20px;
  position: relative;
  width: 100%;
  flex-shrink: 0;
  z-index: 3;
  box-sizing: border-box;
  min-height: 80px; /* Consistent minimum height */
}

.modal-header__content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
  min-width: 0;
  min-height: 0;
  position: relative;
  flex-shrink: 0;
}

.modal-header__head-icon {
  background-color: #edf2f7;
  border-radius: 4px;
  position: relative;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
}

.modal-header__title-section {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  min-height: 24px; /* Consistent height for title section */
}

.modal-header__title {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.24;
  color: #000f30;
  position: relative;
  flex-shrink: 0;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}

.modal-header__badge {
  flex-shrink: 0;
}

.modal-header__description {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  color: #000f30;
  position: relative;
  flex-shrink: 0;
  width: min-content;
  min-width: 100%;
}

.modal-header__close-action {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  position: relative;
  border-radius: 4px;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin-left: auto;
}
</style>
