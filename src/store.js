import {reactive} from 'vue';
export const store = reactive({
    apiMovieUrl: 'https://api.themoviedb.org/3/search/movie',
    apiSerieUrl: 'https://api.themoviedb.org/3/search/tv',
    searchText: "",
    movies: [],
    series: [],
})