<template>
    <div id="app" class="container">
        <router-view />
    </div>
</template>

<script>
    import 'bootstrap/js/dist/util';
    import 'bootstrap/js/dist/alert';
    import 'bootstrap/dist/css/bootstrap.css';

    // Vue components
    import ChatContainer from './components/ChatContainer.vue'
    import MessageForm from './components/MessageForm.vue'
    import LoginForm from './components/LoginForm.vue'
    import GreetingPage from './components/GreetingPage.vue'

    export default {
        name: "App",
        components: {
            ChatContainer,
            MessageForm,
            LoginForm,
            GreetingPage
        }
    }
</script>
