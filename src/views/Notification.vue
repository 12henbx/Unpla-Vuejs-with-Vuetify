<template>
    <div class="container-page">
      <div class="place-header">
        <OneLevelPageHeader v-bind:objHeader="objRecycler"></OneLevelPageHeader>
      </div>
      <div class="place-content">
      <div class="div-notification-icon">
        <div class="wrapper-notification-icon">
          <a class="text-title">
            Pembelian Hasil Daur Ulang
          </a>
          <div class="div-icon-name">
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-clock-time-nine-outline</v-icon>
            </div>
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-sync</v-icon>
            </div>
            <v-icon large color="black">mdi-cube-send</v-icon>
              <v-icon large color="black">mdi-map-marker-radius-outline</v-icon>
          </div>
        </div>
      </div>
      <div class="div-notification-icon">
        <div class="wrapper-notification-icon">
          <a class="text-title">
            Penjualan Hasil Daur Ulang
          </a>
          <div class="div-icon">
            <v-icon large color="black">mdi-buffer</v-icon>
            <v-icon large color="black">mdi-sync</v-icon>
            <v-icon large color="black">mdi-check-box-outline</v-icon>
            <v-icon large color="black">mdi-map-marker-radius-outline</v-icon>
          </div>
        </div>
      </div>
      <div class="div-notification-icon">
        <div class="wrapper-notification-icon">
          <a class="text-title">
            Kirim Sampah Plastik
          </a>
          <div class="div-icon">
            <v-icon large color="black">mdi-clock-time-nine-outline</v-icon>
            <v-icon large color="black">mdi-sync</v-icon>
            <v-icon large color="black">mdi-cube-send</v-icon>
            <v-icon large color="black">mdi-map-marker-radius-outline</v-icon>
          </div>
        </div>
      </div>
      <div class="div-notification-icon">
        <div class="wrapper-notification-icon">
          <a class="text-title">
            Terima Sampah Plastik
          </a>
          <div class="div-icon">
            <v-icon large color="black">mdi-buffer</v-icon>
            <v-icon large color="black">mdi-sync</v-icon>
            <v-icon large color="black">mdi-check-box-outline</v-icon>
            <v-icon large color="black">mdi-map-marker-radius-outline</v-icon>
          </div>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
import OneLevelPageHeader from '../components/header/OneLevelPageHeader'

export default {
  name: 'Notification',
  components: {
    OneLevelPageHeader
  },
  data: function () {
    return {
      objRecycler: { notify: false, menuTitle: 'Notifikasi' }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../styles/pages/notification";

</style>
