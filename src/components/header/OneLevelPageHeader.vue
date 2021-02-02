<template>
  <header class="header-box">
    <div @click="back" class="icon-box">
      <span class="icon-span">
        <v-icon large color="white">mdi-arrow-left</v-icon>
      </span>
    </div>
    <div v-if="objHeader.menuTitle !== 'ProductDetail'" class="title-box">
      <h3 class="menu-title">{{objHeader.menuTitle}}</h3>
    </div>
    <div v-if="objHeader.menuTitle === 'ProductDetail'" class="search-box">
<!--        <v-text-field class="text-search" solo label="Prepend inner" prepend-inner-icon="mdi-magnify"></v-text-field>-->
        <div class="div-input-search">
          <v-icon class="icon-magnify">mdi-magnify</v-icon>
          <input type="text" aria-label="unf-searchbar" class="input-searchbar" value="" data-cy="topnavSearchbar" placeholder="Cari Barang" margin="0">
        </div>
    </div>
    <v-spacer></v-spacer>
    <div class="div-icon-notif" v-if="objHeader.menuTitle === 'Home' || objHeader.menuTitle === 'ProductDetail'">
<!--      <v-badge color="pink" dot>-->
        <v-icon class="icon-notif" color="white">
          mdi-bell
        </v-icon>
<!--      </v-badge>-->
    </div>
    <div class="div-icon-cart" v-if="menuTitle === 'Home' || objHeader.menuTitle === 'ProductDetail'">
<!--      <v-badge color="pink" dot>-->
        <v-icon class="icon-cart" color="white">
          mdi-cart
        </v-icon>
<!--      </v-badge>-->
    </div>
  </header>
</template>

<script>
import router from '../../router'

export default {
  name: 'header.OneLevelPageHeader',
  props: {
    objHeader: Object,
    menuTitle: String
  },
  methods: {
    back () {
      router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/basics/variables";
  .header-box {
    display: flex;
    position: fixed;
    height: 54px;
    max-width: $max-phone-width - 2px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
    z-index: 100;
    white-space: pre-wrap;
    background-color: $header-background;
    color: #fff;
  }

  .menu-title{
    margin-left: 16px;
  }

  .search-box{
    height: 36px;
    width: 300px;
  }

  .icon-magnify{
    color: rgba(90, 97, 105, 0.96);
    margin-left: 10px;
    font-size: 20px;
  }

  .css-sc90cu-unf-searchbar::before {
    content: '';
    display: flex;
    width: 24px;
    height: 24px;
    background-image: url("https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/d3d8fc05.svg");
    background-repeat: no-repeat;
    background-position: center;
  }

  .div-input-search {
    display: flex;
    height: 36px;
    width: 100%;
    margin-left: 10px;
    border: none;
    border-radius: 8px;
    outline: none;
    background-color: #F3F4F5;
    color: rgba(49,53,59,0.96);
    font-size: 14px;
    line-height: 20px;
  }

  .input-searchbar{
    background-color: #F3F4F5;
    margin-left: 5px;
  }

  .text-search{
    width: 200px;
    height: 30px;
  }

  .div-icon-notif{
    display: flex;
    margin-right: 10px;
  }

  .div-icon-cart{
    margin-right: 20px;
  }

  .icon-notif{
    font-size: 26px;
  }

  .icon-cart{
    font-size: 24px;
  }
</style>
