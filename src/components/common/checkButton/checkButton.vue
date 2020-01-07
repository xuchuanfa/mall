<template>
  <div class="check-button flex flex-ac" :class="{check: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped="scoped">
  .check-button{
    border-radius: 50%;
    border: 2px solid #DFDFDF;
  }
  .check{
    background-color: rgb(255, 129, 152);
    border-color: rgb(255, 129, 152);
  }
</style>
