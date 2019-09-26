<template>
  <div>
     <div class="login-top">
      <div class=""></div>
      <mt-actionsheet
        :actions= "data"
        v-model="sheetVisible">
      </mt-actionsheet>
      <button class="profile-photo" @click="actionSheet">
      <label class="mint-button-text">你的头像</label>
      </button>
      <span class="span-title">设置你的呢称</span>
      <div class="install">
        <span class="iconfont">&#xe612;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginTop',
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
    },
    getLibrary: function () {
    }
  }
}
</script>

<style lang="scss" scoped>
.login-top {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  background-color: #e6e3e38f;
  padding-left: 10px;
  padding-top: 10px;
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
    background-size: 30px;
    .iconfont {
      font-size: 26px;
    }
  }
}
</style>
