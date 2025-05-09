<script lang="ts" setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
    <div class="container mt-3">
        <h1>CDH Vue Lib documentation</h1>
        <NavBar />
        <div>
            <NuxtPage />
        </div>
    </div>
</template>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
@import '@fortawesome/fontawesome-svg-core/styles.css';

body {
    padding-top: 1rem; /* Add some padding to the top */
}
.container {
    max-width: 960px;
}
</style>
