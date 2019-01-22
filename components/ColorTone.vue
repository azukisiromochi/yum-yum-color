<template>
  <div id="tone-container">
    <div class="columns">
      <div class="column">
        <div class="tile is-vertical">
          <div class="tile tone-button-box t-is-p">
            <div class="tone-button to-grd" :class="cIsX" @click="selectTone('p')">p+</div>
            <div v-show="tone === 'p'" class="butterfly"><img :src="butterfly_img"></div>
          </div>
          <div class="tile tone-button-box t-is-ltg">
            <div class="tone-button to-grd" :class="cIsX" @click="selectTone('ltg')">ltg</div>
            <div v-show="tone === 'ltg'" class="butterfly"><img :src="butterfly_img"></div>
          </div>
          <div class="tile tone-button-box t-is-g">
            <div class="tone-button to-grd" :class="cIsX" @click="selectTone('g')">g</div>
            <div v-show="tone === 'g'" class="butterfly"><img :src="butterfly_img"></div>
          </div>
          <div class="tile tone-button-box t-is-dkg">
            <div class="tone-button to-grd" :class="cIsX" @click="selectTone('dkg')">dkg</div>
            <div v-show="tone === 'dkg'" class="butterfly"><img :src="butterfly_img"></div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="tile is-vertical">
          <div class="tile tone-button-box t-is-lt">
            <div class="tone-button to-grd" :class="cIsX" @click="selectTone('lt')">lt+</div>
            <div v-show="tone === 'lt'" class="butterfly"><img :src="butterfly_img"></div>
          </div>
          <div class="tile tone-button-box  t-is-sf">
            <div class="tone-button to-grd" :class="cIsX" @click="selectTone('sf')">sf</div>
            <div v-show="tone === 'sf'" class="butterfly"><img :src="butterfly_img"></div>
          </div>
          <div class="tile tone-button-box t-is-d">
            <div class="tone-button to-grd" :class="cIsX" @click="selectTone('d')">d</div>
            <div v-show="tone === 'd'" class="butterfly"><img :src="butterfly_img"></div>
          </div>
          <div class="tile tone-button-box t-is-dk">
            <div class="tone-button to-grd" :class="cIsX" @click="selectTone('dk')">dk</div>
            <div v-show="tone === 'dk'" class="butterfly"><img :src="butterfly_img"></div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="tile is-vertical">
          <div class="tile tone-button-box t-is-b">
            <div class="tone-button to-grd" :class="cIsX" @click="selectTone('b')">b</div>
            <div v-show="tone === 'b'" class="butterfly"><img :src="butterfly_img"></div>
          </div>
          <div class="tile tone-button-box t-is-s">
            <div class="tone-button to-grd" :class="cIsX" @click="selectTone('s')">s</div>
            <div v-show="tone === 's'" class="butterfly"><img :src="butterfly_img"></div>
          </div>
          <div class="tile tone-button-box t-is-dp">
            <div class="tone-button to-grd" :class="cIsX" @click="selectTone('dp')">dp</div>
            <div v-show="tone === 'dp'" class="butterfly"><img :src="butterfly_img"></div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="tile tone-button-box  t-is-v">
          <div class="tone-button to-grd" :class="cIsX" @click="selectTone('v')">v</div>
          <div v-show="tone === 'v'" class="butterfly"><img :src="butterfly_img"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data: function () {
    return {
      tone: '',
      cIsX: 'c-is-Y',
      butterfly_img: require("~/static/butterfly.png")
    }
  },
  mounted() {
    this.$store.watch(
      state => state.colorTone.selectColor,
      selectColor => {
        this.cIsX = 'c-is-' + selectColor
      }
    )
    this.selectTone('v')
  },
  methods: {
    selectTone: function (tone) {
      const oldTone = this.tone
      const newTone = tone
      if (oldTone === newTone) return

      const fly = this.$anime({
        targets: '.t-is-' + oldTone + ' .butterfly',
        duration: 1000,
        translateX: 20,
        translateY: -30,
        rotate: -10,
        opacity: {
          value: 0,
          delay: 200,
        },
        width: {
          value: '-=20',
          delay: 200,
        },
        height: {
          value: '-=20',
          delay: 200,
        },
        easing: 'easeInOutQuad',
      })
      fly.complete = () => {
        this.tone = tone
        this.$anime({
          targets: '.t-is-' + newTone + ' .butterfly',
          duration: 1000,
          translateX: [-40, 0],
          translateY: [-20, 0],
          rotate: {
            value: [60, 0],
            delay: 250,
          },
          opacity: {
            value: [0, 1],
            delay: 200,
          },
          width: ['40px', '60px'],
          height: ['40px', '60px'],
          easing: 'easeInOutQuad',
        })
      }
      this.changeColorTone(tone)
    },
    ...mapMutations({
      changeColorTone: 'colorTone/change'
    })
  }
}
</script>

<style lang="scss">
#tone-container {
  .columns {
    align-items: center;
  }
}

.tone-button-box {
  position: relative;
  justify-content: center;
  align-items: center !important;
}

.tone-button {
  margin: 15px;
  display: inline-block;
  width: 80px;
  height: 80px;
  line-height: 80px;
  border: none;
  border-radius: 50%;
  text-decoration: none;
  text-align: center;
  transition: .2s ease-in-out;
  cursor: url('/flower.png') 16 16, pointer;
}

.tone-button:hover{
  animation: bounce 2s ease-in-out;
}
@keyframes bounce {
  5%  { transform: scale(1.1, .8); }
  10% { transform: scale(.8, 1.1) translateY(-5px); }
  15% { transform: scale(1, 1); }
}

.butterfly {
  position: absolute;
  pointer-events: none;
  width: 60px;
  top: 0;
  left: 15px;
}

</style>
