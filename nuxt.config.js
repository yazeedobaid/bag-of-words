import { meta, link } from './assets/js/siteHeadData.js'

const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Vuejs configurations
   */
  vue: {
    config: {
      productionTip: true,
      devtools: true
    }
  },

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      },
      ...meta
    ],
    link: link
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/firebase.js'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    /*
     ** PostCss plugins, plugin name as key and arguments as value.
     ** Plugins need first to be installed as dependencies before usage.
     ** To disable a plugin pass false as value.
     */
    postcss: {
      plugins: {
        'postcss-font-magician': {
          variants: {
            Raleway: {
              '400': [],
              '500': [],
              '700': []
            },
            'Open Sans': {
              '300': [],
              '400': [],
              '700': []
            }
          },
          foundries: ['google']
        }
      }
    }
  }
}
