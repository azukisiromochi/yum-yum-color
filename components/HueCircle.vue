<template>
  <div id="hue-circle-container">
    <canvas id="hue-circle" data-tooltip="Tooltip Text"></canvas>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapMutations, mapGetters } from 'vuex'
import VueAnime from 'vue-animejs';
Vue.use(VueAnime)

export default {
  data: function () {
    return {
      rotate: 0
    }
  },
  mounted() {
    const unwatch = this.$store.watch(
      state => state.colorTone.colors,
      colors => {
        this.makeHueCircle(Object.values(colors))
      }
    )
    const colors = Object.values(this.getColors())
    this.makeHueCircle(colors)
  },
  methods: {
    makeHueCircle: function (colors) {
      this.turnHueCircle()

      const container = document.getElementById('hue-circle-container')
      const canvas = document.getElementById('hue-circle')
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
      canvas.addEventListener('click', this.clickHueCircle, false)

      const x = canvas.width / 2
      const y = canvas.height / 2
      const radius = x < y ? x : y

      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      let angle = 255
      for (let i = 0; i < 12; i++) {

        this.fill(ctx, x, y, radius, angle, angle + 30, colors[i])
        angle += 30
      }

      this.fill(ctx, x, y, radius / 2, 0, 360, '#FFFFFF')
    },
    fill: function (ctx, x, y, radius, startAngle, endAngle, colorCode) {
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.arc(x, y, radius, this.toRadian(startAngle), this.toRadian(endAngle))
      ctx.fillStyle = colorCode
      ctx.fill()
    },
    turnHueCircle: function () {
      this.rotate += 1
      const turnFunc = this.$anime({
        targets: '#hue-circle',
        rotate: this.rotate + 'turn',
        duration: 3000,
      })
    },
    clickHueCircle: function (e) {
      const canvas = document.getElementById('hue-circle')
      const x = canvas.width / 2
      const y = canvas.height / 2
      const radius = x < y ? x : y

      const distance = this.calDistance(x, y, e.layerX, e.layerY)
      const degree = this.calDegree(x, y, e.layerX, e.layerY)

      console.log('distance: ' + distance + ', degree: ' + degree)
      if (radius / 2 < distance && distance < radius) {
        const colorName = this.selectedColor(degree)
        if (colorName) {
          this.changeColor(colorName)
        }
      }
    },
    selectedColor: function (degree) {
      const colorNames = Object.keys(this.getColors())
      const check = (degree < 255) ? degree + 360 : degree
      let angle = 255
      for (let i = 0; i < 12; i++) {
        if (angle <= check && check < angle + 30) {
          return colorNames[i]
        }
        angle += 30
      }
      return null
    },
    calDistance: function (x, y, x2, y2) {
      return Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y))
    },
    calDegree: function (x, y, x2, y2) {
      return this.toDegree(Math.atan2(y2 - y,x2 - x))
    },
    toRadian: function (degree) {
      return degree * Math.PI / 180
    },
    toDegree: function (radian) {
      const degree = radian * 180 / Math.PI
      return degree > 0 ? degree : degree + 360
    },
    ...mapMutations({
      changeColor: 'colorTone/select'
    }),
    ...mapGetters({
      getColors: 'colorTone/colors'
    })
  }
}
</script>

<style lang="scss">
#hue-circle-container {
  width: 420px;
  height: 420px;
  margin: auto;
}
</style>