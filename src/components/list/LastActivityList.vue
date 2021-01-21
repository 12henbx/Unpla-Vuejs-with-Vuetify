<template>
  <div class="div-card-waste">
    <v-card class="mx-auto card-waste">
      <div class="div-card-container">
        <div class="div-card-row">
          <div class="div-img">
            <v-img class="img-product" :src="dataInDataActList.photo[0]"></v-img>
          </div>
          <div class="col-content">
            <div class="div-waste-content">
              <div class="judul-content">{{dataInDataActList.subWasteCategory}}</div>
              <div class="judul-content">{{dataInDataActList.pickUpDate}}</div>
              <div class="judul-content">{{dataInDataActList.weightValue}} item</div>
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
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/basics/variables";

  .div-card-waste{
    display: inline-block;
    width: 300px;
    margin-right: 10px;
  }

  .card-waste{
    border: $border-card-color 2px solid;
    border-radius: 20px;
    height: 120px;
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
  }

  .div-waste-content{
    padding: 8px 0;
    margin-left: 10px;
  }
</style>
