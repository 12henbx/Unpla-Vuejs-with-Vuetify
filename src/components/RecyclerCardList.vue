<template>
      <v-card class="mx-auto card-recycler">
        <div class="div-card-container">
          <div class="div-card-row">
            <div class="div-img">
              <v-img class="img-product" :src="dataRecyclerList.profilePhoto" aspect-ratio="1.7"></v-img>
            </div>
            <div class="col-content">
              <div class="div-waste-content">
                <div class="judul-content">{{dataRecyclerList.name}}</div>
                <div class="sub-content-address">4,8<span><v-icon>mdi-star</v-icon></span></div>  <!-- TODO: Add bintang -->
                <div class="sub-content-address">{{dataRecyclerList.address}}</div>
              </div>
            </div>
          </div>
        </div>
      </v-card>
</template>

<script>
export default {
  name: 'RecyclerCardList',
  props: {
    dataRecyclerList: Object
  }
}
</script>

<style lang="scss" scoped>
  @import "../styles/basics/variables";

  /*.card-list{*/
  /*  overflow-x: scroll;*/
  /*  overflow-y: hidden;*/
  /*  white-space: nowrap;*/
  /*  height: 150px;*/
  /*  scrollbar-width: none;*/
  /*}*/

  /*.card-list::-webkit-scrollbar {*/
  /*  display: none;*/
  /*}*/

  /*.div-card-waste{*/
  /*  display: inline-block;*/
  /*  width: 300px;*/
  /*  margin-right: 10px;*/
  /*}*/

  .card-recycler{
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

  .judul-content{
    font-weight: 500;
    font-size: 18px;
    color: #000;
  }
</style>
