<template>
  <div class="content">
    <h4>Daily Recommendation</h4>
    <audio
      class="audio"
      src="../../../../static/imgs/Take.mp3"
      controls
      hidden="true"
    ></audio>
  </div>
</template>

<script>
export default {
  name: 'EnglishAudio'
}
</script>

<style lang="scss" scoped>
.content {
    // margin: 20px auto;
    h4 {
        text-align: center;
        margin-top: 8px;
        font-size: 20px;
        color: #8b8b8b;
    }
    .audio {
        display: block;
        margin: 10px auto;
    }
}
</style>
