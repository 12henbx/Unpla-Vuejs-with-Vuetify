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
      <div class="div-input-pick-date">
          <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="date" label="Picker without buttons" prepend-icon="event" readonly v-bind="attrs" v-on="on" outlined
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
          </v-menu>
      </div>
      <div>
        (Waktu Penjemputan:)
      </div>
      <div class="div-pick-time">
        <v-select :items="items" class="select-periode" label="Outlined style" outlined></v-select>
      </div>
      <div>
        (Informasi Tambahan:)
      </div>
      <div class="div-desc">
        <v-textarea label="Deskripsi" class="input-desc" auto-grow outlined rows="1" filled row-height="15"></v-textarea>
      </div>
      <div>
        Foto:
      </div>
      <div class="div-add-photo">
        <div v-for="each in iterPhoto" :key="each">
          <div v-if="imageData[each-1]!=null" class="div-each-photo">
            <v-img class="img-preview" aspect-ratio="1.7" :src=imageData[each-1] alt="waste item photo"></v-img>
            <br>
          </div>
        </div>
        <div class="box-add-icon">
          <div class="wrapper-background-image">
            <v-icon @click="click1" x-large color="black">mdi-plus</v-icon>
          </div>
        </div>
        <input type="file" ref="inputPhotos" style="display: none" @change="previewImage" accept="image/*" >
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
      menu2: false,
      imageData: [],
      iterPhoto: 0
    }
  },
  methods: {
    click1 () {
      this.$refs.inputPhotos.click()
    },
    previewImage (event) {
      // this.uploadValue = 0
      this.imageData[this.iterPhoto] = URL.createObjectURL(event.target.files[0])
      // this.sellReItemForm.photo[this.iterPhoto] = event.target.files[0]
      this.iterPhoto++
      // this.onUpload()
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
