<template>
    <div class="row justify-content-center rounded">
        <div class="col-lg-7 bg-white p-3 mt-3 border shadow" id="chat-container">
            <div class="col-lg-10 row justify-content-center" v-if="this.$store.getters.messagesList.length === 0">
                <p class="text-center text-muted">
                    Here empty. Type something...
                </p>
            </div>
            <div class="col-lg-10 p-2" v-else v-for="message in this.$store.getters.messagesList" :key="message.id">
                <div class="d-flex">
                    <p class="text-muted">
                        <small class="font-weight-bold">{{message.nickname}}</small>
                    </p>
                    <p class="text-muted ml-2">
                        <small>12:10</small>
                    </p>
                </div>
                <div class="col-lg-12 p-0">
                    <small class="text-muted text-black-50">
                        {{message.message}}
                    </small>
                </div>
            </div>
        </div>
        <message-form></message-form>
    </div>
</template>

<script>
    import MessageForm from './MessageForm'
    
    export default {
        name: "ChatContainer",
        components: {
            MessageForm
        }   
    }
</script>