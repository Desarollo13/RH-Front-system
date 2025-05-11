<template>
  <div class="chart-container">
    <Pie :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'

// Registro de módulos
ChartJS.register(Title, Tooltip, Legend, ArcElement)

// Definición de datos
const chartData = {
  labels: ['Activos', 'Inactivos', 'Pendientes'],
  datasets: [
    {
      label: 'Estado de los elementos',
      data: [300, 50, 100],
      backgroundColor: [
        'rgba(8, 2, 51, 0.85)',       // Activos
        'rgba(10, 10, 10, 0.15)',     // Inactivos
        '#0d6efd'                     // Pendientes
      ],
      borderColor: '#fff',
      borderWidth: 2,
      hoverOffset: 10,
    },
  ],
}

// Opciones de configuración
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#333',
        font: {
          size: 14,
          family: 'Poppins, sans-serif',
        },
        padding: 20,
      },
    },
    tooltip: {
      backgroundColor: '#f8f9fa',
      borderColor: '#ccc',
      borderWidth: 1,
      titleColor: '#000',
      bodyColor: '#333',
      padding: 12,
      callbacks: {
        label: function(context) {
          const value = context.raw
          const label = context.label || ''
          return `${label}: ${value} registros`
        },
      },
    },
    title: {
      display: true,
      text: 'Distribución de Estado',
      color: '#444',
      font: {
        size: 18,
        weight: 'bold',
        family: 'Poppins, sans-serif',
      },
      padding: {
        top: 10,
        bottom: 30,
      },
    },
  },
}
</script>

<style scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: 300px;
}
</style>
