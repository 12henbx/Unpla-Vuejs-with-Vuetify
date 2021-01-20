<template>
  <div class="wrapper-list-itembp">
      <v-card :loading="loading" class="mx-auto card-product-item">
        <template slot="progress">
          <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
        </template>

        <v-img :src="dataPickProducts.productImages[0]"></v-img>
        <v-card-title>{{dataPickProducts.name}}</v-card-title>
        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating :value="dataPickProducts.totalRating" color="amber" dense half-increments readonly size="14"></v-rating>
            <div class="grey--text ml-4">
              {{dataPickProducts.totalRating}} ({{dataPickProducts.submitRatingCount}})
            </div>
          </v-row>
          <div class="my-4 subtitle-1">
            {{ dataPickProducts.price }}
          </div>
<!--          <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>-->
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
      </v-card>
  </div>
</template>

<script>
export default {
  name: 'SelectedRecycledItemList',
  props: {
    dataPickProducts: Object
  }
}
</script>

<style lang="scss" scoped>
  .wrapper-list-itembp{
    display: flex;
    align-items: flex-start;
  }

  .col-item-left{
    width: 50%;
    padding-left: 8px;
  }

  .col-item-right{
    width: 50%;
    padding-left: 8px;
  }

  .card-product-item{
    margin-bottom: 8px;
  }
</style>
