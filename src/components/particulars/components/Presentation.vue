<template>
  <div class="content">
      <audio class="audio"
           :src="audiourl"
           controls
           hidden="true"
           >
        </audio>
    <div class="left">
        <div class="title">
            <h3> {{songer}} </h3>
            <p> {{singname}} </p>
        </div>
        <div class="desc">
            <p> {{remark}} </p>
        </div>
    </div>
    <div class="right">
        <img :src="imgurl" alt="" width="40%">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParticularsPre',
  props: {
    songer: String,
    singname: String,
    remark: String,
    imgurl: String
  },
  data () {
    return {
      'audiourl': require('../../../../static/imgs/Dlc.mp3')
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
    .audio {
        display: block;
        height: 40px;
        margin: 20px auto;
    }
    .left {
        width: 40%;
        float: left;
        padding-left: 10px;
        .title {
            margin-bottom: 15px;
            text-align: center;
            line-height: 20px;
            color: #b3b0b0;
        }
        .desc {
            text-align: center;
            line-height: 17px;
            color: #b3b0b0;
        }
    }
    .right {
        padding-right: 18px;
        box-sizing: border-box;
        img {
            float: right;
        }
    }
}
</style>
