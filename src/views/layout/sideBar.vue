<template>
  <aside class="sidebar" :class="{ expanded: isHovered || isPinned }" @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
    <div class="pin-toggle d-flex justify-content-end p-2">
      <button class="pin-btn" @click="isPinned = !isPinned" :title="isPinned ? 'Desanclar' : 'Anclar'">
        <i :class="['bi', isPinned ? 'bi-pin-angle-fill' : 'bi-pin-angle']"></i>
      </button>
    </div>

    <div class="logo">
      <img src="@/assets/img/nexen-white.png" alt="Logo Nexen" class="sidebar-logo mb-3" />
    </div>



    <br /><br /><br />

    <div class="menu-wrapper flex-grow-1 overflow-auto">
      <nav class="nav flex-column">
        <ul class="list-unstyled">
          <li v-for="(item, i) in menuItems" :key="i">
            <div class="nav-item d-flex align-items-center justify-content-between"
              @click="item.submenus ? toggleSubmenu(i) : handleNavigation(item.path)"
              :class="{ active: isActive(item.path) || isActiveSub(item) }">
              <div class="d-flex align-items-center">
                <i :class="item.icon"></i>
                <span v-if="isHovered" class="ms-2">{{ item.title }}</span>
              </div>
              <i v-if="isHovered && item.submenus" class="bi"
                :class="openSubmenus.includes(i) ? 'bi-chevron-up' : 'bi-chevron-down'"></i>
            </div>

            <transition name="submenu">
              <ul v-if="item.submenus && openSubmenus.includes(i) && isHovered" class="submenu ps-4 list-unstyled m-2">
                <li v-for="(sub, j) in item.submenus" :key="j">
                  <component :is="sub.path.startsWith('#') ? 'button' : 'router-link'"
                    :to="!sub.path.startsWith('#') ? sub.path : undefined"
                    class="nav-link d-flex align-items-center w-100 text-start border-0 bg-transparent"
                    :class="{ active: isActive(sub.path) }" @click="() => handleSubmenuClick(sub.path)">
                    <i :class="sub.icon"></i>
                    <span class="ms-2">{{ sub.title }}</span>
                  </component>
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </nav>
    </div>

    <div class="footer mt-auto">
      <i class="bi bi-person-circle"></i>
      <span v-if="isHovered" class="ms-2">
        {{ authStore.userName || 'Usuario no identificado' }}
      </span>
    </div>
  </aside>
</template>


<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { menuItems } from '@/router/menu.js'
import { useAuthStore } from '@/stores/authStore.js'

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()
const isPinned = ref(false)


const isHovered = ref(false)
const openSubmenus = ref([])

const toggleSubmenu = (index) => {
  if (openSubmenus.value.includes(index)) {
    openSubmenus.value = openSubmenus.value.filter((i) => i !== index)
  } else {
    openSubmenus.value.push(index)
  }
}

const handleNavigation = (path) => {
  if (path.startsWith('#')) {
    handleSubmenuClick(path)
  } else {
    router.push(path)
  }
}

const handleSubmenuClick = (path) => {
  if (path.startsWith('#')) {
    router.replace({ hash: path }) // actualiza el hash del route
    goToAnchor(path)
  } else {
    router.push(path)
  }
}

const goToAnchor = (hash) => {
  const id = hash.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }
}

const isActive = (path) => {
  if (path.startsWith('#')) {
    return route.hash === path || location.hash === path
  }
  return route.path === path
}


const isActiveSub = (item) => {
  if (!item.submenus) return false
  return item.submenus.some((sub) => isActive(sub.path))
}


const handleMouseEnter = () => {
  if (!isPinned.value) isHovered.value = true
}

const handleMouseLeave = () => {
  if (!isPinned.value) isHovered.value = false
}

</script>


<style scoped>
.pin-toggle {
  height: 48px;
}

.pin-btn {
  background-color: var(--primary);
  /* rojo tipo Bootstrap danger */
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
  cursor: pointer;
}

.pin-btn:hover {
  background-color: var(--danger);
}

.pin-btn i {
  font-size: 1rem;
}


.sidebar {
  width: 100px;
  height: 100vh;
  background-color: var(--primary);
  transition: width 0.2s ease;
  color: white;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  overflow: hidden;
}

.sidebar.expanded {
  width: 350px;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-logo {
  width: 40px;
  transition: all 0.3s ease;
}

.sidebar.expanded .sidebar-logo {
  width: 160px;
  transform: scale(1.1);
}

.menu-wrapper {
  overflow-y: auto;
  padding-bottom: 1rem;
}

.nav-item {
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
}

.nav-item i {
  width: 24px;
  min-width: 24px;
  text-align: center;
  font-size: 1.2rem;
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.08);
}

.nav-item.active {
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff !important;
  font-weight: bold;
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

.submenu .nav-link {
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  color: #dee2e6;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  transition: color 0.2s, background-color 0.2s, box-shadow 0.2s;
  font-size: 1rem;
  border-radius: 0.375rem;
}


/* Activo con fondo claro y sombra */
.submenu li .nav-link.active {
  color: #ffffff !important;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0.375rem;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.4);
}



.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  padding: 0 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer i {
  font-size: 1.2rem;
}

.footer span {
  font-weight: 600;
  font-size: 1rem;
  margin-left: 0.5rem;
}
</style>
