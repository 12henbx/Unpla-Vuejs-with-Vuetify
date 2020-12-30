<template>
  <div class="container-page">
    <div class="place-header">
      <OneLevelPageHeader></OneLevelPageHeader>
    </div>
    <div class="place-content">
      <div class="wrapper-content">
        <div class="div-img-title-product">
          <div class="wrapper-img-product">
            <v-img>
            </v-img>
          </div>
          <div class="div-title-price-rating">
            <span class="span-title">
            </span>
            <span class="span-price">
            </span>
            <span class="span-ratings">
            </span>
          </div>
        </div>
        <div class="div-feature-section">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OneLevelPageHeader from '../components/header/OneLevelPageHeader'

export default {
  name: 'ProductDetail',
  components: { OneLevelPageHeader }
}
</script>

<style lang="scss" scoped>
  @import "../styles/basics/variables";
  @import "../styles/basics/layout";
  @import "../styles/basics/viewpage";

</style>
