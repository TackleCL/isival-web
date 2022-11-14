import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nosotros',
    name: 'About',
    component: () => import('../views/About.vue')
  },

  // @module: rental
  {
    path: '/rental',
    name: 'Rental',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/rental/product',
    name: 'Product',
    props: true,
    component: () => import('../views/Product.vue')
  },
  {
    path: '/cotizacion',
    name: 'Quote',
    component: () => import('../modules/rental/Cart.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

export default router
