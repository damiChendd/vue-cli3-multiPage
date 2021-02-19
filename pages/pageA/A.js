import Vue from 'vue'
import A from './A.vue'

// new Vue({
//     render: h => h(A)
// }).$mount('#appA')

Vue.config.productionTip = false

new Vue({
  render: h => h(A)
}).$mount('#appA')
