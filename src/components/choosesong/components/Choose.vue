<template>
  <div class="content">
    <mt-field label="点歌人" placeholder="点歌人" v-model="username"></mt-field>
    <mt-field label="祝福人" placeholder="祝福人" v-model="wish"></mt-field>
    <mt-field label="手机号码" placeholder="请输入点歌人手机号码" type="number" v-model="number"></mt-field>
    <mt-field label="歌曲名称" placeholder="请输入相应的版本" v-model="song"></mt-field>
    <mt-field label="播放时间" placeholder="播放时间" type="date" v-model="time"></mt-field>
    <textarea name="" id="text" cols="40" rows="8" placeholder="祝福语" v-model="word"></textarea>
    <mt-button
      type="primary"
      size="large"
      @click="handlebtnclick"
    >提交</mt-button>
  </div>
</template>

<script>
import { Indicator, MessageBox } from 'mint-ui'
export default {
  name: 'Choose',
  data () {
    return {
      username: '',
      wish: '',
      number: Number,
      time: Number,
      word: '',
      song: ''
    }
  },
  methods: {
    handlebtnclick () {
      if (this.wish === '' || this.time === '' || this.word === '' || this.song === '') {
        MessageBox('提示', '请填写完整的信息')
      } else {
        Indicator.open({
          text: '提交中...',
          spinnerType: 'fading-circle'
        })
        setTimeout(() => {
          Indicator.close()
        }, 2000)
        this.username = ''
        this.wish = ''
        this.number = ''
        this.time = ''
        this.word = ''
        this.song = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
    margin-top: 40px;
    #text {
        border-top: 1px solid #d9d9d9;
        font-size: 16px;
        color: #929090;
    }
}
</style>
