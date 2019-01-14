
module.exports = {
  name: 'NuxtGeneratorBase',
  async write () {
    await this.copyDir(
      this.templatePath(),
      this.destinationPath()
    )
  }
}
