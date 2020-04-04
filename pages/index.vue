<template>
  <div>
    <nav
      :class="isMobile ? 'is-flex-touch' : ''"
      class="navbar has-shadow is-spaced">
      <div class="navbar-brand">
        <a href="https://yumyumcolor.com">
          <img
            :src="logo_icon"
            class="logo"
            alt="yum-yum COLOR">
        </a>
      </div>
      <div
        :class="isMobile ? 'is-flex-touch' : ''"
        class="navbar-end">
        <div class="navbar-item">
          <span class="icon">
            <a
              target="_blank"
              rel="noopener"
              aria-label="Blog"
              href="https://blog.yumyumcolor.com/categories/yum-yum-color/">
              <fa :icon="fas.faBlog" />
            </a>
          </span>
        </div>
        <div class="navbar-item">
          <span class="icon">
            <a
              target="_blank"
              rel="noopener"
              aria-label="Twitter"
              href="http://twitter.com/share?url=https://yumyumcolor.com&text=Check%20out%20yum-yum%20COLOR%20that%20creates%20neat%20color%20schemes!&hashtags=yumyumcolor"
              onclick="window.open(this.href, 'tweetwindow', 'width=500, height=400, personalbar=0, toolbar=0, scrollbars=1, sizable=1'); return false;">
              <fa :icon="faTwitter" />
            </a>
          </span>
        </div>
        <div class="navbar-item">
          <span class="icon">
            <a
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              href="https://github.com/azukisiromochi/yum-yum-color">
              <fa :icon="faGithubAlt" />
            </a>
          </span>
        </div>
      </div>
    </nav>
    <div class="container">
      <section class="section">
        <div
          :class="isTablet ? 'is-flex-touch' : ''"
          class="columns">
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
            <p>Designed & Developed By <a
              target="_blank"
              rel="noopener"
              href="https://twitter.com/azukisiromochi">@azukisiromochi</a></p>
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
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import Device from 'ismobilejs'

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
    'hue-circle': HueCircle,
    'color-tone': ColorTone,
    'color-scheme': ColorScheme
  },
  data() {
    return {
      logo_icon: require('~/static/logo.png'),
      isMobile: Device.any,
      isTablet: Device.tablet
    }
  },
  computed: {
    fas() {
      return fas
    },
    faTwitter() {
      return faTwitter
    },
    faGithubAlt() {
      return faGithubAlt
    }
  }
}
</script>

<style lang="scss" scoped>
$grey-dark: hsl(0, 0%, 29%);
$grey: hsl(0, 0%, 48%);
$grey-light: hsl(0, 0%, 71%);

a {
  color: $grey-light;
  &:hover {
    color: $grey;
  }
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
  -webkit-tap-highlight-color: transparent;
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

.footer {
  font-family: 'Slabo 27px' !important;
  color: $grey-dark;
  a {
    color: $grey-dark;
    &:hover {
      color: $grey-light;
    }
  }
}

// mobile styles
.is-flex-touch {
  &.navbar {
    justify-content: center;
    padding: 10px;
  }
  .navbar-brand,
  .navbar-end {
    margin: auto 10px;
  }
}
</style>
