<template>
  <van-swipe :autoplay="3000" indicator-color="#fff">
    <van-swipe-item v-for="item in banners" :key="item.link">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" @load="imageLoad" :key="item.image" style="width: 100%;">
      </a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
   export default {
     props: {
       banners: {
         type: Array,
         default() {
           return []
         }
       }
     },
     data(){
       return {
         isLoad: false
       }
     },
     methods: {
       imageLoad(){
         if(!this.isLoad){
            this.$emit('swiperImageLoad')
            this.isLoad = true
         }
       }
     }
   }
</script>

<style>

</style>
