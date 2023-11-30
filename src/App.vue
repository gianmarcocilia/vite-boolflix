<script>
import { store } from './store';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppLoader from './components/AppLoader.vue';
export default {
  data() {
    return {
      store,
      mainVisible: false
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
        this.mainVisible = true;
      });
    }
  },
  components: { AppHeader, AppMain, AppLoader },
  
}
</script>

<template>
  <div class="boolflix">
    <AppHeader @buttonClicked="showResult()" @pressEnter="showResult()" />
    <AppLoader v-if="store.loading"/>
    <AppMain v-show="mainVisible" />
  </div>
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
