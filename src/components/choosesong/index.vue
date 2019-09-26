<template>
  <div>
    <ChooseHeader></ChooseHeader>
    <Choose></Choose>
  </div>
</template>

<script>
import ChooseHeader from './components/Header'
import Choose from './components/Choose'
export default {
  name: 'choosesong',
  data () {
    return {
    }
  },
  components: {
    ChooseHeader,
    Choose
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
