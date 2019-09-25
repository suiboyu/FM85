<template>
  <div>
     <tinylife-header></tinylife-header>
     <tinylife-titler></tinylife-titler>
     <TinylifeTips :tinylife="TinyList"></TinylifeTips>
     <TinySubmit></TinySubmit>
  </div>
</template>

<script>
import TinylifeHeader from './components/Header'
import TinylifeTitler from './components/Title'
import TinylifeTips from './components/Tips'
import TinySubmit from './components/Submit'
import axios from 'axios'
export default {
  name: 'tinylife',
  data () {
    return {
      TinyList: []
    }
  },
  components: {
    TinylifeHeader,
    TinylifeTitler,
    TinylifeTips,
    TinySubmit
  },
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/tinylife.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.TinyList = data.TinyList
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
