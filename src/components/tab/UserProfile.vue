<template>
  <div class="place-content">
    <div class="box-border-outside">
      <div class="wrapper-bos-profile">
        <img src="">
        <a>{{ dataUser.fullName }}</a>
        <span>
          <v-icon>mdi-alpha-u-circle-outline</v-icon>
          <a>{{ dataUser.point }} Unpla coin</a>
        </span>
      </div>
    </div>
    <h2>Ativitasi Terakhir</h2>
    <div class="div-last-activity" v-if="dataUser.productTransaction">
      <div class="each-card-activity">
        <div v-for="item in dataUserproductTransaction" :key="item.id" class="div-each-card">
          <LastActivityList v-bind:dataInDataActList="item"></LastActivityList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LastActivityList from '../list/LastActivityList'

export default {
  name: 'UserProfile',
  components: { LastActivityList },
  props: {
    dataUser: Object
  },
  data: function () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .place-content{
    display: flex;
    width: inherit;
  }
</style>
