<template>
  <div class="content">
    <div class="img">
        <img :src="imgurl1" alt="" width="30%" height="140px">
        <img :src="imgurl2" alt="" width="30%" height="140px">
        <img :src="imgurl3" alt="" width="30%" height="140px">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParticularsCards',
  data () {
    return {
      imgurl1: require('../../../../static/imgs/images/u1.gif'),
      imgurl2: require('../../../../static/imgs/images/u2.gif'),
      imgurl3: require('../../../../static/imgs/images/u3.gif')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/css/element.scss";
.content {
    width: 90%;
    height: 140px;
    margin: 5px auto;
    .img {
        @include flex(row);
        justify-content: space-around;
        margin-top: 20px;
    }
}
</style>
