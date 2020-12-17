<template>
  <div class="card-list">
    <div class="div-card-waste" v-for="item in 5" v-bind:key="item">
      <v-card
        class="mx-auto card-waste"
      >
        <div class="div-card-container">
          <div class="div-card-row">
            <div class="col-content">
              <div class="div-waste-content">
                <div class="judul-content">CV. Sejahtera Abadi</div>
                <div class="judul-content">
                  <span>4,8(BINTANG)</span>
                  <span>•</span>
                  <span>(JARAK)1,5Km</span>
                </div>  <!-- TODO: Add bintang -->
                <div>
                  <span>BUKA</span> <!-- TODO: Warna hijau -->
                </div>
                <div class="judul-content">Yogyakarta</div>
              </div>
            </div>
            <div class="div-img">
              <v-img class="img-product"
                     src="https://cdn.vuetifyjs.com/images/cards/store.jpg"></v-img>
            </div>
          </div>
          <v-card-actions>
            <v-btn
              color="orange lighten-2"
              text
            >
              Explore
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              icon
              @click="show = !show"
            >
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecyclerListSellWasteItem'
}
</script>

<style lang="scss" scoped>
  @import "../../styles/basics/variables";

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
