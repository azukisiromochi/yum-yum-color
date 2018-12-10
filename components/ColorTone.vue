<template>
  <div id="tone-container">
    <div class="columns">
      <div class="column">
        <div class="tile is-vertical">
          <div class="tile tone-button-box t-is-p">
            <div class="tone-button" v-bind:class="cIsX" @click="changeColorTone('p')">p+</div>
          </div>
          <div class="tile tone-button-box t-is-ltg">
            <div class="tone-button" v-bind:class="cIsX" @click="changeColorTone('ltg')">ltg</div>
          </div>
          <div class="tile tone-button-box t-is-g">
            <div class="tone-button" v-bind:class="cIsX" @click="changeColorTone('g')">g</div>
          </div>
          <div class="tile tone-button-box t-is-dkg">
            <div class="tone-button" v-bind:class="cIsX" @click="changeColorTone('dkg')">dkg</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="tile is-vertical">
          <div class="tile tone-button-box t-is-lt">
            <div class="tone-button" v-bind:class="cIsX" @click="changeColorTone('lt')">lt+</div>
          </div>
          <div class="tile tone-button-box  t-is-sf">
            <div class="tone-button" v-bind:class="cIsX" @click="changeColorTone('sf')">sf</div>
          </div>
          <div class="tile tone-button-box t-is-d">
            <div class="tone-button" v-bind:class="cIsX" @click="changeColorTone('d')">d</div>
          </div>
          <div class="tile tone-button-box t-is-dk">
            <div class="tone-button" v-bind:class="cIsX" @click="changeColorTone('dk')">dk</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="tile is-vertical">
          <div class="tile tone-button-box t-is-b">
            <div class="tone-button" v-bind:class="cIsX" @click="changeColorTone('b')">b</div>
          </div>
          <div class="tile tone-button-box t-is-s">
            <div class="tone-button" v-bind:class="cIsX" @click="changeColorTone('s')">s</div>
          </div>
          <div class="tile tone-button-box t-is-dp">
            <div class="tone-button" v-bind:class="cIsX" @click="changeColorTone('dp')">dp</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="tile tone-button-box  t-is-v">
          <div class="tone-button" v-bind:class="cIsX" @click="changeColorTone('v')">v</div>
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
      cIsX: 'c-is-Y'
    }
  },
  mounted() {
    const unwatch = this.$store.watch(
      state => state.colorTone.selectColor,
      selectColor => {
        this.cIsX = 'c-is-' + selectColor
      }
    )
  },
  methods: {
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
}

.tone-button:hover{
  animation: bounce 2s ease-in-out;
}
@keyframes bounce {
  5%  { transform: scale(1.1, .8); }
  10% { transform: scale(.8, 1.1) translateY(-5px); }
  15% { transform: scale(1, 1); }
}

</style>
