<template>
  <van-swipe :autoplay="4000" indicator-color="#ff5777" class="detail-swiper">
    <van-swipe-item v-for="item in topImages" :key="item">
      <img :src="item" alt="" @load="imageLoad" style="width: 100%;height: 100%;">
    </van-swipe-item>
  </van-swipe>
</template>

<script>

  export default {
    props: {
      topImages: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        flag: false
      }
    },
    methods: {
      imageLoad(){
        if(!this.flag){
           this.$emit('imageLoad');
           this.flag = true
        }
      }
    }
  }
</script>

<style scoped="scoped">
  .detail-swiper{
    height: 400px;
    overflow: hidden;
  }
</style>
