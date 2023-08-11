import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favorites: [],
  },
  getters: {
    getFavorites(state) {
      return state.favorites;
    },
    isFavoriteAdded: (state) => (item) => {
      let index = state.favorites.findIndex((obj) => obj.id === item.id);
      if (index >= 0) {
        return true;
      }
    },
  },
  mutations: {
    addToFavorite(state, item) {
      state.favorites.push(item);
    },
    removeFromFavorite(state, item) {
      let index = state.favorites.findIndex((obj) => obj.id === item.id);
      if (index > -1) {
        state.favorites.splice(index, 1);
      }
    },
  },
  actions: {},
  modules: {},
});
