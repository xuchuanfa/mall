<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>

    <!-- 商品列表 -->
    <cart-list/>

    <!-- 底部汇总 -->
    <cart-bottom-nav/>
  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'

  import CartList from './childComps/CartList'
  import CartBottomNav from './childComps/CartBottomNav'

  import { mapGetters } from 'vuex'

  export default {
    name: 'shopcart',
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
</style>
