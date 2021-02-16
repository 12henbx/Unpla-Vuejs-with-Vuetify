<template>
  <div class="container-page">
    <WasteTypeDetail @setWeight="setWeight($event)" v-bind:dataWasteCategory="objMainWaste" v-if="showDetail"></WasteTypeDetail>
    <div class="place-header">
      <OneLevelPageHeader v-bind:objHeader="objRecycler"></OneLevelPageHeader>
    </div>
    <div class="place-content">
      <div class="div-title-input">Jual ke:</div>
      <div class="div-address">
        <div class="text-address">
          <span>
            {{ objAccRecycler.name }}
          </span>
          <span>
            {{ objAccRecycler.address }}
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
        Jenis Sampah: (min. 3Kg/ penjemputan)
      </div>
      <div class="div-waste-type">
        <div class="div-set-weight" @click="showDetail = !showDetail">
          <span class="span-icon">
            <v-icon x-large color="black darken-2">mdi-bottle-soda-classic-outline</v-icon>
          </span>
          <span v-if="!sellWsItemForm.weightValue" class="span-waste-weight">Plastik ( _ _ Kg)</span>
          <span v-else class="span-waste-weight">Plastik {{ sellWsItemForm.weightValue }}Kg</span>
        </div>
        <span><v-btn
          class="ma-2" text icon color="black"
        ><v-icon color="black darken-2">mdi-trash-can-outline</v-icon></v-btn></span>
      </div>
<!--      <div>-->
<!--        Tanggal Jemput:-->
<!--      </div>-->
      <div class="div-input-pick-date">
          <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="sellWsItemForm.pickUpDate" label="Tanggal Penjemputan" prepend-icon="event" readonly v-bind="attrs" v-on="on" outlined
              ></v-text-field>
            </template>
            <v-date-picker min="2021-02-07" v-model="sellWsItemForm.pickUpDate" @input="menu2 = false"></v-date-picker>
          </v-menu>
      </div>
<!--      <div>-->
<!--        (Waktu Penjemputan:)-->
<!--      </div>-->
      <div class="div-pick-time">
        <v-select :items="items" v-model="selectPickPeriod"
                  :hint="`${selectPickPeriod}`"
                  item-text="time"
                  item-value="day"
                  class="select-periode" label="Periode Penjemputan" outlined></v-select>
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
            <img class="img-preview" :src=imageData[each-1] alt="waste item photo"/> <!--aspect-ratio="1.7"--> <!--TODO: img tag masih nyampur sama v-img-->
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
      <FabWasteItemForm @submitBtn="submitBtn($event)" @click="forceRerender" v-bind:dataFabInfo="objFabDetail" :key="componentKey"></FabWasteItemForm>
    </div>
  </div>
</template>

<script>
import OneLevelPageHeader from '../components/header/OneLevelPageHeader'
import FabWasteItemForm from '../components/fab/FabWasteItemForm'
import WasteTypeDetail from './WasteTypeDetail'
import { mapGetters } from 'vuex'
import router from '../router'
import axios from 'axios'

export default {
  name: 'SellWasteItemForm',
  components: {
    WasteTypeDetail,
    FabWasteItemForm,
    OneLevelPageHeader
  },
  props: ['recycler'],
  computed: {
    ...mapGetters({ recyclerId: 'StateRecyclerId', userId: 'StateUserId' })
  },
  data: function () {
    return {
      objRecycler: { notify: false, menuTitle: 'Jual Sampah' },
      objAccRecycler: this.$route.params.recycler,
      objMainWaste: this.$route.params.subwcategory,
      objFabDetail: {
        weightValue: '',
        magnitude: 'Kilogram'
      },
      selectPickPeriod: {},
      date: new Date().toISOString().substr(0, 10),
      menu2: false,
      showDetail: false,
      imageData: [],
      iterPhoto: 0,
      componentKey: 0,
      sellWsItemForm: {
        photos: [],
        mainWasteCategory: 'Plastik',
        subWasteCategory: this.$route.params.subwcategory,
        weightValue: '',
        magnitude: 'Kilogram',
        userId: '',
        pickUpDate: '',
        pickUpPeriod: '',
        totalPrice: '',
        status: 'pending',
        desc: '',
        recyclerId: this.$route.params.recycler.id,
        isDelete: true
      },
      items: [
        { day: 'pagi', time: '(08.00 - 11.30)' },
        { day: 'siang', time: '(11.30 - 15.00)' },
        { day: 'sore', time: '(15.00 - 18.30)' }
      ]
    }
  },
  created () {
    this.imageData[this.iterPhoto] = this.$route.params.plusImage
    this.sellWsItemForm.photos[this.iterPhoto] = this.$route.params.plusImage.replace('data:image/jpeg;base64,', '')
    this.iterPhoto++
  },
  methods: {
    click1 () {
      this.$refs.inputPhotos.click()
    },
    setWeight (weight) {
      this.sellWsItemForm.weightValue = weight
      this.objFabDetail.weightValue = weight
      console.log(JSON.stringify(this.objFabDetail) + ' ini berat distringify')
    },
    previewImage (event) {
      // this.uploadValue = 0
      this.imageData[this.iterPhoto] = URL.createObjectURL(event.target.files[0])
      const reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = () => {
        this.sellWsItemForm.photos[this.iterPhoto - 1] = reader.result.replace('data:image/jpeg;base64,', '')
      }
      this.iterPhoto++
    },
    async submitBtn () {
      this.sellWsItemForm.totalPrice = this.sellWsItemForm.weightValue * this.objAccRecycler.subWastePriceList[0].price
      this.sellWsItemForm.userId = this.userId
      this.sellWsItemForm.pickUpDate = '2021-02-07T17:26:57.678Z'
      this.sellWsItemForm.pickUpPeriod = this.selectPickPeriod
      this.sellWsItemForm.isDelete = false
      const response = await axios.post('/api/waste-item/add-waste-item', this.sellWsItemForm)
        .then(res => res)
        .catch(error => {
          this.errorMessage = error.message
          console.error('There was an error!', this.errorMessage)
        })
      // console.log(JSON.stringify(response) + ' ini adalah response ')
      await router.push({ name: 'ReviewAndGreeting', params: { sellItem: response.data.data } })
    },
    createBase64 (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        this.imageTmp = event.target.result
      }
      reader.readAsBinaryString(file)
    },
    forceRerender () {
      console.log(' halo ')
      this.componentKey += 1
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
