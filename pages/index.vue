<template>
  <section class="container">
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <div class="tile is-child box">
          <p class="title">HUE CIRCLE</p>
          <hue-circle/>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child box">
          <p class="title">COLOR TONE</p>
          <color-tone/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HueCircle from '~/components/HueCircle.vue'
import ColorTone from '~/components/ColorTone.vue'

export default {
  components: {
    'hue-circle': HueCircle,
    'color-tone': ColorTone,
  }
}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#color-select-area {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  width: 100%;
  height: 50%;
}

</style>
