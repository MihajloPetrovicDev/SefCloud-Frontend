<template>
<div class="d-flex main-container">
    <div id="logo-container">
        <router-link id="logo" to="/"><span class="c-yellow">Sef</span>Cloud</router-link>
    </div>

    <div class="d-flex forms-container">
        <div class="login-form">
            <h3 class="fs-4 mb-4 fw-bold">Log In</h3>
            <form @submit.prevent="login">
                <label class="text-start" for="email">E-mail</label>
                <input class="form-control mb-2" type="email" v-model="loginEmail" id="email">
                
                <label class="text-start" for="password">Password</label>
                <input class="form-control" type="password" v-model="loginPassword" id="password">
                
                <button class="mt-5 btn btn-primary">Log In</button>
            </form>
        </div>

        <div class="login-form">
            <h3 class="fs-4 mb-4 fw-bold">Register</h3>
            <form @submit.prevent="register">
                <label class="text-start" for="username">Username</label>
                <input class="form-control mb-2" type="text" v-model="registerUsername" id="username">
                
                <label class="text-start" for="email">E-mail</label>
                <input class="form-control mb-2" type="email" v-model="registerEmail" id="email">
                
                <label class="text-start" for="password">Password</label>
                <input class="form-control mb-2" type="password" v-model="registerPassword" id="password">
                
                <label class="text-start" for="confirmPassword">Confirm Password</label>
                <input class="form-control" type="password" v-model="registerConfirmPassword" id="confirmPassword">
                
                <button class="mt-5 btn btn-primary">Register</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'LoginPage',
    data() {
        return {
            loginEmail: '',
            loginPassword: '',
            
            registerUsername: '',
            registerEmail: '',
            registerPassword: '',
            registerConfirmPassword: ''
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post('https://localhost:7169/api/auth/login', {
                    email: this.loginEmail,
                    password: this.loginPassword,
                });

                localStorage.setItem('auth-token', response.data.token);
                window.location.href = '/';
            } catch (error) {
                console.error('Login failed', error);
            }
        },
        async register() {
            try {
                const response = await axios.post('https://localhost:7169/api/auth/register', {
                    username: this.registerUsername,
                    email: this.registerEmail,
                    password: this.registerPassword,
                    confirmPassword: this.registerConfirmPassword,
                });

                localStorage.setItem('auth-token', response.data.token);
                window.location.href = '/';
            } catch (error) {
                console.error('Register failed', error);
            }
        }
    }
}
</script>

<style scoped>
span {
    font-family: Lato;
    font-style: normal;
}

.main-container {
    background-image: linear-gradient(130deg, #156bdb, #9b59b6);
    background-color: #0084ff;
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
    width: 100vw;
    margin: 0;
    gap: 7%;
}

.forms-container {
    gap: 7%;
    width: 70vw;
    margin-block: auto;
}

.login-form {
    height: fit-content;
    background-color: white;
    
    padding-inline: 50px;
    padding-block: 40px;
    border-radius: 5px;
    width: 400px;
}

#logo-container {
    margin-block: auto;
    padding-bottom: 50px;
    margin-left: 5vw;
    margin-right: 7vw;
}

#logo {
    display: block;
    font-family: Nunito;
    font-weight: 900;
    font-style: italic;
    color: white;
    font-size: 7rem;
    user-select: none;
    text-decoration: none;
}

@media (max-width: 1720px) {
    .main-container {
        display: block !important;
        height: 170vh;
        gap: 0px;
    }

    .forms-container {
        display: block !important;
        width: fit-content;
        margin-inline: auto;
    }

    .login-form {
        margin-block: 60px;
        width: 90vw;
        max-width: 400px;
    }

    #logo {
        width: fit-content;
        margin-inline: auto;
        font-size: 450%;
        padding-top: 15px;
    }
}
</style>