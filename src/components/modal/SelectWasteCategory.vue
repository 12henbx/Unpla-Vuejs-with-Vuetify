<template>
  <v-dialog v-model="dialog" scrollable persistent max-width="300px">
    <v-card>
      <v-card-title>Pilih Pendaur</v-card-title>
      <v-divider></v-divider>
      <v-card-text style="height: 300px;">
        <v-radio-group v-model="selectSubWaste" column>
          <v-radio v-for="select in objQuery"
                   :key="select"
                   :label="select"
                   :value="select"></v-radio>
        </v-radio-group>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
<!--        <v-btn color="blue darken-1" text @click="dialog = false">-->
<!--          Close-->
<!--        </v-btn>-->
        <v-btn color="blue darken-1" text @click="toRecycledList">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import router from '../../router'

export default {
  name: 'SelectWasteCategory',
  data: function () {
    return {
      dialog: true,
      selectSubWaste: '',
      objQuery: this.$route.query.subWaste
    }
  },
  props: ['mainWaste', 'plusImage'],
  mounted () {
    console.log(this.$route.params.mainWaste + ' propssss')
  },
  methods: {
    toRecycledList () {
      this.dialog = false
      router.push({ name: 'RecyclerListToSellWaste', params: { mainWaste: this.selectSubWaste, plusImage: this.$route.params.plusImage } })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
