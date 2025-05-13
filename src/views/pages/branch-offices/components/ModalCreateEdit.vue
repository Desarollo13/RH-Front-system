<template>
  <UnicModal :visible="visible" title="Agregar Sucursal" size="lg" @close="$emit('close')">
    <FormBranch ref="formRef" :branch="branch" @save="onSaveForm" />

    <template #footer>
      <div class="d-flex justify-content-end gap-2">
        <button class="btn btn-danger" @click="$emit('close')">Cancelar</button>
        <button class="btn btn-primary" @click="handleAccept">Aceptar</button>
      </div>
    </template>
  </UnicModal>
</template>

<script setup>
import UnicModal from '@/components/modals/UnicModal.vue';
import FormBranch from './FormBranch.vue';
import { ref } from 'vue';

defineProps({
  visible: Boolean,
  branch: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(['close', 'save']);

const formRef = ref(null);

const handleAccept = () => {
  if (formRef.value?.saveBranch) {
    formRef.value.saveBranch();
  }
};

const onSaveForm = (data) => {
  console.log('✅ Datos recibidos del formulario:', data);
  emit('save', data);
};
</script>
