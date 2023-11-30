<script>
import { store } from '../store';
export default {
    props: {
        type: String,
        genres: Array
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="my-select">
        <label for="{{ type }}">Filtra per genere di {{ type }}</label>
        <select name="{{ type }}" id="">
            <option selected>Nessun Filtro</option>
            <option v-for="genre in genres" value="">{{ genre.name }}</option>
        </select>
    </div>
</template>

<style scoped lang="scss">
.my-select {
    display: flex;
    flex-direction: column;
    label {
        color: white;
        padding-bottom: .2rem;
    }
    select {
        background-color: rgb(31, 31, 31);
        border: none;
        color: white;
        padding: .5rem;
        border-radius: 5px;
    }
}
</style>