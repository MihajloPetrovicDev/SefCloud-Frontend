<template>
    <MinimalHeader />
    <MyAccountSideNavBar />
</template>

<script>
import MinimalHeader from '../components/MinimalHeader.vue';
import MyAccountSideNavBar from '../components/MyAccountSideNavBar.vue';

export default {
    name: "MyAccount",
    components: {
        MinimalHeader,
        MyAccountSideNavBar
    }
}
</script>