<template>
  <div class="container-page">
    <div class="place-header">
      <OneLevelPageHeader v-bind:objHeader="objRecycler"></OneLevelPageHeader>
    </div>
    <div class="place-content">
      <div class="div-add-photo">
<!--        <h3>Foto :</h3>-->
        <div class="wrapper-background-image">
          <v-icon x-large color="black">mdi-plus</v-icon>
        </div>
      </div>
      <div class="div-input-title">
        <v-text-field
          label="Nama Produk"
          outlined
        ></v-text-field>
      </div>
      <div class="div-input-price">
        <v-text-field
          label="Harga"
          outlined
        ></v-text-field>
      </div>
      <div class="div-input-stock">
        <v-text-field
          label="Jumlah Stok"
          outlined
        ></v-text-field>
      </div>
      <div class="div-ordered-waste-list">
        <div class="row-owl-list">
          <v-select
            :items="items"
            label="Outlined style"
            outlined
          ></v-select>
          <v-text-field
            label="Jumlah"
            outlined
          ></v-text-field>
        </div>
      </div>
      <div class="div-material-list">
        <v-combobox
          v-model="select"
          :items="items"
          label="Bahan Baku Produk"
          multiple
          outlined
          dense
        ></v-combobox>
      </div>
      <div class="div-textarea-desc">

      </div>
      <div class="div-btn-submit">
        <button class="btn-submit">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import OneLevelPageHeader from '../components/header/OneLevelPageHeader'

export default {
  name: 'SellRecycledItemForm',
  components: {
    OneLevelPageHeader
  },
  data: function () {
    return {
      objRecycler: { notify: false, menuTitle: 'Jual Barang' },
      select: ['Botol Minuman Kemasan'],
      items: [
        'Botol PET',
        'Gelas Plastik',
        'Tutup Botol',
        'Botol Minuman Kemasan'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../styles/basics/variables";
  @import "../styles/basics/layout";
  @import "../styles/basics/viewpage";
  @import "../styles/pages/sellRecycledItemForm";

</style>
