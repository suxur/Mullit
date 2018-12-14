import Vue from 'nativescript-vue'
import RadListView from 'nativescript-ui-listview/vue'
import RadGauge from 'nativescript-ui-gauge/vue'
import RadSideDrawer from 'nativescript-ui-sidedrawer/vue'

import Home from './components/Home'
import Login from './components/Login'

Vue.use(RadListView)
Vue.use(RadSideDrawer)
Vue.config.silent = false

new Vue({
    render: h => h('frame', [h(Home)])
}).$start()
