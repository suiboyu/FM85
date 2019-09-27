<template>
  <div class="content">
    <div>
      <div class="swiper">
        <!-- swiper -->
        <swiper :options="swiperOption">
          <swiper-slide>
            <img src="//img.daimg.com/uploads/allimg/190920/1-1Z920231933.jpg" alt="" width="100%" height="100px">
          </swiper-slide>
          <swiper-slide>
            <img src="//img.daimg.com/uploads/allimg/190926/1-1Z926235021.jpg" width="100%" height="100px">
          </swiper-slide>
          <swiper-slide>
            <img src="//img.daimg.com/uploads/allimg/190926/1-1Z926233335.jpg" alt="" width="100%" height="100px">
          </swiper-slide>
          <swiper-slide>
            <img src="//img.daimg.com/uploads/allimg/190926/1-1Z926164J1.jpg" alt="" width="100%" height="100px">
          </swiper-slide>
          <swiper-slide>
            <img src="//img.daimg.com/uploads/allimg/190920/1-1Z920222329.jpg" alt="" width="100%" height="100px">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnglishSwiper',
  data () {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style scoped>
.content {
    margin-top: 50px;
}
  .swiper-slide {
    width: 100%;
    height: 100px;
  }
  .swiper-slide:nth-child(2n) {
      width: 100%;
  }
  .swiper-slide:nth-child(3n) {
      width: 100%;
  }
.swiper {
  margin-top: 10px;
}
</style>
