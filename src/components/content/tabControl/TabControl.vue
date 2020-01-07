<template>
  <div class="tab-control flex">
    <div v-for="(item, index) in titles" class="tab-control-item flex-1" :class="{active: currentIndex === index}"
    @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      titles: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index){
        this.currentIndex = index;
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped="scoped">
  .tab-control{
    height: 40px;
    line-height: 40px;
    background-color: #FFFFFF;
  }
  .tab-control-item{
    text-align: center;
    font-size: 15px;
  }
  .tab-control-item span{
    padding: 5px;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 2px solid var(--color-tint);
  }
</style>
