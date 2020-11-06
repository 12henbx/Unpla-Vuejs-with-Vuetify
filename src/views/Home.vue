<template>
  <div class="container-page">
    <v-toolbar extended extension-height="60px">
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
        <div class="div-field-search">
          <v-text-field
            label="Solo"
            placeholder="Placeholder"
            solo
          ></v-text-field>
        </div>
      </template>
    </v-toolbar>
    <div>
      <div>
        <h3>Daftar Sampah Saya</h3>
        <UserWasteList></UserWasteList>
      </div>
    </div>
    <div>
      <div>
        <h3>Kategori Hasil Daur</h3>
        <div class="row-menu">
          <div class="box-menu-button">
            <div class="wrapper-menu">
                <div class="button-menu">
                  <v-icon large>mdi-domain</v-icon>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div>
        <h3>Daftar Usaha</h3>
        <RecyclerList></RecyclerList>
      </div>
    </div>
    <FloatingActionButton></FloatingActionButton>
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
import RecyclerList from '../components/RecyclerList'
import UserWasteList from '../components/UserWasteList'
import FloatingActionButton from '../components/FloatingActionButton'

export default {
  name: 'Home',
  components: { FloatingActionButton, RecyclerList, UserWasteList }
}
</script>
