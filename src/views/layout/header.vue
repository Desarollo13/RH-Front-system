<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import TitlePage from '@/views/layout/titlePage.vue'
import { usePageTitle } from '@/composables/usePageTitle.js'

const pageTitle = usePageTitle()
const router = useRouter()

// Cerrar sesión
function logout() {
  localStorage.clear()
  sessionStorage.clear()
  router.push('/login')
}

// Mostrar u ocultar dropdown
function toggleDropdown(event) {
  const dropdown = event.currentTarget.closest('.dropdown')
  if (dropdown) {
    dropdown.classList.toggle('show')
    const menu = dropdown.querySelector('.dropdown-menu')
    if (menu) menu.classList.toggle('show')
  }
}


// Cerrar todos los dropdowns si haces clic fuera
onMounted(() => {
  document.addEventListener('click', (e) => {
    document.querySelectorAll('.dropdown').forEach((dropdown) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('show')
        dropdown.querySelector('.dropdown-menu')?.classList.remove('show')
      }
    })
  })
})
</script>

<template>
  <header class="topbar glass shadow-sm m-3 rounded-4 px-4 bg-primary">
    <div class="topbar-inner d-flex justify-content-between align-items-center h-100">
      <!-- Logo y título -->
      <div class="d-flex align-items-center gap-3">
        <router-link
          to="/dashboard"
          class="navbar-brand d-flex align-items-center gap-3 text-white fw-bold fs-5"
        >
          <img src="@/assets/img/nexen-white.png" alt="Logo" class="logo-img" />
        </router-link>
        <TitlePage :title="pageTitle" />
      </div>

      <!-- Notificaciones y Usuario -->
      <div class="d-flex align-items-center gap-4">
        <!-- Dropdown Notificaciones -->
        <div class="dropdown" @click="toggleDropdown">
          <button class="icon-btn glow position-relative" type="button">
            <i class="bi bi-bell fs-5"></i>
            <span
              class="badge bg-danger position-absolute top-0 start-100 translate-middle p-1 rounded-circle"
            >
              3
            </span>
          </button>
          <ul class="dropdown-menu dropdown-menu-end shadow animated-dropdown px-2" style="width: 300px; left: -50px;">
            <li class="dropdown-header fw-bold text-dark">Notificaciones</li>
            <li>
              <a class="dropdown-item small text-muted" href="#">
                <i class="bi bi-info-circle text-primary me-2"></i>
                Nuevo cambio en tu perfil
              </a>
            </li>
            <li>
              <a class="dropdown-item small text-muted" href="#">
                <i class="bi bi-envelope text-success me-2"></i>
                Tienes un mensaje sin leer
              </a>
            </li>
            <li>
              <a class="dropdown-item small text-muted" href="#">
                <i class="bi bi-shield-exclamation text-warning me-2"></i>
                Verifica tu contraseña
              </a>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item text-center text-primary small" href="#">Ver todas</a>
            </li>
          </ul>
        </div>

        <!-- Dropdown Usuario -->
        <div class="dropdown" @click="toggleDropdown">
          <button class="btn btn-user d-flex align-items-center gap-5" type="button">
            <img src="@/assets/img/avatar-1.jpg" alt="user" class="avatar-img" />
            <span class="d-none d-md-inline text-white">Usuario</span>
            <i class="bi bi-chevron-down text-white small"></i>
          </button>
          <ul class="dropdown-menu dropdown-menu-end shadow animated-dropdown">
            <li>
              <a class="dropdown-item" href="#"><i class="bi bi-person-circle me-2"></i>Perfil</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><i class="bi bi-lock me-2"></i>Cambio de contraseña</a>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" href="#" @click.prevent="logout">
                <i class="bi bi-box-arrow-right me-2"></i>Cerrar sesión
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.topbar {
  height: 80px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 1rem;
  color: white;
}

.glass {
  background: rgba(0, 46, 109, 0.75);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.logo-img {
  height: 64px;
  object-fit: contain;
  transition: transform 0.2s;
}

.logo-img:hover {
  transform: scale(1.05);
}

.icon-btn {
  background: rgba(255, 255, 255, 0.05);
  border: none;
  color: white;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.icon-btn.glow:hover {
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
}

.btn-user {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  padding: 0.4rem 0.75rem;
  border-radius: 2rem;
  transition: background 0.2s;
}

.btn-user:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.avatar-img {
  height: 38px;
  width: 38px;
  border-radius: 50%;
  object-fit: cover;
}

.animated-dropdown {
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.2s ease;
  display: block;
  pointer-events: none;
}

.dropdown.show .animated-dropdown {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
</style>
