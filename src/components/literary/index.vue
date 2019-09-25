<template>
  <div>
    <literary-header></literary-header>
    <literary-int></literary-int>
    <LiterarySubmit></LiterarySubmit>
  </div>
</template>

<script>
import LiteraryHeader from './components/Header'
import LiteraryInt from './components/Introduce'
import LiterarySubmit from './components/Submit'
export default {
  name: 'literary',
  data () {
    return {
    }
  },
  components: {
    LiteraryHeader,
    LiteraryInt,
    LiterarySubmit
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
