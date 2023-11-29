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
        posterPath(item) {
            const path = 'https://image.tmdb.org/t/p/w300';
            if (item.poster_path) {
                const resultPath = path + item.poster_path
                return resultPath;
            }
        },
        roundUp(num) {
            return Math.round(num);
        },
        voteInFive(vote) {
            const voteToFive = (vote * 5) / 10;
            const voteRoundUp = this.roundUp(voteToFive);
            return voteRoundUp
        },
        starEmpty(vote) {
            const result = 5 - vote;
            return result;
        }
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
                <li><i v-for="num in voteInFive(movie.vote_average)" class="fa-solid fa-star"></i><i v-for="num in starEmpty(voteInFive(movie.vote_average))" class="fa-regular fa-star"></i></li>
                <li><img :src="posterPath(movie)" alt=""></li>
            </ul>

            <h2>Serie TV</h2>
            <ul v-for="serie in store.series">
                <li>{{ serie.name }}</li>
                <li>{{ serie.original_name }}</li>
                <li v-if="flagIncluse(serie)"><img :src="getImagePath(serie.original_language)" alt=""></li>
                <li v-else>{{ serie.original_language }}</li>
                <li><i v-for="num in voteInFive(serie.vote_average)" class="fa-solid fa-star"></i><i v-for="num in starEmpty(voteInFive(serie.vote_average))" class="fa-regular fa-star"></i></li>
                <li><img :src="posterPath(serie)" alt=""></li>
            </ul>
        </section>

        
    </div>
</template>

<style lang="scss" scoped></style>