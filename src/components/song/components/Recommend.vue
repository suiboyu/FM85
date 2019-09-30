<template>
  <div class="content">
    <h4>每天推荐好歌</h4>
    <router-link
      tag="div"
      class="item"
      v-for="(list, index) in lists"
      :key="list.id"
      :to="'/particulars/' + list.id"
    >
        <div :class="'item' + index">
            <div class="img">
                <img :src="list.image" alt="" width="90%" height="100px">
                <div class="desc">
                    <h3> {{list.singer}} </h3>
                    <p> {{list.song}} </p>
                </div>
            </div>
        </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SongRecommend',
  props: {
    lists: Array
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/css/layout.scss";
.content {
    margin-top: 43px;
    height: 440px;
    h4 {
        text-align: center;
        padding: 6px;
        background-color: #eee;
        border-bottom: 1px solid #ddd;
        color:  #939292;
        margin-bottom: 10px;
    }
    .item:nth-child(even) {
        float: left;
        @include item;
        .desc {
          @include sty;
          left: 38%;
        }
    }
    .item:nth-child(odd) {
        float: right;
        @include item;
        img {
            float: right;
        }
        .desc {
          @include sty;
          right: 40%;
        }
    }
}
</style>
