<template>
  <div class="container-page">
    <OneLevelPageHeader v-bind:setNotif="notify"></OneLevelPageHeader>
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

</style>
