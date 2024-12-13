<template>
<div class="main-container mx-auto mt-5">
    <div class="d-flex">
        <button @click="showMyStorageDashboard" class="back-btn btn btn-secondary mt-2"><b>&lt;</b> Back</button>
        <h3 class="fs-1 fw-bold mx-auto mt-1">{{ id }}</h3>
        <button @click="showMyStorageContainerUpload" class="upload-btn btn btn-primary mt-2">Upload</button>
    </div>
</div>
</template>

<script>
export default {
    name: 'MyStorageContainerDashboard',
    props: {
        id: {
            type: Number,
            required: true,
        }
    },
    methods: {
        showMyStorageDashboard() {
            this.$emit('change-main-component', 'MyStorageDashboard', null);
        },
        showMyStorageContainerUpload() {
            this.$emit('change-main-component', 'MyStorageContainerUpload', this.id);
        }
    }
}
</script>

<style>
.upload-btn {
    position: absolute;
    right: 10vw;
}

.back-btn {
    height: fit-content;
}

.main-container {
    width: 60vw;
}
</style>