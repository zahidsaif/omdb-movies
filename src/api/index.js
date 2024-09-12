const API_KEY = import.meta.env.OMDB_API_KEY
const commonURL = `https://www.omdbapi.com/?apikey=${API_KEY}`

export const OMDB_DETAILS_API = (movieID) => `${commonURL}&i=${movieID}`
export const OMDB_SEARCH_API = (searchTerm) => `${commonURL}&s=${searchTerm}`
export const OMDB_SEARCH_WITH_PAGINATION_API = (searchTerm, pageNumber) => `${commonURL}&s=${searchTerm}&page=${pageNumber}`
