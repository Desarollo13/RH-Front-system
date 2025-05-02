<template>
  <div
    class="login-background d-flex align-items-center justify-content-center min-vh-100 overflow-auto"
  >
    <div class="card shadow-lg rounded-4 w-100" style="max-width: 960px">
      <div class="row g-0">
        <div
          class="col-md-6 d-flex flex-column justify-content-center align-items-center p-4 bg-primary text-white"
        >
          <img
            :src="logoPrincipal"
            alt="Logo RH"
            class="mb-4 rounded-circle img-fluid"
            style="max-width: 300px"
          />
          <h3 class="fw-bold text-center">Bienvenido al Sistema RH</h3>
          <p class="text-center px-3">
            Gestiona tu equipo, controla asistencias y optimiza el talento humano.
          </p>
        </div>

        <div class="col-md-6 p-4 d-flex flex-column justify-content-center bg-white">
          <div class="text-center mb-3">
            <img :src="logoNexen" alt="Logo Nexen" class="img-fluid" style="max-width: 180px" />
          </div>
          <h5 class="text-center fw-bold mb-4 text-primary">Iniciar Sesión</h5>

          <form @submit.prevent="handleLogin" novalidate>
            <div class="mb-3">
              <label for="email" class="form-label">Correo electrónico</label>
              <input
                type="email"
                id="email"
                v-model="email"
                ref="emailInput"
                :class="['form-control', emailStatus]"
              />
              <div v-if="emailStatus === 'is-invalid'" class="invalid-feedback">
                Por favor ingresa un correo válido.
              </div>
              <div v-if="emailStatus === 'is-valid'" class="valid-feedback">¡Correo válido!</div>
            </div>

            <div class="mb-4">
              <label for="password" class="form-label">Contraseña</label>
              <input
                type="password"
                id="password"
                v-model="password"
                :class="['form-control', passwordStatus]"
              />
              <div v-if="passwordStatus === 'is-invalid'" class="invalid-feedback">
                La contraseña es obligatoria.
              </div>
              <div v-if="passwordStatus === 'is-valid'" class="valid-feedback">
                ¡Contraseña válida!
              </div>
            </div>

            <div class="d-grid">
              <button type="submit" class="btn btn-primary">Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import logoPrincipal from '@/assets/img/logo.jpeg'
import logoNexen from '@/assets/img/logoNexen.png'

const email = ref('')
const password = ref('')
const emailStatus = ref('')
const passwordStatus = ref('')
const emailInput = ref(null)

const validateEmail = (value) => {
  return /^\S+@\S+\.\S+$/.test(value)
}

const validatePassword = (value) => {
  return value.trim().length > 5
}

watch(email, (newVal) => {
  emailStatus.value = newVal === '' ? '' : validateEmail(newVal) ? 'is-valid' : 'is-invalid'
})

watch(password, (newVal) => {
  passwordStatus.value = newVal === '' ? '' : validatePassword(newVal) ? 'is-valid' : 'is-invalid'
})

const handleLogin = () => {
  const isEmailValid = validateEmail(email.value)
  const isPasswordValid = validatePassword(password.value)

  emailStatus.value = isEmailValid ? 'is-valid' : 'is-invalid'
  passwordStatus.value = isPasswordValid ? 'is-valid' : 'is-invalid'

  if (isEmailValid && isPasswordValid) {
    console.log('Login con:', email.value, password.value)
  }
}

onMounted(() => {
  emailInput.value?.focus()
})
</script>

<style>
.login-background {
  background-image: url('src/assets/img/fondoLogin.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
