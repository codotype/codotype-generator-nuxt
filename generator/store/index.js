
module.exports = {
  name: 'NuxtVuexStore',
  async write({ blueprint }) {

    // nuxt/store/index.js
    // TODO - move into separate generator class definition
    let storeModules = []
    blueprint.schemas.forEach((s) => {
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
