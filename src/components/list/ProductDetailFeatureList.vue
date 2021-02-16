<template>
<div class="div-feature-list">
  <div class="feature-barter">
    <div v-if="ordered.length!==0 && show===true" class="div-add-photo">
      <div v-for="iter in imagePath.length" :key="iter">
        <div v-if="imagePath[iter-1]!==null" class="div-each-photo">
          <img class="img-preview" :src="imagePath[iter-1]" alt="Feature photo" @click="showOverlay"/> <!--aspect-ratio="1.7"--> <!--TODO: img tag masih nyampur sama v-img-->
          <div class="overlay">{{ordered.quantityMagnitude}}5 Lembar</div>
          <br>
        </div>
      </div>
    </div>
    <div v-else-if="materials.length!==0 && show===true" class="div-add-photo">
      <div v-for="each in imagePath.length" :key="each">
        <div v-if="imagePath[each-1]!==null" class="div-each-photo">
          <img class="img-preview" :src=imagePath[each-1] alt="Feature photo"/> <!--aspect-ratio="1.7"--> <!--TODO: img tag masih nyampur sama v-img-->
          <br>
        </div>
      </div>
    </div>
    <div class="div-hide-feature">
      <v-icon v-if="ordered.length!==0">mdi-package-variant-closed</v-icon>
      <v-icon v-else-if="materials.length!==0">mdi-clipboard-list-outline</v-icon>
      <span v-if="ordered.length!==0" class="name-feature">
        Rincian Paket
      </span>
      <span v-else-if="materials.length!==0">
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
      overlay: false,
      ordered: [],
      materials: [],
      imagePath: [],
      quantity: []
    }
  },
  beforeMount () {
    this.ordered = this.dataFeature.orderedWasteList
    this.materials = this.dataFeature.materialList
    console.log(this.materials[0])

    if (this.ordered.length !== 0) {
      for (let i = 0; i < this.ordered.length; i++) {
        if (this.ordered[i].wasteCategory === 'Botol_Bening') {
          this.imagePath.push(require('@/assets/feature_images/botol-bening.webp'))
          this.quantity.push(this.ordered[i].quantityMagnitude)
        } else if (this.ordered[i].wasteCategory === 'Botol_Warna') {
          this.imagePath.push(require('@/assets/feature_images/botol-warna.webp'))
          this.quantity.push(this.ordered[i].quantityMagnitude)
        } else if (this.ordered[i].wasteCategory === 'Kaleng') {
          this.imagePath.push(require('@/assets/feature_images/kaleng.webp'))
          this.quantity.push(this.ordered[i].quantityMagnitude)
        } else if (this.ordered[i].wasteCategory === 'Kardus') {
          this.imagePath.push(require('@/assets/feature_images/kardus.webp'))
          this.quantity.push(this.ordered[i].quantityMagnitude)
        } else if (this.ordered[i].wasteCategory === 'Plastik_Keras') {
          this.imagePath.push(require('@/assets/feature_images/plastik-keras.webp'))
          this.quantity.push(this.ordered[i].quantityMagnitude)
        }
      }
    } else if (this.materials.length !== 0) {
      for (let i = 0; i < this.materials.length; i++) {
        if (this.materials[i] === 'Botol_Bening') {
          this.imagePath.push(require('@/assets/feature_images/botol-bening.webp'))
        } else if (this.materials[i] === 'Botol_Warna') {
          this.imagePath.push(require('@/assets/feature_images/botol-warna.webp'))
        } else if (this.materials[i] === 'Kaleng') {
          this.imagePath.push(require('@/assets/feature_images/kaleng.webp'))
        } else if (this.materials[i] === 'Kardus') {
          this.imagePath.push(require('@/assets/feature_images/kardus.webp'))
        } else if (this.materials[i] === 'Plastik_Keras') {
          this.imagePath.push(require('@/assets/feature_images/plastik-keras.webp'))
        }
      }
    }
    console.log(this.imagePath + ' ini image path')
  },
  methods: {
    // showOverlay () {
    //   this.overlay = true
    // }
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
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
}

.img-preview{
  //height: auto;
  //width: auto;
  display: block;
  max-width: 100%;
  max-height: 100%;
}

.overlay {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1;
  width: 100%;
  transition: .5s ease;
  opacity:0;
  /*color: #fff;*/
  font-size: 16px;
  padding: 10px;
  text-align: center;
}

.overlay:hover{
  opacity: 1;
}

/*.overlay-set{*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  background-color: #6c6c6c;*/
/*}*/

.span-quantity-magnitude{
  font-size: 20px;
  font-weight: bold;
  color: #ff5e00;
}

  .name-feature{
    font-size: 16px;
    font-weight: bold;
    color: #5c5c5c;
  }
</style>
