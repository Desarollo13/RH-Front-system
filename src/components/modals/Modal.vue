<script setup>
import { ref, computed } from 'vue';
import TitleTooltip from "../title/Title.vue";


const props = defineProps({
  title: String,
  size: {
    type: String,
    default: "lg",
    validator: (value) => ["sm", "md", "lg", "xl"].includes(value),
  },
  visible: { 
    type: Boolean,
    required: true
  },
});

const emit = defineEmits(["close"]);

const modalSizeClass = computed(() => {
  return {
    sm: "modal-sm",
    md: "",
    lg: "modal-lg",
    xl: "modal-xl",
  }[props.size];
});

const closeModal = () => {
  emit("close"); 
};

</script>

<template>
  <div v-if="visible" class="modal fade show d-block" tabindex="-1" role="dialog" style="background-color: rgba(0, 0, 0, 0.5);">
    <div class="modal-dialog modal-dialog-centered" :class="modalSizeClass">
      <div class="modal-content br-25">
        <div class="m-3 d-flex justify-content-between align-items-center">
          <TitleTooltip :text="title" type="modal" />
          <i class="bi bi-x-lg btn btn-end" @click="closeModal"></i>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
