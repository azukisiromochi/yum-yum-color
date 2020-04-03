<template>
  <div id="color-scheme-container">
    <div class="tile box">
      <div class="color-scheme-radio">
        <input
          id="cs--dyad"
          v-model="colorScheme"
          type="radio"
          value="dyad">
        <label for="cs--dyad">Dyad</label>
        <input
          id="cs--triad"
          v-model="colorScheme"
          type="radio"
          value="triad">
        <label for="cs--triad">Triad</label>
        <input
          id="cs--split-comp"
          v-model="colorScheme"
          type="radio"
          value="split-comp">
        <label for="cs--split-comp">Split-complementary</label>
        <input
          id="cs--analogous"
          v-model="colorScheme"
          type="radio"
          value="analogous">
        <label for="cs--analogous">Analogous</label>
        <input
          id="cs--tetrad"
          v-model="colorScheme"
          type="radio"
          value="tetrad">
        <label for="cs--tetrad">Tetrad</label>
      </div>
    </div>
    <dyad v-show="colorScheme === 'dyad'"/>
    <triad v-show="colorScheme === 'triad'"/>
    <split-complementary v-show="colorScheme === 'split-comp'"/>
    <analogous v-show="colorScheme === 'analogous'"/>
    <tetrad v-show="colorScheme === 'tetrad'"/>
    <div class="tile box">
      <div class="color-scheme-radio">
        <input
          id="cs2--dyad"
          v-model="colorScheme"
          type="radio"
          value="dyad">
        <label for="cs2--dyad">Dyad</label>
        <input
          id="cs2--triad"
          v-model="colorScheme"
          type="radio"
          value="triad">
        <label for="cs2--triad">Triad</label>
        <input
          id="cs2--split-comp"
          v-model="colorScheme"
          type="radio"
          value="split-comp">
        <label for="cs2--split-comp">Split-complementary</label>
        <input
          id="cs2--analogous"
          v-model="colorScheme"
          type="radio"
          value="analogous">
        <label for="cs2--analogous">Analogous</label>
        <input
          id="cs2--tetrad"
          v-model="colorScheme"
          type="radio"
          value="tetrad">
        <label for="cs2--tetrad">Tetrad</label>
      </div>
    </div>
  </div>
</template>

<script>
import Dyad from '~/components/Dyad.vue'
import Triad from '~/components/Triad.vue'
import SplitComplementary from '~/components/SplitComplementary.vue'
import Analogous from '~/components/Analogous.vue'
import Tetrad from '~/components/Tetrad.vue'

export default {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Slabo+27px&display=swap'
      }
    ]
  },
  components: {
    dyad: Dyad,
    triad: Triad,
    'split-complementary': SplitComplementary,
    analogous: Analogous,
    tetrad: Tetrad
  },
  data: function() {
    return {
      colorScheme: 'dyad'
    }
  }
}
</script>

<style lang="scss" scoped>
.is-dyad,
.is-triad,
.is-split-complementary,
.is-analogous,
.is-tetrad {
  margin: 20px;

  /deep/ .column {
    margin-bottom: 10px;
  }

  /deep/ .color-scheme {
    font-family: 'Slabo 27px' !important;
    cursor: url('/color-palette.png') 16 16, pointer;
    margin-top: 10px;
    margin-bottom: 30px;
  }

  /deep/ .card {
    margin: auto;
    min-width: 300px;
    max-width: 400px;

    .card-header {
      .delete {
        margin: 5px;
      }
    }
  }

  /deep/ .hero {
    .title,
    .subtitle {
      font-family: 'Slabo 27px' !important;
      color: $grey-light;
    }
  }
}
// radio style
.tile {
  &.box {
    background: transparent;
  }
}
.color-scheme-radio {
  width: 100%;
  margin: 1em auto;

  input[type='radio'] {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  label {
    position: relative;
    display: inline-block;
    margin: 1% 2%;
    padding-right: 10px;
    padding-left: 35px;
    cursor: pointer;

    &:before {
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      display: block;
      width: 24px;
      height: 24px;
      content: ' ';
      border: 2px solid $grey-dark;
      border-radius: 4px;
    }
  }
  input[type='radio'] + label::before {
    border-radius: 18px;
  }
  input[type='radio']:checked + label {
    padding-left: 10px;
    color: $white;

    &:before {
      top: 0;
      width: 100%;
      height: 100%;
      background: $grey-dark;
    }
  }
  /* Transition */
  label,
  label::before {
    transition: 0.25s all ease;
  }
}
</style>
