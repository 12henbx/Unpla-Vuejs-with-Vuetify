<template>
  <div class="container-page">
    <v-card>
      <v-toolbar flat class="primary toolbar-section">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="#fff"></v-app-bar-nav-icon>
        <v-toolbar-title>Your Dashboard</v-toolbar-title>
        <v-spacer></v-spacer>
        <template v-slot:extension>
          <v-tabs background-color="transparent" v-model="tab" centered grow dark>
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab href="#usertab" class="color-tab">
              Profile Pribadi
            </v-tab>
            <v-tab href="#recyclertab" class="color-tab">
              Profile Usaha
            </v-tab>
            <v-tabs-items :value="tab">
              <v-tab-item value="usertab">
                <v-card flat>
                  <v-card-text>
                    <UserProfile v-bind:dataUser="objUser"></UserProfile>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item value="recyclertab">
                <v-card flat>
                  <v-card-text>
                    <RecyclerProfile v-bind:dataRecycler="objRecycler"></RecyclerProfile>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
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
import RecyclerProfile from '../components/tab/RecyclerProfile'
import UserProfile from '../components/tab/UserProfile'
export default {
  name: 'Profile',
  components: {
    RecyclerProfile,
    UserProfile
  },
  computed: {
    tab: {
      set (tab) {
        this.$router.replace({ query: { ...this.$route.query, tab } })
      },
      get () {
        return this.$route.query.tab
      }
    }
  },
  data: () => ({
    drawer: false,
    group: null,
    items: ['Profile Pribadi', 'Profile Usaha'],
    text: 'HaloHaloHaloHaloHaloHaloHaloHalo',
    objUser: { fullName: 'Test Name' },
    objRecycler: { name: 'CV Abadi' }
  }),

  watch: {
    group () {
      this.drawer = false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../styles/basics/variables";
  @import "../styles/basics/layout";
  @import "../styles/basics/viewpage";
  @import "../styles/pages/profile";
</style>
