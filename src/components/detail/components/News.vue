<template>
  <div class="content">
    <div class="box">
      <div class="title"> {{ this.newstitle }} </div>
      <div class="desc">
        <p> {{ this.newsctx }} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailNews',
  props: {
    newstitle: String,
    newsctx: String
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 10px;
  position: relative;
  .box {
    position: absolute;
    width: 92%;
    background-color: #f1f1f1;
    top: -30px;
    left: 15px;
    border-radius: 5px;
    .title {
      box-sizing: border-box;
      text-align: center;
      padding: 4px;
      font-size: 20px;
      color: #a7a6a6;
    }
    .desc {
      padding: 8px;
      line-height: 20px;
      color: #a7a6a6;
    }
  }
}
</style>
