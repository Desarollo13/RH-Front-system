<template>
  <Bar :data="data" :options="options" />
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const data = {
  labels: ['Ene', 'Feb', 'Mar', 'Abr'],
  datasets: [
    {
      backgroundColor: 'rgba(28,8,61,0.98)',
      data: [65, 59, 80, 81]
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
