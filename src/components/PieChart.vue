<template>
  <Pie :data="data" :options="options" />
</template>

<script setup>
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS, Title, Tooltip, Legend, ArcElement
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

const data = {
  labels: ['Activos', 'Inactivos', 'Pendientes'],
  datasets: [
    {
      label: 'Usuarios',
      data: [300, 50, 100],
      backgroundColor: ['#ffc107', '#dc3545', '#0d6efd'],
    }
  ]
}

const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Estado de Usuarios' }
  }
}
</script>
