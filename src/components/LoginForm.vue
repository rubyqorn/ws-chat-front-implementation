<template>
    <div class="row justify-content-center">
        <div class="col-lg-6 shadow p-4 bg-white mt-4 rounded">
            <form action="/">
                <div class="form-group">
                    <label for="name" class="control-label text-muted">Name</label>
                    <input type="text" name="name" class="form-control" placeholder="John Doe" v-model="name">
                    <span class="text-muted"><small>* min 3 symbols</small></span>
                </div>
                <div class="form-group">
                    <label for="nickname" class="control-label text-muted">Nickname</label>
                    <input type="text" name="nickname" class="form-control" placeholder="Nickname" v-model="nickname">
                    <span class="text-muted"><small>* min 3 symbols</small></span>
                </div>
                <div class="form-group">
                    <router-link to="/chat" v-on:click.native="login" class="btn btn-sm btn-outline-dark">
                        Login
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginForm",
        data: function() {
            return {
                name: null,
                nickname: null
            }
        },
        methods: {
            login() {
                let loginRequest = {
                    name: this.name,
                    nickname: this.nickname
                };

                this.$store.dispatch('loginUser', loginRequest);
            }
        }
    }
</script>