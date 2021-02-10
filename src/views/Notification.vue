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
              <a class="icon-name">Menunggu Konfirmasi</a>
            </div>
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-sync</v-icon>
              <a class="icon-name">Sedang Diproses</a>
            </div>
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-cube-send</v-icon>
              <a class="icon-name">Dalam Pengiriman</a>
            </div>
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-map-marker-radius-outline</v-icon>
              <a class="icon-name">Telah Sampai</a>
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
              <a class="icon-name">Pesanan Baru</a>
            </div>
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-sync</v-icon>
              <a class="icon-name">Siap Dikirim</a>
            </div>
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-check-box-outline</v-icon>
              <a class="icon-name">Sudah Dikirim</a>
            </div>
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-map-marker-radius-outline</v-icon>
              <a class="icon-name">Telah Sampai</a>
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
              <a class="icon-name">Menunggu Konfirmasi</a>
            </div>
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-sync</v-icon>
              <a class="icon-name">Sedang Diproses</a>
            </div>
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-cube-send</v-icon>
              <a class="icon-name">Dalam Pengiriman</a>
            </div>
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-map-marker-radius-outline</v-icon>
              <a class="icon-name">Telah Sampai</a>
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
              <a class="icon-name">Pesanan Baru</a>
            </div>
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-sync</v-icon>
              <a class="icon-name">Siap Dikirim</a>
            </div>
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-check-box-outline</v-icon>
              <a class="icon-name">Sudah Dikirim</a>
            </div>
            <div class="div-wrap-icon">
              <v-icon large color="black">mdi-map-marker-radius-outline</v-icon>
              <a class="icon-name">Telah Sampai</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OneLevelPageHeader from '../components/header/OneLevelPageHeader'
import axios from 'axios'

export default {
  name: 'Notification',
  components: {
    OneLevelPageHeader
  },
  data: function () {
    return {
      objRecycler: { notify: false, menuTitle: 'Notifikasi' },
      objUserNotification: [],
      objRecyclerNotification: []
    }
  },
  async beforeMount () {
    const response = await axios.get('/api/notification/' + this.$store.getters.StateUserId)
      .then(res => res.data)
      .catch(error => {
        this.errorMessage = error.message
        console.error('There was an error!', this.errorMessage)
      })
    this.objUserNotification = response.userNotifList
    this.objRecyclerNotification = response.recyclerNotifList
    console.log(JSON.stringify(response) + ' ini response')
  }
}
</script>

<style lang="scss" scoped>
  @import "../styles/basics/variables";
  @import "../styles/basics/layout";
  @import "../styles/basics/viewpage";
  @import "../styles/pages/notification";

</style>
