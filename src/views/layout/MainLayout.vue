<script setup>
import { ref, provide } from 'vue';
import Side from '@/views/layout/sideBar.vue';
import Header from '@/views/layout/header.vue';
import Footer from '@/views/layout/FooterLayout.vue';
import { providePageTitle } from '@/composables/usePageTitle.js';

providePageTitle();

const isSidebarExpanded = ref(false);
provide('isSidebarExpanded', isSidebarExpanded);
</script>

<template>
  <div class="layout-wrapper">
    <Side v-model:isHovered="isSidebarExpanded" />

    <div :class="['main-content', { expanded: isSidebarExpanded }]">
      <Header />

      <div class="page-body">
        <main class="main-area">
          <div class="main-container flex-grow-1 d-flex flex-column">
            <router-view class="flex-grow-1" />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout-wrapper {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.main-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: calc(100% - 100px);
  transition: all 0.3s ease;
}

.main-content.expanded {
  width: calc(100% - 300px);
}

.page-body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: calc(100vh - 80px); /* Altura del header */
  overflow: hidden;
}

.main-area {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem clamp(1rem, 3vw, 2rem);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
</style>
