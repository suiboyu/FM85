<template>
  <div>
    <SongHeader></SongHeader>
    <SongRecommend :lists="Recommend"></SongRecommend>
    <ChooseSong></ChooseSong>
  </div>
</template>

<script>
import SongHeader from './components/Header'
import SongRecommend from './components/Recommend'
import ChooseSong from './components/ChooseSong'
import axios from 'axios'
export default {
  name: 'song',
  data () {
    return {
      Recommend: []
    }
  },
  components: {
    SongHeader,
    SongRecommend,
    ChooseSong
  },
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/song.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.Recommend = data.Recommend
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
