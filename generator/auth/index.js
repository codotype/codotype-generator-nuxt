const Generator = require('@codotype/generator')

// // // //

module.exports = class Auth extends Generator {
  async write () {
    await this.copyDir(
      this.templatePath('store'),
      this.destinationPath('store/auth')
    )
  }
}
