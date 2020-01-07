import {ADD_COUNTER, ADD_TO_CART} from './mutation-types.js'
export default {
    addCart({commit, state}, payload){
			return new Promise((resolve, reject) => {
				//查找之前数组中是否有该商品
				let oldProduct = state.cartList.find(item => item.iid === payload.iid)
				
				//2.判断oldProduct
				if(oldProduct){ //数量 + 1
				  commit(ADD_COUNTER, oldProduct)
					resolve('当前商品数量+1')
				}else{		//添加新的商品
				  payload.count = 1;
				  commit(ADD_TO_CART, payload)
					resolve('添加了新的商品')
				}
			})
    }
  }
