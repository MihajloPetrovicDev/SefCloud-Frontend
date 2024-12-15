<template>
<div class="container-item-container">
    <p class="file-name">{{ fileName }}</p>
    <p class="file-size">{{ fileSize }} B</p>
    <p class="file-create-at">{{ formattedCreatedAt }}</p>
    <button class="btn btn-primary download-btn"><span class="material-symbols-outlined delete-symbol">download</span></button>
    <button class="btn btn-danger delete-btn"><span class="material-symbols-outlined delete-symbol">delete</span></button>
</div>
</template>



<script>
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
    computed: {
        formattedCreatedAt() {
            const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
            return new Intl.DateTimeFormat('de-DE', options).format(new Date(this.createdAt));
        }
    },
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
    width: 70%;
}

.file-size {
    width: 10%;
}

.file-created-at {
    width: 10%;
}
</style>