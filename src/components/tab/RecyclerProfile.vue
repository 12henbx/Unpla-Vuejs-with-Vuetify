<template>
  <div class="place-content">
    <div class="box-border-outside">
      <div class="wrapper-bos-profile">
        <img src="">
        <div>
          <a>{{ dataRecycler.name }}</a>
          <span v-for="eachMain in dataRecycler.mainWasteCategories" v-bind:key="eachMain">
            <a>{{ eachMain }}</a>
          </span>
          <span v-for="eachSub in dataRecycler.subWasteCategories" v-bind:key="eachSub">
            <a>{{ eachSub }}</a>
          </span>
        </div>
      </div>
    </div>
    <h2>Ativitas Terakhir</h2>
    <div>

    </div>
    <h2>Produk {{data.name}}</h2>
    <div class="wrapper-product-list">
      <div class="each-product-card">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecyclerProfile',
  props: {
    dataRecycler: Object
  }
}
</script>

<style lang="scss" scoped>

</style>
