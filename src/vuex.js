import Vue from 'vue';
import Vuex from 'vuex';
import {Api} from './api';
import {FakeApi} from './fake-api'

let api = new Api('http://test-domain.com/api/');

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        name: null,
        nickname: null
    },
    mutations: {
        setUserName(state, name) {
            state.name = name;
        },
        setUserNickname(state, nickname) {
            state.nickname = nickname;
        }
    },
    actions: {
        loginUser({commit, state}, loginRequest) {
            api.login(
                loginRequest, 
                () => {
                    commit('setUserName', loginRequest.name);
                    commit('setUserNickname', loginRequest.nickname);
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
