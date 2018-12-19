<template>
  <div>
    <div class="columns" v-bind:class="tIsX">
      <div class="column" v-bind:class="cIsX">{{colorCode}}</div>
      <div class="column" v-bind:class="cIsXDyad">{{dyadColorCode}}</div>
    </div>
    <div class="columns" v-bind:class="tIsX">
      <div class="column" v-bind:class="cIsX">{{colorCode}}</div>
      <div class="column" v-bind:class="cIsXTriad1">{{triadColorCode1}}</div>
      <div class="column" v-bind:class="cIsXTriad2">{{triadColorCode2}}</div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  data: function () {
    return {
      tone: 'v',
      selectColor: 'Y',
      tIsX: 't-is-v',
      cIsX: 'c-is-Y',
      colorCode: '#eec900',
      // Dyad
      cIsXDyad: 'c-is-V',
      dyadColorCode: '#534aa0',
      // Triad
      cIsXTriad1: 'c-is-gB',
      triadColorCode1: '#00709b',
      cIsXTriad2: 'c-is-RP',
      triadColorCode2: '#ad2e6c',
    }
  },
  mounted() {
    this.$store.watch(
      state => state.colorTone.tone,
      tone => {
        this.tone = tone
        this.tIsX = 't-is-' + tone
      }
    )
    this.$store.watch(
      state => state.colorTone.selectColor,
      selectColor => {
        this.selectColor = selectColor
        this.cIsX = 'c-is-' + selectColor
        this.selectDyad()
        this.selectTriad()
      }
    )
    this.$store.watch(
      state => state.colorTone.colors,
      colors => {
        this.colorCode = colors[this.selectColor]
        this.selectDyad()
        this.selectTriad()
      }
    )
  },
  methods: {
    selectDyad: function() {
      let dyadColor = this.getDyad()
      this.cIsXDyad = 'c-is-' + dyadColor
      this.dyadColorCode =  this.getColors()[dyadColor]
    },
    selectTriad: function() {
      let triadColors = this.getTriad()
      this.cIsXTriad1 = 'c-is-' + triadColors[0]
      this.cIsXTriad2 = 'c-is-' + triadColors[1]
      const colors = this.getColors()
      this.triadColorCode1 =  colors[triadColors[0]]
      this.triadColorCode2 =  colors[triadColors[1]]
    },
    ...mapMutations({
      changeColorTone: 'colorTone/change',
    }),
    ...mapGetters({
      getColors: 'colorTone/colors',
      getDyad: 'colorTone/dyad',
      getTriad: 'colorTone/triad',
    })
  }
}
</script>

<style lang="scss" scoped>
  .column {
    margin-bottom: 10px;
  }
</style>
