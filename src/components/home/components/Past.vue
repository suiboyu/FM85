<template>
  <div>
      <h4>往日稿件</h4>
    <router-link
    class="item"
    tag="div"
    v-for="array in news"
    :key="array.id"
    :to="'/detail/' + array.id"
  >
        <div class="content">
            <img :src="array.imgurl" alt="" height="261px" width="320px">
            <div class="desc"> {{array.content}} </div>
        </div>
        <div class="title"> {{array.time}} | {{array.mingcheng}} </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePast',
  props: {
    news: Array
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/element.scss";
  h4 {
      font-size: 20px;
      padding-left: 10px;
  }
  .item {
      width: 100%;
      margin-bottom: 38px;
      border: 1px solid #ddd;
      .content {
          position: relative;
          width: 100%;
          height: 260px;
          img {
              display: block;
              margin: 10px auto;
          }
          .desc {
              position: absolute;
              height: 100px;
              bottom: 0px;
              color: #eee;
              font-size: 16px;
              background-color: rgba(0, 0, 0, 0.3);
              margin-left: 12px;
              margin-right: 15px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 6;
              -webkit-box-orient: vertical;
              border-radius: 4px;
              padding: 4px;
              box-sizing: border-box;
              letter-spacing: 2px;
          }
      }
      .title{
          margin-left: 13px;
          margin-top: 6px;
          font-size: 16px;
          color: #ada9a9;
      }
  }
</style>
