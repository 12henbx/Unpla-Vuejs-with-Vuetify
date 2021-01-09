<template>
  <form class="container-page">
    <h1>Sign Up</h1>
    <div class="text-input-box">
      <div class="wrapper-text-field">
        <v-text-field v-model="form.username" label="Username" outlined></v-text-field>
      </div>
    </div>
    <div class="text-input-box">
      <div class="wrapper-text-field">
        <v-text-field v-model="form.password" type="password" label="Password" outlined></v-text-field>
      </div>
    </div>
    <div class="text-input-box">
      <div class="wrapper-text-field">
        <v-text-field type="password" label="Confirm Password" outlined></v-text-field>
      </div>
    </div>
    <div class="text-input-box">
      <div class="wrapper-text-field">
        <v-text-field v-model="form.name" label="Name" outlined></v-text-field>
      </div>
    </div>
    <div class="div-button">
      <v-btn class="btn-login" @click="submit">Sign Up</v-btn>
    </div>
    <span class="bottom-text">Have an account? <a href="/login">Login</a></span>
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
        name: '',
        password: ''
        // re_pass: ''
      },
      first: '',
      showError: false
    }
  },
  methods: {
    ...mapActions(['Register']),
    async submit () {
      console.log('ini coba')
      try {
        await this.Register(this.form)
        console.log('TESTmasuk reegister')
        this.$router.push({ name: 'Login' })
        this.showError = false
      } catch (error) {
        this.showError = true
        console.log(error)
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
