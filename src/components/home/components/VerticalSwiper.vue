<template>
  <div class="ver-swiper">
    <div class="content">
      <span class="iconfont">&#xe625;</span>
      FM85欢迎各位踊跃投稿，让世界听见你的才华
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeVertical'
}
</script>

<style lang="scss" scoped>
@import "../../../assets/css/element.scss";
.ver-swiper {
      @include panel;
      >h4 {
          display: none;
      }
      .content {
        display: block;
        width: 100%;
        margin: 0 auto;
        .iconfont {
          font-family: "iconfont" !important;
          font-size: 22px;
          font-style: normal;
          color: #55beea;
        }
      }
  }
</style>
