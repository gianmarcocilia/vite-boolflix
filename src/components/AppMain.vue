<script>
import { store } from '../store';
import AppCard from './AppCard.vue';
export default {
    data() {
        return {
            store,
        }
    },
    components: {AppCard}   
    
}
</script>

<template>
    <h2>Film</h2>
    <AppCard v-for="movie in store.movies" :item="movie"/>

    <h2>Serie TV</h2>
    <AppCard v-for="serie in store.series" :item="serie"/>
</template>

<style lang="scss" scoped></style>