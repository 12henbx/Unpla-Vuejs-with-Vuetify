<template>
  <div class="container-page">
    <div class="div-img">
      <img class="img-greeting" src="../assets/8441.webp" alt="conserve-pic">
    </div>
    <div class="div-greeting">
      <p class="p-greeting">Terima kasih, anda telah mendaur ulang <a class="highlight-text">{{resSellWaste.weightValue}}Kg</a> sampah kategori<a class="highlight-text"> {{resSellWaste.mainWasteCategory}}</a> yang sangat berarti untuk pelestarian lingkungan.</p>
    </div>
    <div class="text-review">
      Ulasan:
    </div>
    <div class="div-star-input">
      <v-rating
        v-model="rating"
        color="yellow darken-3"
        background-color="grey darken-1"
        empty-icon="$vuetify.icons.ratingFull"
        half-increments
        size="48"
        hover
      ></v-rating>
    </div>
    <div class="review-input">
      <v-textarea
        clearable
        clear-icon="cancel"
        label="Ulasan"
      ></v-textarea>
    </div>
    <v-btn class="btn-submit" @click="toHomeWithoutReview">
      Submit
    </v-btn>
    <a  class="text-skip" @click="toHomeWithoutReview">Ulas nanti</a>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'ReviewAndGreeting',
  props: ['sellItem'],
  data: function () {
    return {
      rating: 5,
      resSellWaste: this.$route.params.sellItem
    }
  },
  methods: {
    toHomeWithoutReview () {
      router.push({ name: 'Home' })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../styles/basics/variables";
  @import "../styles/basics/layout";
  @import "../styles/basics/viewpage";
  @import "../styles/pages/reviewAndGreeting";

</style>
