import { createApp } from 'vue'
import App from './App.vue'

window.$ = window.jQuery = require('jquery')

import router from './router'
import store from './store/index'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
