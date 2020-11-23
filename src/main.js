import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/index.less'
import './permission'   // 路由拦截
import 'lib-flexible'

import Vant from 'vant';
import 'vant/lib/index.css';

// 引入百度地图插件
// import * as vueJsonp from 'vue-jsonp'
// import BaiduMap from 'vue-baidu-map'
// Vue.use(vueJsonp)
// Vue.use(BaiduMap, {
//   ak: 'CmGC3YLDdZFZKLVjEu9Z9pWRVsupZVME'
// })

// 引入公共方法
import Common from '@/utils/common'
Vue.prototype.com = new Common()
Vue.use(Vant);

Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
