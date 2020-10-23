import $ from 'jquery';
import Vue from 'vue';
import Vuex from 'vuex';
import {Api} from './api';
import {FakeApi} from './fake-api'

let api = new Api('https://test-domain.com/api/');

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        users: [],
        currentUser: null
    },
    mutations: {
        setUsers(state, usersList) {
            state.users = usersList;
        },
        setCurrentUser(state, user) {
            state.currentUser = user;
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
                (user) => {
                    commit('setCurrentUser', user);
                },
                () => {
                    // TODO: Handle failure
                }
            );
        } 
    },
    getters: {
        currentUser: state => {
            return state.currentUser;
        }
    }
});

export {store};

$(document).ready(function() {
    store.dispatch('loadUsersList');
});
