<template>
<div class="mx-auto mt-5">
    <div class="d-flex">
        <h3 class="fs-1 fw-bold mx-auto">My Containers</h3>
        <button @click="showCreateStorageComponent" class="new-container-button btn btn-primary mt-2">New Storage Container</button>
    </div>

    <div id="container-items">
        <MyStorageContainer v-for="storageContainer in storageContainers" :key="storageContainer.name" :id="storageContainer.id" :name="storageContainer.name" :createdAt = "storageContainer.createdAt" @show-container-dashboard="showContainerDashboard" />
    </div>
</div>
</template>



<script>
import MyStorageContainer from './MyStorageContainer.vue';
import axios from 'axios';

export default {
    name: 'MyStorageDashboard',
    components: {
        MyStorageContainer
    },
    methods: {
        showCreateStorageComponent() {
            this.$emit('change-main-component', 'MyStorageCreateContainer', null);
        },
        showContainerDashboard(containerId) {
            this.$emit('change-main-component', 'MyStorageContainerDashboard', containerId);
        },
        async getUserStorageContainers() {
            var response = await axios.get('https://localhost:7169/api/storage/get-user-containers', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
                }
            })

            var storageContainers = response.data.containers;

            return storageContainers;
        }
    },
    mounted() {
        this.getUserStorageContainers().then((storageContainers) => {
            this.storageContainers = storageContainers;
        });
    },
    data() {
        return {
            storageContainers: [],
        };
    },
}
</script>



<style>
.new-container-button {
    position: absolute;
    right: 10vw;
}

#container-items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 25px;
    margin-top: 100px;
}
</style>