<template>
  <div class="login-background d-flex align-items-center justify-content-center min-vh-100">
    <div class="card shadow-lg rounded w-100" style="max-width: 960px">
      <div class="row g-0">
        <!-- Lado izquierdo -->
        <div
          class="col-md-6 d-flex flex-column justify-content-center align-items-center p-4 bg-primary text-white br-20"
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

        <!-- Lado derecho -->
        <div class="col-md-6 p-4 d-flex flex-column justify-content-center bg-white br-20">
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
                class="form-control"
                :class="{
                  'is-invalid': usernameTouched && !validUsername,
                  'is-valid': validUsername,
                }"
              />
              <div v-if="usernameTouched && !validUsername" class="invalid-feedback">
                Por favor ingresa un nombre de usuario válido.
              </div>
            </div>

            <div class="mb-4">
              <label for="password" class="form-label">Contraseña</label>
              <input
                type="password"
                id="password"
                v-model="password"
                class="form-control"
                :class="{
                  'is-invalid': passwordTouched && !validPassword,
                  'is-valid': validPassword,
                }"
              />
              <div v-if="passwordTouched && !validPassword" class="invalid-feedback">
                La contraseña debe tener al menos 6 caracteres.
              </div>
            </div>

            <div v-if="loginError" class="alert alert-danger py-2">{{ loginError }}</div>

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
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '@/api/AuthUser';
import { useAuthStore } from '@/stores/authStore';
import logoPrincipal from '@/assets/img/logo.jpeg';
import logoNexen from '@/assets/img/logoNexen.png';

const router = useRouter();
const authStore = useAuthStore();

const username = ref('');
const password = ref('');
const usernameTouched = ref(false);
const passwordTouched = ref(false);
const loginError = ref('');

const validUsername = computed(() => username.value.trim().length >= 3);
const validPassword = computed(() => password.value.trim().length >= 6);

const handleLogin = async () => {
  usernameTouched.value = true;
  passwordTouched.value = true;
  loginError.value = '';

  if (!validUsername.value || !validPassword.value) return;

  try {
    const res = await login({
      username: username.value,
      password: password.value,
    });

    if (!res.status) {
      throw new Error(res.message || 'Credenciales incorrectas');
    }

    authStore.setAuth({
      token: res.data.token,
      user: res.data.user,
    });

    router.push({ name: 'dashboard' });
  } catch (err) {
    loginError.value = err.message || 'Error de conexión o credenciales inválidas.';
    console.error(err);
  }
};
</script>

<style scoped>
.login-background {
  background-color: #f0f0f0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
