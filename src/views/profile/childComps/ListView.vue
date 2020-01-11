<template>
  <div class="list bg-fff">
    <div class="list-item" v-for="(item, index) in listData">
      <div class="icon flex-ac"><van-icon :name="item.icon" size="24" color="#FF8198" /></div>
      <div class="info flex-1" :class="{'van-hairline--bottom': index !=listData.length -1 }">{{item.info}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      listData: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped="scoped">
  .list-item{
    display: flex;
    padding-left: 15px;
    line-height: 45px;
  }
  .list-item .info{
    margin-left: 6px;
  }
  .icon{
    display: flex;
  }
</style>
