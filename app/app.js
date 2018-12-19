import Vue from 'nativescript-vue'
import RadListView from 'nativescript-ui-listview/vue'
import orientation from 'nativescript-orientation'

require('nativescript-ui-gauge/vue')

import Home from './components/Home'
import Login from './components/Login'

Vue.registerElement('PreviousNextView', () => require('nativescript-iqkeyboardmanager').PreviousNextView)

Vue.use(RadListView)
Vue.config.silent = false

const keyboard = IQKeyboardManager.sharedManager()
keyboard.overrideKeyboardAppearance = true
keyboard.keyboardAppearance = UIKeyboardAppearance.Dark
keyboard.shouldResignOnTouchOutside = true

new Vue({
    render: h => h('frame', [h(Home)]),
    mounted() {
        setTimeout(() => {
            orientation.setOrientation('portrait')
            orientation.disableRotation()
        })
    }
}).$start()
