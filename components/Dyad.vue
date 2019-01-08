<template>
  <div class="is-dyad">
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-left">
          <h1 class="title">
            Dyad(Complementary)
          </h1>
          <h2 class="subtitle">
            The dyad color scheme uses one base color and its complement, the color on the exact opposite side of the hue circle.
          </h2>
        </div>
      </div>
    </section>
    <div class="columns" :class="tIsX">
      <div class="column is-8" :class="cIsX">{{colorCode}}</div>
      <div class="column" :class="cIsX2">{{colorCode2}}</div>
    </div>
    <div class="columns" :class="tIsX">
      <div class="column">
        <div class="card">
          <header class="card-header" :class="cIsX">
            <p class="card-header-title" :class="cIsX">
              yum-yum COLOR
            </p>
            <a class="delete is-medium"></a>
          </header>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img class="is-rounded" :src="transparent_image" :class="cIsX2">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Azuki Siromochi</p>
                <p class="subtitle is-6">@azukisiromochi</p>
              </div>
            </div>
            <div class="content has-text-left">
              <p>
                "yum-yum COLOR" is a web service that provides an intuitive color combinations. Using the Japanese color system PCCS.
                <a>#color</a> <a>#css</a>
              </p>
              <div class="field is-grouped is-grouped-multiline">
                <div class="control">
                  <div class="tags has-addons">
                    <span class="tag" :class="cIsX2">color</span>
                    <a class="tag is-delete"></a>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons">
                    <span class="tag" :class="cIsX2">HTML</span>
                    <a class="tag is-delete"></a>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons">
                    <span class="tag" :class="cIsX2">CSS</span>
                    <a class="tag is-delete"></a>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons">
                    <span class="tag" :class="cIsX2">Web Design</span>
                    <a class="tag is-delete"></a>
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
        <collage :color-codes="colorCodes"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import Animation from '~/components/Animation.vue'
import Collage from '~/components/Collage.vue'

export default {
  data: function () {
    return {
      tone: 'v',
      selectColor: 'Y',
      tIsX: 't-is-v',
      // Main color
      cIsX: 'c-is-Y',
      colorCode: '#eec900',
      // No.2 color
      cIsX2: 'c-is-V',
      colorCode2: '#534aa0',
      // Transparent image
      transparent_image: require("~/static/transparent.png"),
      // Post props
      colorCodes: {
        bc: '#eec900',
        c2: '#534aa0',
        c3: '#534aa0',
        c4: '#534aa0',
      }
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

      let dyadColor = this.getDyad()
      this.cIsX2 = 'c-is-' + dyadColor
      this.colorCode2 =  colors[dyadColor]

      this.colorCodes.bc = this.colorCode
      this.colorCodes.c2 = this.colorCode2
      this.colorCodes.c3 = this.colorCode2
      this.colorCodes.c4 = this.colorCode2
    },
    ...mapMutations({
      changeColorTone: 'colorTone/change',
    }),
    ...mapGetters({
      getColors: 'colorTone/colors',
      getDyad: 'colorTone/dyad',
    })
  },
  components: {
    'animation': Animation,
    'collage': Collage,
  },
}
</script>

<style lang="scss" scoped>

</style>