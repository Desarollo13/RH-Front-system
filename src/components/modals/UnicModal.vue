<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'lg',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value),
  },
  visible: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['close']);

const modalSizeClass = computed(() => {
  return {
    sm: 'modal-sm',
    md: '',
    lg: 'modal-lg',
    xl: 'modal-xl',
  }[props.size];
});

const closeModal = () => emit('close');
</script>

<template>
  <div
    v-if="visible"
    class="modal fade show d-block"
    tabindex="-1"
    role="dialog"
    style="background-color: rgba(0, 0, 0, 0.5)"
  >
    <div class="modal-dialog modal-dialog-centered" :class="modalSizeClass">
      <div class="modal-content rounded-3 overflow-hidden">
        <!-- Header -->
        <div v-if="$slots.header" class="modal-header">
          <slot name="header" />
        </div>
        <div v-else-if="title" class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>

        <!-- Body -->
        <div class="modal-body">
          <slot />
        </div>

        <!-- Footer -->
        <div v-if="$slots.footer" class="modal-footer d-flex justify-content-end gap-2">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>
