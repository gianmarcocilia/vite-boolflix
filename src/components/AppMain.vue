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
                }}).then(resp => {
                    this.store.curCast = resp.data.cast;
                })
            }  
        }

    }

}
</script>

<template>
    <main>
        <div class="container">
            <h2>Film</h2>
            <div class="row">
                <div class="col" v-for="movie in store.movies">
                    <AppCard :item="movie" @moreInfo="getMoreInfo"/>
                </div>
            </div>

            <h2>Serie TV</h2>
            <div class="row">
                <div class="col" v-for="serie in store.series">
                    <AppCard :item="serie" @moreInfo="getMoreInfo"/>
                </div>
            </div>
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
        }
    }
}
</style>