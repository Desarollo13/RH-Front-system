<template>
  <div>
    <LoadingSpinner v-if="isLoading" />
    <div v-else>
      <div class="d-flex justify-content-center align-items-center" style="min-height: 100vh">
       <Dashboard/>
      </div>
    </div>
  </div>
</template>

<script setup>
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { ref, onMounted } from 'vue'
import { usePageTitle } from '@/composables/usePageTitle.js'
import Dashboard from '../../../components/Dashboard.vue'

const isLoading = ref(true)
const pageTitle = usePageTitle()

onMounted(() => {
  pageTitle.value = 'Dashboard'
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
})
</script>
