import { createRouter, createWebHistory } from 'vue-router'
import MoviesView from '@/app/movie/infrastructure/view/movies-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/movies'
    },
    {
      path: '/movies',
      name: 'movies',
      component: MoviesView
    },
    {
      path: '/tv',
      name: 'tv',
      component: () => import('../../app/tv/infrastructure/view/tv-view.vue')
    }
  ]
})

export default router
