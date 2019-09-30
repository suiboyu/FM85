<template>
  <div>
    <ParticularsHeader></ParticularsHeader>
    <ParticularsSwiper
      :SwiperImgurl="SwiperImgurl"
      :SwiperCtx="SwiperCtx"
    ></ParticularsSwiper>
    <ParticularsCards></ParticularsCards>
    <ParticularsPre
      :songer="songer"
      :singname="singname"
      :remark="remark"
      :imgurl="imgurl"
      @click="open1()"
    ></ParticularsPre>
  </div>
</template>

<script>
import ParticularsHeader from './components/Header'
import ParticularsSwiper from './components/Swiper'
import ParticularsCards from './components/Cards'
import ParticularsPre from './components/Presentation'
import axios from 'axios'
export default {
  name: 'particulars',
  data () {
    return {
      songer: '',
      singname: '',
      remark: '',
      imgurl: '',
      SwiperImgurl: '',
      SwiperCtx: ''
    }
  },
  components: {
    ParticularsHeader,
    ParticularsSwiper,
    ParticularsCards,
    ParticularsPre
  },
  mounted () {
    this.getDetailInfo()
    this.open1()
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/particulars.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.songer = data.songer
        this.singname = data.singname
        this.remark = data.remark
        this.imgurl = data.imgurl
        this.SwiperImgurl = data.SwiperImgurl
        this.SwiperCtx = data.SwiperCtx
      }
    },
    open1 () {
      const h = this.$createElement
      this.$notify({
        title: '',
        message: h('i', {
          style: 'bakcground-color: rgba(0, 0, 0, 0.2)'
        }, '本页面所提供的的歌曲均可免费下载')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
