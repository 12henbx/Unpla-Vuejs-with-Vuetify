<template>
  <div class="container-page">
    <div class="place-header">
      <OneLevelPageHeader v-bind:objHeader="objRecycler"></OneLevelPageHeader>
    </div>
    <div class="card-list-column">
      <div v-for="(eachRecycler, idx) in objRecyclerList.listWasteItem" :key="idx" class="div-card-waste">
        <RecyclerListSellWasteItem v-bind:eachDataRecycler="eachRecycler"></RecyclerListSellWasteItem>
      </div>
    </div>
  </div>
</template>

<script>
import OneLevelPageHeader from '../components/header/OneLevelPageHeader'
import RecyclerListSellWasteItem from '../components/list/RecyclerListSellWasteItem'
import axios from 'axios'
// import router from '../router'

export default {
  name: 'RecyclerListToSellWasteItem',
  components: { OneLevelPageHeader, RecyclerListSellWasteItem },
  data: function () {
    return {
      objRecycler: { notify: true, menuTitle: 'Pilih Tempat Daur Ulang' },
      objRecyclerList: null,
      subwaste: '',
      responseAxios: ''
    }
  },
  created () {
    console.log(this.$route.params.mainWaste + ' check subwaste category') // masih main waste belum subwaste
  },
  async beforeMount () {
    try {
      const response = await axios.get('/api/recycler/' + this.$route.params.mainWaste + '/recyclers')
      this.objRecyclerList = response.data.data
      for (let i = 0; i < this.objRecyclerList.listWasteItem.length; i++) {
        this.objRecyclerList.listWasteItem[i].expand = false
      }
      console.log(response + ' response aja ')
      console.log(JSON.stringify(this.objRecyclerList) + ' ini responsenya 1 ')
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  @import "../../src/styles/basics/variables";
  @import "../../src/styles/basics/viewpage";
  @import "../../src/styles/pages/recyclerListToSellWasteItem";
</style>
