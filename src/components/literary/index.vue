<template>
  <div>
    <literary-header></literary-header>
    <literary-int></literary-int>
  </div>
</template>

<script>
import LiteraryHeader from './components/Header'
import LiteraryInt from './components/Introduce'
export default {
  name: 'literary',
  data () {
    return {
    }
  },
  components: {
    LiteraryHeader,
    LiteraryInt
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
