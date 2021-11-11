import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
export const store = createStore({
  state: {
      isAuth: false,
      userData: {
        id:'',
        fullname: '',
        username: '',
        email: '',
    },
  },
  mutations: {
    signIn(state, data) {
        state.isAuth = true;
        state.userData = data;
    },
    signOut(state) {
        state.isAuth = false;
        state.userData = {
            id:'',
            fullname: '',
            username: '',
            email: '',
        };
    },
    setProfile(state, data) {
        state.userData.fullname = data.fullname;
        state.userData.username = data.username;
        state.userData.email = data.email;
    },

  },
  actions: {},
  modules: {},
  getters: {
    getAccessStateModule: (state) => (id) => {
        return state.userData.authority.find(r => r.moduleId == id).typeId;
    }
},
plugins: [createPersistedState()]
});