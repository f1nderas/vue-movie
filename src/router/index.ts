import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import MovieDetails from '../views/MovieDetails.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
  {
    path: '/movie/:id',
    name: 'movieDetails',
    component: MovieDetails,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
