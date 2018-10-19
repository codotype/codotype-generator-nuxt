import _ from 'lodash'

// // // //
// Adds a Collection to a Vuex module

export const COLLECTION_GETTERS = {
  collection: state => {
    return state.collection
  },
  fetching: state => {
    return state.fetching
  }
}

export const COLLECTION_MUTATIONS = {
  collection (state, collection) {
    state.collection = collection
  },
  fetching (state, isFetching) {
    state.fetching = isFetching
  }
}

export const COLLECTION_STATE = {
  collection: [],
  fetching: false
}

// // // //
// Adds a Model definition to a Vuex module
export const MODEL_GETTERS = {
  model: state => {
    return state.model
  }
}

export const MODEL_MUTATIONS = {
  model (state, model) {
    state.model = model
  }
}

export const MODEL_STATE = {
  model: {}
}

// // // //
// Adds Collection filtering to a Vuex module
// TODO - abstract `showingInactive` into a separate mixin

export const FILTER_GETTERS = {
  filteredCollection: state => {
    return state.filteredCollection
  },
  filter: state => {
    return state.filter
  },
  showingInactive: state => {
    return state.showingInactive
  },
  orderBy: state => {
    return state.orderBy
  }
}

export const FILTER_MUTATIONS = {
  filteredCollection (state, filteredCollection) {
    state.filteredCollection = filteredCollection
  },
  filter (state, filter) {
    state.filter = filter
  },
  showingInactive (state, show) {
    state.showingInactive = show
  },
  orderBy (state, orderBy) {
    state.orderBy = orderBy
  }
}

export const FILTER_STATE = {
  filteredCollection: [],
  filter: '',
  showingInactive: false,
  orderBy: 'asc' // 'asc' or 'desc'
}

export const FILTER_ACTIONS = {
  // module/toggleOrderBy
  toggleOrderBy ({ state, commit, dispatch }) {
    const ORDER_ASC = 'asc'
    const ORDER_DESC = 'desc'
    if (state.orderBy === ORDER_ASC) {
      commit('orderBy', ORDER_DESC)
    } else {
      commit('orderBy', ORDER_ASC)
    }
    dispatch('filteredCollection')
  },

  // module/toggleInactive
  toggleInactive ({ state, commit, dispatch }) {
    if (state.showingInactive) {
      commit('showingInactive', false)
    } else {
      commit('showingInactive', true)
    }
    // Re-fetches the collection
    dispatch('fetchCollection')
  },

  // module/setFilter
  // Updates the current search query, invokes the module/filter mutation
  setFilter ({ commit, dispatch }, filter) {
    commit('filter', filter)
    dispatch('filteredCollection')
  }
}

// // // //
// Pagination Mixins

export const PAGINATION_STATE = {
  count: 0,
  pageSize: 5,
  currentPage: 0
}

export const PAGINATION_ACTIONS = {
  goToPage({ dispatch, commit }, page) {
    commit('currentPage', page)
    dispatch('fetchCollection')
  }
}

export const PAGINATION_MUTATIONS = {
  currentPage(state, page) {
    state.currentPage = page
  },
  pageSize(state, newSize) {
    state.pageSize = newSize
  },
  count(state, count) {
    state.count = count
  }
}

export const PAGINATION_GETTERS = {
  currentPage: state => {
    return state.currentPage
  },
  pageSize: state => {
    return state.pageSize
  },
  count: state => {
    return state.count - state.pageSize
  }
}