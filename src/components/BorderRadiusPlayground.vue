<template>
  <div class="playground-container">
    <div class="controls">
      <div class="shape-controls">
        <div
          v-for="(shape, index) in shapes"
          :key="shape.id"
          class="shape-control"
        >
          <div class="shape-control__header">
            <span>Shape {{ index + 1 }}</span>
            <span class="size-readout">{{ shape.width }} × {{ shape.height }}px</span>
          </div>
          <label>Radius Token</label>
          <select v-model="shape.tokenName">
            <option v-for="token in tokens" :key="token.name" :value="token.name">
              radius-{{ token.name }} ({{ token.ideal }}px / {{ token.fallback }}px)
            </option>
          </select>
          <label>Width</label>
          <input type="range" v-model.number="shape.width" min="40" max="320" />
          <label>Height</label>
          <input type="range" v-model.number="shape.height" min="40" max="320" />
        </div>
      </div>
    </div>

    <div class="preview-grid">
      <div class="preview-column">
        <h3>Ideal (Superellipse)</h3>
        <p class="subtitle">corner-shape: superellipse(2)</p>
        <div class="shapes-container">
          <div
            v-for="shape in shapes"
            :key="'ideal-' + shape.id"
            class="shape ideal-shape"
            :style="{
              width: shape.width + 'px',
              height: shape.height + 'px',
              borderRadius: `var(--radius-${getToken(shape.tokenName).name}-ideal)`
            }"
          ></div>
        </div>
      </div>

      <div class="preview-column">
        <h3>Fallback (Standard)</h3>
        <p class="subtitle">Standard border-radius</p>
        <div class="shapes-container">
          <div
            v-for="shape in shapes"
            :key="'fallback-' + shape.id"
            class="shape fallback-shape"
            :style="{
              width: shape.width + 'px',
              height: shape.height + 'px',
              borderRadius: `var(--radius-${getToken(shape.tokenName).name}-fallback)`
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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

const tokenMap = tokens.reduce<Record<string, (typeof tokens)[number]>>((acc, token) => {
  acc[token.name] = token
  return acc
}, {})

const shapes = ref<{ id: number; width: number; height: number; tokenName: string }[]>(
  Array.from({ length: 5 }, (_, index) => ({
    id: index,
    width: 100,
    height: 100,
    tokenName: '16'
  }))
)

const getToken = (tokenName: string) => tokenMap[tokenName] ?? tokens[0]
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
  gap: 16px;
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

.shape-controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  flex: 1 1 100%;
}

.shape-control {
  display: grid;
  gap: 8px;
  padding: 12px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: white;
}

.shape-control select {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: white;
  font-size: 14px;
}

.shape-control__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  color: #333;
  font-size: 13px;
}

.size-readout {
  font-weight: 500;
  color: #666;
  font-size: 12px;
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
