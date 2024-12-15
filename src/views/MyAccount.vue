<template>
    <MinimalHeader />

    <div class="d-flex">
    <MyAccountSideNavBar />

    <div class="mx-auto mt-80">
        <p class="fs-1">Username: &nbsp;<b>{{ user.userName }}</b></p>
        <p class="fs-1 mt-4">Email: &nbsp;<b>{{ user.email }}</b></p>
    </div>
    </div>
</template>



<script>
import axios from 'axios';
import MinimalHeader from '../components/MinimalHeader.vue';
import MyAccountSideNavBar from '../components/MyAccountSideNavBar.vue';

export default {
    name: "MyAccount",
    components: {
        MinimalHeader,
        MyAccountSideNavBar
    },
    methods: {
        async getUserInfo() {
            const response = await axios.get(`https://localhost:7169/api/auth/get-user-info`, 
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
                }
            });

            if(response.data.success) {
                this.user = response.data.user;
            }
        }
    },
    data() {
        return {
            user: ""
        }
    },
    mounted() {
        this.getUserInfo()
    }
}
</script>