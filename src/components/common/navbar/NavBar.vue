<template>
  <div class="nav-bar flex">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center flex-1">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
</script>

<style>
  .nav-bar{
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
  }
  .center{
  }
  .left,.right{
    width: 16%;
  }
</style>
