const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const { Nuxt, Builder } = require('nuxt')
const NuxtConfig = require('../nuxt.config.js')

// // // //

// Express.js App & Configuration
const app = express();

// parse JSON and url-encoded query
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// print the request log on console
app.use(morgan('dev'));

// Boostrap API routes - scopes all routes under /api
app.use('/api', require('./routes'));

// // // //

// Setup Nuxt.render middleware
const isProd = (process.env.NODE_ENV === 'production')

// We instantiate Nuxt.js with the options
NuxtConfig.dev = !isProd
const nuxt = new Nuxt(NuxtConfig)

// Render every route with Nuxt.js
app.use(nuxt.render)

// // // //

// Setup Nuxt live-reload
if (NuxtConfig.dev) {
  new Builder(nuxt)
    .build()
    // .then(listen)
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
}

// Exports Express app
module.exports = app;

