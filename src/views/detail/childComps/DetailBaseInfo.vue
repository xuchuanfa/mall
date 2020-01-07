<template>
  <div v-if="goods" class="detail-base bg-fff">
    <div class="detail-info">
      <div class="price-content flex">
        <div class="price-now flex">
          <span class="price-now-unit">￥</span>
          <span class="price-now-price">{{goods.realPrice}}</span>
        </div>
        <div class="price-old flex">
          <span class="price-old-price" style="opacity: 0.7;" v-if="goods.oldPrice">{{goods.oldPrice}}</span>
          <div class="price-old-tags" v-if="goods.discount">
           {{goods.discount}}
          </div>
        </div>
      </div>
      <p class="detail-title">
        {{goods.title}}
      </p>
      <div class="detail-list flex flex-between">
        <div class="flex-1" v-if="goods.columns">{{goods.columns[0]}}</div>
        <div class="flex-1" style="text-align: right;" v-if="goods.sendAddress">{{goods.sendAddress}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped="scoped">
  .price-content{
    padding-top: 10px;
  }
  .detail-info{
    padding: 0 16px;
  }
  .price-now{
    color: #333;
    font-size: 36px;
    align-items: flex-start;
  }
  .price-old{
    flex-flow: column nowrap;
    margin-left: 5px;
  }
  .price-old-price{
    display: block;
    font-size: 12px;
    text-decoration: line-through;
    color: #999;
    line-height: 24px;
  }
  .price-old-tags{
    background-color: rgb(255, 232, 238);
    color: rgb(255, 34, 85);
    font-size: 12px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    padding: 0 4px;
  }
  .detail-title{
    padding-top: 9px;
    font-size: 15px;
    line-height: 20px;
  }
  .price-now-unit{
    font-size: 12px;
    line-height: 25px;
    display: inline-block;
  }
  .detail-list{
    line-height: 34px;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
    font-size: 12px;
    color: #999999;
  }
</style>
