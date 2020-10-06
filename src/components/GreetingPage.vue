<template>
    <div class="row justify-content-center">
        <div class="col-lg-8 d-flex" id="greeting-page">
            <div class="col">
                <router-link to="/login" class="w-100 btn access-button text-uppercase ">
                    Login
                </router-link>
            </div>
            <div class="col">
                <router-link to="/chat" class="w-100 btn access-button text-uppercase ">
                    Chat
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GreetingPage'
    }
</script>