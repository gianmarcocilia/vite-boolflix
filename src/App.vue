<script>
import {store} from './store';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  data() {
    return {
      store,
    }
  },
  methods: {
    searchResult() {
      axios.get(this.store.apiMovieUrl, {
        params: {
          api_key: '3be13342718caf3e47665ccb2924758a',
          query: this.store.searchText,
        },
      }).then((resp) => {
        this.store.movies = resp.data.results;
        console.log(this.store.movies);
      })
    }
  },
  components: {AppHeader, AppMain}
}
</script>

<template>
<AppHeader @buttonClicked="searchResult()"/>
<AppMain />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
