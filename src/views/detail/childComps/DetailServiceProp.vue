<template>
  <van-popup v-model="isShow" position="bottom" closeable :style="{height: 'auto'}">
    <div class="service-alert">
      <div class="service-alert-title">服务说明</div>
      <ul class="service-alert-list">
      	<li class="service-list-item" v-for="item in services">
          <div class="text-title">{{item.name}}</div>
          <p class="text-content">物流签收后7天内买家可无理由退货，需满足退货条件</p>
        </li>
      </ul>
    </div>
  </van-popup>
</template>

<script>
  export default {
    data(){
      return {
        isShow: false
      }
    },
    props: {
      services: {
        type: Array,
        default(){
          return []
        }
      }
    },
    methods: {
      changeShow(){
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style scoped="scoped">
  .service-alert{
    padding: 30px 15px 15px;
    box-sizing: border-box;
  }
  .service-alert-title{
    color: #999999;
    text-align: center;
    padding: 10px 0;
  }
  .service-list-item{
    border-bottom: 0.5px solid #dfdfdf;
    padding: 10px 16px 10px 0;
  }
  .service-list-item:last-child{
    border-bottom:none;
  }
  .text-title{
    color: #333333;
    font-size: 14px;
  }
  .text-content{
    color: #999999;
    font-size: 12px;
    line-height: 25px;
  }
</style>
