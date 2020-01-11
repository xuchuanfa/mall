<template>
  <div class="user-info flex">
    <div class="user-avatar">
      <img src="~assets/img/profile/avatar.svg" alt="">
    </div>
    <div class="user flex-1 flex flex-column">
      <div class="title">登录/注册</div>
      <div class="phone flex flex-ac">
        <img src="~assets/img/profile/phone.svg" alt="">
        <div>暂无绑定手机号</div>
      </div>
    </div>
    <div class="user-icon flex flex-ac">
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserInfo'
  }
</script>

<style scoped="scoped">
  .user-info{
    background-color: var(--color-tint);
    color: #FFFFFF;
    padding: 10px 15px;
    box-sizing: border-box;
  }
  .user-avatar{
    width: 70px;
    height: 70px;
    overflow: hidden;
  }
  .user-avatar img{
    width: 100%;
  }
  .user{
    padding-left: 10px;
    padding-top: 6px;
  }
  .user .title{
    font-size: 18px;
    line-height: 28px;
    text-indent: 6px;
  }
  .phone{
    line-height: 28px;
  }
  .phone img{
    width: 22px;
    vertical-align: middle;
  }
  .user-icon{
    font-size: 18px;
  }
</style>
