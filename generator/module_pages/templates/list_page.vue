<template>
  <div class="container">

    <div class="row">
      <div class="col-md-8">
        <h2><%= schema.label_plural %></h2>
      </div>

      <div class="col-md-4 text-right">
        <nuxt-link class='btn btn-outline-success' to="/<%= schema.identifier_plural %>/new">
          <i class="fa fa-fw fa-plus mr-2"></i>
          New <%= schema.label %>
        </nuxt-link>
      </div>
    </div>

    <!-- List View -->
    <div class="row">
      <div class="col-lg-12">
        <ListView :collection="collection" />
        <b-pagination :total-rows="totalRows" :value="currentPage" :per-page="perPage" @change="goToPage" />
        <!-- <b-pagination :total-rows="100" :value="1" :per-page="20" @change="goTo" /> -->
      </div>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import ListView from '../../components/<%= schema.identifier %>/<%= schema.class_name %>ListWidget'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: '<%= schema.class_name %>List',
  components: {
    ListView
  },
  asyncData ({ store }) {
    store.dispatch('<%= schema.identifier %>/fetchCollection')
  },
  head () {
    return { title: '<%= schema.label_plural %>' }
  },
  computed: mapGetters({
    collection: '<%= schema.identifier %>/collection',
    totalRows: '<%= schema.identifier %>/count',
    perPage: '<%= schema.identifier %>/pageSize',
    currentPage: '<%= schema.identifier %>/currentPage'
  }),
  methods: mapActions({
    goToPage: '<%= schema.identifier %>/goToPage'
  })
}
</script>


