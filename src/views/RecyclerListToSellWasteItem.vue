<template>
  <div class="container-page">
    <div class="place-header">
      <OneLevelPageHeader v-bind:objHeader="objRecycler"></OneLevelPageHeader>
    </div>
    <div>
      <RecyclerListSellWasteItem></RecyclerListSellWasteItem>
    </div>
  </div>
</template>

<script>
import OneLevelPageHeader from '../components/header/OneLevelPageHeader'
import RecyclerListSellWasteItem from '../components/list/RecyclerListSellWasteItem'
import axios from 'axios'

export default {
  name: 'RecyclerListToSellWasteItem',
  components: { OneLevelPageHeader, RecyclerListSellWasteItem },
  data: function () {
    return {
      objRecycler: { notify: true, menuTitle: 'Pilih Tempat Daur Ulang' },
      subwaste: '',
      responseAxios: ''
    }
  },
  created () {
    console.log(this.$route.params.subwastecategory + ' check subwaste category')
  },
  async beforeMount () {
    try {
      const response = await axios.get('/api/recycler/' + this.$route.params.subwastecategory.output + '/recyclers')
      this.responseAxios = response.data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../src/styles/basics/variables";
  @import "../../src/styles/basics/viewpage";
  @import "../../src/styles/pages/recyclerListToSellWasteItem";
</style>
