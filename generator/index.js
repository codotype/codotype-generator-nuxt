const Generator = require('@codotype/generator')

module.exports = class NuxtJs extends Generator {
  async write () {
    await this.composeWith('./base')
    await this.composeWith('./api_base')
    await this.composeWith('./api_resource')
    await this.composeWith('./api_environment')
    await this.composeWith('./auth')
    await this.composeWith('./navbar')
    await this.composeWith('./store')
    await this.composeWith('./module_store')
    await this.composeWith('./module_pages')
    await this.composeWith('./module_components')
  }
}
