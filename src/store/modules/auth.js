import axios from 'axios'

const state = {
  user: null,
}
const getters = {
  isAuthenticated: state => !!state.user,
  StatePosts: state => state.posts,
  StateUser: state => state.user,
}
const actions = {

};
const mutations = {
  setUser (state, username) {
    state.user = username
  },
  setPosts (state, posts) {
    state.posts = posts
  },
  LogOut (state) {
    state.user = null,
    state.posts = null
  },
}

export default {
  state,
  getters,
  actions,
  mutations
};
