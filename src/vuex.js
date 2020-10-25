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
        messages: [],
        currentUser: null
    },
    mutations: {
        setUsers(state, usersList) {
            state.users = usersList;
        },
        setMessages(state, messagesList) {
            state.messages = messagesList;
        },
        setCurrentUser(state, user) {
            state.currentUser = user;
        }
    },
    actions: {
        loadUsersList({commit, state}) {
            api.getUsersList(
                (users) => {
                    commit('setUsers', users);
                },
                () => {
                    // TODO: Handle failure
                }
            );
        },
        loadMessagesList({commit, state}) {
            api.getMessagesList(
                (messages) => {
                    commit('setMessages', messages);
                },
                () => {
                    // TODO: Handle failure
                } 
            )
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
        },
        messagesList: state => {
            return state.messages;
        }
    }
});

export {store};

$(document).ready(function() {
    store.dispatch('loadUsersList');
    store.dispatch('loadMessagesList');
});
