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
            const path = 'https://image.tmdb.org/t/p/w342';
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
        <h3>Titolo: <span>{{ item.title || item.name}}</span></h3>
        <h3>Titolo originale: <span>{{ item.original_title || item.original_name }}</span></h3>
        <h3>Voto: <span class="star"><i v-for="num in voteInFive(item.vote_average)" class="fa-solid fa-star"></i><i v-for="num in starEmpty(voteInFive(item.vote_average))" class="fa-regular fa-star"></i></span></h3>   
        <h3 v-if="flagIncluse(item)" class="lang-img">
            Lingua: <img :src="getImagePath(item.original_language)" alt="">
        </h3>
        <h3 v-else>Lingua: {{ item.original_language }}</h3>
        <p><span>Trama:</span> {{ item.overview }}</p>
        <img v-if="posterPath(item)" class="main-img" :src="posterPath(item)" alt="">
    </div>
</template>

<style lang="scss" scoped>
.card {
    border: 1px solid rgb(255, 255, 255);
    position: relative;
    overflow: hidden;
    padding: 1rem .5rem;
    height: 513px;

    h3 {
        margin-bottom: 5px;
        font-size: 20px;
        span {
            font-size: 30px;
            color: rgb(255, 255, 255);
        }
    }

    .star {
        color: orange;
    }

    .lang-img {
        display: flex;
        gap: .5rem;
        align-items: center;
        img {
            width: 35px;
        }
    }

    p {
        padding: .5rem 0;
        overflow: auto;
        color: white;
        font-size: 18px;
        span {
            color: rgb(226, 226, 226);
        }
    }
    &:hover .main-img {
        display: none;
    }

    .main-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
</style>