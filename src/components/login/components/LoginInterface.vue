<template>
  <div class="Right">
    <div class="right-top">
        <input
          type="text"
          class="input-one"
          placeholder="请输入手机号"
          v-model="inputOne"
        >
        <input
          type="password"
          class="input-one"
          placeholder="请输入密码"
          v-model="inputTwo"
        >
        <mt-button
          type="primary"
          size="large"
          class="login-btn"
          @click="handleBtnClick"
        >提交</mt-button>
        <p class="login-hint">温馨提示: 本项目尚未提供找回密码功能</p>
    </div>
  </div>
</template>

<script>
import {Indicator, MessageBox} from 'mint-ui'
export default {
  name: 'LoginInterface',
  data () {
    return {
      inputOne: '',
      inputTwo: ''
    }
  },
  methods: {
    handleBtnClick () {
      const cellphone = '1'
      const passwordNumber = '2'

      let inputOne = this.inputOne
      let inputTwo = this.inputTwo

      if (inputOne === '' && inputTwo === '') {
        MessageBox('', '手机号和密码不能为空')
      }

      if (inputOne === cellphone && inputTwo !== passwordNumber) {
        MessageBox('', '请输入正确的密码')
        this.inputOne = ''
        this.inputTwo = ''
      }

      if (inputOne !== cellphone && inputTwo === passwordNumber) {
        MessageBox('', '请输入正确的手机号')
        this.inputOne = ''
        this.inputTwo = ''
      }

      if (inputOne === cellphone && inputTwo === passwordNumber) {
        MessageBox('', '登录成功')
        Indicator.open()
        setTimeout(() => {
          Indicator.close()
        }, 2000)
        this.inputOne = ''
        this.inputTwo = ''

        let flag = false

        this.$emit('func', flag)
      }

      if (inputOne !== cellphone && inputTwo !== passwordNumber) {
        MessageBox('你只有三次机会', '输入正确的手机号和密码,')
        this.inputOne = ''
        this.inputTwo = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Right {
    margin-top: 40px;
    .right-top {
       width: 220px;
       height: 200px;
       margin: 180px auto;
       .input-one {
         width: 210px;
         height: 30px;
         border: 1px solid #ccc;
         margin-top: 10px;
         padding-left: 5px;
         color: #ccc;
         }
        .login-btn {
          margin-top: 10px;
      }
      .login-hint {
         font-size: 12px;
         color: #ccc;
      }
   }
}
</style>
