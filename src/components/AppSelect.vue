<script>
import { store } from '../store';
export default {
    props: {
        type: String,
        genres: Array,
        typeList: Array,
    },
    data() {
        return {
            store,
            tempModel: null,
        }
    },
    methods: {
        handleModel() {
            if (this.type == 'Film') {
                this.store.selectedFilmGen = this.tempModel
                
            }
            if (this.type == 'SerieTv') {
                this.store.selectedSerieTvGen = this.tempModel
            }
        },
    }
}
</script>

<template>
    <div class="my-select">
        <label for="{{ type }}">Filtra per genere di {{ type }}</label>
        <select name="{{ type }}" id="" v-model="tempModel" @change="handleModel">
            <option selected value="">Nessun Filtro</option>
            <option v-for="genre in genres" :value="genre.id">{{ genre.name }}</option>
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