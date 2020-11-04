<template>
  <v-app class="container-mobile">
    <router-view></router-view>
<!--    <v-app-bar-->
<!--      app-->
<!--      color="primary"-->
<!--      dark-->
<!--    >-->
<!--    </v-app-bar>-->

<!--    <v-main>-->
<!--    </v-main>-->
  </v-app>
</template>

<style lang="scss">
  @import "styles/basics/variables";
  @import "styles/basics/layout";
</style>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  })
}
</script>
