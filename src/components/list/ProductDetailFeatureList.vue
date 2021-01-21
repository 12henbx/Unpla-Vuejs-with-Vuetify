<template>
<div class="div-feature-list">
  <div class="feature-barter">
  <div name="fade" v-if="show">
    <img src=""/>
  </div>
  <div class="div-hide-feature">
    <v-icon>mdi-package-variant-closed</v-icon>
    <span>
      Rincian Paket
    </span>
    <button v-if="!show" @click="show = !show"><v-icon>mdi-chevron-down</v-icon></button>
    <button v-else @click="show = !show"><v-icon>mdi-chevron-up</v-icon></button>
  </div>
  </div>
  <div class="feature-link-user">

  </div>
</div>
</template>

<script>
export default {
  name: 'ProductDetailFeatureList',
  data: function () {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss" scoped>
.div-feature-list{
  padding: 16px;
}
</style>
