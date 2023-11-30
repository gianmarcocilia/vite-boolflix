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
        getCardId() {
            this.store.cardId = this.item.id;
            console.log(this.item.id, this.store.cardId);
        },
        getBackTrama() {
            this.store.cardId = 0;
        },
        showCastOrTrama() {
            return this.store.cardId === this.item.id;
        }
    },
    computed: {
        flagIncluse() {
            return this.store.flag.includes(this.item.original_language);
        },
        title() {
            return this.item.title || this.item.name;
        },
        originalTitle() {
            return this.item.original_title || this.item.original_name
        }
    }
}
</script>

<template>
    <div class="card">
        <h3>Titolo: <span>{{ title }}</span></h3>
        <h3>Titolo originale: <span>{{ originalTitle }}</span></h3>
        <h3>Voto: <span class="star"><i v-for="num in voteInFive(item.vote_average)" class="fa-solid fa-star"></i><i v-for="num in starEmpty(voteInFive(item.vote_average))" class="fa-regular fa-star"></i></span></h3>   
        <h3 v-if="flagIncluse" class="lang-img">
            Lingua: <img :src="getImagePath(item.original_language)" alt="">
        </h3>
        <h3 v-else>Lingua: {{ item.original_language }}</h3>
        <div class="overview">
            <p class="cast" v-if="showCastOrTrama()">Cast: <span v-for="actor in store.curCast">{{ actor.name }} </span></p>
            <p class="trama" v-else><span>Trama:</span> {{ item.overview }}</p>
            <button v-if="showCastOrTrama()" @click="getBackTrama">Show overview</button>
            <button v-else @click="getCardId(); $emit('moreInfo')">Show cast</button>
        </div>
        <img v-if="posterPath(item)" class="main-img" :src="posterPath(item)" alt="">
    </div>
</template>

<style lang="scss" scoped>
.card {
    border: 1px solid rgb(255, 255, 255);
    position: relative;
    padding: 1rem .5rem;
    height: 513px;
    overflow: auto;

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
    .overview {
        p {
            padding: .5rem 0;
            color: white;
            font-size: 15px;
            span {
                color: rgb(226, 226, 226);
            }
        }
        a {
            color: inherit;
        }
        .cast {

        }
    }
    &:hover .main-img {
        display: none;
    }

    .main-img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }
}
</style>