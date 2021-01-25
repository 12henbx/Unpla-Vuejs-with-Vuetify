<template>
  <div class="container-page">
    <div class="div-img">
      <img class="img-greeting" src="../assets/8441.webp" alt="conserve-pic">
    </div>
    <div class="div-greeting">
      <p class="p-greeting">Terima kasih, anda telah mendaur ulang <a class="highlight-text">__Kg</a> sampah kategori<a class="highlight-text"> {kategori sampah}</a> yang sangat berarti untuk pelestarian lingkungan.</p>
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
        size="54"
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
    <v-btn class="btn-submit">
      Submit
    </v-btn>
    <a  class="text-skip">Ulas nanti</a>
  </div>
</template>

<script>
export default {
  name: 'ReviewAndGreeting',
  data: function () {
    return {
      rating: 4
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
