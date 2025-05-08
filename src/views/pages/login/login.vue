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
              <label for="username" class="form-label">Nombre de usuario</label>
              <input
                type="text"
                id="username"
                v-model="username"
                ref="usernameInput"
                :class="['form-control', usernameStatus]"
              />
              <div v-if="usernameStatus === 'is-invalid'" class="invalid-feedback">
                Por favor ingresa un correo válido.
              </div>
              <div v-if="usernameStatus === 'is-valid'" class="valid-feedback">¡Correo válido!</div>
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
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import logoPrincipal from '@/assets/img/logo.jpeg'
import logoNexen from '@/assets/img/logoNexen.png'
import api from '@/services/apiService'
const loginError = ref('')

const router = useRouter()

const username = ref('')
const password = ref('')
const usernameStatus = ref('')
const passwordStatus = ref('')
const usernameInput = ref(null)

const validateUsername = (value) => {
  return value.trim().length >= 3
}

watch(username, (newVal) => {
  usernameStatus.value = newVal === '' ? '' : validateUsername(newVal) ? 'is-valid' : 'is-invalid'
})


const validatePassword = (value) => {
  return value.trim().length > 5
}

watch(password, (newVal) => {
  passwordStatus.value = newVal === '' ? '' : validatePassword(newVal) ? 'is-valid' : 'is-invalid'
})
const handleLogin = async () => {
  const isUsernameValid = validateUsername(username.value)
  const isPasswordValid = validatePassword(password.value)

  usernameStatus.value = isUsernameValid ? 'is-valid' : 'is-invalid'
  passwordStatus.value = isPasswordValid ? 'is-valid' : 'is-invalid'

  if (isUsernameValid && isPasswordValid) {

    {
      try {
        const res = await api.post('/login', {
          username: username.value,
          password: password.value
        })

        if (res.status) {
          localStorage.setItem('token', res.token)
          localStorage.setItem('user', JSON.stringify(res.user))
          router.push({ name: 'dashboard' })
        } else {
          loginError.value = res.message || 'Credenciales incorrectas'
        }
      } catch (err) {
        loginError.value = 'Error de conexión con el servidor.'
        console.error(err)
      }
    }
  }
}

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
