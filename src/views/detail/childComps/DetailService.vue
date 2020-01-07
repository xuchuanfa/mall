<template>
  <div>
    <div class="service bg-fff flex" @click="alertClick">
      <div class="service-item" v-for="(item, index) in services" v-if="index < 3" :key='index'>
        <van-icon name="passed" size="15" color="#ff5777"/>
        <span class="item-name">{{item.name}}</span>
      </div>
      <van-icon name="arrow" color="#666"/>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      services: {
        type: Array,
        default(){
          return []
        }
      }
    },
    methods: {
      alertClick(){
        this.$emit('serviceClick')
      }
    }
  }
</script>

<style scoped="scoped">
  .service{
    margin: 10px 0;
    padding: 0 16px;
    height: 38px;
    align-items: center;
  }
  .service-item{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .item-name{
    font-size: 12px;
    color: #666666;
    margin-left: 2px;
  }
</style>
