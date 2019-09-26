<template>
  <div class="content">
    <router-link to="/components/choosesong/index">
      <span class="iconfont">&#xe6b2;</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ChooseSong'
}
</script>

<style lang="scss" scoped>
.content {
    margin-top: 40px;
    margin-bottom: 6px;
    // background-color: red;
    border-radius: 6px;
    .iconfont {
      display: block;
      font-family: "iconfont" !important;
      font-size: 32px;
      font-style: normal;
      text-align: center;
      padding: 3px;
      color: #000;
    }
}
</style>
