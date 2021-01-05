<template>
  <form class="container-page">
    <h1>Sign Up</h1>
    <div class="username-box">
      <div class="wrapper-text-field">
        <v-text-field v-model="form.username" label="Username" outlined></v-text-field>
      </div>
    </div>
    <div class="username-box">
      <div class="wrapper-text-field">
        <v-text-field v-model="first" label="Name" outlined></v-text-field>
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
    <div class="password-box">
      <div class="wrapper-text-field">
        <!--        <div class="text-user-box">-->
        <!--          <span class="text-user"><v-icon large color="black">mdi-lock</v-icon></span>-->
        <!--        </div>-->
        <!--        <div class="input-username-box">-->
        <!--          <input placeholder="Password" class="login-input" type="password">-->
        <!--        </div>-->
        <v-text-field v-model="form.re_pass" type="password" label="Confirm Password" outlined></v-text-field>
      </div>
    </div>
    <div class="div-button">
      <button class="btn-login">Login</button>
    </div>
    <span class="bottom-text">Don't have an account? <a href="/signup">Sign Up</a></span>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SignUp',
  data: function () {
    return {
      form: {
        username: '',
        full_name: '',
        password: '',
        re_pass: ''
      },
      showError: false
    }
  },
  methods: {
    ...mapActions(['SignUp']),
    async submit () {
      try {
        await this.Register(this.form)
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
  @import "../styles/pages/signup";
</style>
