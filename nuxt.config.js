const pkg = require('./package')
import webpack from 'webpack'

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Everson Silva - Bibiografia', 
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
 //Importado como css global
  css: [
    "~/assets/css/main.css"
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    },

    plugins: [
      new webpack.ProvidePlugin({
        Cookie : 'js-cookie',
        $ : 'jquery'
        
        
      })
    ]
    
  },
  plugins: [
    '~/plugins/axios'
  ],

  axios: {
    baseURL: 'http://back-end.joaosilva.site/api/'
  }
}
