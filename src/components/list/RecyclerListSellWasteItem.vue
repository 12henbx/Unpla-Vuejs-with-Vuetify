<template>
  <v-card class="mx-auto card-waste">
    <div class="div-card-container">
      <div class="div-card-row" @click="routeToForm">
        <div class="col-content">
          <div class="div-waste-content">
            <div class="judul-content"><span class="text-judul">{{ eachDataRecycler.name }}CV. Sejahtera Abadi</span></div>
            <span class="sub-judul">Yogyakarta</span>
            <div class="judul-content">
              <span class="content-left">4,8 <v-icon small color="yellow darken-2">mdi-star</v-icon></span>
              <span class="content-middle">•</span>
              <span class="content-right"><v-icon small
                                                  color="black darken-2">mdi-map-marker-distance</v-icon>1,5Km</span>
            </div>
            <div class="judul-content">
              <span class="content-left">Buka</span>
              <span class="content-middle">•</span>
              <span class="content-right">Tutup</span>
            </div>
            <div class="judul-content">
              <span class="content-left"></span>
              <span class="content-middle"></span>
              <span class="content-right">18.00</span>
            </div>
          </div>
        </div>
        <div class="div-img">
          <v-img class="img-product" src="https://cdn.vuetifyjs.com/images/cards/store.jpg"></v-img>
        </div>
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text>
            <div class="div-kategori-harga" v-for="item in eachDataRecycler.subWastePriceList" v-bind:key="item">
              <div class="kategori-harga-row">
                <span>{{ item.subWasteCategory }}Botol PET</span>
                <v-spacer></v-spacer>
                <span>{{ item.price }} {{ item.magnitude }}Rp 3.000/Kg</span>
              </div>
              <hr class="hr-line">
            </div>
          </v-card-text>
        </div>
      </v-expand-transition>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'RecyclerListSellWasteItem',
  props: {
    eachDataRecycler: Object
  },
  data: function () {
    return {
      show: true
    }
  },
  methods: {
    routeToForm () {

    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/basics/variables";

  .card-list-column {
    overflow-y: scroll;
    width: $max-phone-width;
    scrollbar-width: none;
    text-align: center;
  }

  .card-list::-webkit-scrollbar {
    display: none;
  }

  .div-card-waste {
    display: inline-block;
    width: 450px;
    margin-top: 10px;
    /*margin-right: 10px;*/
  }

  .card-waste {
    border: $border-card-color 2px solid;
    height: auto;
    width: 450px;
  }

  .div-card-container {
  }

  .div-card-row {
    padding: 10px 20px 0;
    display: flex;
    flex-direction: row;
  }

  .div-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 100px;
    overflow: hidden;
  }

  .img-product {
    width: 120px;
    height: 100px;
    border-radius: 20px;
  }

  .col-content {
    display: flex;
    width: 350px;
  }

  .text-judul {
    font-weight: bold;
    font-size: 18px;
  }

  .div-waste-content {
    display: flex;
    flex-direction: column;
    padding: 8px 0 0;
    margin-left: 10px;
  }

  .judul-content {
    display: flex;
    justify-content: left;
  }

  .sub-judul {
    display: flex;
    justify-content: left;
    color: #5e5e5e;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 16px;
  }

  .content-left {
    display: flex;
    justify-content: left;
    align-items: center;
    width: 60px;
  }

  .content-middle {
    width: 30px;
    font-size: 22px;
    font-weight: bolder;
  }

  .content-right {
    display: flex;
    justify-content: left;
    align-items: center;
    width: 80px;
  }

  .div-kategori-harga {
    margin: 8px 50px;
  }

  .kategori-harga-row {
    display: flex;
    flex-direction: row;
  }

  .hr-line {
    color: #efefef;
    margin-top: 3px;
  }
</style>
