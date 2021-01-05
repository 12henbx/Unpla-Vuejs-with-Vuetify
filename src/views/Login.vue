<template>
  <form class="container-page">
    <h1>Welcome to Unpla</h1>
    <p>Please sign in to proceed to your account</p>
    <div class="username-box">
      <div class="wrapper-text-field">
        <v-text-field v-model="form.username" label="Username" outlined></v-text-field>
      </div>
    </div>
    <div class="password-box">
      <div class="wrapper-text-field">
<!--        <div class="text-user-box">-->
<!--          <span class="text-user"><v-icon large color="black">mdi-lock</v-icon></span>-->
<!--        </div>-->
<!--        <div class="input-username-box">-->
<!--          <input placeholder="Password" class="login-input" type="password">-->
<!--        </div>-->
        <v-text-field v-model="form.password" type="password" label="Password" outlined></v-text-field>
      </div>
    </div>
    <div class="div-button">
      <button class="btn-login">Login</button>
    </div>
    <span class="bottom-text">Don't have an account? <a href="/signup">Sign Up</a></span>
  </form>
  <p v-if="showError" class="p-error">Username or Password is incorrect</p>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data: function () {
    return {
      form: {
        username: '',
        password: ''
      },
      showError: false
    }
  },
  methods: {
    ...mapActions(['LogIn']),
    async submit () {
      const User = new FormData()
      User.append('username', this.form.username)
      User.append('password', this.form.password)
      try {
        await this.LogIn(User)
        this.$router.push('/')
        this.showError = false
      } catch (error) {
        this.showError = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../styles/basics/variables";
  @import "../styles/basics/layout";
  @import "../styles/basics/viewpage";
  @import "../styles/pages/login";
</style>
