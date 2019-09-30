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
  name: 'ParticularsHeader'
}
</script>

<style lang="scss" scoped>
.mint-header {
  z-index: 99;
  background-color: rgba(255, 255, 255, 0.1);
  .router-link-active {
    color: #000 !important;
  }
  .mintui.mintui-back {
    color: #000;
  }
}
</style>
