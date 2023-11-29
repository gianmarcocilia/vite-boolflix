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
<div class="container">
    <input type="text" v-model="store.searchText">
    <button @click="$emit('buttonClicked')">Cerca</button>
</div>
</template>

<style lang="scss" scoped>
</style>