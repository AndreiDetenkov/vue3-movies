import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './config/router'
import App from './App.vue'

createApp(App).use(createPinia()).use(router).mount('#app')
