
module.exports = {
  name: 'NuxtApiEnvironment',
  async write () {

    // TODO - replace with copy-in-place
    await this.copyTemplate(
      this.templatePath('env-dev.txt'),
      this.destinationPath('.env')
    )

    // TODO - replace with copy-in-place
    await this.copyTemplate(
      this.templatePath('env-docker.txt'),
      this.destinationPath('.env.docker')
    )
  }
}
