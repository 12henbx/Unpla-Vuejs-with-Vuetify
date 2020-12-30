<template>
  <div class="container-page">
    <div class="place-header">
      <OneLevelPageHeader v-bind:objHeader="objRecycler"></OneLevelPageHeader>
    </div>
    <div class="place-content">
      <div>Jual ke:</div>
      <div class="div-address">
        <span class="text-address">(Alamat)</span>
        <button><v-icon color="black darken-2">mdi-pencil</v-icon></button>
      </div>
      <div class="div-title-input">
        Jenis Sampah: (min. 5Kg/ penjemputan)
      </div>
      <div class="div-waste-type">
        <span class="span-icon"><button><v-icon large color="black darken-2">mdi-bottle-soda-classic-outline</v-icon></button></span>
        <span class="span-waste-weight">Plastik (brapa Kg)</span>
        <span><button><v-icon color="black darken-2">mdi-trash-can-outline</v-icon></button></span>
      </div>
      <div>
        Tanggal Jemput:
      </div>
      <div>
          <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="date" label="Picker without buttons" prepend-icon="event" readonly v-bind="attrs" v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
          </v-menu>
      </div>
      <div>
        (Waktu Penjemputan:)
      </div>
      <div>
        <v-combobox class="combobox-periode"></v-combobox>
      </div>
      <div>
        (Informasi Tambahan:)
      </div>
      <div>
          <v-textarea name="input-7-1" value="" hint="Hint text"></v-textarea>
      </div>
      <div>
        (Foto:)
      </div>
      <div class="div-photo">
        <v-img lazy-src="https://picsum.photos/id/11/10/6" max-height="150" max-width="250"></v-img>
      </div>
      <FabWasteItemForm></FabWasteItemForm>
    </div>
  </div>
</template>

<script>
import OneLevelPageHeader from '../components/header/OneLevelPageHeader'
import FabWasteItemForm from '../components/fab/FabWasteItemForm'

export default {
  name: 'SellWasteItemForm',
  components: {
    FabWasteItemForm,
    OneLevelPageHeader
  },
  data: function () {
    return {
      objRecycler: { notify: false, menuTitle: 'Jual Sampah' },
      date: new Date().toISOString().substr(0, 10),
      menu2: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../styles/basics/variables";
  @import "../styles/basics/layout";
  @import "../styles/basics/viewpage";
  @import "../styles/pages/sellWasteItemForm";
</style>
