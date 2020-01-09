<template>
  <div class="cate-data">
    <div class="item" v-for="(item, index) in subcategories.list" :key="index">
      <a :href="item.link">
        <img class="item-img" :src="item.image" @load="imageLoad" alt="">
        <div class="item-text">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      subcategories: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      imageLoad(){
        this.$emit('imageLoad')
      }
    }
  }
</script>

<style scoped="scoped">
  .cate-data{
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;
  }
  .cate-data .item{
    width: 33.333%;
    text-align: center;
    overflow: hidden;
    font-size: 12px;
    padding: 8px 0;
  }
  .item .item-img{
    width: 75%;
  }
  .item .item-text{
    line-height: 20px;
  }
</style>
