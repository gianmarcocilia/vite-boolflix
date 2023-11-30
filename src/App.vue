<script>
import { store } from './store';
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
      const params = {
          api_key: this.store.api_Key,
          query: this.store.searchText,
        }
      this.store.loading = true;
      axios.get(`${this.store.baseApiUrl}/search/movie`, { params }).then((resp) => {
        this.store.movies = resp.data.results;
      });

      axios.get(`${this.store.baseApiUrl}/search/tv`, { params }).then((resp) => {
        this.store.series = resp.data.results;
        this.store.loading = false;
      });
    }
  },
  components: { AppHeader, AppMain }
}
</script>

<template>
  <div class="boolflix">
    <AppHeader @buttonClicked="showResult()" />
    <AppMain v-show="store.movies.length > 0 || store.movies.length > 0" />
  </div>
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
