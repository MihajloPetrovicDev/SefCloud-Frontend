<template>
<div class="mx-auto mt-5">
    <h3 class="fs-1 fw-bold">Create a Storage Container</h3>

    <form class="mt-80" @submit.prevent="createStorageContainer">
        <label class="text-start" for="email">Container Name</label>
        <input class="form-control mb-2" type="text" v-model="containerName" id="containerName">

        <div class="d-flex gap-2 mt-4">
            <button class="btn btn-secondary" @click="showMyStorageDashboard">Cancel</button>
            <button class="btn btn-primary" type="submit">Create</button>
        </div>
    </form>
</div>
</template>



<script>
import axios from 'axios';

export default {
    name: 'MyStorageCreateContainer',
    methods: {
        showMyStorageDashboard() {
            this.$emit('change-main-component', 'MyStorageDashboard', null);
        },
        async createStorageContainer() {
            var response = await axios.post("https://localhost:7169/api/storage/create-container", {
                authToken: localStorage.getItem('auth-token'),
                storageContainerName: this.containerName,
            });

            if(response.data.success) {
                this.$emit('change-main-component', 'MyStorageDashboard');
            }
            else {
                console.log('Unexpected error, container creation failed!');
            }
        }
    }
}
</script>