<template>
  <v-dialog v-model="dialog" scrollable persistent max-width="300px">
    <v-card>
      <v-card-title>Select Country</v-card-title>
      <v-divider></v-divider>
      <v-card-text style="height: 300px;">
        <v-radio-group v-model="dialog" column>
          <v-radio label="Bahamas, The" value="bahamas"></v-radio>
          <v-radio label="Bahrain" value="bahrain"></v-radio>
        </v-radio-group>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'SelectWasteCategory',
  data: function () {
    return {
      dialog: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
