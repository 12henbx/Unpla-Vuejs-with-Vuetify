<template>
  <div class="container-page">
    <div class="div-img">
      <img src="../assets/8441.webp" alt="conserve-pic">
    </div>
    <div class="div-greeting">
      <span class="span-greeting">
        Terima kasih, anda telah mendaur ulang <a class="highlight-text">{{weight.data}}Kg</a> sampah kategori <a class="highlight-text">{{waste.category}}</a> yang sangat berarti untuk pelestarian lingkungan.
      </span>
    </div>
    <div>
      Ulasan:
    </div>
    <div class="div-star-input">
      <div class="text-xs-center">
        <v-rating v-model="rating"></v-rating>
      </div>
    </div>
    <div class="review-input">
      <v-textarea
        clearable
        clear-icon="cancel"
        label="Text"
        value="This is clearable text."
      ></v-textarea>
    </div>
    <button>
      Submit
    </button>
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
  @import "../styles/pages/reviewAndGreeting";

</style>
