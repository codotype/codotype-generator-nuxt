
module.exports = {
  name: 'NuxtAuth',
  async write () {

    // Copies auth store
    await this.copyDir(
      this.templatePath('store'),
      this.destinationPath('store/auth')
    )

    // Copies auth pages
    await this.copyDir(
      this.templatePath('pages'),
      this.destinationPath('pages/auth')
    )
  }
}
