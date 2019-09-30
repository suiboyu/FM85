<template>
  <div>
    <DetailHeader></DetailHeader>
    <DetailSwiper :items="Detaillist"></DetailSwiper>
    <DetailNews :newstitle="newstitle" :newsctx="newsctx"></DetailNews>
  </div>
</template>

<script>
import DetailHeader from './components/Header'
import DetailSwiper from './components/Swiper'
import DetailNews from './components/News'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailSwiper,
    DetailNews
  },
  data () {
    return {
      Detaillist: [],
      newstitle: '',
      newsctx: ''
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.Detaillist = data.Detaillist
        this.newstitle = data.newstitle
        this.newsctx = data.newsctx
        console.log(this.Detaillist)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
