<template>
  <div>
    <nav class="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a href="http://localhost:3000/">
          <img class="logo" :src="logo_icon" alt="yum-yum COLOR">
        </a>
      </div>
    </nav>
    <div class="container">
      <section class="section">
        <div class="columns">
          <div class="column"><hue-circle/></div>
          <div class="column"><color-tone/></div>
        </div>
      </section>
      <section class="section">
        <div class="columns">
          <div class="column is-three-quarters">is-three-quarters</div>
          <div class="column">Auto</div>
          <div class="column">Auto</div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import HueCircle from '~/components/HueCircle.vue'
import ColorTone from '~/components/ColorTone.vue'

export default {
  data () {
    return {
      logo_icon: require("~/static/logo-128.png")
    }
  },
  components: {
    'hue-circle': HueCircle,
    'color-tone': ColorTone,
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  justify-content: center;
  text-align: center;

  section {
    width: 100%;
  }
}

.logo {
  height: 80px;
}

.section {
  margin-top: 40px;
}

</style>
