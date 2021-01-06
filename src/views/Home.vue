<template>
  <div class="container-page">
    <v-toolbar extended extension-height="60px">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title class="font-weight-bold">UNPLA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <template v-slot:extension>
        <div class="div-field-search">
          <v-text-field label="Solo" placeholder="Search" solo></v-text-field>
        </div>
      </template>
    </v-toolbar>
    <div>
      <div>
        <div class="cont-title">
          <h3 class="text-ht">Daftar Sampah Saya</h3>
        </div>
        <UserWasteList></UserWasteList>
      </div>
    </div>
    <div class="row-menu">
      <div class="box-menu-button">
        <div class="wrapper-menu">
          <div class="div-grow-header"></div>
          <div class="text-btn-menu">
            <div class="button-menu">
              <v-icon class="icon-menu">mdi-widgets</v-icon>
            </div>
            <span class="span-txt">Lihat Semua</span>
          </div>
          <div class="div-grow-header"></div>
          <div class="text-btn-menu">
            <div class="button-menu">
              <v-icon class="icon-menu">mdi-bag-personal</v-icon>
            </div>
            <span class="span-txt">Tas</span>
          </div>
          <div class="div-grow-header"></div>
          <div class="text-btn-menu">
            <div class="button-menu">
              <v-icon class="icon-menu">mdi-pencil-ruler</v-icon>
            </div>
            <span class="span-txt">Alat Tulis</span>
          </div>
          <div class="div-grow-header"></div>
          <div class="text-btn-menu">
            <div class="button-menu">
              <v-icon class="icon-menu">mdi-medical-bag</v-icon>
            </div>
            <span class="span-txt">Alat Medis</span>
          </div>
          <div class="div-grow-header"></div>
        </div>
      </div>
    </div>
      <div>
        <div class="cont-title">
          <div>
            <h3 class="text-ht">Daftar Usaha</h3>
          </div>
          <div class="div-grow-header"></div>
          <div class="div-lihat-semua">
            <a class="a-lihat-semua">Lihat Semua</a>
          </div>
        </div>
        <RecyclerCardList></RecyclerCardList>
      </div>
    <FloatingActionButtonJual></FloatingActionButtonJual>
    <div>
        <div class="cont-title">
          <div>
            <h3 class="text-ht">Barang Pilihan Untukmmu</h3>
          </div>
          <div class="div-grow-header"></div>
          <div class="div-lihat-semua">
            <a class="a-lihat-semua">Lihat Semua</a>
          </div>
        </div>
      <div class="cont-list-itembp">
        <SelectedRecycledItemList></SelectedRecycledItemList>
      </div>
      </div>
    </div>
</template>

<script>
import UserWasteList from '../components/UserWasteList'
import FloatingActionButtonJual from '../components/fab/FloatingActionButtonJual'
import RecyclerCardList from '../components/RecyclerCardList'
import SelectedRecycledItemList from '../components/list/SelectedRecycledItemList'
import axios from "axios";

export default {
  name: 'Home',
  components: { RecyclerCardList, FloatingActionButtonJual, UserWasteList, SelectedRecycledItemList },
  data: function () {
    return {
      objRecycler: { notify: false, menuTitle: 'Home' }
    }
  },
  async beforeMount () {
    // this.userId = firebase.auth().currentUser.uid;
    try {
      const response = await axios.get('http://localhost:8080/api/transactions/' + this.userId)
      this.credit = response.data.credit
      this.debit = response.data.debit
    } catch (err) {
      console.log(err)
    }
    try {
      const response = await axios.get('http://localhost:8080/waste-item/' + this.userId + '/balance')
      this.balance_idr = response.data.value_in_rupiah.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      this.raw_idr = response.data.raw_balance_in_rupiah.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      this.balance_mwb = response.data.value_in_mwb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      this.balance_raw_idr = (response.data.value_in_rupiah + response.data.raw_balance_in_rupiah).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/basics/variables";
  @import "../styles/basics/layout";
  @import "../styles/basics/viewpage";
  @import "../styles/pages/home";
</style>
