import axios from 'axios'

const state = {
  user: null,
  userId: null
}

const getters = {
  isAuthenticated: state => !!state.user,
  StateUserId: state => state.userId,
  StateUser: state => state.user
}

const actions = {
  async Register ({ dispatch }, form) {
    console.log('TEST MASUK Register')
    await axios.post('http://localhost:8080/signup', form).then(function (res) {
      console.log(res)
    })
    const UserForm = new FormData()
    UserForm.append('username', form.username)
    UserForm.append('password', form.password)
    // await dispatch('LogIn', UserForm)
  },

  async LogIn ({ commit }, user) {
    console.log('blalogin')
    await axios.post('http://localhost:8080/login', user).then(function (response) {
      console.log('   Ini ID: ')
      console.log(response.data)
      commit('setUserId', response.data)
    })
  },

  async LogOut ({ commit }) {
    const user = null
    commit('logout', user)
  }

  // async GetPosts({ commit }) {
  //   let response = await axios.get("posts");
  //   commit("setPosts", response.data);
  // },
}

const mutations = {
  setUser (state, username) {
    state.user = username
  },
  setUserId (state, userid) {
    state.userId = userid
  },
  logout (state) {
    // eslint-disable-next-line no-unused-expressions
    state.user = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
