import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Lazyload, Swipe, SwipeItem, Toast, Icon, Popup, Button } from 'vant';
import store from './store'

import FastClick from 'fastclick'

import toast2 from 'components/common/toast'

Vue.use(toast2);
Vue.use(Lazyload);
Vue.use(Toast);
Vue.use(Icon);
Vue.use(Popup);
Vue.use(Button );
Vue.use(Swipe).use(SwipeItem);

//解决移动端300ms延迟
FastClick.attach(document.body)

//事件总线
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
