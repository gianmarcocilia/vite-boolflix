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
    showResult() {
      this.store.loading = true;
      axios.get(this.store.apiMovieUrl, {
        params: {
          api_key: '3be13342718caf3e47665ccb2924758a',
          query: this.store.searchText,
        },
      }).then((resp) => {
        this.store.movies = resp.data.results;
      });
      axios.get(this.store.apiSerieUrl, {
        params: {
          api_key: '3be13342718caf3e47665ccb2924758a',
          query: this.store.searchText,
        },
      }).then((resp) => {
        this.store.series = resp.data.results;
        this.store.loading = false;
      });
    }
  },
  components: {AppHeader, AppMain}
}
</script>

<template>
<AppHeader @buttonClicked="showResult()"/>
<AppMain />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
