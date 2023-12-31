import {reactive} from 'vue';
export const store = reactive({
    baseApiUrl: 'https://api.themoviedb.org/3',
    api_Key: '3be13342718caf3e47665ccb2924758a',
    searchText: "",
    movies: [],
    series: [],
    loading: false,
    flag: [
        'de',
        'en',
        'es',
        'fr',
        'it',
        'ja',
        'pt',
        'zh',
    ],
    cardId: 0,
    curCast: [],
    curGen: [],
    movieGen: [],
    tvGen: [],
    selectedFilmGen: null,
    selectedSerieTvGen: null
})