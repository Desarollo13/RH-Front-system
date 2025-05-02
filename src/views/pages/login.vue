<template>
  <div class="login-background d-flex align-items-center justify-content-center min-vh-100">
    <div
      class="card shadow-lg rounded-4 overflow-hidden w-100"
      style="max-width: 960px; height: 540px; background-color: rgba(255, 255, 255, 0.9)"
    >
      <div class="row g-0 h-100">
        <!-- IZQUIERDA -->
        <div
          class="col-md-6 text-white d-flex flex-column justify-content-center align-items-center p-4"
          style="background-color: var(--primary)"
        >
          <img
            :src="logoPrincipal"
            alt="Logo RH"
            class="mb-4 rounded-circle"
            style="max-width: 300px"
          />
          <h3 class="fw-bold text-center">Bienvenido al Sistema RH</h3>
          <p class="text-center px-3">
            Gestiona tu equipo, controla asistencias y optimiza el talento humano.
          </p>
        </div>

        <!-- DERECHA -->
        <div class="col-md-6 p-5 d-flex flex-column justify-content-center bg-white">
          <div class="text-center mb-4">
            <img :src="logoNexen" alt="Logo Nexen" style="max-width: 180px" class="mb-2" />
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
                :class="['form-control', emailError ? 'is-invalid' : '']"
              />
              <div class="invalid-feedback">Por favor ingresa un correo válido.</div>
            </div>

            <div class="mb-4">
              <label for="password" class="form-label">Contraseña</label>
              <input
                type="password"
                id="password"
                v-model="password"
                :class="['form-control', passwordError ? 'is-invalid' : '']"
              />
              <div class="invalid-feedback">La contraseña es obligatoria.</div>
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
import { ref, onMounted } from 'vue'
import logoPrincipal from '@/assets/img/logo.jpeg'
import logoNexen from '@/assets/img/logoNexen.png'

const email = ref('')
const password = ref('')
const emailInput = ref(null)

const emailError = ref(false)
const passwordError = ref(false)

const handleLogin = () => {
  emailError.value = !/^\S+@\S+\.\S+$/.test(email.value)
  passwordError.value = password.value.trim() === ''

  if (!emailError.value && !passwordError.value) {
    console.log('Login con:', email.value, password.value)
    // Aquí puedes continuar con el login real
  }
}

onMounted(() => {
  emailInput.value?.focus()
})
</script>

<style scoped>
.login-background {
  background-image: url('src/assets/img/fondoLogin.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
