<template>
  <div class="container-page">
    <v-toolbar extended extension-height="60px">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title class="font-weight-bold"> UNPLA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <template v-slot:extension>
        <div class="div-field-search">
          <v-text-field label="Solo" placeholder="Search" solo></v-text-field>
        </div>
      </template>
    </v-toolbar>
    <div>
      <div>
        <h3 class="text-ht">Daftar Sampah Saya</h3>
        <UserWasteList></UserWasteList>
      </div>
    </div>
    <div>
      <div>
        <h3>Kategori Hasil Daur</h3>
        <div class="row-menu">
          <div class="box-menu-button">
            <div class="wrapper-menu">
                <div class="button-menu">
                  <v-icon large>mdi-domain</v-icon>
                </div>
              <div class="button-menu">
                <v-icon large>mdi-domain</v-icon>
              </div>
              <div class="button-menu">
                <v-icon large>mdi-domain</v-icon>
              </div>
              <div class="button-menu">
                <v-icon large>mdi-domain</v-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div>
        <div class="cont-title">
          <div>
            <h3>Daftar Usaha</h3>
          </div>
          <div class="div-lihat-semua">
            <a class="a-lihat-semua">Lihat Semua</a>
          </div>
        </div>
        <RecyclerCardList></RecyclerCardList>
      </div>
    </div>
    <FloatingActionButtonJual></FloatingActionButtonJual>
    <div>
        <div class="cont-title">
          <div>
            <h3>Barang Pilihan Untukmmu</h3>
          </div>
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

<style scoped lang="scss">
  @import "../styles/basics/variables";
  @import "../styles/basics/layout";
  @import "../styles/basics/viewpage";
  @import "../styles/pages/home";
</style>

<script>
import UserWasteList from '../components/UserWasteList'
import FloatingActionButtonJual from '../components/fab/FloatingActionButtonJual'
import RecyclerCardList from '../components/RecyclerCardList'
import SelectedRecycledItemList from '../components/list/SelectedRecycledItemList'

export default {
  name: 'Home',
  components: { RecyclerCardList, FloatingActionButtonJual, UserWasteList, SelectedRecycledItemList },
  data: function () {
    return {

    }
  }
}
</script>
