<script setup lang="ts">
import Button from './components/Button.vue'
</script>

<template>
  <div class="app">
    <div class="button-grid">
      <!-- Large Fixed Buttons -->
      <div class="button-group">
        <h3>Large Fixed Buttons</h3>
        <Button
          label="Button"
          description="Description text"
          size="L"
          type="Fixed"
          :active="true"
        />
        <Button
          label="Button"
          description="Description text"
          size="L"
          type="Fixed"
          :disabled="true"
        />
        <Button
          label="Button"
          description="Description text"
          size="L"
          type="Fixed"
          :active="false"
        />
      </div>

      <!-- Large Hug Buttons -->
      <div class="button-group">
        <h3>Large Hug Buttons</h3>
        <Button
          label="Button"
          description="Description text"
          size="L"
          type="Hug"
          :active="true"
        />
        <Button
          label="Button"
          description="Description text"
          size="L"
          type="Hug"
          :disabled="true"
        />
        <Button
          label="Button"
          description="Description text"
          size="L"
          type="Hug"
          :active="false"
        />
      </div>

      <!-- Medium Fixed Buttons -->
      <div class="button-group">
        <h3>Medium Fixed Buttons</h3>
        <Button
          label="Button"
          description="Description text"
          size="M"
          type="Fixed"
          :active="true"
        />
        <Button
          label="Button"
          description="Description text"
          size="M"
          type="Fixed"
          :disabled="true"
        />
        <Button
          label="Button"
          description="Description text"
          size="M"
          type="Fixed"
          :active="false"
        />
      </div>

      <!-- Medium Hug Buttons -->
      <div class="button-group">
        <h3>Medium Hug Buttons</h3>
        <Button
          label="Button"
          description="Description text"
          size="M"
          type="Hug"
          :active="true"
        />
        <Button
          label="Button"
          description="Description text"
          size="M"
          type="Hug"
          :disabled="true"
        />
        <Button
          label="Button"
          description="Description text"
          size="M"
          type="Hug"
          :active="false"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f5f5f5;
  padding: 2rem;
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h3 {
  margin: 0;
  font-size: 1rem;
  color: #333;
}
</style>
