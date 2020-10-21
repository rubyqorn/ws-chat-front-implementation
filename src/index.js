// Custom CSS
require('../css/main.css')
require('../css/chat-container.css')
require('../css/greeting-page.css')

// Font awesome icons
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import Vue from 'vue'
import App from './App.vue'
import {Api} from './api.js'
import {FakeApi} from './fake-api.js'
import {store} from './vuex.js'
import {router} from './routes.js'
import Vuelidate from 'vuelidate';

window.Vue = Vue;
Vue.use(Vuelidate);

let app = new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
})

