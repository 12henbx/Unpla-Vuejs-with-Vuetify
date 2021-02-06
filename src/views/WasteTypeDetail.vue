<!--<template>-->
<!--  <div class="container-page">-->
<!--    <div class="place-header">-->
<!--      <OneLevelPageHeader v-bind:objHeader="objRecycler"></OneLevelPageHeader>-->
<!--    </div>-->
<!--    <div class="place-content">-->
<!--      <div class="div-set-weight">-->
<!--        <div class="wrapper-set-weight">-->
<!--          <div class="div-icon">-->
<!--            <v-icon class="icon-waste-category">mdi-bottle-soda</v-icon>-->
<!--          </div>-->
<!--          <div class="text-category">-->
<!--            <span class="sub-heading-category">Perikaraan Berat</span>-->
<!--            <span class="text-heading">Plastik</span>-->
<!--          </div>-->
<!--          <v-spacer></v-spacer>-->
<!--          <div class="div-input-weight">-->
<!--            <v-text-field-->
<!--              single-line-->
<!--              type="number"-->
<!--              suffix="Kg"-->
<!--              style="width: 90px"-->
<!--            ></v-text-field>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="list-of-category">-->
<!--        <div class="div-list-sub-category">-->
<!--            <v-radio-group v-model="column" column class="list-radio-btn">-->
<!--              <template v-slot:label>-->
<!--                <div class="text-select-title"><strong>Sub Jenis Plastik: </strong></div>-->
<!--              </template>-->
<!--              <v-radio class="each-radio" label="Botol PET" value="radio-1"></v-radio>-->
<!--              <hr>-->
<!--              <v-radio class="each-radio" label="Plastik Putih HDPE(botol sampo, tutup botol, wadah cat-tembok, dll.)" value="radio-2"></v-radio>-->
<!--              <hr>-->
<!--              <v-radio class="each-radio" label="Plastik Putih HDPE(botol sampo, tutup botol, wadah cat-tembok, dll.)" value="radio-2"></v-radio>-->
<!--              <hr>-->
<!--              <v-radio class="each-radio" label="Plastik Putih HDPE(botol sampo, tutup botol, wadah cat-tembok, dll.)" value="radio-2"></v-radio>-->
<!--            </v-radio-group>-->
<!--        </div>-->
<!--      </div>-->
<!--      <v-btn>Submit</v-btn>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<template>
  <v-dialog
    v-model="dialog"
    hide-overlay
    transition="dialog-bottom-transition"
    fullscreen
  >
    <v-card>
      <v-toolbar
        dark
        color="primary"
      >
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Settings</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="setWeight">
            Save
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <div class="div-set-weight">
        <div class="wrapper-set-weight">
          <div class="div-icon">
            <v-icon class="icon-waste-category">mdi-bottle-soda</v-icon>
          </div>
          <div class="text-category">
            <span class="sub-heading-category">Perikaraan Berat</span>
            <span class="text-heading">{{dataWasteCategory}}</span>
          </div>
          <v-spacer></v-spacer>
          <div class="div-input-weight">
            <v-text-field
              v-model="weightval"
              single-line
              type="number"
              suffix="Kg"
              style="width: 90px"
            ></v-text-field>
          </div>
        </div>
      </div>
<!--      <div class="list-of-category">-->
<!--        <div class="div-list-sub-category">-->
<!--          <v-radio-group v-model="setList" column class="list-radio-btn">-->
<!--            <template v-slot:label>-->
<!--              <div class="text-select-title"><strong>Sub Jenis Plastik: </strong></div>-->
<!--            </template>-->
<!--            <v-radio class="each-radio" label="Botol PET" value="radio-1"></v-radio>-->
<!--            <hr>-->
<!--            <v-radio class="each-radio" label="Plastik Putih HDPE(botol sampo, tutup botol, wadah cat-tembok, dll.)"-->
<!--                     value="radio-2"></v-radio>-->
<!--            <hr>-->
<!--            <v-radio class="each-radio" label="Plastik Putih HDPE(botol sampo, tutup botol, wadah cat-tembok, dll.)"-->
<!--                     value="radio-2"></v-radio>-->
<!--            <hr>-->
<!--            <v-radio class="each-radio" label="Plastik Putih HDPE(botol sampo, tutup botol, wadah cat-tembok, dll.)"-->
<!--                     value="radio-2"></v-radio>-->
<!--          </v-radio-group>-->
<!--        </div>-->
<!--      </div>-->
    </v-card>
  </v-dialog>
</template>

<script>
// import OneLevelPageHeader from '../components/header/OneLevelPageHeader'
export default {
  name: 'WasteTypeDetail',
  data: function () {
    return {
      objRecycler: { notify: false, menuTitle: 'Jenis Sampah - ' },
      setList: [],
      dialog: true,
      weightval: ''
    }
  },
  props: {
    dataWasteCategory: String
  },
  methods: {
    setWeight () {
      this.dialog = false
      this.$emit('setWeight', this.weightval)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../styles/basics/variables";
  @import "../styles/basics/layout";
  @import "../styles/basics/viewpage";
  @import "../styles/pages/wasteTypeDetail";
</style>
