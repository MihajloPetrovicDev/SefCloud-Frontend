<template>
<div class="mx-auto mt-5">
    <h3 class="fs-1 fw-bold">Upload Files</h3>

    <form class="mt-80" @submit.prevent="uploadStorageContainerItems">
        <label class="text-start" for="email">Container: <b>{{ id }}</b></label>
        <input class="form-control mt-1" type="file" multiple @change="handleFileSelection">

        <div class="d-flex gap-2 mt-4">
            <button class="btn btn-secondary" @click="showMyStorageContainerDashboard">Cancel</button>
            <button class="btn btn-primary" type="submit">Upload</button>
        </div>
    </form>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'MyStorageContainerUpload',
    props: {
        id: {
            type: Number,
            required: true,
        }
    },
    data() {
        return {
            selectedFiles: [],
        };
    },
    methods: {
        showMyStorageContainerDashboard() {
            this.$emit('change-main-component', 'MyStorageContainerDashboard', this.id);
        },
        handleFileSelection(event) {
            this.selectedFiles = Array.from(event.target.files);
        },
        async uploadStorageContainerItems() {
            if (!this.selectedFiles || this.selectedFiles.length === 0) {
                console.log("Please select files to upload.");
                return;
            }

            const formData = new FormData();
            formData.append("storageContainerId", this.id);
            formData.append("authorization", `Bearer ${localStorage.getItem('auth-token')}`)

            this.selectedFiles.forEach(file => {
                formData.append("files", file);
            });

            try {
                const response = await axios.post("https://localhost:7169/api/storage/upload-files", formData);

                if(!response.data.success) {
                    console.log(response.data.message || "File upload failed.");
                }

                this.showMyStorageContainerDashboard();
            } 
            catch (error) {
                console.error(error);
                console.log("An error occurred while uploading files.");
            }
        },
    }
}
</script>