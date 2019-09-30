<template>
  <div class="content">
    <img :src="SwiperImgurl" alt="" width="94%" height="130px">
    <div class="desc">
        <p> {{SwiperCtx}} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParticularsSwiper',
  props: {
    SwiperImgurl: String,
    SwiperCtx: String
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
    position: relative;
    img {
        display: block;
        margin: 10px auto;
    }
    .desc {
        position: absolute;
        top: 0;
        height: 130px;
        left: 10px;
        width: 94%;
        background-color: rgba(0, 0, 0, 0.3);
        color: #eee;
        text-align: center;
        line-height: 17px;
        padding: 40px;
        box-sizing: border-box;
        font-size: 12px;
    }
}
</style>
