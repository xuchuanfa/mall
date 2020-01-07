export default {
  cartLength(state){
    return state.cartList.length
  },
  cartList(state){
    return state.cartList
  },
  cartInfoLen(state, getters){
    let len = getters.cartLength
    return len > 0 ? len : ''
  },
  //对所选购物车进行价格汇总
  cartTotalMoney(state, getters){
   return getters.cartList.filter(n => n.checked).reduce((pre, item) => pre + (item.price * item.count), 0).toFixed(2)
  }
}
