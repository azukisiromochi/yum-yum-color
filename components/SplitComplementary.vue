<template>
  <div class="is-split-complementary">
    <section class="hero is-hidden-touch">
      <div class="hero-body">
        <div class="container has-text-left">
          <h1 class="title">
            Split-complementary
          </h1>
          <h2 class="subtitle">
            The Split-complementary color scheme uses one base color and two secondary colors.
            Instead of using a complementary color, two colors placed symetrically around it on the hue circle are used.
          </h2>
        </div>
      </div>
    </section>
    <div
      :class="isTablet ? tIsX + ' is-flex-touch' : tIsX"
      class="columns color-scheme">
      <div
        :class="cIsX"
        class="column is-6"
        @click="copyColorCode(colorCode)">{{ colorCode }}</div>
      <div
        :class="cIsX2"
        class="column"
        @click="copyColorCode(colorCode2)">{{ colorCode2 }}</div>
      <div
        :class="cIsX3"
        class="column"
        @click="copyColorCode(colorCode3)">{{ colorCode3 }}</div>
    </div>
    <div
      :class="tIsX"
      class="columns">
      <div class="column">
        <div class="card">
          <header
            :class="cIsX"
            class="card-header">
            <p
              :class="cIsX"
              class="card-header-title">
              yum-yum COLOR
            </p>
            <a class="delete is-medium"/>
          </header>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    :src="transparent_image"
                    :class="cIsX2"
                    class="is-rounded"
                    alt>
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Azuki Siromochi</p>
                <p class="subtitle is-6">@azukisiromochi</p>
              </div>
            </div>
            <div class="content has-text-left">
              <p>
                "Yum-yum COLOR" is a web service that can intuitively select color combinations. Using the Japanese color system PCCS.
                <a>#color</a> <a>#css</a>
              </p>
              <div class="field is-grouped is-grouped-multiline">
                <div class="control">
                  <div class="tags has-addons">
                    <span
                      :class="cIsX3"
                      class="tag">color</span>
                    <a class="tag is-delete"/>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons">
                    <span
                      :class="cIsX3"
                      class="tag">HTML</span>
                    <a class="tag is-delete"/>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons">
                    <span
                      :class="cIsX3"
                      class="tag">CSS</span>
                    <a class="tag is-delete"/>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons">
                    <span
                      :class="cIsX3"
                      class="tag">Web Design</span>
                    <a class="tag is-delete"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <animation :color-codes="colorCodes"/>
      </div>
      <div class="column">
        <picture-frame :color-codes="colorCodes"/>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapMutations, mapGetters } from 'vuex'
import Animation from '~/components/Animation.vue'
import Picture from '~/components/Picture.vue'
import Device from 'ismobilejs'
import Toasted from 'vue-toasted'
Vue.use(Toasted)

export default {
  components: {
    animation: Animation,
    'picture-frame': Picture
  },
  data: function() {
    return {
      tone: 'v',
      selectColor: 'Y',
      tIsX: 't-is-v',
      cIsX: 'c-is-Y',
      colorCode: '#eec900',
      cIsX2: 'c-is-B',
      colorCode2: '#005ba5',
      cIsX3: 'c-is-P',
      colorCode3: '#81378a',
      transparent_image: require('~/static/transparent.png'),
      colorCodes: {
        bc: '#eec900',
        c2: '#005ba5',
        c3: '#81378a',
        c4: '#005ba5'
      },
      isTablet: Device.tablet
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
        this.select()
      }
    )
    this.$store.watch(
      state => state.colorTone.colors,
      colors => {
        this.select()
      }
    )
  },
  methods: {
    select: function() {
      const colors = this.getColors()
      this.colorCode = colors[this.selectColor]

      let splitComplementaryColors = this.getSplitComplementary()
      this.cIsX2 = 'c-is-' + splitComplementaryColors[0]
      this.cIsX3 = 'c-is-' + splitComplementaryColors[1]
      this.colorCode2 = colors[splitComplementaryColors[0]]
      this.colorCode3 = colors[splitComplementaryColors[1]]

      this.colorCodes.bc = this.colorCode
      this.colorCodes.c2 = this.colorCode2
      this.colorCodes.c3 = this.colorCode3
      this.colorCodes.c4 = this.colorCode2
    },
    copyColorCode: function(colorCode) {
      const temp = document.createElement('div')
      temp.appendChild(document.createElement('pre')).textContent = colorCode

      const s = temp.style
      s.position = 'fixed'
      s.left = '-100%'

      document.body.appendChild(temp)
      document.getSelection().selectAllChildren(temp)

      if (document.execCommand('copy')) {
        this.$toasted.show('Copied to clipboard !!', {
          theme: 'outline',
          position: 'top-center',
          duration: 2000
        })
      } else {
        this.$toasted.show('Failed to copy to clipboard...', {
          theme: 'bubble',
          position: 'top-center',
          duration: 2000
        })
      }

      document.body.removeChild(temp)
    },
    ...mapMutations({
      changeColorTone: 'colorTone/change'
    }),
    ...mapGetters({
      getColors: 'colorTone/colors',
      getSplitComplementary: 'colorTone/splitComplementary'
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
