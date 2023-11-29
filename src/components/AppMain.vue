<script>
import { store } from '../store';
import AppCard from './AppCard.vue';
export default {
    data() {
        return {
            store,
        }
    },
    components: { AppCard }

}
</script>

<template>
    <main>
        <div class="container">
            <h2>Film</h2>
            <div class="row">
                <div class="col" v-for="movie in store.movies">
                    <AppCard :item="movie" />
                </div>
            </div>

            <h2>Serie TV</h2>
            <div class="row">
                <div class="col" v-for="serie in store.series">
                    <AppCard :item="serie" />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    background-color: rgb(31, 31, 31);
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
}</style>