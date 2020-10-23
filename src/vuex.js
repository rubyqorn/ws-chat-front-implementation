import $ from 'jquery';
import Vue from 'vue';
import Vuex from 'vuex';
import {Api} from './api';
import {FakeApi} from './fake-api'

let api = new Api('http://test-domain.com/api/');

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        users: []
    },
    mutations: {
        setUsers(state, usersList) {
            state.users = usersList;
        }
    },
    actions: {
        loadUsersList({commit, state}) {
            api.getUsersList((users) => {
                commit('setUsers', users);
            });
        },
        loginUser({commit, state}, loginRequest) {
            api.login(
                loginRequest, 
                (users) => {
                    //
                },
                () => {
                    //
                }
            );
        } 
    },
    getters: {
        //
    }
});

export {store};

$(document).ready(function() {
    store.dispatch('loadUsersList');
});
