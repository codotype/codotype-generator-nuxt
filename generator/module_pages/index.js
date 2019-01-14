
module.exports = {
  name: 'ModulePages',
  async write({ blueprint }) {

    // TODO - replace with forEachSchema call
    // Iterates over each schema in the this.options.build.blueprint.schemas array
    blueprint.schemas.forEach(async (schema) => {

      // Defines destination directory for files in this loop
      const moduleRoot =  'pages/' + schema.identifier_plural + '/'

      // await this.ensureDir(moduleRoot)
      // await this.ensureDir(moduleRoot + '/new')
      await this.ensureDir(moduleRoot + '/_edit')
      // await this.ensureDir(moduleRoot + '/show')

      // client/src/modules/resource/list.vue
      await this.copyTemplate(
        this.templatePath('list_page.vue'),
        this.destinationPath(moduleRoot + 'index.vue'),
        { schema }
      )

      // client/src/modules/resource/new.vue
      await this.copyTemplate(
        this.templatePath('new_page.vue'),
        this.destinationPath(moduleRoot + 'new.vue'),
        { schema }
      )

      // client/src/modules/resource/edit.vue
      await this.copyTemplate(
        this.templatePath('edit_page.vue'),
        this.destinationPath(moduleRoot + '/_edit/index.vue'),
        { schema }
      )

      // client/src/modules/resource/show.vue
      await this.copyTemplate(
        this.templatePath('show_page.vue'),
        this.destinationPath(moduleRoot + '_id.vue'),
        { schema }
      )

    })

  }

};
