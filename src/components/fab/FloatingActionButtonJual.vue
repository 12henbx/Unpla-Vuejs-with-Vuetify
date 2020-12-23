<template>
  <ul class="ul-fab">
    <li class="li-fab">
      <a @click="openCamera()" class="fab"> + JUAL </a>
    </li>
  </ul>
</template>

<script>
import router from '../../router'

export default {
  name: 'FloatingActionButtonJual',
  props: {

  },
  methods: {
    openCamera () {
      router.push({ path: '/sell-item/camera' })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/basics/variables";
  .ul-fab{
    margin: 0;
    padding: 0;
    list-style: none;
    z-index: 8;
    text-align: center;
    position: fixed;
    bottom: 24px;
    left: 0;
    width: 100%;
    display: block;
    transition-property: bottom;
    transition-duration: .5s;
    transition-timing-function: cubic-bezier(0,1,.5,1);
  }

  .li-fab{
    list-style: none;
    text-align: center;
  }

  .fab{
    background-color: white;
    border-radius: 110px;
    border: $fab-border-color 7px solid;
    box-shadow: 0 6px 10px 0 #666;
    transition: all 0.1s ease-in-out;
    font-size: 17px;
    font-weight: bold;
    color: #000;
    padding-top: 5px;
    padding-bottom: auto;
    position: relative;
    display: inline-block;
    width: 104px;
    height: 48px;
  }

</style>
