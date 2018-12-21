<template>
  <div class="is-analogous">
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-left">
          <h1 class="title">
            Analogous
          </h1>
          <h2 class="subtitle">
            The analogous color scheme uses one base color and two secondary colors placed symetrically around it on the hue circle.
            The base color is main, while the secondary colors should be used only for highlights and accents.
          </h2>
        </div>
      </div>
    </section>
    <div class="columns" v-bind:class="tIsX">
      <div class="column is-6" v-bind:class="cIsX">{{colorCode}}</div>
      <div class="column" v-bind:class="cIsX2">{{colorCode2}}</div>
      <div class="column" v-bind:class="cIsX3">{{colorCode3}}</div>
    </div>
    <div class="columns" v-bind:class="tIsX">
      <div class="column">
        <div class="card">
          <header class="card-header" v-bind:class="cIsX">
            <p class="card-header-title" v-bind:class="cIsX">
              yum-yum COLOR
            </p>
            <a class="delete is-medium"></a>
          </header>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img class="is-rounded" :src="transparent_image" v-bind:class="cIsX2">
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
                    <span class="tag" v-bind:class="cIsX3">color</span>
                    <a class="tag is-delete"></a>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons">
                    <span class="tag" v-bind:class="cIsX3">HTML</span>
                    <a class="tag is-delete"></a>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons">
                    <span class="tag" v-bind:class="cIsX3">CSS</span>
                    <a class="tag is-delete"></a>
                  </div>
                </div>
                <div class="control">
                  <div class="tags has-addons">
                    <span class="tag" v-bind:class="cIsX3">Web Design</span>
                    <a class="tag is-delete"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">dummy</div>
      <div class="column">dummy</div>
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
      // Main color
      cIsX: 'c-is-Y',
      colorCode: '#eec900',
      // No.2 color
      cIsX2: 'c-is-yO',
      colorCode2: '#f49d00',
      // No.3 color
      cIsX3: 'c-is-YG',
      colorCode3: '#a8bb00',
      // Transparent image
      transparent_image: require("~/static/transparent.png")
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
        this.colorCode = colors[this.selectColor]
        this.select()
      }
    )
  },
  methods: {
    select: function() {
      let analogousColors = this.getAnalogous()
      this.cIsX2 = 'c-is-' + analogousColors[0]
      this.cIsX3 = 'c-is-' + analogousColors[1]
      const colors = this.getColors()
      this.colorCode2 =  colors[analogousColors[0]]
      this.colorCode3 =  colors[analogousColors[1]]
    },
    ...mapMutations({
      changeColorTone: 'colorTone/change',
    }),
    ...mapGetters({
      getColors: 'colorTone/colors',
      getAnalogous: 'colorTone/analogous',
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
