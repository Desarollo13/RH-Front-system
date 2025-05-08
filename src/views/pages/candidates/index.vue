<template>
  <div>
    <LoadingSpinner v-if="isLoading" />
    <div v-else>
      <div class="d-flex justify-content-center align-items-center" style="min-height: 100vh">
        <div class="stepper-container">
          <div :class="['progress-bar-line', layoutType]">
            <div
              class="progress-bar-fill"
              :style="layoutType === 'vertical' ? { height: progressValue + '%' } : { width: progressValue + '%' }"
            ></div>
          </div>

          <BTabs v-model="activeTab" class="custom-stepper" pills fill card>
            <template #tabs-start>
              <div ref="navTabsRef" class="nav-tabs-wrapper"></div>
            </template>

            <BTab v-for="(step, index) in steps" :key="index">
              <template #title>
                <div class="step-title">
                  {{ index + 1 }}<br />
                  {{ step.name }}
                </div>
              </template>
              <component :is="step.component" />
            </BTab>
          </BTabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, defineAsyncComponent, nextTick } from 'vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const isLoading = ref(true)

onMounted(() => {
  nextTick(() => {
    detectLayout()
    window.addEventListener('resize', detectLayout)
  })

  setTimeout(() => {
    isLoading.value = false
  }, 2000)
})

onUnmounted(() => {
  window.removeEventListener('resize', detectLayout)
})

const activeTab = ref(0)
const steps = [
  { name: 'Información de Registro', component: defineAsyncComponent(() => import('./components/InfoRegister.vue')) },
  { name: 'Información Personal', component: defineAsyncComponent(() => import('./components/PersonalInfoComponent.vue')) },
  { name: 'Carga tus Documentos', component: defineAsyncComponent(() => import('./components/DocumentsComponent.vue')) },
  { name: 'Pruebas Psicometricas', component: defineAsyncComponent(() => import('./components/InterviewComponent.vue')) },
]

const navTabsRef = ref(null)
const layoutType = ref('horizontal-big')

const detectLayout = () => {
  const width = window.innerWidth
  const navHeight = navTabsRef.value?.offsetHeight || 0

  if (width <= 423) {
    layoutType.value = 'vertical'
  } else if (navHeight > 100) {
    layoutType.value = 'vertical'
  } else if (width <= 767) {
    layoutType.value = 'horizontal-small'
  } else {
    layoutType.value = 'horizontal-big'
  }
}

const totalSteps = steps.length
const progressValue = computed(() => (activeTab.value / (totalSteps - 1)) * 100)
</script>

<style scoped>
/* Reutilizamos todos los estilos ya definidos */
.stepper-container {
  margin: 30px 0;
  padding: 0 10px;
  position: relative;
}
.progress-bar-line {
  position: absolute;
  z-index: 1;
  background-color: #dee2e6;
  border-radius: 2px;
}
.progress-bar-line.horizontal-big {
  top: 55px;
  left: 10%;
  right: 10%;
  height: 4px;
}
.progress-bar-line.horizontal-small {
  top: 105px;
  left: 20%;
  right: 20%;
  height: 4px;
}
.progress-bar-line.vertical {
  top: 20px;
  left: 5px;
  width: 4px;
  height: calc(100% - 50px);
}
.progress-bar-fill {
  background-color: #f02f29;
  transition: all 0.4s ease;
  border-radius: 2px;
}
.horizontal-big .progress-bar-fill,
.horizontal-small .progress-bar-fill {
  width: 0%;
  height: 100%;
}
.vertical .progress-bar-fill {
  width: 100%;
  height: 0%;
}
.custom-stepper .nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  counter-reset: step;
  position: relative;
  z-index: 2;
}
.custom-stepper .nav-link {
  position: relative;
  background: none;
  border: none;
  padding: 1rem;
  color: #6c757d;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 120px;
}
.custom-stepper .nav-link::before {
  content: counter(step);
  counter-increment: step;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #dee2e6;
  color: #6c757d;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  font-size: 16px;
  font-weight: bold;
}
.custom-stepper .nav-link.active::before {
  background-color: #0d6efd;
  color: #fff;
}
.custom-stepper .nav-link.active,
.custom-stepper .nav-link:hover {
  color: #0d6efd;
}
.step-title {
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.2;
}
.custom-stepper .tab-content {
  margin-top: 30px;
}
</style>
