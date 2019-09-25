import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home.vue'
import literary from '@/components/literary/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/components/literary/index',
      name: 'literary',
      component: literary
    }
  ]
})
