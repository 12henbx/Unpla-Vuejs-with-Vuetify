<template>
<div class="div-feature-list">
  <img src=""/>
  <div class="div-hide-feature">
    <v-icon>mdi-package-variant-closed</v-icon>
    <span>
      Rincian Paket
    </span>
    <v-icon>mdi-chevron-down</v-icon>
  </div>
  <transition name="expand">
    <p v-if="show">hello</p>
  </transition>
</div>
</template>

<script>
export default {
  name: 'ProductDetailFeatureList'
}
</script>

<style lang="scss" scoped>

</style>
