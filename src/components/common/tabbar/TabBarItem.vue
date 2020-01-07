<template>
  <div class="tab-bar-item" @click="itmeClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
       <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
       <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data(){
      return {

      }
    },
    computed: {
      isActive(){
        return this.$route.path === this.path
      },
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itmeClick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped="scoped">
  .tab-bar-item{
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
  }
  .isActive{
    color: red;
  }
</style>
