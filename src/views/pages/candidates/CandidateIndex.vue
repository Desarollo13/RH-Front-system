<template>
  <div class="container-fluid flex-grow-1 d-flex flex-column">
    <LoadingSpinner v-if="isLoading" />
    <div v-else class="row flex-grow-1 justify-content-center align-items-start">
      <div class="col-12 col-lg-10 py-4">
        <!-- Barra de progreso -->
        <div class="progress mb-4" style="height: 8px">
          <div
            class="progress-bar"
            :style="{ width: progressValue + '%', backgroundColor: 'var(--primary)' }"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            :aria-valuenow="progressValue"
          ></div>
        </div>

        <!-- Tabs como pasos -->
        <b-tabs
          v-model="activeTab"
          pills
          fill
          card
          nav-class="nav-pills justify-content-center"
          active-nav-item-class="bg-primary text-white"
        >
          <b-tab
            v-for="(step, index) in steps"
            :key="index"
            :title="`${index + 1}. ${step.name}`"
            class="p-3"
          >
            <component :is="step.component" />
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { defineAsyncComponent } from 'vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import { usePageTitle } from '@/composables/usePageTitle.js';

const pageTitle = usePageTitle();
const isLoading = ref(true);
const activeTab = ref(0);

const steps = [
  {
    name: 'Información de Registro',
    component: defineAsyncComponent(() => import('./components/InfoRegister.vue')),
  },
  {
    name: 'Información Personal',
    component: defineAsyncComponent(() => import('./components/PersonalInfoComponent.vue')),
  },
  {
    name: 'Carga tus Documentos',
    component: defineAsyncComponent(() => import('./components/DocumentsComponent.vue')),
  },
  {
    name: 'Pruebas Psicométricas',
    component: defineAsyncComponent(() => import('./components/InterviewComponent.vue')),
  },
];

const totalSteps = steps.length;
const progressValue = computed(() => (activeTab.value / (totalSteps - 1)) * 100);

onMounted(() => {
  pageTitle.value = 'Candidatos';
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});
</script>
