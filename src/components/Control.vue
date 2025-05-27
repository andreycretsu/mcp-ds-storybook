<template>
  <div
    class="control"
    :class="[
      `type-${type}`,
      `size-${size}`,
      `state-${state}`,
      { active }
    ]"
  >
    <!-- Checkbox -->
    <template v-if="type === 'checkbox'">
      <div class="checkbox-bg">
        <div v-if="active" class="checkbox-check">
          <span class="fa-solid fa-check"></span>
        </div>
        <div class="checkbox-partial"></div>
      </div>
    </template>
    <!-- Toggle -->
    <template v-else-if="type === 'toggle'">
      <div class="toggle-bg">
        <div class="toggle-circle"></div>
      </div>
    </template>
    <!-- Radio -->
    <template v-else-if="type === 'radio'">
      <div class="radio-bg">
        <div v-if="active" class="radio-dot"></div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  type?: 'checkbox' | 'toggle' | 'radio'
  size?: 'M' | 'S'
  state?: 'default' | 'hover' | 'disabled'
  active?: boolean
}>()
</script>

<style scoped>
.control {
  display: flex;
  align-items: center;
}

.type-checkbox.size-M,
.type-toggle.size-M,
.type-radio.size-M {
  justify-content: flex-start;
}

/* Checkbox styles */
.type-checkbox.size-M .checkbox-bg {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background: #fbfcfe;
  border: 1px solid #91a4b7;
  position: relative;
}
.type-checkbox.size-S .checkbox-bg {
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background: #fbfcfe;
  border: 1px solid #91a4b7;
  position: relative;
}
.type-checkbox.state-hover .checkbox-bg {
  border-color: #6c869f;
  background: #f6f9fb;
}
.type-checkbox.active .checkbox-bg {
  border-color: #2c8dff;
  background: #2c8dff;
}
.type-checkbox.active.state-hover .checkbox-bg {
  border-color: #127ffe;
  background: #127ffe;
}
.type-checkbox.state-disabled .checkbox-bg {
  opacity: 0.5;
  cursor: not-allowed;
}
.checkbox-check {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
.size-S .checkbox-check {
  width: 12px;
  height: 12px;
  font-size: 10px;
}
.checkbox-partial {
  /* For partial state, if needed */
}

/* Toggle styles */
.type-toggle.size-M .toggle-bg {
  width: 32px;
  height: 20px;
  border-radius: 10px;
  background: #91a4b7;
  position: relative;
  transition: background 0.2s;
}
.type-toggle.size-S .toggle-bg {
  width: 28px;
  height: 16px;
  border-radius: 10px;
  background: #91a4b7;
  position: relative;
  transition: background 0.2s;
}
.type-toggle.state-hover .toggle-bg {
  background: #6c869f;
}
.type-toggle.active .toggle-bg {
  background: #2c8dff;
}
.type-toggle.active.state-hover .toggle-bg {
  background: #127ffe;
}
.type-toggle.state-disabled .toggle-bg {
  opacity: 0.5;
  cursor: not-allowed;
}
.toggle-circle {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fff;
  transition: left 0.2s;
}
.type-toggle.size-S .toggle-circle {
  top: 2px;
  left: 2px;
  width: 12px;
  height: 12px;
}
.type-toggle.active .toggle-circle {
  left: 16px;
}
.type-toggle.size-S.active .toggle-circle {
  left: 14px;
}

/* Radio styles */
.type-radio.size-M .radio-bg {
  width: 20px;
  height: 20px;
  border-radius: 1000px;
  background: #fbfcfe;
  border: 1px solid #91a4b7;
  position: relative;
}
.type-radio.size-S .radio-bg {
  width: 16px;
  height: 16px;
  border-radius: 1000px;
  background: #fbfcfe;
  border: 1px solid #91a4b7;
  position: relative;
}
.type-radio.state-hover .radio-bg {
  border-color: #6c869f;
  background: #f6f9fb;
}
.type-radio.active .radio-bg {
  border-color: #2c8dff;
  background: #2c8dff;
}
.type-radio.active.state-hover .radio-bg {
  border-color: #127ffe;
  background: #127ffe;
}
.type-radio.state-disabled .radio-bg {
  opacity: 0.5;
  cursor: not-allowed;
}
.radio-dot {
  position: absolute;
  top: 6px;
  left: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #fff;
}
.size-S .radio-dot {
  top: 5px;
  left: 5px;
  width: 6px;
  height: 6px;
}
</style> 