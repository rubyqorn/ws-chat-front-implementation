<template>
    <div id="app" class="container">
        <chat-container />
        <message-form />
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

    export default {
        name: "App",
        components: {
            ChatContainer,
            MessageForm,
            LoginForm
        }
    }
</script>
