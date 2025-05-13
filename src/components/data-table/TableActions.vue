<template>
  <div class="d-flex justify-content-center align-items-center gap-3">
    <button
      v-if="showEdit"
      class="btn btn-outline-primary btn-lg d-flex align-items-center justify-content-center"
      @click="$emit('edit', row)"
      title="Editar"
    >
      <i class="bi bi-pencil-square"></i>
    </button>
    <button
      v-if="showDelete"
      class="btn btn-outline-danger btn-lg d-flex align-items-center justify-content-center"
      @click="$emit('delete', row)"
      title="Eliminar"
    >
      <i class="bi bi-trash"></i>
    </button>
  </div>
</template>

<script setup>
defineProps({
  row: {
    type: Object,
    required: true,
  },
  showEdit: {
    type: Boolean,
    default: true,
  },
  showDelete: {
    type: Boolean,
    default: true,
  },
});

defineEmits(['edit', 'delete']);
</script>
