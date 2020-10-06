<template>
    <div class="row justify-content-center rounded">
        <div class="col-lg-7 bg-white p-3 mt-3 border shadow" id="chat-container">
            <div class="col-lg-10 p-2">
                <div class="d-flex">
                    <p class="text-muted">
                        <small class="font-weight-bold">Anton Hideger</small>
                    </p>
                    <p class="text-muted ml-2">
                        <small>12:10</small>
                    </p>
                </div>
                <div class="col-lg-12 p-0">
                    <small class="text-muted text-black-50">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus assumenda nobis officiis similique! Perferendis, nihil tempora! Placeat possimus blanditiis voluptatem delectus ipsum laboriosam dolorum voluptatibus quo expedita dolores assumenda, odit tempore quibusdam iure fugiat commodi et, sed obcaecati illo facere.
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