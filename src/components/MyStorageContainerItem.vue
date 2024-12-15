<template>
<div v-if="isVisible" class="container-item-container">
    <p class="file-name">{{ fileName }}</p>
    <p class="file-size">{{ fileSize }} B</p>
    <p class="file-create-at">{{ formattedCreatedAt }}</p>
    <button class="btn btn-primary download-btn" @click="downloadFile"><span class="material-symbols-outlined delete-symbol">download</span></button>
    <button class="btn btn-danger delete-btn" @click="deleteFile"><span class="material-symbols-outlined delete-symbol">delete</span></button>
</div>
</template>



<script>
import axios from 'axios';

export default {
    name: 'MyStorageContainerItem',
    props: {
        id: {
            type: Number,
            required: true,
        },
        fileName: {
            type: String,
            required: true,
        },
        fileSize: {
            type: String,
            required: true,
        },
        createdAt: {
            type: String,
            required: true,
        }
    },
    methods: {
        async downloadFile() {
            try {
                const response = await axios.post(`https://localhost:7169/api/storage/download-file`, {
                    Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
                    StorageContainerItemId: this.id,
                });

                // Create a new Blob from the response data
                const fileBlob = new Blob([response.data], { type: 'application/octet-stream' });

                // Create an object URL for the Blob
                const fileURL = window.URL.createObjectURL(fileBlob);

                // Create an anchor element to trigger the download
                const downloadLink = document.createElement('a');
                downloadLink.href = fileURL;
                downloadLink.download = response.data.fileName;
                document.body.appendChild(downloadLink);
                downloadLink.click();

                document.body.removeChild(downloadLink);
            } 
            catch (error) {
                console.error('Error downloading file:', error);
            }
        },
        async deleteFile() {
            try {
                const response = await axios.post(`https://localhost:7169/api/storage/delete-file`, {
                    Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
                    StorageContainerItemId: this.id,
                });

                if(response.data.success == true) {
                    this.isVisible = false;
                }        
            } 
            catch (error) {
                console.error('Error downloading file:', error);
            }
        }
    },
    computed: {
        formattedCreatedAt() {
            const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
            return new Intl.DateTimeFormat('de-DE', options).format(new Date(this.createdAt));
        }
    },
    data() {
        return {
            isVisible: true,
        }
    }
}
</script>



<style scoped>
.delete-symbol {
    margin-left: -2.5px;
    margin-top: 3px;
}

.delete-btn {
    margin-top: -10px;
    height: 45px;
    width: 45px;
    margin-left: 10px;
}

.download-btn {
    margin-top: -10px;
    height: 45px;
    width: 45px;
    margin-left: 4%;
}

.container-item-container {
    display: flex;
    width: 100%;
    height: 60px;
    background-color: #dddddd;
    border-radius: 8px;
    padding-inline: 20px;
    padding-top: 18px; 
    margin-bottom: 8px;
}

.file-name {
    width: 65%;
}

.file-size {
    width: 15%;
}

.file-created-at {
    width: 10%;
}
</style>