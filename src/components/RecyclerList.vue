<template>
  <div class="card-list">
    <div class="div-card" v-for="item in 5" v-bind:key="item">
      <v-card
        class="mx-auto"
      >
        <v-container>
          <v-row>
            <v-col class="col-img">
              <v-img class="img-product"
                     src="https://cdn.vuetifyjs.com/images/cards/store.jpg"></v-img>
            </v-col>
            <v-col class="col-content">
              <v-list-item-content>
                <div class="overline mb-4">OVERLINE</div>
                <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
              </v-list-item-content>
            </v-col>
          </v-row>
        </v-container>
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
  .img-product{
    width: 100px;
    height: 100px;
  }

  .col-img{
    display: flex;
    justify-content: center;
  }

  .col-content{

  }

  .card-list{
    overflow-x: scroll;
    white-space: nowrap;
    height: 200px;
    scrollbar-width: none;
  }

  .card-list::-webkit-scrollbar {
    display: none;
  }

  .div-card{
    display: inline-block;
    width: 450px;
  }
</style>
