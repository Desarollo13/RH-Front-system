<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <span class="title-page text-white d-none d-md-inline">{{ title }}</span>
</template>

<style scoped>
.title-page {
  font-size: 2.25rem;
  font-weight: 600;
  line-height: 1;
}
</style>
