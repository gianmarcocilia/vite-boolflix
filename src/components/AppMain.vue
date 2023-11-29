<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        getImagePath(imgName) {
            return new URL(`../assets/img/${imgName}.png`, import.meta.url).href;
        },
        flagIncluse(item) {
            return this.store.flag.includes(item.original_language) ? true : false;
        },
    }
}
</script>

<template>
    <div class="container">
        <h3 v-if="store.loading">Loading</h3>

        <section v-else>
            <h2>Film</h2>
            <ul v-for="movie in store.movies">
                <li>{{ movie.title }}</li>
                <li>{{ movie.original_title }}</li>
                <li v-if="flagIncluse(movie)"><img :src="getImagePath(movie.original_language)" alt=""></li>
                <li v-else>{{ movie.original_language }}</li>
                <li>{{ movie.vote_average }}</li>
            </ul>

            <h2>Serie TV</h2>
            <ul v-for="serie in store.series">
                <li>{{ serie.name }}</li>
                <li>{{ serie.original_name }}</li>
                <li v-if="flagIncluse(serie)"><img :src="getImagePath(serie.original_language)" alt=""></li>
                <li v-else>{{ serie.original_language }}</li>
                <li>{{ serie.vote_average }}</li>
            </ul>
        </section>

        
    </div>
</template>

<style lang="scss" scoped></style>