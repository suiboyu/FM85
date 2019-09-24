<template>
  <div>
    <mt-tabbar fixed class="tabbar">

      <router-link to="/" class="tabbar-a">
        <mt-tab-item id="首页">
            <span class="iconfont">&#xe60f;</span>
        </mt-tab-item>
      </router-link>

      <router-link to="/" class="tabbar-a">
        <mt-tab-item id="点歌">
          <span class="iconfont">&#xe6b2;</span>
        </mt-tab-item>
      </router-link>

      <router-link to="/" class="tabbar-a">
        <mt-tab-item id="我的">
          <span class="iconfont">&#xe600;</span>
        </mt-tab-item>
      </router-link>

    </mt-tabbar>
  </div>
</template>

<script>
import {Tabbar, TabItem} from 'mint-ui'
import 'mint-ui/lib/style.css'
export default {
  name: 'HomeTabbar',
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    Tabbar,
    TabItem
  }
}
</script>

<style lang="scss" scoped>
 @import "../../../assets/css/element.scss";
.tabbar {
  @include flex(row);
  justify-content: space-around;
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 26px;
    font-style: normal;
  }
}
</style>
