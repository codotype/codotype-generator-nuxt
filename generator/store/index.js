const _ = require('lodash')
const { Generator } = require('codotype-generator')

// // // //

module.exports = class AppStore extends Generator {

  async write({ app }) {

    // nuxt/store/index.js
    // TODO - move into separate generator class definition
    let storeModules = []
    _.each(app.schemas, (s) => {
      storeModules.push(s.identifier)
    })

    await this.copyTemplate(
      this.templatePath('index.js'),
      this.destinationPath('store/index.js'),
      { storeModules: storeModules.join(",\n    ") }
    );

    await this.copyDir(
      this.templatePath('lib'),
      this.destinationPath('store/lib')
    );

  }

};

