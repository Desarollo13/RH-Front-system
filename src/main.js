import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import '@/assets/root.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createBootstrap } from 'bootstrap-vue-next'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createBootstrap()) 

app.mount('#app')
