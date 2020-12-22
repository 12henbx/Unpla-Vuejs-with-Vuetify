<template>
  <div class="container-page">
    <div class="place-header">
      <OneLevelPageHeader v-bind:objHeader="objRecycler"></OneLevelPageHeader>
    </div>
    <div>
      <div>Jual ke:</div>
      <div>
        <span>(Alamat)</span>
        <span>(icon edit alamat)</span>
      </div>
      <div>
        (Jenis Sampah: (min. 5Kg/ penjemputan))
      </div>
      <div>
        <span>icon plastik</span>
        <span>Plastik (brapa Kg)</span>
        <span>(icon delete)</span>
      </div>
      <div>
        (Tanggal Jemput:)
      </div>
      <div>
        (input Tanggal Jemput)
      </div>
      <div>
        (Waktu Penjemputan:)
      </div>
      <div>
        (Input Waktu Penjemputan)
      </div>
      <div>
        (Informasi Tambahan:)
      </div>
      <div>
        (Input Informasi Tambahan)
      </div>
      <div>
        (Foto:)
      </div>
      <div>
<!--        <img src="">-->
      </div>
    </div>
  </div>
</template>

<script>
import OneLevelPageHeader from '../components/header/OneLevelPageHeader'
export default {
  name: 'SellWasteItemForm',
  components: {
    OneLevelPageHeader
  }
}
</script>

<style scoped>

</style>
