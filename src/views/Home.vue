<template>
  <div class="container-page">
    <v-toolbar class="primary toolbar-header" extended extension-height="60px">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="#fff"></v-app-bar-nav-icon>
      <v-toolbar-title class="font-weight-bold">UNPLA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon color="#fff">mdi-map-marker</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="#fff">mdi-bell</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="#fff">mdi-cart</v-icon>
      </v-btn>
      <template v-slot:extension>
        <div class="div-field-search">
          <v-text-field label="Solo" placeholder="Search" solo></v-text-field>
        </div>
      </template>
    </v-toolbar>
    <div v-if="objUserWasteItem !== null" class="div-my-waste">
      <div class="cont-title">
        <h3 class="text-ht">Daftar Sampah Saya</h3>
      </div>
      <div class="card-list">
        <div v-for="item in objUserWasteItem" :key="item.wasteItemId" class="div-each-card">
          <UserWasteList v-bind:dataWasteList="item"></UserWasteList>
        </div>
      </div>
    </div>
    <div class="css-19xlv9d"></div>
    <div class="row-menu">
      <h3 class="text-ht">Kategori Hasil Daur</h3>
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
    <div class="css-19xlv9d"></div>
    <div v-if="objRecyclers !== null" class="div-recycler-list">
      <div class="cont-title">
          <h3 class="text-ht">Daftar Usaha</h3>
        <div class="div-grow-header"></div>
        <div class="div-lihat-semua">
          <a class="a-lihat-semua">Lihat Semua</a>
        </div>
      </div>
      <div class="card-list">
        <div v-for="itemRec in objRecyclers" :key="itemRec.wasteItemIdW" class="div-each-card">
          <RecyclerCardList v-bind:dataWasteListW="itemRec"></RecyclerCardList>
        </div>
      </div>
    </div>
    <FloatingActionButtonJual></FloatingActionButtonJual>
    <div v-if="objPickProducts !== null" class="div-pick-product">
      <div class="cont-title">
        <div>
          <h3 class="text-ht">Barang Pilihan Untukmmu</h3>
        </div>
        <div class="div-grow-header"></div>
        <div class="div-lihat-semua">
          <a class="a-lihat-semua">Lihat Semua</a>
        </div>
      </div>
      <v-container fluid>
        <v-row dense>
          <v-col v-for="itemPPro in objPickProducts" :key="itemPPro.id" :cols="6">
            <SelectedRecycledItemList v-bind:dataPickProducts="itemPPro"></SelectedRecycledItemList>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list rounded dense nav>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>Jual Sampah</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Riwayat Daur Ulang</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Statistik Usaha</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Keranjang Belanja</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import UserWasteList from '../components/UserWasteList'
import FloatingActionButtonJual from '../components/fab/FloatingActionButtonJual'
import RecyclerCardList from '../components/RecyclerCardList'
import SelectedRecycledItemList from '../components/list/SelectedRecycledItemList'
import { mapGetters } from 'vuex'
import axios from 'axios'
// import store from '../store/modules/auth'

export default {
  name: 'Home',
  components: { RecyclerCardList, FloatingActionButtonJual, UserWasteList, SelectedRecycledItemList },
  data: function () {
    return {
      objRecycler: { notify: false, menuTitle: 'Home' },
      objUserWasteItem: [{}],
      objRecyclers: [{}],
      objPickProducts: [{}],
      drawer: false
    }
  },
  watch: {
    group () {
      this.drawer = false
    }
  },
  computed: {
    ...mapGetters({ userId: 'StateUserId' })
  },
  async beforeMount () {
    console.log(this.userId)
    try {
      const resWI = await axios.get('/api/waste-item/' + this.userId, {
        params: {
          page: 1,
          size: 10
        }
      })
      // console.log(resWI.data)
      this.objUserWasteItem = resWI.data.data.listWasteItem
    } catch (err) {
      console.log(err)
    }
    try {
      const resRP = await axios.get('/api/recycled-product/all')
      // console.log(resRP.data)
      this.objPickProducts = resRP.data.data.recycledProductList
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
