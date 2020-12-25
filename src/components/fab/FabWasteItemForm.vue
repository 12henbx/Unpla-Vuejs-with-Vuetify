<template>
  <ul class="ul-fab">
    <li class="li-fab">
      <div class="row fab">
        <div>
          <span class="text-category">Plastik</span>
          <br>
          <span class="text-weight-date">5Kg, Senin 28 Agt 2020</span>
        </div>
        <div class="div-grow-header"></div>
        <div class="div-cont-button">
          <button class="btn-cont">Lanjut</button>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'FabWasteItemForm'
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
    border-radius: 10px;
    border: #000000 2px solid;
    box-shadow: 0 6px 10px 0 #666;
    transition: all 0.1s ease-in-out;
    font-size: 12px;
    color: #000;
    padding-left: 10px;
    position: relative;
    display: inline-flex;
    width: 404px;
    height: 52px;
    text-align: left;
    align-items: center;
  }

  .text-category{
    font-weight: bold;
  }

  .text-weight-date{
    font-weight: normal;
  }

  .div-grow-header{
    display: flex;
    flex-grow: 1;
  }

  .div-cont-button{
    display: flex;
    align-items: center;
    margin-right: 20px;
  }

  .btn-cont{
    font-size: 14px;
    font-weight: bold;
  }
</style>
