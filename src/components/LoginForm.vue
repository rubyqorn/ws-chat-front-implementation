<template>
    <div class="row justify-content-center">
        <div class="col-lg-6 shadow p-4 bg-white mt-4 rounded">
            <form action="/" @submit.prevent="login">
                <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
                    <label for="name" class="control-label text-muted form__label">Name</label>
                    <input type="text" name="name" class="form-control form__input" placeholder="John Doe" v-model="name" v-model.trim="$v.name.$model">
                    <span class="error text-muted" v-if="!$v.name.required"><small>Field is required</small></span>
                    <span class="error text-muted" v-if="!$v.name.minLength"><small>Field must contain min 3 symbols</small></span>
                </div>
                <div class="form-group" :class="{ 'form-group--error': $v.nickname.$error }">
                    <label for="nickname" class="control-label text-muted">Nickname</label>
                    <input type="text" name="nickname" class="form-control" placeholder="Nickname" v-model="nickname" v-model.trim="$v.nickname.$model">
                    <span class="error text-muted" v-if="!$v.nickname.required"><small>Field is required</small></span>
                    <span class="error text-muted" v-if="!$v.nickname.minLength"><small>Field must contain min 6 symbols</small></span>
                </div>
                <div class="form-group" v-if="$v.submitStatus">
                    <p class="text-danger">{{ $v.submitStatus }}</p>
                </div>
                <div class="form-group" v-if="!$v.$invalid">
                    <router-link to="/chat" v-on:click.native="login" class="btn btn-sm btn-outline-dark">
                        Login
                    </router-link>
                </div>
                <div class="form" v-else>
                    <button class="btn btn-outline-dark btn-sm">
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    const { required, minLength } = require('vuelidate/lib/validators')
    
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
                // TODO: Validate nickname existence in database
                this.$v.$touch();

                if (this.$v.$invalid) {
                    this.submitStatus = "Error";
                } else {
                    let loginRequest = {
                        name: this.name,
                        nickname: this.nickname
                    };

                    this.$store.dispatch('loginUser', loginRequest);
                }

            }
        },
        validations: {
            name: {
                required,
                minLength: minLength(3)
            },
            nickname: {
                required,
                minLength: minLength(6)
            }
        }
    }
</script>