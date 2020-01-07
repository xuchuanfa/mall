<template>
  <div class="goods-item" @click="itemClick">
    <img @load="imageLoad" v-lazy="showImage" :key="showImage" alt=""  style="width: 100%;">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <div class="goods-info-down">
        <span class="price">¥{{goodsItem.price}}</span>
        <van-icon name="star-o" size="14px"/>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      goodsItem: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    computed: {
      showImage(){
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods: {
      //监听图片加载事件
      imageLoad(){
        //事件总线
        this.$bus.$emit('itemImageLoad')
      },
      itemClick(){
        this.$router.push('/detail/' + this.goodsItem.iid)
      }
    }
  }
</script>

<style>
  .goods-item{
    width: 49%;
  }
  .goods-item img{
    border-radius: 5px;
  }
  .goods-info p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .goods-info-down{
    text-align: center;
    padding: 2px 0 4px;
  }
 .goods-info .price{
    color: var(--color-high-text);
    margin-right: 12px;
  }
 .goods-info .collect{
   font-size: 14px;
 }
</style>
