<template>
<div @click="showStorageContainer" class="storage-container">
    <p class="storage-container-name">{{ name }}</p>
    <p class="storage-container-created-at"><b>Created At:</b> &nbsp; {{ formattedCreatedAt }}</p>
</div>
</template>



<script>
export default {
    name: 'MyStorageContainer',
    props: {
        id: {
            type: Number,
            Required: true,
        },
        name: {
            type: String,
            Required: true,
        },
        createdAt: {
            type: String,
            Required: true,
        }
    },
    methods: {
        showStorageContainer() {
            this.$emit('show-container-dashboard', this.id);
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



<style>
.storage-container {
    width: 300px;
    height: 200px;
    background-color: #dddddd;
    border-radius: 15px;
    padding-inline: 20px;
    padding-block: 10px; 
    transition: ease-in 0.1s;
}

.storage-container:hover {
    background-color: #c2c2c2;
    cursor: pointer;
}

.storage-container-name {
    font-size: 26px;
    font-weight: 800;
    height: 140px;
    user-select: none;
}

.storage-container-created-at {
    user-select: none;
}
</style>