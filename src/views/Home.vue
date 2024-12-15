<template>
    <PageHeader />

    <div>
        <h1 class="text-center mt-80 fw-bold">Your first choice for cloud storage.</h1>

        <div id="home-info-container">
            <p class="text-center mx-auto">Your first choice for secure, convenient, and reliable cloud storage. Whether you’re storing documents, photos, or music, <b>SefCloud</b> makes it easy to keep your files safe and accessible from anywhere. With our simple interface and powerful features, managing your cloud storage has never been easier.</p>
            <ul class="text-center mx-auto mt-4">
                <li><b>User-Friendly Interface:</b> Easily upload, organize, and access your files.</li>
                <li><b>Anywhere Access:</b> Access your files from any device with an internet connection.</li>
            </ul>
            <p class="text-center mx-auto mb-0 mt-4">Join <b>SefCloud</b> today and start organizing your digital life effortlessly!</p>    
        </div>
    </div>
</template>

<script>
import PageHeader from '../components/Header.vue';

export default {
    name: 'HomePage',
    components: {
        PageHeader
    } 
}
</script>

<style scoped>
h1 {
    font-size: 4rem;
}

ul {
    width: 30vw;
}

#home-info-container {
    width: 50vw;
    height: fit-content;
    margin-inline: auto;
    background-color: white;
    padding: 50px;
    margin-top: 70px;
    border-radius: 10px;
    border: 2px solid #e7e7e7;
}
</style>