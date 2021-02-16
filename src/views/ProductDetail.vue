<template>
  <div class="container-page">
    <div class="place-header">
      <OneLevelPageHeader v-bind:objHeader="objRecycler"></OneLevelPageHeader>
    </div>
    <div class="place-content">
      <div class="wrapper-content">
        <div class="div-img-title-product">
          <div class="wrapper-img-product">
            <v-carousel hide-delimiter-background>
              <v-carousel-item v-for="(item,i) in objProduct.productImages"
                               :key="i"
                               :src="item">
              </v-carousel-item>
            </v-carousel>
          </div>
          <div class="div-title-price-rating">
            <span class="span-title">
              {{ objProduct.name }}
            </span>
            <span class="span-price">
              Rp {{ objProduct.price }},00
            </span>
            <span class="span-ratings">
              <v-rating
                v-model="objProduct.totalRating"
                color="warning"
                background-color="warning lighten-1"
                readonly
                size="18"
              ></v-rating>
            </span>
          </div>
        </div>
        <div class="div-feature-section">
          <div name="product_description" class="css-19xlv9d"></div>
            <ProductDetailFeatureList v-bind:dataFeature="objFeature"></ProductDetailFeatureList>
        </div>
        <div class="div-product-info">
          <div name="product_description" class="css-19xlv9d"></div>
          <div class="css-19midj6">
            <h2 class="css-1n6ebyd">Deskripsi produk
              <br>
              <p class="css-c0gh7v">P1 Face shield kacamata bahan akrilik full face shield new model</p>
            </h2>
            <div class="content-paragraph">
              {{ objProduct.description }}
            </div>
            <span></span>
          </div>
        </div>
        <div class="div-recycler-account">
          <div class="css-1ptigug">
            <a>
              <img class="css-14a39gt" src="https://picsum.photos/510/300?random" alt="Logo MadisonShop">
            </a>
            <div>
              <a class="recyler-name-photo">
<!--                <img data-testid="pdpShopBadgeGM" class="css-ebxddb" src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/3320de88.svg" alt="shop_badge">-->
                <h2>{{ recycler.recyclerName }}</h2>
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
              <button class="unf-btn unf-btn--animate unf-btn--transaction unf-btn--block css-10looxd-unf-btn e1pumv1o0" type="button" @click="clickBuy">
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
// import ProductDetailFeatureList from '../components/list/ProductDetailFeatureList'
import axios from 'axios'
// import router from '../router'

export default {
  name: 'ProductDetail',
  components: {
    OneLevelPageHeader,
    ProductDetailFeatureList: () => import('../components/list/ProductDetailFeatureList')
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
      ],
      objProduct: {},
      recycler: '',
      objFeature: {
        orderedWasteList: [],
        materialList: []
      }
    }
  },
  async beforeCreate () {
    const resp = await axios.get('/api/recycled-product/get/' + this.$route.params.productName)
      .then(res => res.data)
      .catch(error => {
        this.errorMessage = error.message
        console.error('There was an error!', this.errorMessage)
      })
    this.objProduct = resp.data
    this.objProduct.price = resp.data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    this.objFeature.orderedWasteList = this.objProduct.orderedWasteList
    this.objFeature.materialList = this.objProduct.materialList
    console.log(JSON.stringify(this.objFeature) + ' ini response objfeature list ')

    const recyclerName = await axios.get('/api/recycler/get/name/' + this.objProduct.recyclerId)
      .then(res => res.data)
      .catch(error => {
        this.errorMessage = error.message
        console.error('There was an error!', this.errorMessage)
      })
    this.recycler = recyclerName.data
    console.log(JSON.stringify(this.recycler) + ' ini recyclernya')
  },
  methods: {
    clickBuy () {
      // router.push({})
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
