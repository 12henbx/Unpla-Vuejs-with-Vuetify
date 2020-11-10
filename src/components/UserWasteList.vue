<template>
  <div class="card-list">
    <div class="div-card-waste" v-for="item in 5" v-bind:key="item">
      <v-card
        class="mx-auto card-waste"
      >
        <div class="div-card-container">
          <div class="div-card-row">
            <div class="div-img">
              <v-img class="img-product"
                     src="https://cdn.vuetifyjs.com/images/cards/store.jpg"></v-img>
            </div>
            <div class="col-content">
              <div class="div-waste-content">
                <div class="judul-content">Plastik Botol Bening</div>
                <div class="judul-content">27 Agustus 2020</div>
                <div class="judul-content">5 Kg</div>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserWasteList'
}
</script>

<style lang="scss" scoped>
  @import "../styles/basics/variables";

  .card-list{
    overflow-x: scroll;
    white-space: nowrap;
    height: 130px;
    scrollbar-width: none;
  }

  .card-list::-webkit-scrollbar {
    display: none;
  }

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
