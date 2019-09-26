<template>
  <div>
    <login-header></login-header>
    <LoginInterface v-if="showflag" @func="func"></LoginInterface>
    <LoginContent v-else="" :items="OnceWord" :lists="OnceSong"></LoginContent>
  </div>
</template>

<script>
import LoginHeader from './components/Header'
import LoginContent from './components/LoginContent'
import LoginInterface from './components/LoginInterface'
import axios from 'axios'
export default {
  name: 'login',
  components: {
    LoginHeader,
    LoginContent,
    LoginInterface
  },
  data () {
    return {
      showflag: true,
      OnceWord: [],
      OnceSong: []
    }
  },
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    func (val) {
      this.showflag = val
    },
    getHomeInfo () {
      axios.get('/api/once.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.OnceWord = data.OnceWord
        this.OnceSong = data.OnceSong
      }
    }
  }
}
</script>

<style scoped>
</style>
