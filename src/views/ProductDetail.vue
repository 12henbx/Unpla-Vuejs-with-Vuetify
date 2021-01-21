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
          <div name="product_description" class="css-19xlv9d"></div>
          <ProductDetailFeatureList></ProductDetailFeatureList>
        </div>
        <div class="div-product-info">
          <div name="product_description" class="css-19xlv9d"></div>
          <div class="css-19midj6">
            <h2 class="css-1n6ebyd">Deskripsi produk
              <br>
              <p class="css-c0gh7v">P1 Face shield kacamata bahan akrilik full face shield new model</p>
            </h2>
            <div class="content-paragraph">
              Deskripsi P1 Face shield kacamata bahan akrilik full face shield new model<br>
              SUPER KEREN MODEL TERBARU FACESHIELD TOP QUALITY<br>
              HIGHCLASS<br><br>
              Material Plastik High Quality<br>
              Ringan Sangat nyaman Digunakan
            </div>
            <span></span>
          </div>
        </div>
        <div class="div-recycler-account">
          <div class="css-1ptigug">
            <a>
              <img class="css-14a39gt" src="https://ecs7-p.tokopedia.net/img/cache/215-square/shops-1/2016/5/23/1110373/1110373_e75ed84a-5551-4537-b685-463471f0b763.jpg" alt="Logo MadisonShop">
            </a>
            <div>
              <a class="recyler-name-photo">
                <img data-testid="pdpShopBadgeGM" class="css-ebxddb" src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/3320de88.svg" alt="shop_badge">
                <h2>MadisonShop</h2>
              </a>
              <span class="span-online-with-city">Online
                <b>23 menit lalu</b>
                <span> • Jakarta Barat</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="place-bottom">
      <div class="unf-card css-ofrc7i-unf-card e1ukdezh0">
        <div data-testid="pdpBottomNavRow" class="css-yeresf">
          <div class="css-3d0aq e1s4a49r0">
            <div>
              <button class="unf-btn unf-btn--animate unf-btn--transaction unf-btn--block css-10looxd-unf-btn e1pumv1o0" type="button">
                <span>Beli</span>
              </button>
            </div>
          </div>
          <div class="css-3d0aq e1s4a49r0">
            <div>
              <button class="unf-btn unf-btn--animate unf-btn--filled unf-btn--transaction unf-btn--block css-17i3wt4-unf-btn e1pumv1o0" type="button">
                <span>+ Keranjang</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OneLevelPageHeader from '../components/header/OneLevelPageHeader'
import ProductDetailFeatureList from '../components/list/ProductDetailFeatureList'

export default {
  name: 'ProductDetail',
  components: {
    OneLevelPageHeader,
    ProductDetailFeatureList
  },
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
