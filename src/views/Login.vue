<template>
  <div class="container-page" @submit.prevent="submit">
    <form class="place-content">
      <h1>Welcome to Unpla</h1>
      <p>Please sign in to proceed to your account</p>
      <div class="username-box">
        <div class="wrapper-text-field">
          <v-text-field v-model="form.username" label="Username" filled outlined></v-text-field>
        </div>
      </div>
      <div class="password-box">
        <div class="wrapper-text-field">
          <v-text-field v-model="form.password" type="password" label="Password" filled outlined></v-text-field>
        </div>
      </div>
      <div class="div-button">
        <v-btn block dark class="btn-login" @click="submit">Login</v-btn>
      </div>
      <span class="bottom-text">Don't have an account? <a href="/signup">Sign Up</a></span>
      <p v-if="showError" class="p-error">Username or Password is incorrect</p>
    </form>
  </div>
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
      try {
        await this.LogIn(this.form)
        await this.$router.push('/')
        this.showError = false
      } catch (error) {
        console.log(error)
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
