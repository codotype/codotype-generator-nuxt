<template>
  <div class="container">

    <div class="row">
      <div class="col-md-8">
        <h2>
          <%= schema.label_plural %>
        </h2>
      </div>

      <div class="col-md-4 text-right">
        <nuxt-link class='btn btn-outline-success' to="/<%= schema.identifier_plural %>/new">
          <i class="fa fa-fw fa-plus mr-2"></i>
          New <%= schema.label %>
        </nuxt-link>
      </div>
    </div>

    <!-- List View -->
    <div class="row" v-if="!fetching">
      <div class="col-lg-12">
        <ListView :collection="collection" />
      </div>
    </div>
    <Loading v-else />
  </div>
</template>

<!-- // // // //  -->

<script>

import ListView from '../../components/<%= schema.identifier %>/<%= schema.class_name %>ListWidget'
import Loading from '../../components/Loading'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: '<%= schema.class_name %>List',
  components: {
    Loading,
    ListView
  },
  // TODO - should use asyncData
  created (context) {
    return this.fetchCollection()
  },
  head () {
    return { title: '<%= schema.label_plural %>' }
  },
  computed: mapGetters({
    fetching: '<%= schema.identifier %>/fetching',
    collection: '<%= schema.identifier %>/collection'
  }),
  methods: mapActions({
    fetchCollection: '<%= schema.identifier %>/fetchCollection'
  })
}
</script>


