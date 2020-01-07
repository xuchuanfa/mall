<template>
  <div class="bottom-nav van-hairline--top">
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" :info="cartInfo"  @click="$router.replace('/shopcart')" />
      <van-goods-action-icon icon="shop-o" text="店铺" info="" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addToCart" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex'
  import {
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton
  } from 'vant';

  export default {
    methods: {
      addToCart(){
        this.$emit('addToCart')
      }
    },
    computed: {
      ...mapGetters({
        cartInfo: 'cartInfoLen'
      })
    },
    components: {
      [GoodsAction.name]: GoodsAction,
      [GoodsActionIcon.name]: GoodsActionIcon,
      [GoodsActionButton.name]: GoodsActionButton,
    }
  }
</script>

<style scoped="scoped">
  .bottom-nav{
    height: 49px;
    position: relative;
    z-index: 999;
    /* background: #FFFFFF; */
  }
</style>
