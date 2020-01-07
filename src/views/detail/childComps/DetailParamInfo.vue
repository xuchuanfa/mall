<template>
  <div class="detail-param bg-fff">
     <ul class="param-table flex">
       <li class="param-table-item flex-1" v-for="(itemtext, index) in paramInfo.sizes"
       :key="index" v-if="index < 6" :class="{pickColor: index !== 0}">
       	<span v-for="(item, index) in itemtext" :class="{customColor: index === 0}" :key="index">{{item}}</span>
       </li>
     </ul>
     <ul class="param-info">
     	<li class="param-info-item flex" v-for="(item, index) in paramInfo.infos">
        <span style="width: 78px;">{{item.key}}</span>
        <span class="flex-1" style="overflow: hidden;">{{item.value}}</span>
      </li>
     </ul>
     <div v-if="paramInfo.image">
       <img :src="paramInfo.image" alt="" style="width: 100%;">
     </div>
  </div>
</template>

<script>
  export default {
    props: {
      paramInfo: {
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped="scoped">
  .detail-param{
    margin-top: 20px;
    padding: 0 15px;
    font-size: 14px;
  }
  .size-table{
    width: 100%;
  }
  .param-table-item{
    text-align: left;
    color: #727272;
  }
  .param-table-item span{
    display: block;
    height: 40px;
    line-height: 40px;
    border-bottom: 0.5px solid #f4f4f4;
  }
  .pickColor{
    color: #eb4868;
  }
  .customColor{
    color: #727272;
  }
  .param-info-item{
    text-align: left;
    color: #727272;
    border-bottom: 0.5px solid #f4f4f4;
  }
  .param-info-item span{
    display: block;
    height: 40px;
    line-height: 40px;
  }
  .param-info-item span:last-child{
    color: #eb4868;
  }
</style>
