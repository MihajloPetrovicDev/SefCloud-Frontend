<template>
<div class="main-container mx-auto mt-5">
    <div class="container-info-container d-flex">
        <button @click="showMyStorageDashboard" class="back-btn btn btn-secondary mt-2"><b>&lt;</b> Back</button>
        <h3 class="fs-1 fw-bold mx-auto mt-1">{{ name }}</h3>
        <button @click="showMyStorageContainerUpload" class="upload-btn btn btn-primary mt-2">Upload</button>
    </div>

    <div id="container-items">
        <MyStorageContainerItem v-for="storageContainerItem in storageContainerItems" :key="storageContainerItem.id" :id="storageContainerItem.id" :fileName="storageContainerItem.fileName" :fileSize="storageContainerItem.fileSize" :createdAt = "storageContainerItem.createdAt" />
    </div>
</div>
</template>



<script>
import axios from 'axios';
import MyStorageContainerItem from './MyStorageContainerItem.vue';

export default {
    name: 'MyStorageContainerDashboard',
    components: {
        MyStorageContainerItem,
    },
    props: {
        id: {
            type: Number,
            required: true,
        },
    },
    methods: {
        showMyStorageDashboard() {
            this.$emit('change-main-component', 'MyStorageDashboard', null);
        },
        showMyStorageContainerUpload() {
            this.$emit('change-main-component', 'MyStorageContainerUpload', this.id);
        },
        async getStorageContainerItemsAndSetInfo() {
            var response = await axios.post('https://localhost:7169/api/storage/get-container-items', {
                authorization: `Bearer ${localStorage.getItem('auth-token')}`,
                storageContainerId: this.id,
            });

            var storageContainerItems = response.data.containerItems;
            var storageContainer = response.data.storageContainer;

            this.name = storageContainer.name;
            this.createdAt = storageContainer.createdAt;
            this.UpdatedAt = storageContainer.updatedAt;

            return storageContainerItems;
        }
    },
    data() {
        return {
            storageContainerItems: [],
            name: this.name,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        }
    },
    mounted() {
        this.getStorageContainerItemsAndSetInfo().then((storageContainerItems) => {
            this.storageContainerItems = storageContainerItems;
        });
    }
}
</script>



<style scoped>
.container-info-name {
    width: 70%;
    text-align: center;
}

.container-info-container {
    display: flex;
    width: 100%;
}

.upload-btn {
    height: fit-content;
}

.back-btn {
    height: fit-content;
}

.main-container {
    width: 60vw;
}

#container-items {
    height: fit-content;
    display: block;
    margin-inline: auto;
}
</style>