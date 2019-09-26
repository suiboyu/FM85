<template>
  <div>
     <div class="literary-container">
        <span class="text-reminder">Let the world know your talent</span>
        <textarea name="" id="text" cols="46" rows="10" v-model="inputValue" class="text"></textarea>
        <mt-button
          type="primary"
          size="large"
          class="literary-btn"
          @click="handleBtnClick"
        >上传稿件</mt-button>
      </div>
  </div>
</template>

<script>
import { Indicator, MessageBox, Button } from 'mint-ui'
export default {
  name: 'EnglishSubmit',
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
    handlebtn () {
      MessageBox('', '终于等到你来投稿了')
    },
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
.literary-container {
    margin-top: 27px;
    margin-bottom: 10px;
    .text-reminder {
      display: block;
      border: 1px solid #000;
      box-shadow: 0px 0px 8px #333;
      border-radius: 4px;
      margin-bottom: 4px;
      text-align: center;
      .literary-btn {
        margin-top: 10px;
      }
    }
}
</style>
