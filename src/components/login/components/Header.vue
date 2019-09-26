<template>
  <div>
    <mt-header title="登录" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<script>
import { Button } from 'mint-ui'
export default {
  name: 'LoginHeader',
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    Button
  }
}
</script>

<style scoped>
</style>
