<template>
  <div>
    <LoadingSpinner v-if="isLoading" />
    <div v-else>
      <div class="d-flex justify-content-center align-items-center" style="min-height: 100vh">
        <h1 class="text-primary text-center">Mi primer proyecto</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 2000) // simulación de carga
})
</script>
