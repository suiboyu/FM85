import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home.vue'
import literary from '@/components/literary/index.vue'
import tinylife from '@/components/tinylife/index.vue'
import english from '@/components/english/index.vue'
import song from '@/components/song/index.vue'
import login from '@/components/login/index.vue'

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
    }, {
      path: '/components/english/index',
      name: 'english',
      component: english
    }, {
      path: '/components/login/index',
      name: 'login',
      component: login
    }, {
      path: '/components/song/index',
      name: 'song',
      component: song
    }
  ]
})
