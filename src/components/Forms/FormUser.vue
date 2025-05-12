<template>
    <form @submit.prevent="saveUser">
      <div class="row mb-3">
        <div class="col">
          <label for="username" class="form-label">Usuario</label>
          <input id="username" v-model="localUser.username" type="text" class="form-control" required />
        </div>
        
      </div>
      <div class="row mb-3">
        <div class="col">
          <label for="password" class="form-label">Contraseña</label>
          <div class="input-group">
            <input
              id="password"
              :type="showPassword ? 'text' : 'password'"
              v-model="localUser.password"
              class="form-control"
              required
            />
            <button @click.prevent="togglePassword" type="button" class="btn btn-outline-secondary">
              <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <label for="confirm-password" class="form-label">Confirmar Contraseña</label>
          <div class="input-group">
            <input
              id="confirm-password"
              :type="showConfirmPassword ? 'text' : 'password'"
              v-model="localUser.confirmPassword"
              class="form-control"
              required
            />
            <button @click.prevent="toggleConfirmPassword" type="button" class="btn btn-outline-secondary">
              <i :class="showConfirmPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <label for="status" class="form-label">Estado</label>
          <select id="status" v-model="localUser.status" class="form-control" required>
            <option disabled value="">Seleccione un estado</option>
            <option value="ACTIVO">ACTIVO</option>
            <option value="INACTIVO">INACTIVO</option>
          </select>
        </div>
        <div class="col">
          <label for="profile" class="form-label">Perfil</label>
          <select id="profile" v-model="localUser.profile" class="form-control" required>
            <option disabled value="">Seleccione un perfil</option>
            <option value="administrador">Administrador</option>
            <option value="supervisor">Supervisor</option>
            <option value="operativo">Operativo</option>
          </select>
        </div>
      </div>
      <div class="d-flex justify-content-end gap-2 mt-4">
        <button type="submit" class="btn btn-success">Guardar</button>
        <button type="button" class="btn btn-danger" @click="closeModal">Cancelar</button>
    </div>
    </form>
  </template>


<script setup>
import { ref, watch } from 'vue'


const props = defineProps({
  user: {
    type: Object,
    default: () => ({})
  },
  isOpen: Boolean
})

const emit = defineEmits(['close','save'])

const localUser = ref({ ...props.user })

watch(
  () => props.user,
  (newVal) => {
    localUser.value = { ...newVal }
  },
  { immediate: true, deep: true }
)

const saveUser = () => {
  emit('save', { ...localUser.value })
}

const closeModal = () => {
  emit('close') 
}
const showPassword = ref(false)
const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const showConfirmPassword = ref(false)
const toggleConfirmPassword = () => {
    showConfirmPassword.value = !showConfirmPassword.value
}
</script>
