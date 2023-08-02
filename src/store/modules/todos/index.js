import * as api from '@/api'

export default {
  namespaced: true,
  state () {
    return {
      itemsList: []
    }
  },
  getters: {
    getItemsList (state) {
      return state.itemsList
    }
  },
  mutations: {
    SET_ITEMS_LIST (state, data) {
      state.itemsList = data
    }
  },
  actions: {
    async addItem ({ state, commit }, item) {
      return await api.addItem(item)
    },
    async deleteItem ({ state, commit }, title) {
      return await api.deleteItem(title)
    },
    async getItemsList ({ state, commit }) {
      const itemsList = await api.getItemsList()
      await commit('SET_ITEMS_LIST', itemsList)
    },
    async updateItem ({ state, commit }, title) {
      const item = await api.updateItem(title)
      return item
    }
  },
}
