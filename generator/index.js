const Generator = require('@codotype/generator')

module.exports = class NuxtJs extends Generator {
  async write () {
    await this.composeWith('./base')
    await this.composeWith('./auth')
    await this.composeWith('./navbar')
    await this.composeWith('./store')
    await this.composeWith('./module_store')
    await this.composeWith('./module_pages')
    await this.composeWith('./module_components')
  }
}
