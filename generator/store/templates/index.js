import Vue from 'vue'
import Vuex from 'vuex'

// import auth from '@/modules/auth/store'
// import notification from '@/modules/notification/store'
<%_ app.schemas.forEach((schema) => { _%>
import <%= schema.identifier %> from './<%= schema.identifier %>'
<%_ }) _%>

// Vuex Initialization
Vue.use(Vuex)

export default function () {
  return new Vuex.Store({
    modules: {
      // auth,
      // notification,
      <%= app.schemas.map(s => s.identifier).join(',\n    ') %>
    }
  })
}
