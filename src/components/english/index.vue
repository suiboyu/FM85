<template>
  <div>
    <EnglishHeader></EnglishHeader>
    <EnglishSwiper></EnglishSwiper>
    <EnglishAudio></EnglishAudio>
    <EnglishSubmit></EnglishSubmit>
  </div>
</template>

<script>
import EnglishHeader from './components/Header'
import EnglishSwiper from './components/Swiper'
import EnglishAudio from './components/Audio'
import EnglishSubmit from './components/Sumbit'
export default {
  name: 'english',
  data () {
    return {
    }
  },
  components: {
    EnglishHeader,
    EnglishSwiper,
    EnglishAudio,
    EnglishSubmit
  }
//   mounted () {
//     this.getHomeInfo()
//   },
//   methods: {
//     getHomeInfo () {
//       axios.get('/api/tinylife.json')
//         .then(this.getHomeInfoSucc)
//     },
//     getHomeInfoSucc (res) {
//       res = res.data
//       if (res.ret && res.data) {
//         const data = res.data
//         this.TinyList = data.TinyList
//       }
//     }
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
