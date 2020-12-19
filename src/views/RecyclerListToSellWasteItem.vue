<template>
  <div class="container-page">
    <div class="place-header">
      <OneLevelPageHeader v-bind:setNotif="notify"></OneLevelPageHeader>
    </div>
    <RecyclerListSellWasteItem></RecyclerListSellWasteItem>
  </div>
</template>

<script>
import OneLevelPageHeader from '../components/header/OneLevelPageHeader'
import RecyclerListSellWasteItem from '../components/list/RecyclerListSellWasteItem'

export default {
  name: 'RecyclerListToSellWasteItem',
  components: { OneLevelPageHeader, RecyclerListSellWasteItem },
  data: function () {
    return {
      notify: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../src/styles/pages/recyclerListToSellWasteItem";
</style>
