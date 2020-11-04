<template>
  <div class="container-page">
    <v-toolbar extended>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title class="font-weight-bold"> UNPLA</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <template v-slot:extension>
        <v-text-field
          label="Solo"
          placeholder="Placeholder"
          solo
        ></v-text-field>
      </template>
    </v-toolbar>
    <div>
      <div>
        <h3>Daftar Sampah Saya</h3>
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
      </div>
    </div>
    <div>
      <div>
        <h3>Kategori Hasil Daur</h3>
        <v-btn class="ma-2" outlined color="indigo">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </div>
    </div>
    <div>
      <div>
        <h3>Daftar Usaha</h3>
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
      </div>
    </div>
    <div>
        <div class="cont-barang-pilihan">
          <div>
            <h3>Barang Pilihan Untukmmu</h3>
          </div>
          <div class="div-lihat-semua">
            <a class="a-lihat-semua">Lihat Semua</a>
          </div>
        </div>
      <div class="cont-list-itembp">
        <div class="wrapper-list-itembp">
          <div class="col-item-left">
            <v-card
              :loading="loading"
              class="mx-auto card-product-item"
              max-width="374"
            >
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>

              <v-card-title>Cafe Badilico</v-card-title>

              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ml-4">
                    4.5 (413)
                  </div>
                </v-row>

                <div class="my-4 subtitle-1">
                  $ • Italian, Cafe
                </div>

            <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>
            </v-card>
          </div>
          <div class="col-item-right">
            <v-card
              :loading="loading"
              class="mx-auto card-product-item"
              max-width="374"
            >
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>

              <v-card-title>Cafe Badilico</v-card-title>

              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ml-4">
                    4.5 (413)
                  </div>
                </v-row>

                <div class="my-4 subtitle-1">
                  $ • Italian, Cafe
                </div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>
            </v-card>
            <v-card
              :loading="loading"
              class="mx-auto card-product-item"
              max-width="374"
            >
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>

              <v-card-title>Cafe Badilico</v-card-title>

              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ml-4">
                    4.5 (413)
                  </div>
                </v-row>

                <div class="my-4 subtitle-1">
                  $ • Italian, Cafe
                </div>

                <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>
            </v-card>
          </div>
        </div>
      </div>
      </div>
    </div>
</template>

<style scoped lang="scss">
  @import "../styles/basics/variables";
  @import "../styles/basics/layout";
  @import "../styles/basics/viewpage";
  @import "../styles/pages/home";
</style>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {}
}
</script>
