module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'hello_nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' }
    ]
  },

  // proxy: [
  //   // Proxies /foo to http://localhost:4000/foo
  //   'http://localhost:4000/api',

  //   // Proxies /api/books/*/**.json to http://example.com:8000
  //   // 'http://example.com:8000/api/books/*/**.json',

  //   // You can also pass more options
  //   // [ 'http://localhost:4000/foo', { ws: false } ]
  // ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/proxy'
  ],

  proxy: {
    '/api': 'http://localhost:4000/'
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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

