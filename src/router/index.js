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
  {
    path: '/repuestos',
    name: 'Parts',
    component: () => import('../views/Parts.vue')
  },
  {
    path: '/servicio',
    name: 'Service',
    component: () => import('../views/Service.vue')
  },
  {
    path: '/contacto',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
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
    component: () => import('../views/Quote.vue')
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
