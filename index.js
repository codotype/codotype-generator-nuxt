const CodotypeRuntime = require('@codotype/runtime')

// const app = require('codotype-generator/examples/todo-list.json')
const app = require('@codotype/generator/examples/library.json')

// Each stage can accept its own app - this is done to simplify challenges introduc
const build = {
  app: app,
  stages: [{
    generator_id: 'codotype-generator-nuxt', // TODO - pull this from codotype-meta.json, potentially refactor this approach?
    configuration: {} // TODO - this will be populated by the UI
  }]
}

// Invoke runtime directly with parameters
// TODO - this should be removed and replaced by a CLI command in packge.json
// TODO - refactor this so these options are passed into the `execute` method of this instance
const runtime = new CodotypeRuntime()

// TODO - register generator needs to accept more options
// Should accept path to generator class entry point,
// either as a relative path, absolute path, or module name
runtime.registerGenerator({ relative_path: './' })

// Executes the build
runtime.execute({ build })
// console.log(build)

// // NOTE - in-progress generator metadata structure
// // QUESTION - should this be encapsulated in package.json? ...probably not
// module.exports = {
//   name: 'Vue.js + Vue Router + Vuex + Bootstrap Generator',
//   keywords: [],
//   generator: generator,
//   destination_dir: 'vue_bootstrap',
//   additional_options: []
// }