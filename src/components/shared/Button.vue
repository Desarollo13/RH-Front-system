<template>
    <button 
      :class="['btn btn-primary rounded-pill py-2 fw-bold d-flex align-items-center justify-content-center gap-2', width, className]"
      @click="onClick"
    >
      <span v-if="icon" class="d-flex align-items-center">{{ icon }}</span>
      {{ label }}
    </button>
  </template>
  
  <script setup>
  const props = defineProps({
    label: { type: String, required: true },
    onClick: { type: Function, required: false },
    className: { type: String, default: "" },
    icon: { type: String, default: "" },
    width: { type: String, default: "w-auto" }
  });
  </script>
  