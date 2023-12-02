<script>
import { store } from '../store';
import axios from 'axios';
import AppCard from './AppCard.vue';
export default {
    data() {
        return {
            store,
        }
    },
    components: { AppCard },
    methods: {
        getMoreInfo() {
            if (this.store.cardId > 0) {
                axios.get(`${this.store.baseApiUrl}/movie/${this.store.cardId}/credits`, {
                    params: {
                        api_key: this.store.api_Key
                    }
                }).then(resp => {
                    this.store.curCast = this.troncateArray(resp.data.cast);
                });

                axios.get(`${this.store.baseApiUrl}/movie/${this.store.cardId}`, {
                    params: {
                        api_key: this.store.api_Key
                    }
                }).then(resp => {
                    this.store.curGen = resp.data.genres;
                })
            }
        },
        troncateArray(array) {
            return array.splice(0, 5);
        },
        addNone(control, object) {
            console.log(control);
            if (control != null && control != "0") {
                if ((object.genre_ids.includes(control))) {
                    console.log("visibile");
                    return true;
                } else {
                    console.log("nascosto");
                    return false;
                }
            }
            return true;
        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <section class="film" v-show="this.store.movies.length > 0">
                <h2>Film</h2>
                <div class="row">
                    <div class="col" v-for="movie in this.store.movies" :key="movie.id" v-show="addNone(this.store.selectedFilmGen, movie)">
                        <AppCard :item="movie" @moreInfo="getMoreInfo" type="film" />
                    </div>
                </div>
            </section>

            <section class="tv" v-show="this.store.series.length > 0">
                <h2>Serie TV</h2>
                <div class="row">
                    <div class="col" v-for="serie in this.store.series" :key="serie.id" v-show="addNone(this.store.selectedSerieTvGen, serie)">
                        <AppCard :item="serie" @moreInfo="getMoreInfo" type="serie" />
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    color: rgb(226, 226, 226);
    padding: 2rem 0;

    h2 {
        font-size: 45px;
        margin-bottom: 1rem;
    }

    .row {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: start;
        margin-bottom: 2rem;

        .col {
            width: calc(100% / 5);
            aspect-ratio: .6;
            &.none {
                display: none;
            }
        }
    }
}
</style>