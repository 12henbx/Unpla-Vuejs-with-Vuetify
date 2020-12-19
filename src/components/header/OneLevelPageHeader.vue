<template>
  <header class="header-box">
    <div @click="back" class="icon-box">
      <span class="icon-span">
          <i class="bi bi-arrow-left-short"></i>
      </span>
    </div>
    <div class="title-box">
      <h4 class="menu-title">{{menuTitle}}</h4>
    </div>
<!--    <div class="add-button-box" v-if="menuTitle === 'Tambah Barang CA' || menuTitle === 'Pick Sales Order' || menuTitle === 'Container Activity'">-->
<!--      <span class="add-button">-->
<!--          <button class="add-button" @click="submitItem">Tambah</button>-->
<!--      </span>-->
<!--    </div>-->
<!--    <div class="add-button-box" v-else-if="menuTitle === 'Map Inbound'">-->
<!--      <span class="add-button">-->
<!--          <button class="add-button" @click="scanContainer">Scan Container</button>-->
<!--      </span>-->
<!--    </div>-->
    <div>
      <span>
        <v-text-field
          class="text-search"
          solo
          label="Prepend inner"
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </span>
    </div>
    <div>
      <v-badge
        color="pink"
        dot
      >
        <v-icon
          large
          color="green darken-2"
        >
          mdi-bell
        </v-icon>
      </v-badge>
    </div>
    <div class="div-icon-buttons">
      <v-badge
        color="pink"
        dot
      >
        <v-icon
          large
          color="green darken-2"
        >
          mdi-cart
        </v-icon>
      </v-badge>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header.OneLevelPageHeader',
  props: {
    setNotif: Boolean
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/basics/variables";
  .header-box {
    display: flex;
    position: fixed;
    height: 64px;
    max-width: $max-phone-width - 2px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
    z-index: 100;
    white-space: pre-wrap;
    background-color: #fff;
  }

  .text-search{
    width: 200px;
    height: 30px;
  }

  .div-icon-buttons{
    display: flex;
    flex-direction: row;
  }
</style>
