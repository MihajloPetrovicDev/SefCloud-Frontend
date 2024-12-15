<template>
<div id="nav-bar" class="pt-4">
    <router-link class="nav-bar-item fs-5" to="/my-account">Account Information</router-link>
    <router-link class="nav-bar-item fs-5 mt-2" to="/my-storage">My Storage</router-link>

    <button class="btn btn-danger mt-5 ml-30" v-on:click="logout">Log Out</button>
</div>
</template>

<script>
export default {
    name: 'MyAccountSideNavBar',
    methods: {
        logout() {
            localStorage.removeItem('auth-token');
            window.location.href = '/';
        }
    }
}
</script>



<style scoped>
.router-link-active {
    background-color: #5f5f5f;
    color: white !important;
}

.nav-bar-item {
    text-decoration: none;
    color: #353535;
    display: block;
    width: 300px;
    padding-block: 10px;
    user-select: none;
    padding-left: 30px;
}

.nav-bar-item:hover {
    background-color: #5f5f5f;
    color: white;
}

.selected-nav-bar-item-container {
    background-color: #5f5f5f;
    width: 300px;
    margin-left: -30px;
    padding-block: 10px;
    padding-left: 30px;
}

#nav-bar {
    width: 300px;
    background-color: #e9e9e9;
    height: calc(100vh - 70px);
    border-right: 1px solid #d8d8d8;
}
</style>