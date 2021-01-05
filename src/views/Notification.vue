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
              <a>Menunggu Konfirmasi</a>
            </div>
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-sync</v-icon>
              <a>Sedang Diproses</a>
            </div>
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-cube-send</v-icon>
              <a>Dalam Pengiriman</a>
            </div>
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-map-marker-radius-outline</v-icon>
              <a>Telah Sampai</a>
            </div>
          </div>
        </div>
      </div>
      <div class="div-notification-icon">
        <div class="wrapper-notification-icon">
          <a class="text-title">
            Penjualan Hasil Daur Ulang
          </a>
          <div class="div-icon-name">
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-buffer</v-icon>
              <a>Pesanan Baru</a>
            </div>
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-sync</v-icon>
              <a>Siap Dikirim</a>
            </div>
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-check-box-outline</v-icon>
              <a>Sudah Dikirim</a>
            </div>
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-map-marker-radius-outline</v-icon>
              <a>Telah Sampai</a>
            </div>
          </div>
        </div>
      </div>
      <div class="div-notification-icon">
        <div class="wrapper-notification-icon">
          <a class="text-title">
            Kirim Sampah Plastik
          </a>
          <div class="div-icon-name">
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-clock-time-nine-outline</v-icon>
              <a>Menunggu Konfirmasi</a>
            </div>
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-sync</v-icon>
              <a>Sedang Diproses</a>
            </div>
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-cube-send</v-icon>
              <a>Dalam Pengiriman</a>
            </div>
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-map-marker-radius-outline</v-icon>
              <a>Telah Sampai</a>
            </div>
          </div>
        </div>
      </div>
      <div class="div-notification-icon">
        <div class="wrapper-notification-icon">
          <a class="text-title">
            Terima Sampah Plastik
          </a>
          <div class="div-icon-name">
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-buffer</v-icon>
              <a>Pesanan Baru</a>
            </div>
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-sync</v-icon>
              <a>Siap Dikirim</a>
            </div>
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-check-box-outline</v-icon>
              <a>Sudah Dikirim</a>
            </div>
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-map-marker-radius-outline</v-icon>
              <a>Telah Sampai</a>
            </div>
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
  @import "../styles/basics/variables";
  @import "../styles/basics/layout";
  @import "../styles/basics/viewpage";
  @import "../styles/pages/notification";

</style>
