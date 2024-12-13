<template>
    <div id="header-container">
        <router-link id="logo" to="/"><span class="c-yellow">Sef</span>Cloud</router-link>
    </div>
</template>

<script>
export default {
    name: 'MinimalHeader',
}
</script>

<style scoped>
span {
    font-family: Lato;
    font-style: normal;
}

#logo {
    font-family: Nunito;
    font-weight: 900;
    font-style: italic;
    color: white;
    font-size: 40px;
    margin-inline: auto;
    margin-top: 3px;
    user-select: none;
    text-decoration: none;
}

#header-container {
    background-color: #0084ff;
    height: 70px;
    margin-top: 0px;
    display: flex;
}
</style>