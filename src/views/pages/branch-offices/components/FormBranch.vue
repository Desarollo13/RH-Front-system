<template>
  <form @submit.prevent="saveBranch">
    <div class="row mb-3">
      <div class="col">
        <label class="form-label">Nombre</label>
        <input v-model="localBranch.name" type="text" class="form-control" required />
      </div>
      <div class="col">
        <label class="form-label">Teléfono</label>
        <input v-model="localBranch.phone" type="text" class="form-control" required />
      </div>
    </div>

    <div class="row mb-3">
      <div class="col">
        <label class="form-label">Dirección</label>
        <input v-model="localBranch.address" type="text" class="form-control" required />
      </div>
      <div class="col">
        <label class="form-label">Código Postal</label>
        <input v-model="localBranch.zip_code" type="text" class="form-control" required />
      </div>
    </div>

    <div class="row mb-3">
      <div class="col">
        <label class="form-label">Estado</label>
        <select v-model="localBranch.status" class="form-control" required>
          <option disabled value="">Seleccione un estado</option>
          <option :value="1">Activo</option>
          <option :value="0">Inactivo</option>
        </select>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  branch: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(['save']);

const localBranch = ref({ ...props.branch });

watch(
  () => props.branch,
  (newVal) => {
    localBranch.value = { ...newVal };
  },
  { immediate: true, deep: true },
);

const saveBranch = () => {
  emit('save', { ...localBranch.value });
};

defineExpose({ saveBranch });
</script>
