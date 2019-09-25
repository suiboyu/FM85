<template>
  <div>
     <div class="TinySubmit-container">
        <span class="text-reminder">快把你的生活小技巧分享出来吧</span>
        <textarea name="" id="text" cols="46" rows="10" v-model="inputValue" class="text"></textarea>
        <mt-button
          type="primary"
          size="large"
          class="TinySubmit-btn"
          @click="handleBtnClick"
        >上传稿件</mt-button>
      </div>
  </div>
</template>

<script>
import { Indicator, MessageBox, Button } from 'mint-ui'
export default {
  name: 'TinySubmit',
  components: {
    MessageBox,
    Button
  },
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    handleBtnClick () {
      if (this.inputValue === '') {
        MessageBox('提示', '提交内容不能为空')
      } else {
        Indicator.open()
        setTimeout(() => {
          Indicator.close()
        }, 2000)
        this.inputValue = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.TinySubmit-container {
    margin-top: 20px;
    margin-bottom: 8px;
    .text-reminder {
      display: block;
      border: 1px solid #000;
      box-shadow: 0px 0px 8px #333;
      border-radius: 4px;
      margin-bottom: 4px;
      text-align: center;
      .TinySubmit-btn {
        margin-top: 10px;
      }
    }
}
</style>
