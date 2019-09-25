<template>
  <div>
      <ul class="content">
        <li class="ul-li-view">
          <router-link
            to="/components/literary/index"
            class="link-a"
          >
            <span class="iconfont">&#xe602;</span>
            <div class="ul-li-desc"></div>
          </router-link>
        </li>
        <li class="ul-li-view">
          <router-link
            to="/"
            class="link-a"
          >
            <span class="iconfont">&#xe6b1;</span>
            <div class="ul-li-desc"></div>
          </router-link>
        </li>
        <li class="ul-li-view">
          <router-link
            to="/"
            class="link-a"
          >
            <span class="iconfont">&#xe652;</span>
            <div class="ul-li-desc"></div>
          </router-link>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeColumn',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/element.scss";
  .content {
    @include flex(row);
    justify-content: space-around;
    margin-top: 30px;
    &::after {
        content: "";
        box-sizing: border-box;
        height: 0;
        width: 100%;
        border-bottom: 1px solid #eee;
        margin-top: 30px;
        box-shadow: 0px 0px 2px #efeaea;
    }
    .iconfont {
      font-family: "iconfont" !important;
      font-size: 44px;
      font-style: normal;
      color: #55beea;
    }
  }
</style>
