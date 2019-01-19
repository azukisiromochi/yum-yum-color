<template>
  <div>
    <nav class="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a href="http://localhost:3000/">
          <img class="logo" :src="logo_icon" alt="yum-yum COLOR">
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <span class="icon">
            <a
              target="_blank"
              href="http://twitter.com/share?url=https://github.com/azukisiromochi/yum-yum-color&text=Check%20out%20yum-yum%20COLOR%20that%20creates%20neat%20color%20schemes!&hashtags=yumyumcolor"
              onclick="window.open(this.href, 'tweetwindow', 'width=500, height=400, personalbar=0, toolbar=0, scrollbars=1, sizable=1'); return false;">
                <fa :icon="faTwitter" />
              </a>
            </span>
        </div>
        <div class="navbar-item">
          <span class="icon">
            <a target="_blank" href="https://github.com/azukisiromochi/yum-yum-color">
              <fa :icon="faGithubAlt" />
            </a>
          </span>
        </div>
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
        <color-scheme/>
      </section>
    </div>
    <footer class="footer">
      <div class="columns">
        <div class="column">
          <div class="content has-text-centered">
            <p>Designed & Developed By <a target="_blank" href="https://twitter.com/azukisiromochi">@azukisiromochi</a></p>
          </div>
        </div>
        <div class="column">
          <div class="content has-text-centered">
            <p>©yum-yum COLOR</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import HueCircle from '~/components/HueCircle.vue'
import ColorTone from '~/components/ColorTone.vue'
import ColorScheme from '~/components/ColorScheme.vue'
import { faTwitter, faGithubAlt } from '@fortawesome/free-brands-svg-icons'

export default {
  data () {
    return {
      logo_icon: require("~/static/logo-128.png"),
    }
  },
  computed: {
    faTwitter () {
       return faTwitter
    },
    faGithubAlt () {
       return faGithubAlt
    }
  },
  components: {
    'hue-circle': HueCircle,
    'color-tone': ColorTone,
    'color-scheme': ColorScheme,
  }
}
</script>

<style lang="scss" scoped>
a {
  color: $grey-light;
  :hover { color: $grey; }
}

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

.icon {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  font-size: 2.5rem;
  height: 3.5rem;
  width: 3.5rem;
}

.section {
  margin-top: 40px;
}

.footer {
  font-family: amertype_md_btmedium, serif !important;
  color: $grey-light;
}
</style>
