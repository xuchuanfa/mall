<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item, index) in cartList"
       :product="item" :key="index" />
    </scroll>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import Scroll from 'components/common/scroll/Scroll'

  import CartListItem from './CartListItem'

  export default {
    name: 'CartList',
    computed: {
      ...mapGetters(['cartList'])
    },
    activated(){
      this.$refs.scroll.refresh()
    },
    components: {
      Scroll,
      CartListItem
    }
  }
</script>

<style scoped="scoped">
  .cart-list{
    height: calc(100% - 44px - 46px);
  }
  .content{
    height: 100%;
    overflow: hidden;
  }
</style>
