<template>
  <div class="">

    <div class="content" v-for="item in tinylife" :key="item.id">
      <div class="item">
        <span class="title"> >> {{ item.title1 }} >> </span>
        <p class="desc">{{ item.desc1 }}</p>
      </div>
      <div class="item">
        <span class="title"> >> {{ item.title2 }} >> </span>
        <p class="desc">{{ item.desc2 }}</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TinylifeTips',
  props: {
    tinylife: Array
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/element.scss";
  .content {
    @include flex(row);
    justify-content: space-around;
    background-color: #f7f3f3;
    .item {
        width: 46%;
        height: 150px;
        margin-top: 10px;
        background-color: #fff;
        border-radius: 6px;
        overflow: hidden;
        text-overflow: ellipsis;
        position: relative;
        margin-bottom: 5px;
        &:nth-child(1) {
            margin-right: 5px;
        }
        .title {
            display: block;
            text-align: center;
            margin-bottom: 25px;
            margin-top: 2px;
            color: #26a2ff;
        }
        .desc {
            position: absolute;
            left: 0;
            top: 14px;
            font-size: 14px;
            color: #b2aeae;
            line-height: 20px;
        }
    }
}
</style>
