import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home.vue'
import literary from '@/components/literary/index.vue'
import tinylife from '@/components/tinylife/index.vue'

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
    }, {
      path: '/components/tinylife/index',
      name: 'tinylife',
      component: tinylife
    }
  ]
})
