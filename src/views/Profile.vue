<template>
  <div class="container-page">
    <v-card>
      <v-toolbar dark flat class="toolbar-section">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Your Dashboard</v-toolbar-title>
        <v-spacer></v-spacer>
        <template v-slot:extension>
          <v-tabs v-model="tab" centered grow>
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab v-for="item in items" :key="item">
              {{ item }}
            </v-tab>
            <v-tab-item>
              <v-card flat>
                <v-card-text v-text="text">
                  <a>TEST</a>
                  <p>paragraph</p>
                  <!--              <div class="place-content">-->
                  <!--                <div class="border-user-detail">-->
                  <!--                  <div class="spanner-user-detail">-->
                  <!--                    <h3>Aktivitas Terakhir</h3>-->
                  <!--                    <div class="card-profile">-->

                  <!--                    </div>-->
                  <!--                  </div>-->
                  <!--                </div>-->
                  <!--              </div>-->
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <a>TEST</a>
                  <p>paragraph</p>
                  <!--              <div class="place-content">-->
                  <!--                <div class="border-user-detail">-->
                  <!--                  <div class="spanner-user-detail">-->
                  <!--                    <h3>Aktivitas Terakhir</h3>-->
                  <!--                    <div class="card-profile">-->

                  <!--                    </div>-->
                  <!--                  </div>-->
                  <!--                </div>-->
                  <!--              </div>-->
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </template>
      </v-toolbar>
    </v-card>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list rounded dense nav>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>Jual Sampah</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Riwayat Daur Ulang</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Statistik Usaha</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Keranjang Belanja</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data: () => ({
    drawer: false,
    group: null,
    items: ['Profile Pribadi', 'Profile Usaha'],
    text: 'HaloHaloHaloHaloHaloHaloHaloHalo'
  }),

  watch: {
    group () {
      this.drawer = false
    }
  }
}
</script>

<style lang="scss">
  @import "../styles/basics/variables";
  @import "../styles/basics/layout";
  @import "../styles/basics/viewpage";
  @import "../styles/pages/profile";
</style>
