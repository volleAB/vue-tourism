import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Info from '@/pages/info'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    }
  ]
})

export default router
