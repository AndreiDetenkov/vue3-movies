import 'reflect-metadata'
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './config/router'
import App from './App.vue'
import { initDIContainer } from '@/config/di/container-init'

const app = createApp(App)

initDIContainer()

app.use(createPinia()).use(router).mount('#app')
