const Generator = require('@codotype/generator')

// // // //

module.exports = class ExpressJsBase extends Generator {
  async write () {

    // Copies server base code
    await this.copyDir(
      this.templatePath(),
      this.destinationPath('server')
    )

    await this.copyTemplate(
      this.templatePath('routes.js'),
      this.destinationPath('server/routes.js')
    )

  }

}
