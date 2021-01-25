<template>
  <div class="place-content">
    <div class="box-border-outside">
      <div class="wrapper-box-profile">
        <div class="div-image-wrapper">
        <v-img lazy-src="https://picsum.photos/id/11/100/60" src="https://picsum.photos/510/300?random"
               aspect-ratio="1" class="image-photo"></v-img>
        </div>
        <div class="div-name-category">
          <h2>{{ dataRecycler.name }}</h2>
<!--          <span v-for="eachMain in dataRecycler.mainWasteCategories" v-bind:key="eachMain">-->
            <a>{{ eachMain }}Plastik, Kertas</a>
<!--          </span>-->
<!--          <span v-for="eachSub in dataRecycler.subWasteCategories" v-bind:key="eachSub">-->
            <a>{{ eachSub }}Botol PET, Botol HDPE, Karton Cokelat</a>
<!--          </span>-->
        </div>
      </div>
    </div>
    <h2 class="sub-title">Ativitas Terakhir</h2>
    <div>

    </div>
    <h2 class="sub-title">Produk {{dataRecycler.name}}</h2>
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
  .box-border-outside{
    display: flex;
    width: auto;
    height: 140px;
    border: #666666 2px solid;
    border-radius: 8px;
  }

  .wrapper-box-profile{
    display: flex;
    flex-direction: row;
    margin: 10px;
    padding-left: 10px;
    align-items: center;
  }

  .div-name-category{
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    align-items: center;
  }

  .div-image-wrapper{
    width: 100px;
    height: 100px;
  }

  .image-photo{
    border-radius: 50%;
  }

  .sub-title{
    margin-top: 20px;
  }

</style>
