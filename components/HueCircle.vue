<template>
  <div id="hue-circle-container" :class="isMobile ? 'is-flex-touch' : ''">
    <canvas id="hue-circle"></canvas>
    <div id="fork"><img :src="fork_img" alt="fork"></div>
    <div id="cover"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapMutations, mapGetters } from 'vuex'
import Device from 'ismobilejs'
import VueAnime from 'vue-animejs';
Vue.use(VueAnime)

export default {
  data: function () {
    return {
      fork_img: require("~/static/fork.png"),
      isMobile: Device.any,
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

    this.$anime({
      targets: '#fork',
      delay: 500,
      duration: 5000,
      rotate: [180, 0],
    })
  },
  methods: {
    makeHueCircle: function (colors) {
      const container = document.getElementById('hue-circle-container')
      const canvas = document.getElementById('hue-circle')
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight

      // click event
      const fork = document.getElementById('cover')
      fork.addEventListener('click', this.clickHueCircle, false)

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
          this.$anime({
            targets: '#fork',
            duration: 5000,
            rotate: this.getDegree(),
          })
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
      getColors: 'colorTone/colors',
      getDegree: 'colorTone/degree',
    })
  }
}
</script>

<style lang="scss">
#hue-circle-container {
  position: relative;
  width: 420px;
  height: 420px;
  margin: auto;

  #fork {
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 420px;
    height: 420px;
    margin: auto;
  }
  #cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 420px;
    height: 420px;
    margin: auto;
  }

  &.is-flex-touch {
    width: 325px;
    height: 325px;
    margin: auto;

    #fork {
      width: 325px;
      height: 325px;
      margin: auto;
    }
    #cover {
      width: 325px;
      height: 325px;
      margin: auto;
    }
  }
}
</style>
