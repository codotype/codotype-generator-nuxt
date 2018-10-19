const _ = require('lodash')
const Generator = require('@codotype/generator');

// // // //

module.exports = class ModuleStore extends Generator {

  async write({ blueprint }) {

    // Iterates over each schema in the this.options.build.blueprint.schemas array
    blueprint.schemas.forEach(async (schema) => {

      let newModel = {}
      _.each(schema.attributes, (attr) => {
        if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'HAS_MANY') {
          newModel[attr.identifier] = []
        } else if (attr.datatype === 'NUMBER') {
          newModel[attr.identifier] = 0
        } else if (attr.datatype === 'JSON') {
          newModel[attr.identifier] = {}
        } else {
          newModel[attr.identifier] = ''
        }
      })

      // Ensures presence of requisite directory module + store directory
      await this.ensureDir('store/' + schema.identifier)
      await this.ensureDir('store/' + schema.identifier)

      // client/src/store/resource/actions.js
      await this.copyTemplate(
        this.templatePath('actions.js'),
        this.destinationPath('store/' + schema.identifier + '/actions.js'),
        { schema }
      );

      // client/src/store/resource/getters.js
      await this.copyTemplate(
        this.templatePath('getters.js'),
        this.destinationPath('store/' + schema.identifier + '/getters.js'),
        { schema }
      );

      // client/src/store/resource/index.js
      await this.copyTemplate(
        this.templatePath('index.js'),
        this.destinationPath('store/' + schema.identifier + '/index.js'),
        { schema }
      );

      // client/src/store/resource/constants.js
      // TODO - how can we get newModel to print as a JavaScript object, rather than stringified JSON?
      await this.copyTemplate(
        this.templatePath('constants.js'),
        this.destinationPath('store/' + schema.identifier + '/constants.js'),
        { schema: schema, newModel: JSON.stringify(newModel, null, 2) }
      );

      // client/src/store/resource/mutations.js
      await this.copyTemplate(
        this.templatePath('mutations.js'),
        this.destinationPath('store/' + schema.identifier + '/mutations.js'),
        { schema }
      );

      // client/src/store/resource/state.js
      await this.copyTemplate(
        this.templatePath('state.js'),
        this.destinationPath('store/' + schema.identifier + '/state.js'),
        { schema }
      );

    })

  }

};
