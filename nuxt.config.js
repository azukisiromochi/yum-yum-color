const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'yum-yum COLOR',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [{ src: '~assets/main.scss', lang: 'scss' }],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    'nuxt-fontawesome',
    ['@nuxtjs/google-analytics', { id: 'UA-132964682-1' }],
    [
      '@nuxtjs/google-adsense',
      {
        id: 'ca-pub-1346330979971658',
        pageLevelAds: true
      }
    ]
  ],

  /*
  ** PWA configuration
  */
  manifest: {
    short_name: 'yum-yum COLOR',
    name: 'yum-yum COLOR',
    lang: 'ja',
    icons: [
      {
        type: 'image/png',
        sizes: '512x512'
      }
    ]
  },

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  fontawesome: {
    component: 'fa'
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && process.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
