<!-- src/components/ChartCarousel.vue -->
<script setup>
import ChartBar from './BarChart.vue'
import ChartLine from './LineChart.vue'
import ChartPie from './PieChart.vue'
import { onMounted } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import Carousel from 'bootstrap/js/dist/carousel'

onMounted(() => {
  const el = document.getElementById(props.carouselId)
  if (el) {
    new Carousel(el, {
      interval: 5000, // auto-slide cada 5 segundos
      ride: 'carousel',
      pause: false,
      wrap: true
    })
  }
})

// Generar ID único si no se proporciona uno
const props = defineProps({
  carouselId: {
    type: String,
    default: () => `chart-carousel-${uuidv4()}`
  }
})

</script>

<template>
  <div class="card shadow rounded text-center p-3 h-100">
    <div :id="carouselId" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="p-3">
            <h5 class="card-title">Gráfico de Barras</h5>
            <ChartBar />
          </div>
        </div>
        <div class="carousel-item">
          <div class="p-3">
            <h5 class="card-title">Gráfico de Pastel</h5>
            <ChartPie />
          </div>
        </div>
        <div class="carousel-item">
          <div class="p-3">
            <h5 class="card-title">Gráfico de Línea</h5>
            <ChartLine />
          </div>
        </div>
      </div>

      <!-- Controles -->
      <button class="carousel-control-prev" type="button" :data-bs-target="`#${carouselId}`" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" :data-bs-target="`#${carouselId}`" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.carousel-item {
  transition: transform 0.6s ease-in-out;
}
.card {
  max-width: 100%;
  overflow-x: auto;
}
</style>
