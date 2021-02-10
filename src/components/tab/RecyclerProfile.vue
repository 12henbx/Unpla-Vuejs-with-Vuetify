<template>
  <div class="place-content">
    <div class="box-border-outside">
      <div class="wrapper-box-profile">
        <div class="div-image-wrapper">
        <v-img lazy-src="https://picsum.photos/id/11/100/60" src="https://picsum.photos/510/300?random"
               aspect-ratio="1" class="image-photo"></v-img>
        </div>
        <div class="div-name-category">
          <h2>{{ dataRecycler.name }}</h2>
<!--          <span v-for="eachMain in dataRecycler.mainWasteCategories" v-bind:key="eachMain">-->
            <a>{{ eachMain }}Plastik, Kertas</a>
<!--          </span>-->
<!--          <span v-for="eachSub in dataRecycler.subWasteCategories" v-bind:key="eachSub">-->
            <a>{{ eachSub }}Botol PET, Botol HDPE, Karton Cokelat</a>
<!--          </span>-->
        </div>
      </div>
    </div>
<!--    <h2 class="sub-title">Ativitas Terakhir</h2>-->
    <div>

    </div>
    <h2 class="sub-title">Produk {{dataRecycler.name}}</h2>
    <div class="wrapper-product-list">
      <v-container fluid>
        <v-row dense>
          <v-col v-for="(itemRecPro, index) in objRecyclerProducts" :key="index" :cols="6">
            <SelectedRecycledItemList v-bind:dataPickProducts="itemRecPro"></SelectedRecycledItemList>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <FloatingActionButtonJual v-bind:dataFromPage="objFromRecyclerProfile"></FloatingActionButtonJual>
  </div>
</template>

<script>
import SelectedRecycledItemList from '../list/SelectedRecycledItemList'
import axios from 'axios'
import router from '../../router'
import { mapGetters } from 'vuex'
import FloatingActionButtonJual from '../fab/FloatingActionButtonJual'

export default {
  name: 'RecyclerProfile',
  components: {
    FloatingActionButtonJual,
    SelectedRecycledItemList
  },
  props: {
    dataRecycler: Object
  },
  computed: {
    ...mapGetters({ userId: 'StateUserId' })
  },
  data: function () {
    return {
      objRecyclerProducts: null,
      objFromRecyclerProfile: { name: 'Recycler Profile' }
    }
  },
  async beforeMount () {
    try {
      const resRecProduct = await axios.get('/api/recycled-product/all/' + this.userId)
      // console.log(resWI.data)
      this.objRecyclerProducts = resRecProduct.data.data.recycledProductList
      // console.log(this.objRecyclerProducts)
      // console.log(resRecProduct)
    } catch (err) {
      console.log(err)
    }
    try {
      const resRecyclerId = await axios.get('/api/user/get/recycler/' + this.userId)
      console.log(JSON.stringify(resRecyclerId.data.data.recyclerId) + ' ini adalah recyclerId')
      this.$store.commit('setRecyclerId', resRecyclerId.data.data.recyclerId)
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    clickProduct () {
      router.push({ name: '' })
    }
  }
}
</script>

<style lang="scss" scoped>
  .place-content{
    padding-bottom: 20px;
  }

  .box-border-outside{
    display: flex;
    width: auto;
    height: 140px;
    border: #6c6c6c 2px solid;
    border-radius: 8px;
  }

  .wrapper-box-profile{
    display: flex;
    flex-direction: row;
    margin: 10px;
    padding-left: 10px;
    align-items: center;
  }

  .div-name-category{
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    justify-content: center;
    color: #000;
  }

  .div-image-wrapper{
    width: 100px;
    height: 100px;
  }

  .image-photo{
    border-radius: 50%;
  }

  .sub-title{
    margin-top: 20px;
  }

</style>
