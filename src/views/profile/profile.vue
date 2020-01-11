<template>
  <div class="profile">
    <nav-bar class="profile-bar">
      <div slot="center">我的</div>
    </nav-bar>

    <user-info />

    <div class="account flex bg-fff">
      <div class="acc-item flex-1 van-hairline--right">
        <div><span class="num">0.00</span>元</div>
        <div class="text">我的余额</div>
      </div>
      <div class="acc-item flex-1 van-hairline--right">
        <div><span class="num">0</span>个</div>
        <div class="text">我的优惠</div>
      </div>
      <div class="acc-item flex-1">
        <div><span class="num">0</span>分</div>
        <div class="text">我的积分</div>
      </div>
    </div>
    <list-view :list-data="orderList" class="orderlist" />
    <list-view :list-data="serviceList" class="serviceList" />
  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'

  import UserInfo from './childComps/UserInfo'
  import ListView from './childComps/ListView'

  export default {
    name: 'profile',
    data(){
      return {
        orderList: [
          {icon: 'chat-o', info: '我的消息'},
          {icon: 'points', info: '积分商城'},
          {icon: 'vip-card-o', info: '会员卡'},
        ],
        serviceList: [
          {icon: 'shopping-cart-o', info: '我的购物车'},
          {icon: 'shop-collect-o', info: '下载购物APP'},
        ],
      }
    },
    components: {
      NavBar,
      UserInfo,
      ListView
    }
  }
</script>

<style scoped="scoped">
  .profile{
    background-color: #f6f6f6;
    height: 100vh;
  }
  .profile-bar{
    background-color: var(--color-tint);
    color: #FFFFFF;
  }
  .account{
    margin-bottom: 20px;
  }
  .acc-item{
    text-align: center;
    padding: 15px 0;
  }
  .acc-item .num{
    color: var(--color-tint);
    font-size: 24px;
    font-weight: 600;
  }
  .acc-item .text{
    line-height: 24px;
  }
  .orderlist{
    margin-bottom: 20px;
  }
</style>
