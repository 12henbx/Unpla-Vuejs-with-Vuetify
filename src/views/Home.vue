<template>
  <div class="container-page">
    <v-toolbar class="primary toolbar-header" extended extension-height="60px">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="#fff"></v-app-bar-nav-icon>
      <v-toolbar-title class="font-weight-bold">UNPLA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon color="#fff">mdi-map-marker</v-icon>
      </v-btn>
      <v-btn icon @click="toNotification">
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
        <div v-for="itemRecycler in objRecyclers" :key="itemRecycler.id" class="div-each-card">
          <RecyclerCardList v-bind:dataRecyclerList="itemRecycler"></RecyclerCardList>
        </div>
      </div>
    </div>
    <FloatingActionButtonJual v-bind:dataFromPage="objFromHome"></FloatingActionButtonJual>
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
            <v-list-item-title @click="toProfile">Profil Saya</v-list-item-title>
          </v-list-item>
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
import router from '../router'
// import store from '../store/modules/auth'

export default {
  name: 'Home',
  components: { RecyclerCardList, FloatingActionButtonJual, UserWasteList, SelectedRecycledItemList },
  data: function () {
    return {
      objRecycler: { notify: false, menuTitle: 'Home' },
      objFromHome: { name: 'Home' },
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
    // console.log(this.userId)
    try {
      const resWI = await axios.get('/api/waste-item/all/' + this.userId, {
        params: {
          page: 1,
          size: 10
        }
      })
      // console.log(resWI.data)
      this.objUserWasteItem = resWI.data.data.listWasteItem
      // console.log(this.objUserWasteItem)
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
    try {
      const resRecycler = await axios.get('/api/recycler/all')
      this.objRecyclers = resRecycler.data.data.listRecycler
      // console.log(this.objRecyclers)
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    toNotification () {
      router.push({ name: 'Notification' })
    },
    toProfile () {
      router.push({ name: 'Profile' })
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
