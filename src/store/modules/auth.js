import axios from 'axios'

const state = {
  user: null
}
const getters = {
  isAuthenticated: state => !!state.user,
  StatePosts: state => state.posts,
  StateUser: state => state.user
}
const actions = {
  async Register ({ dispatch }, form) {
    console.log('TEST MASUK Register')
    await axios.post('http://192.168.100.5:8080/signup', form).then(function (res) {
      console.log(res)
    })
    const UserForm = new FormData()
    UserForm.append('username', form.username)
    UserForm.append('password', form.password)
    await dispatch('LogIn', UserForm)
  },

  async LogIn ({ commit }, user) {
    console.log('blalogin')
    await axios.post('http://localhost:8080/login', user).then(function (response) {
      commit('setUserId', response.data.id)
    })
  },

  async LogOut ({ commit }) {
    const user = null
    commit('logout', user)
  }
}
const mutations = {
  setUser (state, username) {
    state.user = username
  },
  setPosts (state, posts) {
    state.posts = posts
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
