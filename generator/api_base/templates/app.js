// const express = require('express')
// const bodyParser = require('body-parser')
// const morgan = require('morgan')
// const { Nuxt, Builder } = require('nuxt')
// const NuxtConfig = require('../nuxt.config.js')

// // // // //

// // Express.js App & Configuration
// const app = express();

// // parse JSON and url-encoded query
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // print the request log on console
// app.use(morgan('dev'));

// // Boostrap API routes - scopes all routes under /api
// app.use('/api', require('./routes'));

// // // // //

// // Setup Nuxt.render middleware
// const isProd = (process.env.NODE_ENV === 'production')

// // We instantiate Nuxt.js with the options
// NuxtConfig.dev = !isProd
// const nuxt = new Nuxt(NuxtConfig)

// // Render every route with Nuxt.js
// app.use(nuxt.render)

// // // // //

// // Setup Nuxt live-reload
// if (NuxtConfig.dev) {
//   new Builder(nuxt)
//     .build()
//     // .then(listen)
//     .catch((error) => {
//       console.error(error)
//       process.exit(1)
//     })
// }

// // Exports Express app
// module.exports = app;

////////////////
////////////////
////////////////
////////////////

// TODO - split this file up by separation of concerns
// TODO - ensure authorization will be easy to integrate and suitable for our needs
const express = require('express')
const mongoose = require('mongoose')
const { Nuxt, Builder } = require('nuxt')

// Create express instnace
const app = express()

// Require API routes
app.use('/api', require('./routes.js'))

// // // //

const isProd = (process.env.NODE_ENV === 'production')

// We instantiate Nuxt.js with the options
const config = require('../nuxt.config.js')
config.dev = !isProd
const nuxt = new Nuxt(config)

// Render every route with Nuxt.js
app.use('/', nuxt.render)

// // // //

// TODO - move everything below into www.js

// Listen the server
function listen() {

  const db = mongoose.connection

  // Handles Mongoose connection error
  db.on('error', console.error)

  // Open Mongoose connection
  db.once('open', () => {

      // TODO - use Morgan for logging
      console.info('Connected to MongoDB...')

      // Starts Express App
      app.listen(3000, () => {
          // TODO - use Morgan for logging
          // TODO - use dotenv for PORT number
          console.info(`Express is running on port ${3000}`)
      })
  })

  // TODO - use dotenv variable here
  mongoose.connect('mongodb://localhost/nuxt-demo')

}

// Build only in dev mode with hot-reloading
listen()

// Builds Nuxt for server-side rendered views
if (config.dev) {
  console.log('RUNNING NUXT!!')
  new Builder(nuxt)
  .build()
  // .then(listen)
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
}
// else {
//   listen()
// }
