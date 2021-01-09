<template>
    <div class="container-page">
      <div class="place-header">
        <OneLevelPageHeader v-bind:objHeader="objRecycler"></OneLevelPageHeader>
      </div>
      <div class="place-content">
        <CartList></CartList>
      </div>
    </div>
</template>

<script>
import OneLevelPageHeader from '../components/header/OneLevelPageHeader'
import CartList from '../components/list/CartList'
export default {
  name: 'Cart',
  components: {
    CartList,
    OneLevelPageHeader
  },
  data: function () {
    return {
      objRecycler: { notify: false, menuTitle: 'Keranjang' }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
