<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="SwiperList"></home-swiper>
    <home-column></home-column>
    <home-vertical></home-vertical>
    <home-past :news="news"></home-past>
    <home-tabbar></home-tabbar>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeTabbar from './components/Tabbar'
import HomeColumn from './components/Column'
import HomeVertical from './components/VerticalSwiper'
import HomePast from './components/Past'
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      SwiperList: [],
      news: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeTabbar,
    HomeColumn,
    HomeVertical,
    HomePast
  },
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/home.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.SwiperList = data.SwiperList
        this.news = data.news
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
