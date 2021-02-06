<template>
  <div class="container-page">
    <div class="place-header">
      <OneLevelPageHeader v-bind:objHeader="objProductBuy"></OneLevelPageHeader>
    </div>
    <div class="place-content">
      <h2>Barang yang dibeli</h2>
      <div class="div-recycler-city">
        <div class="wrapper-recycler-city">
          <span>
            Toko: CV. Radistra Buana
          </span>
          <span class="sub-text-city">
            Kota Yogyakarta
          </span>
        </div>
      </div>
      <div class="div-buy-send">
        <div class="wrapper-buy-send">
          <v-img></v-img>
          <div class="div-product-price">
            <span class="span-product-name">
              Nama Produk
            </span>
            <span>
              Harga Rp 28.000,00
            </span>
            <div>
              <v-text-field
                v-model="red"
                class="mt-0 pt-0"
                type="number"
                style="width: 60px"
              ></v-text-field>
            </div>
          </div>
        </div>
        <div>
          <v-text-field
            v-model="title"
            :rules="rules"
            counter="50"
            hint="This field uses counter prop"
            label="Catatan untuk penjual (Opsional)"
          ></v-text-field>
        </div>
      </div>
      <div class="div-pengiriman-pembayaran">
        <h2>Pengiriman dan Pembayaran</h2>
        <v-card>
          <v-card-title class="headline">
            Alamat Rumah
          </v-card-title>
          <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
          <v-card-actions>
            <v-btn text>
              Listen Now
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <div class="div-total-submit">
        <div class="total-price">
          <span>Total Bayar</span>
          <span>Rp 29.000,00</span>
        </div>
        <v-btn>Bayar</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import OneLevelPageHeader from '../components/header/OneLevelPageHeader'

export default {
  name: 'ProductBuy',
  components: {
    OneLevelPageHeader
  },
  data: function () {
    return {
      objProductBuy: {}
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../styles/basics/variables";
  @import "../styles/basics/layout";
  @import "../styles/basics/viewpage";
  @import "../styles/pages/productBuy";

</style>
