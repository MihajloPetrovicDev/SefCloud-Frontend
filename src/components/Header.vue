<template>
    <div id="header-container">
        <router-link id="logo" to="/"><span class="c-yellow">Sef</span>Cloud</router-link>

        <router-link class="login-my-account" v-if="!isAuthenticated()" to="/login">Log in</router-link>
        <router-link class="login-my-account" v-if="isAuthenticated()" to="/my-account">My Account</router-link>
    </div>
</template>

<script>
export default {
    name: 'PageHeader',
    methods: {
        isAuthenticated() {
            const token = localStorage.getItem('auth-token');
            return token !== null && token !== '';
        }
    }
}
</script>

<style scoped>
span {
    font-family: Lato;
    font-style: normal;
}

.login-my-account {
    font-family: Nunito;
    color: white;
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;
    position: absolute;
    top: 20px;
    right: 40px;
    transition: color 0.1s ease;
}

.login-my-account:hover {
    color: #f8c20f;
}

#logo {
    font-family: Nunito;
    font-weight: 900;
    font-style: italic;
    color: white;
    font-size: 40px;
    margin-left: 40px;
    margin-top: 3px;
    user-select: none;
    text-decoration: none;
}

#header-container {
    background-color: #0084ff;
    height: 70px;
    margin-top: 0px;
    display: flex;
}
</style>