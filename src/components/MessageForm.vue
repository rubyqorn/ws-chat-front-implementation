<template>
    <div class="col-lg-7 bg-white shadow border p-3" id="message-form">
        <div class="d-flex">
            <div class="col-lg-1 p-0">
                <button class="btn borderless">
                    <i class="fa fa-paperclip fa-lg text-muted"></i>
                </button>
            </div>
            <div class="col-lg-10">
                <textarea class="form-control" name="message" id="message"></textarea>
            </div>
            <div class="col-lg-1 p-1">
                <router-link to="/send-message" class="btn btn-outline-dark btn-sm">
                    Send
                </router-link>
            </div>
        </div>
    </div>
</template> 

<script>
    export default {
        name: "MessageForm"   
    }
</script>