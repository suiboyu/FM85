<template>
  <div class="container">

   <LoginTop></LoginTop>

    <div class="mid">
        <div class="title">
          <span>我的投稿</span>
        </div>
        <div class="content" v-for="item in items" :key="item.id">
          <span>投稿日期：{{ item.date }} | 投稿栏目：{{ item.cloumn }}</span>
          <p> {{item.desc}} </p>
          <span class="un">播出于：{{ item.time }}</span>
        </div>

        <div class="title">我的歌曲</div>
        <div class="content" v-for="list in lists" :key="list.id">
          <h4>点歌人：{{ list.person }}</h4>
          <h4>祝福对象：{{ list.obj }}</h4>
          <h4>播出时间：{{ list.date }}</h4>
          <h4>歌曲名称：{{ list.name }}</h4>
          <h4>祝福语：{{ list.wish }}</h4>
        </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
import LoginTop from './LoginTop'
export default {
  name: 'LoginContent',
  props: {
    items: Array,
    lists: Array
  },
  components: {
    LoginTop
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
    margin-top: 45px;
   .mid {
    box-sizing: border-box;
    width: 100%;
    height: 240px;
    margin-top: 10px;
    .title {
      height: 25px;
      background-color: #afb1b3;
      text-align: left;
      line-height: 25px;
      margin-bottom: 10px;
    }
    .content {
      // height: 120px;
      background-color: #dedee3a3;
      padding: 4px;
      box-sizing: border-box;
      margin-bottom: 8px;
      span {
        color: #9e9999;
        border-bottom: 1px solid #9e9999;
      }
      p {
        padding-top: 10px;
        padding-bottom: 10px;
        line-height: 20px;
        color: #8f8c8c;
      }
      .un {
        border-top: 1px solid #9e9999;
        border-bottom: 0 !important;
        padding-top: 4px;
        box-sizing: border-box;
      }
      h4 {
        margin-bottom: 4px;
        background-color: #dadada;
        padding: 4px;
        box-sizing: border-box;
        &:nth-child(5) {
          line-height: 20px;
        }
      }
    }
  }
  .bottom {
    margin-top: 270px;
    color: #ccc
  }
}
</style>
