
module.exports = {
  name: 'NuxtGeneratorApiBase',
  async write () {

    // Copies server base code
    await this.copyDir(
      this.templatePath(),
      this.destinationPath('server')
    )

    // TOOD - replace with compile in place
    await this.copyTemplate(
      this.templatePath('routes.js'),
      this.destinationPath('server/routes.js')
    )

  }

}
