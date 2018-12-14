import Vue from 'nativescript-vue'
import RadListView from 'nativescript-ui-listview/vue'
import RadGauge from 'nativescript-ui-gauge/vue'

import Home from './components/Home'
import Login from './components/Login'

Vue.use(RadListView)
Vue.config.silent = false

new Vue({
    render: h => h('frame', [h(Home)])
}).$start()
