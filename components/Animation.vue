<template>
  <div id="animation-container" v-bind:style="bcStyle">
    <div class="slider" v-bind:style="c3Style"></div>
    <div class="bar" v-bind:style="c4Style"></div>
    <div class="bar-presser" v-bind:style="bcStyle"></div>
    <div class="ball" v-bind:style="c2Style"></div>
  </div>
</template>

<script>
export default {
  props: {
    colorCodes: Object,
  },
  data: function () {
    return {
      bcStyle: { background: this.colorCodes.bc },
      c2Style: { background: this.colorCodes.c2 },
      c3Style: {
        'border-top': '98px solid ' + this.colorCodes.bc,
      	'border-right': '98px solid ' + this.colorCodes.c3,
      	'border-bottom': '98px solid ' + this.colorCodes.c3,
      	'border-left': '98px solid ' + this.colorCodes.bc,
      },
      c4Style: { background: this.colorCodes.c4 },
    }
  },
  mounted() {
    this.$watch('colorCodes.bc', function (newVal, oldVal) {
      this.bcStyle = { background: this.colorCodes.bc }
      this.c2Style = { background: this.colorCodes.c2 }
      this.c3Style = {
        'border-top': '98px solid ' + this.colorCodes.bc,
      	'border-right': '98px solid ' + this.colorCodes.c3,
      	'border-bottom': '98px solid ' + this.colorCodes.c3,
      	'border-left': '98px solid ' + this.colorCodes.bc,
      }
      this.c4Style = { background: this.colorCodes.c4 }
    })

    this.$anime
      .timeline({
        targets: '#animation-container .ball',
        loop: true,
        duration: 2000,
      })
      .add({
        translateX: [250, 205],
        translateY: 1,
        easing: 'easeInOutQuad',
      })
      .add({
        translateX: [205, 1],
        translateY: [1, 205],
        duration: 1500,
        easing: 'easeInOutQuad',
      })
      .add({
        translateX: 1,
        translateY: [205, 250],
        duration: 500,
      })
      .add({
        translateX: [1, 250],
        translateY: [250, 250],
        easing: 'easeInOutQuad',
      })
      .add({
        translateX: 250,
        translateY: 1,
        easing: 'easeInOutQuad',
      })

    this.$anime
      .timeline({
        targets: '#animation-container .bar-presser',
        loop: true,
        duration: 4000,
      })
      .add({
        height: {
          value: 248,
          delay: 1500,
          duration: 1000,
          easing: 'easeInOutSine'
        },
      })
      .add({
        height: {
          value: 0,
          delay: 3550,
          duration: 1950,
          easing: 'easeInOutSine'
        },
      })

  },
}
</script>

<style lang="scss" scoped>
#animation-container {
  position: relative;
  width: 300px;
  height: 300px;
  margin: auto;

  div {
    position: absolute;
  }
}
.ball {
  width: 48px;
  height: 48px;
  margin: 1px;
  border-radius: 24px;
}
.bar {
  left: 248px;
  top: 50px;
  width: 48px;
  height: 248px;
  margin: 1px;
}
.bar-presser {
  left: 248px;
  top: 50px;
  width: 48px;
  height: 0px;
  margin: 1px;
}
.slider{
	width: 0;
	height: 0;
  left: 50px;
  top: 51px;
}
</style>
