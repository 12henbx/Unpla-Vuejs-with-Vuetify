<template>
  <ul class="ul-fab">
    <li class="li-fab">
      <div class="fab"> + JUAL </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'FloatingActionButton'
}
</script>

<style lang="scss" scoped>
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
    //width: 150px;
    //height: 70px;
    background-color: white;
    border-radius: 40%;
    border: #2D8CFA 8px solid;
    box-shadow: 0 6px 10px 0 #666;
    transition: all 0.1s ease-in-out;
    //
    font-size: 18px;
    //margin-left: auto;
    //margin-right: auto;
    //text-align: center;
    //line-height: 70px;
    //
    //position: fixed;
    //bottom: 50px;
    padding-top: 5px;
    padding-bottom: auto;
    position: relative;
    display: inline-block;
    width: 104px;
    height: 48px;
  }

</style>
