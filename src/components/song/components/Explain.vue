<template>
  <div class="content">
    <transition
      type="transition"
      name="fade"
      appear
      enter-active-class="animated zoomIn fade-enter-active"
      leave-active-class="animated zoomOut fade-leave-active"
      appear-active-class="animated zoomIn"
    >
      <div class="remianer" v-if="show">
        <p>1.点歌时若不留下点歌人姓名，将以匿名播出。</p>
        <p>2.点歌时间将会提前一个月预定。</p>
        <p>3.每个月的第一天开始接受预约，档期满为止</p>
      </div>
    </transition>
    <button @click="handlebtnclick">点歌说明</button>
  </div>
</template>

<script>
export default {
  name: 'SongExplain',
  data () {
    return {
      show: false
    }
  },
  methods: {
    handlebtnclick () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="css">
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 3s;
}
</style>

<style lang="scss" scoped>
.content {
    width: 100%;
    height: 20px;
    margin-top: 40px;
    position: relative;
    .remianer {
        position: absolute;
        bottom: 18px;
        width: 100%;
        height: 100px;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 8px;
        box-sizing: border-box;
        line-height: 25px;
        color: #fff;
    }
    button {
        width: 100%;
    }
}
</style>
