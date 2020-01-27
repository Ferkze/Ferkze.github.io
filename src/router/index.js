import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: function () {
      return import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
    },

  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: function () {
      return import(/* webpackChunkName: "portfolio" */ '../views/Portfolio.vue')
    },
  },
  {
    path: '/skills',
    name: 'skills',
    component: function () {
      return import(/* webpackChunkName: "skills" */ '../views/Skills.vue')
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
