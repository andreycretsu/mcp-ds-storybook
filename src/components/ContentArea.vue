<template>
  <div 
    :class="[
      'content-area',
      `content-area--type-${type}`
    ]"
    :data-name="`type=${type}`"
  >
    <div class="content-area__container">
      <div class="content-area__fields">
        <div class="content-area__field">
          <div class="content-area__field-label">Objective name</div>
          <div class="content-area__field-input">
            <div class="content-area__input-content">
              <div class="content-area__input-text">Enter text</div>
            </div>
            <div class="content-area__input-border"></div>
          </div>
        </div>
        
        <div class="content-area__field">
          <div class="content-area__field-label">Description</div>
          <div class="content-area__field-input">
            <div class="content-area__input-content">
              <div class="content-area__input-text">Enter text</div>
            </div>
            <div class="content-area__input-border"></div>
          </div>
        </div>
        
        <div class="content-area__field">
          <div class="content-area__field-label">Tags</div>
          <div class="content-area__field-input">
            <div class="content-area__input-content">
              <div class="content-area__input-text">Enter text</div>
            </div>
            <div class="content-area__input-border"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-area__border"></div>
  </div>
</template>

<script setup lang="ts">
interface ContentAreaProps {
  type?: 'inputs' | 'multi-section' | 'text' | 'rich-text' | 'table'
}

const props = withDefaults(defineProps<ContentAreaProps>(), {
  type: 'inputs'
})
</script>

<style scoped>
.content-area {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.content-area__container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: stretch;
  justify-content: flex-start;
  padding: 16px 20px;
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.content-area__fields {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
  flex-shrink: 0;
  box-sizing: border-box;
}

.content-area__field {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
  flex-shrink: 0;
  box-sizing: border-box;
}

.content-area__field-label {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 10px;
  line-height: 1;
  color: #000f30;
  position: relative;
  flex-shrink: 0;
  width: 100%;
  height: 10px;
  box-sizing: border-box;
}

.content-area__field-input {
  background-color: #f6f9fb;
  border-radius: 6px;
  position: relative;
  flex-shrink: 0;
  width: 100%;
  box-sizing: border-box;
}

.content-area__input-content {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: clip;
  padding: 8px 12px;
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

.content-area__input-text {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.36;
  color: #476887;
  flex: 1;
  min-width: 0;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
}

.content-area__input-border {
  position: absolute;
  border: 1px solid #e5ecf3;
  border-radius: 6.5px;
  inset: -0.5px;
  pointer-events: none;
  box-sizing: border-box;
}

.content-area__border {
  position: absolute;
  border: 1px solid #e5ecf3;
  inset: -0.5px;
  pointer-events: none;
  box-sizing: border-box;
}

/* Type variants */
.content-area--type-multi-section {
  /* Additional styling for multi-section type */
}

.content-area--type-text {
  /* Additional styling for text type */
}

.content-area--type-rich-text {
  /* Additional styling for rich-text type */
}

.content-area--type-table {
  /* Additional styling for table type */
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .content-area__container {
    padding: 12px 16px;
    gap: 12px;
  }
  
  .content-area__fields {
    gap: 12px;
  }
}
</style>
