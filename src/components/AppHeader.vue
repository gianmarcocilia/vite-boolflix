<script>
import { store } from '../store';
import AppSelect from './AppSelect.vue';
export default {
    data() {
        return {
            store,
        };
    },
    components: { AppSelect }
}
</script>

<template>
    <header>
        <div class="container">
            <div class="row">
                <h1>Boolflix</h1>
                <div class="header-rigth">
                    <AppSelect type="SerieTv" :genres="store.tvGen"/>
                    <AppSelect type="Film" :genres="store.movieGen" />
                    <input type="text" v-model.trim="store.searchText" @keyup.enter="$emit('pressEnter')">
                    <button @click="$emit('buttonClicked')">Cerca</button>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: black;
    padding: .5rem;
    display: flex;
    align-items: center;
}

.row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        color: rgb(150, 1, 1);
        font-size: 60px;
    }

    .header-rigth {
        display: flex;
        gap: 1.5rem;
        align-items: flex-end;
        input {
            background-color: rgb(31, 31, 31);
            color: white;
            border: none;
            border-radius: 5px;
            padding: .5rem;
            margin-right: .5rem;
        }

        button {
            background-color: rgb(150, 1, 1);
            border: none;
            color: white;
            padding: .5rem;
            border-radius: 5px;
        }
    }


}
</style>