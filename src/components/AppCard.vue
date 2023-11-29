<script>
import { store } from '../store';
export default {
    props: {
        item: Object,
    },
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
        voteInFive(vote) {
            const voteToFive = Math.round((vote * 5) / 10);
            return voteToFive
        },
        starEmpty(vote) {
            const result = 5 - vote;
            return result;
        },
        posterPath(item) {
            const path = 'https://image.tmdb.org/t/p/w300';
            if (item.poster_path) {
                const resultPath = path + item.poster_path
                return resultPath;
            }
        },
    }
}
</script>

<template>
    <div class="card">
        <h3>Titolo: {{ item.title || item.name}}</h3>
        <h3>Titolo originale: {{ item.original_title || item.original_name }}</h3>
        <h3>Voto: <span class="star"><i v-for="num in voteInFive(item.vote_average)" class="fa-solid fa-star"></i><i v-for="num in starEmpty(voteInFive(item.vote_average))" class="fa-regular fa-star"></i></span></h3>   
        <h4 v-if="flagIncluse(item)">
            Lingua: <img class="lang-img" :src="getImagePath(item.original_language)" alt="">
        </h4>
        <h4 v-else>Lingua: {{ item.original_language }}</h4>
        <img class="main-img" :src="posterPath(item)" alt="">
    </div>
</template>

<style lang="scss" scoped>
.card {
    border: 1px solid white;
}
</style>