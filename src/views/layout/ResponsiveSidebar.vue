<template>
  <div>
    <!-- Botón hamburguesa visible solo en pantallas pequeñas -->
    <button
      class="hamburger-button md:hidden"
      @click="isMobileOpen = !isMobileOpen"
    >
      <i :class="isMobileOpen ? 'bi-x-lg' : 'bi-list'" class="text-white text-2xl"></i>
    </button>

    <!-- Sidebar -->
    <aside
      class="sidebar fixed top-0 left-0 h-full bg-primary text-white z-50 flex flex-col transition-all duration-300 ease-in-out"
      :class="[
        isHovered || isMobileOpen ? 'w-72' : 'w-24',
        isMobileOpen
          ? 'top-0 left-0 w-full transform translate-y-0 md:translate-x-0' // en móvil, la sidebar se mueve hacia arriba
          : 'md:translate-x-0 -translate-x-full md:translate-y-0', // en desktop, no se ve
      ]"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <!-- Logo -->
      <div class="logo flex items-center justify-center h-28 p-4 border-b border-white/10">
        <img
          src="@/assets/img/nexen-white.png"
          alt="Logo Nexen"
          :class="[ 'transition-all duration-300', isHovered || isMobileOpen ? 'w-40 scale-110' : 'w-10' ]"
        />
      </div>

      <!-- Menú -->
      <nav class="menu-wrapper flex-grow overflow-auto">
        <ul class="list-none px-0">
          <li v-for="(item, i) in menuItems" :key="i">
            <div
              class="nav-item px-4 py-3 cursor-pointer flex items-center justify-between hover:bg-white/10 transition"
              :class="{ 'bg-white/20 font-bold': isActive(item.path) || isActiveSub(item) }"
              @click="item.submenus ? toggleSubmenu(i) : handleNavigation(item.path)"
            >
              <div class="flex items-center">
                <i :class="item.icon" class="w-6 text-center text-lg"></i>
                <span v-if="isHovered || isMobileOpen" class="ml-2">{{ item.title }}</span>
              </div>
              <i
                v-if="(isHovered || isMobileOpen) && item.submenus"
                class="bi text-sm"
                :class="openSubmenus.includes(i) ? 'bi-chevron-up' : 'bi-chevron-down'"
              ></i>
            </div>

            <transition name="submenu">
              <ul
                v-if="item.submenus && openSubmenus.includes(i) && (isHovered || isMobileOpen)"
                class="submenu pl-8 list-none text-sm"
              >
                <li v-for="(sub, j) in item.submenus" :key="j">
                  <a
                    class="block py-2 text-gray-300 hover:text-white"
                    :class="{ 'font-bold text-white': isActive(sub.path) }"
                    @click.prevent="handleNavigation(sub.path)"
                  >
                    <i :class="sub.icon" class="mr-2"></i>
                    {{ sub.title }}
                  </a>
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </nav>

      <!-- Footer -->
      <div class="footer flex items-center justify-center h-14 border-t border-white/10 px-4">
        <i class="bi bi-person-circle text-lg"></i>
        <span
          v-if="isHovered || isMobileOpen"
          class="ml-2 font-semibold text-base truncate"
        >
          {{ authStore.userName || 'Usuario no identificado' }}
        </span>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/authStore.js'
import { menuItems } from '@/router/menu.js'

const isHovered = ref(false)
const isMobileOpen = ref(false)
const openSubmenus = ref([])

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()

const toggleSubmenu = (index) => {
  if (openSubmenus.value.includes(index)) {
    openSubmenus.value = openSubmenus.value.filter((i) => i !== index)
  } else {
    openSubmenus.value.push(index)
  }
}

const isActive = (path) => route.path === path
const isActiveSub = (item) =>
  item.submenus ? item.submenus.some((sub) => sub.path === route.path) : false

const handleNavigation = (path) => {
  isMobileOpen.value = false // Cierra en mobile
  if (path.startsWith('#')) {
    const el = document.getElementById(path.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  } else {
    router.push(path)
  }
}
</script>

<style scoped>
.sidebar {
  background-color: var(--primary); /* o usa Tailwind: bg-primary */
}
.hamburger-button {
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 60;
  background: transparent;
  border: none;
  outline: none;
}
.submenu-enter-active,
.submenu-leave-active {
  transition: all 0.3s ease;
}
.submenu-enter-from,
.submenu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
