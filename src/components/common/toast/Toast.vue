<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message = '', duration = 1600){
        this.isShow = true;
        this.message = message;

        setTimeout(() => {
          this.isShow = false;
          this.message = '';
        }, duration)
      }
    }
  }
</script>

<style scoped="scoped">
  .toast{
    color: #fff;
    padding: 8px 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 999;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .7);
  }
</style>
