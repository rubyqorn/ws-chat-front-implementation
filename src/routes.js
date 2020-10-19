import Vue from 'vue';
import VueRouter from 'vue-router';
import GreetingPage from './components/GreetingPage.vue';
import LoginForm from './components/LoginForm.vue';
import ChatContainer from './components/ChatContainer.vue';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: GreetingPage},
    {path: '/login', component: LoginForm},  
    {path: '/chat', component: ChatContainer}
]

const router = new VueRouter({
    routes
});

export {router}
