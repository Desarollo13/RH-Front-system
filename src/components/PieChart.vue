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
      data: [300, 50, 100],
      backgroundColor: ['rgba(8,2,51,0.85)', 'rgba(10,10,10,0.15)', '#0d6efd'],
    }
  ]
}

const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
  }
}
</script>
