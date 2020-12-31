<template>
  <form class="container-page">
    <h1>Sign Up</h1>
    <div class="username-box">
      <div class="wrapper-text-field">
        <v-text-field v-model="first" label="First Name" outlined></v-text-field>
      </div>
    </div>
    <div class="username-box">
      <div class="wrapper-text-field">
        <v-text-field v-model="first" label="First Name" outlined></v-text-field>
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
        <v-text-field v-model="first" type="password" label="First Name" outlined></v-text-field>
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
        <v-text-field v-model="first" type="password" label="First Name" outlined></v-text-field>
      </div>
    </div>
    <div class="div-button">
      <button class="btn-login">Login</button>
    </div>
    <span class="bottom-text">Don't have an account? <a href="/signup">Sign Up</a></span>
  </form>
</template>

<script>
export default {
  name: 'SignUp'
}
</script>

<style scoped>

</style>
