<template>
  <div class="container-page">
    <div class="place-header">
      <OneLevelPageHeader v-bind:objHeader="objRecycler"></OneLevelPageHeader>
    </div>
    <div class="place-content">
      <div class="wrapper-content">
        <div class="div-img-title-product">
          <div class="wrapper-img-product">
            <v-carousel v-model="model" hide-delimiter-background>
              <v-carousel-item v-for="color in colors" :key="color">
              </v-carousel-item>
            </v-carousel>
          </div>
          <div class="div-title-price-rating">
            <span class="span-title">
              Sandal Plastik Cantik
            </span>
            <span class="span-price">
              Rp 20.000
            </span>
            <span class="span-ratings">
              ratings (5)
            </span>
          </div>
        </div>
        <div class="div-feature-section">

        </div>
        <div class="div-product-info">
          <div name="product_description" class="css-19xlv9d"></div>
          <div data-testid="pdpDescriptionContainer" class="css-19midj6">
            <h2 class="css-1n6ebyd">Deskripsi produk
              <br>
              <p class="css-c0gh7v">P1 Face shield kacamata bahan akrilik full face shield new model</p>
            </h2>
            <div class="css-13w2g5w">
              Deskripsi P1 Face shield kacamata bahan akrilik full face shield new model<br>
              SUPER KEREN MODEL TERBARU FACESHIELD TOP QUALITY<br>
              HIGHCLASS<br><br>
              Material Plastik High Quality<br>
              Ringan Sangat nyaman Digunakan</div>
            <div data-testid="pdpDescriptionSeeMore" role="presentation" class="css-1ylxam0">
              Baca Selengkapnya
            </div>
            <span></span>
          </div>
<!--          <span class="title-product-info">Informasi Produk</span>-->
<!--          <p class="par-product-info"></p>-->
        </div>
        <div class="div-recycler-account">

        </div>
      </div>
    </div>
    <div class="place-bottom">
    </div>
  </div>
</template>

<script>
import OneLevelPageHeader from '../components/header/OneLevelPageHeader'

export default {
  name: 'ProductDetail',
  components: { OneLevelPageHeader },
  data: function () {
    return {
      objRecycler: { notify: false, menuTitle: 'ProductDetail' },
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../styles/basics/variables";
  @import "../styles/basics/layout";
  @import "../styles/basics/viewpage";
  @import "../styles/pages/productDetail";
</style>
