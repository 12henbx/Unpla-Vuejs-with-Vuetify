<template>
  <div class="place-content">
    <div class="box-border-outside">
      <div class="wrapper-bos-profile">
        <div class="div-image-wrapper">
          <v-img lazy-src="https://picsum.photos/id/11/100/60" src="https://picsum.photos/510/300?random"
                 aspect-ratio="1"
                 class="img-photo"></v-img>
        </div>
        <h2 class="sub-title">{{ dataUser.fullName }}</h2>
        <span class="icon-text-point">
          <v-icon color="yellow">mdi-alpha-u-circle-outline</v-icon>
          <a class="text-point">{{ dataUser.point }}1000 Unpla coin</a>
        </span>
      </div>
    </div>
    <h2 class="sub-title">Aktivitas Terakhir</h2>
    <div class="div-last-activity">
      <div class="each-card-activity">
        <div v-for="item in objUserWasteItem" :key="item.id" class="div-each-card">
          <LastActivityList v-bind:dataInDataActList="item"></LastActivityList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LastActivityList from '../list/LastActivityList'
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'UserProfile',
  components: { LastActivityList },
  props: {
    dataUser: Object
  },
  computed: {
    ...mapGetters({ userId: 'StateUserId' })
  },
  async beforeMount () {
    try {
      const resWI = await axios.get('/api/waste-item/all/' + this.userId, {
        params: {
          page: 1,
          size: 10
        }
      })
      console.log(JSON.stringify(resWI.data))
      this.objUserWasteItem = resWI.data.data.listWasteItem
      console.log(this.objUserWasteItem)
      // console.log(resWI)
    } catch (err) {
      console.log(err)
    }
  },
  data: function () {
    return {
      objUserWasteItem: []
    }
  }
}
</script>

<style lang="scss" scoped>
  .place-content{
    display: flex;
    flex-direction: column;
    width: inherit;
  }

  .box-border-outside{
    display: flex;
    justify-content: center;
    width: auto;
    height: 200px;
    border: #666666 2px solid;
    border-radius: 8px;
  }

  .wrapper-bos-profile{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
  }

  .div-image-wrapper{
    width: 100px;
    height: 100px;
  }

  .img-photo{
    border-radius: 50%;
  }

  .sub-title{
    margin-top: 20px;
  }

  .icon-text-point{
    display: flex;
    margin-top: 5px;
    align-items: center;
  }

  .text-point{
    font-size: 16px;
    font-weight: normal;
    font-family: "Roboto", sans-serif;
    color: #000;
  }

  .div-last-activity{
    display: flex;
    justify-content: center;
  }

  .each-card-activity{
    width: 100%;
  }
</style>
