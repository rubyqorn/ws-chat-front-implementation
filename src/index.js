import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'

window.Vue = Vue;

let app = new Vue({
    el: '#app',
    render: h => h(App)
})

