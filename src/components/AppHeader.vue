<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <header>
        <div class="container">
            <div class="row">
                <h1>Boolflix</h1>
                <div>
                    <input type="text" v-model="store.searchText" @keyup.enter="$emit('pressEnter')">
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
</style>