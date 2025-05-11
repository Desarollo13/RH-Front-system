<template>
  <Line :data="data" :options="options" />
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement,
  CategoryScale, LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)

const data = {
  labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'],
  datasets: [
    {
      borderColor: 'rgba(8,2,51,0.85)',
      backgroundColor: 'rgba(8,2,51,0.58)',
      data: [12, 19, 3, 5, 2],
      tension: 0.3
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
