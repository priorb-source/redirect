import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/:pathMatch(.*)*',
    name: 'Any',
    component: () => import('./Any.vue')
  }]
})


function hasQueryParams(route) {
    return !!Object.keys(route.query).length
  }
  
  router.beforeEach(async (to, from, next) => {
    if (!hasQueryParams(from) || hasQueryParams(to)) {
      return next()
    } else if (!hasQueryParams(to) && hasQueryParams(from)) {
      return next({ ...to, query: from.query })
    }
  })
  

export default router
