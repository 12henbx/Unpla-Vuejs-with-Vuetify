<template>
<div class="div-feature-list">
  <div class="feature-barter">
    <div v-if="ordered!==null && show===true" class="div-add-photo">
      <div v-for="iter in impatLength" :key="iter">
        <div v-if="imagePath[iter-1]!==null" class="div-each-photo">
          <img class="img-preview" :src="imagePath[iter-1]" alt="Feature photo"/> <!--aspect-ratio="1.7"--> <!--TODO: img tag masih nyampur sama v-img-->
          <br>
        </div>
      </div>
    </div>
    <div v-else-if="materials!==null && show===true">
      <div v-for="each in imagePath.length" :key="each">
        <div v-if="imagePath[each-1]!==null" class="div-each-photo">
          <img class="img-preview" :src=imagePath[each-1] alt="Feature photo"/> <!--aspect-ratio="1.7"--> <!--TODO: img tag masih nyampur sama v-img-->
          <br>
        </div>
      </div>
    </div>
    <div class="div-hide-feature">
      <v-icon v-if="ordered!==null">mdi-package-variant-closed</v-icon>
      <v-icon v-else-if="materials!==null">mdi-clipboard-list-outline</v-icon>
      <span v-if="ordered!==null">
        Rincian Paket
      </span>
      <span v-else-if="materials!==null">
        Daftar bahan pembentuk produk
      </span>
      <button v-if="!show" @click="show = !show"><v-icon>mdi-chevron-down</v-icon></button>
      <button v-else @click="show = !show"><v-icon>mdi-chevron-up</v-icon></button>
    </div>
  </div>
  <div class="feature-link-user">

  </div>
</div>
</template>

<script>
export default {
  name: 'ProductDetailFeatureList',
  props: {
    dataFeature: Object
  },
  data: function () {
    return {
      show: false,
      ordered: [],
      materials: [],
      imagePath: [],
      impatLength: 0
    }
  },
  created () {
    this.ordered = this.dataFeature.orderedWasteList
    this.materials = this.dataFeature.materialList
    console.log(this.ordered.length)

    if (this.ordered !== null) {
      for (let i = 0; i < this.ordered.length; i++) {
        if (this.ordered[i].wasteCategory === 'Botol_Bening') {
          this.imagePath.push(require('@/assets/feature_images/botol-bening.webp')) // this.imagePath.push('file:/E:/Projec&20Bootcamp&20Blibli&20Future&20batch&204/Project&20Phase&203/unpla-vue-ui/src/assets/feature_images/botol-bening.webp')
        } else if (this.ordered[i].wasteCategory === 'Botol_Warna') {
          this.imagePath.push(require('@/assets/feature_images/botol-warna.webp'))
        } else if (this.ordered[i].wasteCategory === 'Kaleng') {
          this.imagePath.push(require('@/assets/feature_images/kaleng.webp'))
        } else if (this.ordered[i].wasteCategory === 'Kardus') {
          this.imagePath.push(require('@/assets/feature_images/kardus.webp'))
        } else if (this.ordered[i].wasteCategory === 'Plastik_Keras') {
          this.imagePath.push(require('@/assets/feature_images/plastik-keras.webp'))
        }
      }
    } else if (this.materials !== null) {
      for (let i = 0; i < this.materials.length; i++) {
        if (this.materials[i].wasteCategory === 'Botol_Bening') {
          this.imagePath.push(require('@/assets/feature_images/botol-bening.webp'))
        } else if (this.materials[i].wasteCategory === 'Botol_Warna') {
          this.imagePath.push(require('@/assets/feature_images/botol-warna.webp'))
        } else if (this.materials[i].wasteCategory === 'Kaleng') {
          this.imagePath.push(require('@/assets/feature_images/kaleng.webp'))
        } else if (this.materials[i].wasteCategory === 'Kardus') {
          this.imagePath.push(require('@/assets/feature_images/kardus.webp'))
        } else if (this.materials[i].wasteCategory === 'Plastik_Keras') {
          this.imagePath.push(require('@/assets/feature_images/plastik-keras.webp'))
        }
      }
    }
    console.log(this.imagePath + ' ini image path')
    this.impatLength = this.imagePath.length
  }
}
</script>

<style lang="scss" scoped>
.div-feature-list{
  padding: 16px;
}

.div-add-photo{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 10px;
}

.div-each-photo{
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
}

.img-preview{
  //height: auto;
  //width: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>
