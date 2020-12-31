<template>
  <div class="container-page">
    <div class="place-header">
      <OneLevelPageHeader v-bind:objHeader="objRecycler"></OneLevelPageHeader>
    </div>
    <div class="place-content">
      <div class="div-photo">

      </div>
      <div class="div-input-title">

      </div>
      <div class="div-input-price">

      </div>
      <div class="div-input-stock">

      </div>
      <div class="div-textarea-desc">

      </div>
      <div class="div-btn-submit">
        <button>
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import OneLevelPageHeader from '../components/header/OneLevelPageHeader'

export default {
  name: 'SellRecycledItemForm',
  components: {
    OneLevelPageHeader
  },
  data: function () {
    return {
      objRecycler: { notify: false, menuTitle: '' }
    }
  }
}
</script>

<style scoped>

</style>
