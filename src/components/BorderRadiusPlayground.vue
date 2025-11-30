<template>
  <div class="playground-container">
    <div class="controls">
      <div class="control-group">
        <label>Shape Width: {{ width }}px</label>
        <input type="range" v-model.number="width" min="20" max="400" />
      </div>
      <div class="control-group">
        <label>Shape Height: {{ height }}px</label>
        <input type="range" v-model.number="height" min="20" max="400" />
      </div>
      <div class="control-group">
        <label>Radius Token</label>
        <select v-model="selectedToken">
          <option v-for="token in tokens" :key="token.name" :value="token">
            radius-{{ token.name }} ({{ token.ideal }}px / {{ token.fallback }}px)
          </option>
        </select>
      </div>
    </div>

    <div class="preview-grid">
      <div class="preview-column">
        <h3>Ideal (Superellipse)</h3>
        <p class="subtitle">corner-shape: superellipse(2)</p>
        <div class="shapes-container">
          <div
            v-for="n in 5"
            :key="'ideal-' + n"
            class="shape ideal-shape"
            :style="{
              width: width + 'px',
              height: height + 'px',
              borderRadius: `var(--radius-${selectedToken.name}-ideal)`
            }"
          ></div>
        </div>
      </div>

      <div class="preview-column">
        <h3>Fallback (Standard)</h3>
        <p class="subtitle">Standard border-radius</p>
        <div class="shapes-container">
          <div
            v-for="n in 5"
            :key="'fallback-' + n"
            class="shape fallback-shape"
            :style="{
              width: width + 'px',
              height: height + 'px',
              borderRadius: `var(--radius-${selectedToken.name}-fallback)`
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const width = ref(100)
const height = ref(100)

const tokens = [
  { name: '02', ideal: 2, fallback: 2 },
  { name: '04', ideal: 4, fallback: 2 },
  { name: '06', ideal: 6, fallback: 4 },
  { name: '08', ideal: 8, fallback: 4 },
  { name: '10', ideal: 10, fallback: 4 },
  { name: '12', ideal: 12, fallback: 6 },
  { name: '14', ideal: 14, fallback: 6 },
  { name: '16', ideal: 16, fallback: 6 },
  { name: '18', ideal: 18, fallback: 8 },
  { name: '20', ideal: 20, fallback: 8 },
  { name: '22', ideal: 22, fallback: 8 },
  { name: '24', ideal: 24, fallback: 10 },
  { name: '26', ideal: 26, fallback: 10 },
  { name: '28', ideal: 28, fallback: 12 },
  { name: '30', ideal: 30, fallback: 12 },
  { name: '32', ideal: 32, fallback: 12 },
  { name: '34', ideal: 34, fallback: 14 },
  { name: '36', ideal: 36, fallback: 14 },
  { name: '38', ideal: 38, fallback: 14 },
  { name: '40', ideal: 40, fallback: 16 },
  { name: '42', ideal: 42, fallback: 16 },
  { name: '44', ideal: 44, fallback: 16 },
  { name: '46', ideal: 46, fallback: 18 },
  { name: '48', ideal: 48, fallback: 18 }
]

const selectedToken = ref(tokens[7]) // Default to radius-16
</script>

<style scoped>
.playground-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px;
  background: #fcfcfc;
  border: 1px solid #eee;
  border-radius: 8px;
  margin-bottom: 48px;
}

.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #eee;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 200px;
}

.control-group label {
  font-size: 12px;
  font-weight: 600;
  color: #444;
}

.control-group input[type="range"] {
  width: 100%;
  cursor: pointer;
}

.control-group select {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: white;
  font-size: 14px;
}

.preview-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

.preview-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.preview-column h3 {
  margin: 0;
  font-size: 16px;
  color: #333;
}

.subtitle {
  margin: 0;
  font-size: 12px;
  color: #666;
  font-family: monospace;
}

.shapes-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center; /* Center shapes in their column */
  padding: 24px;
  background: #f6f9fb;
  border-radius: 8px;
  min-height: 400px; /* Ensure enough space */
  overflow: auto;
}

.shape {
  background-color: #338eea;
  transition: all 0.2s ease;
}

.ideal-shape {
  /* Requires experimental flag or CSS Houdini in some browsers */
  corner-shape: superellipse(var(--superK));
  -webkit-corner-shape: superellipse(var(--superK));
}

.fallback-shape {
  opacity: 0.8;
}
</style>

