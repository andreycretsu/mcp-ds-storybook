<script setup lang="ts">
// Removed Button import
</script>

<template>
  <div class="app">
    <!-- Removed all Button usage -->
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
