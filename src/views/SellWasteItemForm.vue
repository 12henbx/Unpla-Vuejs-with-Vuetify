<template>
  <div class="container-page">
    <WasteTypeDetail v-if="showDetail"></WasteTypeDetail>
    <div class="place-header">
      <OneLevelPageHeader v-bind:objHeader="objRecycler"></OneLevelPageHeader>
    </div>
    <div class="place-content">
      <div class="div-title-input">Jual ke:</div>
      <div class="div-address">
        <div class="text-address">
          <span>
            CV. Sejahtera Abadi
          </span>
          <span>
            Jalan Melongalia No.7 Surabaya
          </span>
        </div>
        <v-btn
          class="ma-2"
          text
          icon
          color="black"
        ><v-icon color="black darken-2">mdi-pencil</v-icon></v-btn>
      </div>
      <div class="div-title-input">
        Jenis Sampah: (min. 5Kg/ penjemputan)
      </div>
      <div class="div-waste-type">
        <div class="div-set-weight" @click="showDetail = !showDetail">
          <span class="span-icon">
            <v-icon x-large color="black darken-2">mdi-bottle-soda-classic-outline</v-icon>
          </span>
          <span class="span-waste-weight">Plastik (brapa Kg)</span>
        </div>
        <span><v-btn
          class="ma-2"
          text
          icon
          color="black"
        ><v-icon color="black darken-2">mdi-trash-can-outline</v-icon></v-btn></span>
      </div>
<!--      <div>-->
<!--        Tanggal Jemput:-->
<!--      </div>-->
      <div class="div-input-pick-date">
          <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="sellWsItemForm.date" label="Tanggal Penjemputan" prepend-icon="event" readonly v-bind="attrs" v-on="on" outlined
              ></v-text-field>
            </template>
            <v-date-picker v-model="sellWsItemForm.date" @input="menu2 = false"></v-date-picker>
          </v-menu>
      </div>
<!--      <div>-->
<!--        (Waktu Penjemputan:)-->
<!--      </div>-->
      <div class="div-pick-time">
        <v-select :items="items" v-model="sellWsItemForm.pickUpPeriod" class="select-periode" label="Periode Penjemputan" outlined></v-select>
      </div>
<!--      <div>-->
<!--        (Informasi Tambahan:)-->
<!--      </div>-->
      <div class="div-desc">
        <v-textarea label="Informasi Tambahan" v-model="sellWsItemForm.desc" class="input-desc" auto-grow outlined rows="1" row-height="15"></v-textarea>
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
      <FabWasteItemForm @submitBtn="submitBtn($event)" v-bind:dataFabInfo="objFabInfo"></FabWasteItemForm>
    </div>
  </div>
</template>

<script>
import OneLevelPageHeader from '../components/header/OneLevelPageHeader'
import FabWasteItemForm from '../components/fab/FabWasteItemForm'
import WasteTypeDetail from './WasteTypeDetail'
import router from '../router'
import axios from 'axios'

export default {
  name: 'SellWasteItemForm',
  components: {
    WasteTypeDetail,
    FabWasteItemForm,
    OneLevelPageHeader
  },
  data: function () {
    return {
      objRecycler: { notify: false, menuTitle: 'Jual Sampah' },
      objFabInfo: { wasteCategory: 'Plastik', date: new Date().toISOString().substr(0, 10), weight: '5' },
      date: new Date().toISOString().substr(0, 10),
      menu2: false,
      showDetail: false,
      imageData: [],
      iterPhoto: 0,
      sellWsItemForm: {
        address: 'Jalan Melongalia No.7 Surabaya',
        weight: '',
        date: new Date().toISOString().substr(0, 10),
        pickUpPeriod: '',
        desc: '',
        photos: []
      },
      items: ['Pagi (08.00 - 11.30)', 'Siang (11.30 - 15.00)', 'Malam (15.00 - 18.30)']
    }
  },
  methods: {
    click1 () {
      this.$refs.inputPhotos.click()
    },
    previewImage (event) {
      // this.uploadValue = 0
      this.imageData[this.iterPhoto] = URL.createObjectURL(event.target.files[0])
      this.sellWsItemForm.photos[this.iterPhoto] = event.target.files[0]
      this.iterPhoto++
      // this.onUpload()
    },
    async submitBtn ($event) {
      const response = await axios.post('/api/waste-item/add', {
        photos: [],
        mainWasteCategory: '',
        subWasteCategory: this.sellReItemForm.photos,
        weightValue: this.sellReItemForm.name,
        magnitude: this.sellReItemForm.price,
        userId: this.sellReItemForm.stock,
        pickUpDate: [],
        pickUpPeriod: [],
        totalPrice: this.recyclerId,
        status: '',
        desc: '',
        recyclerId: ''
      })
        .then(res => res.data)
        .catch(error => {
          this.errorMessage = error.message
          console.error('There was an error!', this.errorMessage)
        })
        // console.log(JSON.stringify(this.sellReItemForm) + ' ini form ')
        // console.log(this.needWasteItem + ' ini waste amount ')
      console.log(response + ' ini adalah response ')
      router.push({ name: 'ReviewAndGreeting' })
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
