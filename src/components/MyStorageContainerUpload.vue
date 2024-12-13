<template>
<div class="mx-auto mt-5">
    <h3 class="fs-1 fw-bold">Upload Files</h3>

    <form class="mt-80" @submit.prevent="createStorageContainer">
        <label class="text-start" for="email">Container: <b>{{ id }}</b></label>
        <input class="form-control mt-1" type="file" multiple>

        <div class="d-flex gap-2 mt-4">
            <button class="btn btn-secondary" @click="showMyStorageDashboard">Cancel</button>
            <button class="btn btn-primary" type="submit">Upload</button>
        </div>
    </form>
</div>
</template>

<script>
export default {
    name: 'MyStorageContainerUpload',
    props: {
        id: {
            type: Number,
            required: true,
        }
    },
    methods: {
        showMyStorageDashboard() {
            this.$emit('change-main-component', 'MyStorageContainerDashboard', this.id);
        },
    }
}
</script>