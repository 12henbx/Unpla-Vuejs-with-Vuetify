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
      console.log(response.data)
      console.log('   Ini ID: ')
      console.log(response.data.data.id)
      commit('setUserId', response.data.data.id)
      console.log(state.userId)
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
  setUserId (state, userid) {
    state.userId = userid
    console.log('   Ini di mutation: ')
    console.log(state.userId)
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
