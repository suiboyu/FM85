<template>
  <div class="container">
    <div class="login-top">
      <div class=""></div>

      <mt-actionsheet
        :actions= "data"
        v-model="sheetVisible">
      </mt-actionsheet>
      <button class="profile-photo" @click="actionSheet">
      <label class="mint-button-text">设置你的头像</label>
      </button>
      <span class="span-title">设置你的呢称</span>
      <div class="install"></div>
    </div>
    <div class="mid">
        <div class="title">我的投稿</div>
        <div class="content"></div>
        <div class="title">我的歌曲</div>
        <div class="content"></div>
    </div>
    <div class="bottom">本作品尚未完成，尽情期待</div>
  </div>
</template>

<script>
export default {
  name: 'LoginContent',
  data () {
    return {
      data: [{
        name: '拍照',
        method: this.getCamera
      }, {
        name: '从相册中选择',
        method: this.getLibrary
      }],
      sheetVisible: false
    }
  },
  methods: {
    actionSheet: function () {
      this.sheetVisible = true
    },
    getCamera: function () {
    //   console.log('打开照相机')
    },
    getLibrary: function () {
    //   console.log('打开相册')
    }
  }
}
</script>

<style scoped>
.container {
    margin-top: 45px;
}
.login-top {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 80px;
    background-color: #e6e3e38f;
    padding-left: 10px;
    padding-top: 10px;
}
.profile-photo {
    width: 58px;
    height: 58px;
    background-color: #ddd;
    border-radius: 50%;
    color: #a6a2a2;
}
.span-title {
    position: absolute;
    left: 82px;
    top: 28px;
}
.install {
    position: absolute;
    right: 0;
    top: 20px;
    width: 40px;
    height: 40px;
    /* background: url(../../../assets/download.png) no-repeat; */
    background-size: 30px;
}
.mid {
    box-sizing: border-box;
    width: 100%;
    height: 240px;
    margin-top: 10px;
}
.title {
    height: 20px;
    background-color: #afb1b3;
}
.content {
    height: 90px;
    background-color: #dedee3a3;
}
.bottom {
    margin-top: 270px;
    color: #ccc
}
</style>
