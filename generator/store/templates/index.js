import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
// import notification from '@/modules/notification/store'
<%_ blueprint.schemas.forEach((schema) => { _%>
import <%= schema.identifier %> from './<%= schema.identifier %>'
<%_ }) _%>

// Vuex Initialization
Vue.use(Vuex)

export default function () {
  return new Vuex.Store({
    modules: {
      auth,
      // notification,
      <%= blueprint.schemas.map(s => s.identifier).join(',\n    ') %>
    }
  })
}
