import GreetingPage from './components/GreetingPage.vue'
import LoginForm from './components/LoginForm.vue'
import ChatContainer from './components/ChatContainer.vue'

const routes = [
    {path: '/', component: GreetingPage},
    {path: '/login', component: LoginForm},
    {path: '/send-message', componet: ChatContainer},   
    {path: '/chat', component: ChatContainer}
]

export {routes}