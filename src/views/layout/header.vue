<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['toggle-sidebar'])

function toggle() {
  emit('toggle-sidebar')
}
</script>

<template>
  <div
    class="container-fluid border rounded-9 shadow-sm my-3"
    style="background-color: rgba(0, 46, 109, 0.1)"
  >
    <nav class="navbar navbar-expand-lg navbar-light px-4 bg-primary">
      <div class="container-fluid">
        <!-- Botón para menú lateral -->
        <button class="btn btn-outline-light rounded-circle flex" @click="toggle">
          <i class="bi bi-list"></i>
        </button>

        <!-- Logo -->
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img src="@/assets/img/logoNexen.png" alt="Logo" width="100" height="50" class="me-2" />
        </a>
        <!-- Separador flexible -->
        <div class="flex-grow-1"></div>
        <!-- Iconos de la derecha -->
        <div class="d-flex align-items-center">
          <!-- Engranaje y campana -->
          <div class="me-3 d-flex align-items-center gap-2">
            <button class="btn btn-outline-light rounded-circle p-2">
              <i class="bi bi-gear" style="font-size: 24px"></i>
            </button>
            <button class="btn btn-outline-light rounded-circle p-2 position-relative">
              <i class="bi bi-bell" style="font-size: 24px"></i>
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >
                3
              </span>
            </button>
          </div>

          <!-- Menú de usuario -->
          <div class="dropdown">
            <button
              class="btn btn-outline-light dropdown-toggle d-flex align-items-center"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="@/assets/img/avatar-1.jpg"
                alt="user"
                class="rounded-circle me-2"
                height="40"
              />
              <span class="d-none d-md-inline">Usuario</span>
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <a class="dropdown-item" href="#"><i class="bi bi-person-circle me-2"></i>Perfil</a>
              </li>
              <li>
                <a class="dropdown-item" href="#"><i class="bi bi-gear me-2"></i>Configuración</a>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item" href="#"
                  ><i class="bi bi-box-arrow-right me-2"></i>Cerrar sesión</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped></style>
