<template>
  <div class="recommend flex">
    <div v-for="item in recommends" class="recommend-item flex-1">
      <a :href="item.link">
        <div class="img"><img :src="item.image" :alt="item.title" style="width: 100%;"></div>
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      recommends: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
  .recommend{
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    box-sizing: border-box;
    border-bottom: 10px solid #f6f6f6;
  }
  .recommend-item .img{
    width: 88%;
    margin: 0 auto 10px;
  }
</style>
