import {ADD_COUNTER, ADD_TO_CART} from './mutation-types.js'

export default {
    //mutations唯一的目的就是修改state中的状态
    //mutations中的每一个方法尽可能的事件比较单一一点
    [ADD_COUNTER](state, payload){
      payload.count++
    },
    [ADD_TO_CART](state, payload){
      payload.checked = false;
      state.cartList.push(payload)
    }
  }
