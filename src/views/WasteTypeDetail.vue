<template>
  <div class="container-page">
    <div class="place-header">
      <OneLevelPageHeader v-bind:objHeader="objRecycler"></OneLevelPageHeader>
    </div>
    <div class="place-content">
      <div class="div-set-weight">
        <div class="wrapper-set-weight">
          <div class="div-icon">

          </div>
          <div class="text-category">
            <span>
            </span>
            <span></span>
          </div>
          <div class="div-input-weight">

          </div>
        </div>
      </div>
      <div class="text-select-title">

      </div>
      <div class="div-list-sub-category">
      </div>
    </div>
  </div>
</template>

<script>
import OneLevelPageHeader from '../components/header/OneLevelPageHeader'
export default {
  name: 'WasteTypeDetail',
  components: { OneLevelPageHeader },
  data: function () {
    return {
      objRecycler: { notify: false, menuTitle: 'Jenis Sampah - ' }
    }
  }
}
</script>

<style scoped>

</style>
