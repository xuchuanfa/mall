<template>
  <nav-bar class="bg-fff">
    <div slot="left" class="back flex flex-center" @click="backClick">
      <van-icon name="arrow-left" size="28"/>
    </div>
    <div slot="center" class="detail-item flex">
      <div v-for="(item, index) in titles" class="detail-item-title"
       :class="{active: currentIndex === index}" @click="itemClick(index)">
        {{item}}
      </div>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    components: {
      NavBar
    },
    data(){
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index){
        this.currentIndex = index;
        this.$emit('titleClick', index)
      },
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped="scoped">
  .detail-item-title{
    flex: 1;
    font-size: 14px;
  }
  .active{
    color: var(--color-high-text);
  }
  .back{
    height: 100%;
  }
</style>
