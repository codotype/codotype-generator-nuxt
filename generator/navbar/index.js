
module.exports = {
  name: 'NuxtNavbar',
  async write ({ blueprint }) {

    let headerLinks = []

    function buildHeaderLink (s) {
      headerLinks.push({ text: s.label_plural, href: '/' + s.identifier_plural })
    }

    // Generates the header links for each model/schema
    blueprint.schemas.forEach((s) => { buildHeaderLink(s) })

    await this.copyTemplate(
      this.templatePath('Navbar.vue'),
      this.destinationPath('components/Navbar.vue'),
      { headerLinks: headerLinks }
    );
  }

};
