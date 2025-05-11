<template>
  <aside
    class="sidebar"
    :class="{ expanded: isHovered }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="logo">
      <img src="@/assets/img/nexen-white.png" alt="Logo Nexen" class="sidebar-logo mb-3" />
    </div>

    <br /><br /><br />

    <div class="menu-wrapper flex-grow-1 overflow-auto">
      <nav class="nav flex-column">
        <ul class="list-unstyled">
          <li v-for="(item, i) in menuItems" :key="i">
            <div
              class="nav-item d-flex align-items-center justify-content-between"
              @click="item.submenus ? toggleSubmenu(i) : handleNavigation(item.path)"
              :class="{ active: isActive(item.path) || isActiveSub(item) }"
            >
              <div class="d-flex align-items-center">
                <i :class="item.icon"></i>
                <span v-if="isHovered" class="ms-2">{{ item.title }}</span>
              </div>
              <i
                v-if="isHovered && item.submenus"
                class="bi"
                :class="openSubmenus.includes(i) ? 'bi-chevron-up' : 'bi-chevron-down'"
              ></i>
            </div>

            <transition name="submenu">
              <ul
                v-if="item.submenus && openSubmenus.includes(i) && isHovered"
                class="submenu ps-4 list-unstyled"
              >
                <li v-for="(sub, j) in item.submenus" :key="j">
                  <a
                    class="nav-link"
                    :class="{ active: isActive(sub.path) }"
                    @click.prevent="handleNavigation(sub.path)"
                  >
                    <i :class="sub.icon"></i>
                    <span class="ms-2">{{ sub.title }}</span>
                  </a>


                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </nav>
    </div>

    <div class="footer mt-auto">
      <i class="bi bi-person-circle"></i>
      <span v-if="isHovered" class="ms-2">Cuenta</span>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { menuItems } from '@/router/menu.js'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleNavigation = (path) => {
  if (path.startsWith('#')) {
    goToAnchor(path)
  } else {
    router.push(path)
  }
}
const isHovered = ref(false)
const openSubmenus = ref([])
const route = useRoute()

const toggleSubmenu = (index) => {
  if (openSubmenus.value.includes(index)) {
    openSubmenus.value = openSubmenus.value.filter((i) => i !== index)
  } else {
    openSubmenus.value.push(index)
  }
}

const isActive = (path) => route.path === path

const isActiveSub = (item) => {
  if (!item.submenus) return false
  return item.submenus.some((sub) => sub.path === route.path)
}
const goToAnchor = (hash) => {
  const id = hash.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

</script>

<style scoped>
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
  width: 300px;
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

.submenu a {
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  color: #dee2e6;
  transition: color 0.2s;
}

.submenu a:hover {
  color: #ffffff;
}

.submenu a.active {
  color: #ffffff;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 0.375rem;
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
