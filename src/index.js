// Custom CSS
require('../css/main.css')
require('../css/chat-container.css')
// Font awesome icons
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'

window.Vue = Vue;

let app = new Vue({
    el: '#app',
    render: h => h(App)
})

