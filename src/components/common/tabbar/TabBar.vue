<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default{

  }
</script>

<style scoped="scoped">
  #tab-bar{
    display: flex;
    height: 49px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f6f6f6;
    box-shadow: 0px -1px 1px rgba(100,100,100, .1);
  }

</style>
