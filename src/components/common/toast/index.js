import Toast from './Toast'

const obj = {}

obj.install = function(Vue){
  
  //1,创建组件构造器
  const toastContrustor = Vue.extend(Toast)
  
  //2.new的方式，根据组件构造器，可以创建出来一个组件对象
  const toast2 = new toastContrustor()
  
  //3.将组件对象，手动挂载到某一个元素上
  toast2.$mount(document.createElement('div'))
  
  //4.toast.$el对应的就是div
  document.body.appendChild(toast2.$el)
  
  Vue.prototype.$toast2 = toast2;
}

export default obj