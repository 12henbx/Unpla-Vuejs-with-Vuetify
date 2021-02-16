<template>
  <div class="div-card-waste">
    <v-card class="mx-auto card-waste">
      <div class="div-card-container">
        <div class="div-card-row">
          <div class="div-img">
            <v-img class="img-product" :src="dataInDataActList.photoListPath[0]"></v-img>
          </div>
          <div class="col-content">
            <div class="div-waste-content">
              <div class="judul-content">{{dataInDataActList.subWasteCategory}}</div>
              <div class="text-sub-content">{{dataInDataActList.recyclerName}}</div>
              <div class="text-sub-content">{{dataInDataActList.weightValue}} {{dataInDataActList.magnitude}}</div>
              <div class="text-sub-content">Rp {{dataInDataActList.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}},00</div>
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'LastActivityList',
  props: {
    dataInDataActList: Object
  },
  beforeCreate () {
    this.dataInDataActList.totalPrice = this.dataInDataActList.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    console.log(this.dataInDataActList)
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/basics/variables";

  .div-card-waste{
    /*display: inline-block;*/
    display: flex;
    /*width: 90%;*/
    margin-bottom: 7px;
    margin-top: 7px;
  }

  .card-waste{
    border: $border-card-color 2px solid;
    border-radius: 20px;
    height: 120px;
    width: 90%;
  }

  .div-card-container{
  }

  .div-card-row{
    display: flex;
    flex-direction: row;
    padding: 10px 5px;
  }

  .div-img{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    overflow: hidden;
  }

  .img-product{
    max-width: 100px;
    max-height: 100px;
    border-radius: 20px;
  }

  .col-content{
    display: flex;
    width: 150px;
    align-items: center;
    margin-left: 5px;
  }

  .div-waste-content{
    padding: 8px 0;
    margin-left: 10px;
  }

  .judul-content{
    font-size: 20px;
    font-weight: bold;
    color: #6c6c6c;
  }

  .text-sub-content{
    font-size: 16px;
    font-weight: normal;
    color: #6c6c6c;
  }
</style>
