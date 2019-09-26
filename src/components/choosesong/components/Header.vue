<template>
  <div>
    <mt-header title="" fixed>
      <router-link to="/components/song/index" slot="left">
         <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<script>
export default {
  name: 'ChooseHeader'
}
</script>

<style lang="scss" scoped>
</style>
