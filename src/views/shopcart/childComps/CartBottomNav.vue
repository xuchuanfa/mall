<template>
  <div class="bottom-nav van-hairline--top flex flex-ac">
    <div class="left flex">
      <check-button :isChecked="isSelectAll" @click.native="checkClick" />
      <div class="all">全选</div>
    </div>
    <div class="right flex flex-1 flex-ac">
      <div class="total">合计: <span class="money">{{'￥' + cartTotalMoney}}</span></div>
      <div class="settle" @click="settle">结算</div>
    </div>
  </div>
</template>

<script>
 import checkButton from 'components/common/checkButton/checkButton'

 import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['cartTotalMoney', 'cartList']),
      isSelectAll(){
        if(this.cartList.length === 0) return false
        return !this.cartList.find(item => !item.checked)
      }
    },
    methods: {
      checkClick(){
        if(this.isSelectAll){ //全部选中
          this.cartList.forEach(item => item.checked = false)
        }else{
          this.cartList.forEach(item => item.checked = true)
        }
        // this.cartList.forEach(item => item.checked = !this.isSelectAll)
      },
      settle(){
        if(!this.isSelectAll) {
          this.$toast2.show('请先勾选商品')
          return
        }
      }
    },
    components: {
      checkButton
    }
  }
</script>

<style scoped="scoped">
  .bottom-nav{
    background-color: #FFFFFF;
    padding: 0 12px;
    height: 46px;
    width: 100%;
    box-sizing: border-box;
  }
  .left{
    height: 20px;
    width: 20%;
  }
  .right{
    flex-direction: row;
    justify-content: flex-end;
  }
  .all{
    color: #7d7e80;
    margin-left: 8px;
  }
  .total{
    color: #323233;
    line-height: 46px;
  }
  .total .money{
    color: #ee0a24;
  }
  .settle{
    width: 100px;
    height: 40px;
    display: inline-block;
    text-align: center;
    line-height: 40px;
    border-radius: 20px;
    background-color: #ee0a24;
    color: #FFFFFF;
    margin-left: 8px;
  }
</style>
