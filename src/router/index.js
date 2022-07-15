import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Trending Movie',
    component: () => import('../views/TrendingMovie.vue')
  },
  {
    path: '/top-rated',
    name: 'Top Rated Movie',
    component: () => import('../views/TopMovie.vue')
  },
  {
    path: '/upcoming',
    name: 'Upcoming Movie',
    component: () => import('../views/UpcomingMovie.vue')
  },
  {
    path: '/search',
    name: 'Search Movie',
    component: () => import('../views/SearchMovie.vue')
  },
  {
    path: '/category',
    name: 'Category Movie',
    component: () => import('../views/Genre.vue')
  },
  // {
  //   path: '/hasil-genre/:id',
  //   name: 'Hasil Genre Movie',
  //   component: () => import('../views/genre/HasilGenre.vue')
  // },
  {
    path: '/hasil-genre/:id',
    name: 'genres',
    component: () => import('../views/genre/HasilGenre.vue')
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    component: () => import('../views/list/Movie.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
