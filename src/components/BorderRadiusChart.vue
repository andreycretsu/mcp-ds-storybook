<template>
  <div style="height: 300px; width: 100%;">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, shallowRef } from 'vue'
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
} from 'chart.js'

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend)

const chartCanvas = ref<HTMLCanvasElement | null>(null)
const chartInstance = shallowRef<Chart | null>(null)

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

onMounted(() => {
  if (!chartCanvas.value) return

  chartInstance.value = new Chart(chartCanvas.value, {
    type: 'line',
    data: {
      labels: tokens.map(t => t.name),
      datasets: [
        {
          label: 'Ideal (superellipse)',
          data: tokens.map(t => t.ideal),
          borderColor: '#3f8643',
          backgroundColor: '#3f8643',
          tension: 0, // Straight line as per formula, but slight curve is usually better for visualization. Keeping 0 for now to match "ideal" strictness or user pref. User example used 0.2
          pointBackgroundColor: '#3f8643',
          pointRadius: 4,
          pointHoverRadius: 6
        },
        {
          label: 'Fallback (smooth curve)',
          data: tokens.map(t => t.fallback),
          borderColor: '#e43838',
          backgroundColor: '#e43838',
          tension: 0.35, // Smooth curve
          pointBackgroundColor: '#e43838',
          pointRadius: 4,
          pointHoverRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {
        legend: {
          position: 'top',
          align: 'end',
          labels: {
            usePointStyle: true,
            boxWidth: 8
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': ' + context.parsed.y + 'px';
            }
          }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Token'
          },
          grid: {
            display: false
          }
        },
        y: {
          title: {
            display: true,
            text: 'Pixels'
          },
          min: 0,
          suggestedMax: 50,
          grid: {
            color: '#f0f0f0'
          }
        }
      }
    }
  })
})
</script>

