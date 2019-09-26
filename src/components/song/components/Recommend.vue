<template>
  <div class="content">
    <h4>每天推荐好歌</h4>
    <div class="item" v-for="list in lists" :key="list.id">
        <div class="item1">
            <div class="img">
                <img :src="list.image1" alt="" width="90%" height="100">
                <div class="desc">
                    <h3> {{list.singer1}} </h3>
                    <p> {{list.song1}} </p>
                </div>
            </div>
        </div>
        <div class="item2">
            <div class="img">
                <img :src="list.image2" alt="" width="92%" height="100">
                <div class="desc">
                    <h3> {{list.singer2}} </h3>
                    <p> {{list.song2}} </p>
                </div>
            </div>
        </div>
        <div class="item3">
            <div class="img">
                <img :src="list.image3" alt="" width="90%" height="100">
                <div class="desc">
                    <h3> {{list.singer3}} </h3>
                    <p> {{list.song3}} </p>
                </div>
            </div>
        </div>
        <div class="item4">
            <div class="img">
                <img :src="list.image4" alt="" width="90%" height="100">
                <div class="desc">
                    <h3> {{list.singer4}} </h3>
                    <p> {{list.song4}} </p>
                </div>
            </div>
        </div>
    </div>
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
    height: 490px;
    h4 {
        text-align: center;
        padding: 6px;
        background-color: #eee;
        border-bottom: 1px solid #ddd;
        color:  #939292;
    }
    .item {
        margin-top: 20px;
        position: relative;
        .item1 {
            @include site;
            .img {
                .desc {
                    @include sty;
                }
            }
        }
        .item2 {
            @include site;
            right: -36px;
            top: 120px;
            .img {
                .desc {
                    @include sty;
                }
            }
        }
        .item3 {
            @include site;
            left: 0;
            top: 240px;
            .img {
                .desc {
                    @include sty;
                }
            }
        }
        .item4 {
            @include site;
            right: -36px;
            top: 360px;
            .img {
                .desc {
                    @include sty;
                }
            }
        }
    }
}
</style>
