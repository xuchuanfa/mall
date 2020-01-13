<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>

    <!-- 商品列表 -->
    <cart-list/>

    <!-- 底部汇总 -->
    <cart-bottom-nav @wxPay="isShow = true"/>
    <van-popup v-model="isShow">
      <div class="wx-img">
        <img src="~assets/img/wx/wx-pay.png" alt="" style="width: 100%;">
      </div>
    </van-popup>
  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'

  import CartList from './childComps/CartList'
  import CartBottomNav from './childComps/CartBottomNav'

  import { mapGetters } from 'vuex'

  export default {
    name: 'shopcart',
    data(){
      return {
        isShow: false
      }
    },
    computed: {
      // 使用对象展开运算符将 getter 混入 computed 对象中
      ...mapGetters(['cartLength'])
    },
    components: {
      NavBar,
      CartList,
      CartBottomNav
    }
  }
</script>

<style scoped="scoped">
  .cart{
    height: calc(100vh - 49px);
  }
  .cart-nav{
    background-color: var(--color-tint);
    color: #FFFFFF;
  }
  .wx-img{
    width: 280px;
  }
</style>
