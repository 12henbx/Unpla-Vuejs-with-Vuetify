<template>
  <div class="container-page">
    <div class="place-header">
      <OneLevelPageHeader v-bind:objHeader="objRecycler"></OneLevelPageHeader>
    </div>
    <div class="place-content">
      <div class="div-add-photo">
<!--        <h3>Foto :</h3>-->
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
      <div class="div-input-title">
        <v-text-field label="Nama Produk" outlined v-model="sellReItemForm.name"></v-text-field>
      </div>
      <div class="div-price-stock">
        <div class="div-input-price">
          <v-text-field label="Harga" outlined v-model="sellReItemForm.price"></v-text-field>
        </div>
        <v-spacer></v-spacer>
        <div class="div-input-stock">
          <v-text-field label="Jumlah Stok" outlined type="number" v-model="sellReItemForm.stock"></v-text-field>
        </div>
      </div>
      <div :class="{ 'inactive-text-switch': switchFeature, 'div-text-switch': !switchFeature }">
        <div class="wrapper-feature">
          <div class="text-feature">
            <span class="text-title" v-if="!switchFeature">Tambahkan "Bayar dengan sampah"</span>
            <span class="text-title" v-else>Bayar dengan sampah</span>
            <span class="text-sub-title">Sampah ini dibutuhkan sebagai bahan baku pembuatan produk</span>
          </div>
          <v-spacer></v-spacer>
          <v-switch v-model="switchFeature" inset></v-switch>
        </div>
      </div>
      <div class="div-ordered-waste-list" v-if="switchFeature">
        <div class="row-owl-list">
          <div class="text-field-waste">
<!--            <v-select-->
<!--              :items="items"-->
<!--              label="Sampah yang Dibutuhkan"-->
<!--              outlined-->
<!--              class="text-field-waste"-->
<!--            ></v-select>-->
            <v-combobox
              v-model="needWasteItem"
              :items="items"
              label="Sampah yang Dibutuhkan"
              multiple
              color="#ff5e00"
              outlined
              dense
            ></v-combobox>
          </div>
<!--          <v-spacer></v-spacer>-->
<!--          <div class="text-field-amount">-->
<!--            <v-text-field-->
<!--              label="Jumlah"-->
<!--              outlined-->
<!--              class="text-field-amount"-->
<!--            ></v-text-field>-->
<!--          </div>-->
        </div>
        <div v-show="showExtend">
          <div class="extend-ord-waste">
            <v-divider></v-divider>
            <v-card-text>
              <div class="div-kategori-harga" v-for="(item, index) in needWasteItem" v-bind:key="item">
                <div class="kategori-harga-row">
                  <span>{{item}}</span>
                  <v-spacer></v-spacer>
                  <span>
                    <v-text-field label="Jumlah dan satuan" v-model="sellReItemForm.exchangeAmount[index]"
                    ></v-text-field>
                  </span>
                </div>
              </div>
            </v-card-text>
            <v-divider></v-divider>
          </div>
        </div>
      </div>
      <div class="div-material-list" v-else>
        <v-combobox v-model="sellReItemForm.rawMaterial" :items="items" label="Bahan Baku Produk" multiple outlined dense
        ></v-combobox>
      </div>
      <div class="div-textarea-desc">

      </div>
      <div class="div-btn-submit">
        <v-btn @click="submitForm">
          Submit
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import OneLevelPageHeader from '../components/header/OneLevelPageHeader'
import { mapGetters } from 'vuex'
import router from '../router'
import axios from 'axios'

export default {
  name: 'SellRecycledItemForm',
  components: {
    OneLevelPageHeader
  },
  computed: {
    ...mapGetters({ recyclerId: 'StateRecyclerId' })
  },
  watch: {
    needWasteItem: function (val) {
      this.showExtend = val.length !== 0
      this.totalPanjang = val.length
      console.log(this.totalPanjang)
    },
    switchFeature (val) {
      if (val === true) {
        this.sellReItemForm.rawMaterial = null
      } else if (val === false) {
        this.needWasteItem = null
      }
    }
  },
  data: function () {
    return {
      objRecycler: { notify: false, menuTitle: 'Jual Barang' },
      needWasteItem: [],
      rawMaterial: [],
      items: [
        'Botol PET',
        'Gelas Plastik',
        'Tutup Botol',
        'Botol Minuman Kemasan'
      ],
      switchFeature: false,
      showExtend: false,
      totalPanjang: 0,
      caption: '',
      wasteImg: '',
      imageData: [],
      iterPhoto: 0,
      sellReItemForm: {
        photos: [],
        name: '',
        price: '',
        stock: '',
        exchangeAmount: [],
        rawMaterial: []
      }
    }
  },
  methods: {
    thumbUrl (file) {
      return file.myThumbUrlProperty
    },
    onFileChange (file) {
      // Handle files like:
      this.fileUploaded = file
    },
    click1 () {
      this.$refs.inputPhotos.click()
    },
    previewImage (event) {
      // this.uploadValue = 0
      this.imageData[this.iterPhoto] = URL.createObjectURL(event.target.files[0])
      this.sellReItemForm.photos[this.iterPhoto] = event.target.files[0]
      this.iterPhoto++
      // this.onUpload()
    },
    async submitForm () {
      const response = await axios.post('/api/recycled-product/add', {
        productImages: this.sellReItemForm.photos,
        name: this.sellReItemForm.name,
        price: this.sellReItemForm.price,
        quantity: this.sellReItemForm.stock,
        orderedWasteList: [],
        materialList: [],
        recyclerId: this.recyclerId
      })
        .then(res => res.data)
        .catch(error => {
          this.errorMessage = error.message
          console.error('There was an error!', this.errorMessage)
        })
      // console.log(JSON.stringify(this.sellReItemForm) + ' ini form ')
      // console.log(this.needWasteItem + ' ini waste amount ')
      console.log(response + ' ini adalah response ')
      await router.push({ name: 'Profile', query: { tab: 'recyclertab' } })
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
