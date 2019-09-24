<template>
  <div>
    <mt-swipe :auto="4000" class="home-swiper">

      <mt-swipe-item
        class="home-img"
        v-for="item in list"
        :key="item.id"
      >
        <img :src="item.img" alt="">
      </mt-swipe-item>

    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
div {
    margin-top: 20px;
    .home-swiper {
        height: 150px;
        width: 100%;
        background-color: #ddd;
        img {
            width: 100%;
            height: 150px;
        }
    }
}
</style>
