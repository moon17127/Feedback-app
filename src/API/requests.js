export const API_KEY = "19f84e11932abbc79e6d83f82d6d1045";

const requests = {
  baseUrl: "https://api.themoviedb.org/3",
  URL: "https://image.tmdb.org/t/p/original/",
  fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default requests;
// https://api.themoviedb.org/3/movie/5507api_key=cb548961acbc6435d761cec693ab3420

// https://api.themoviedb.org/3/movie/620249?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US
// https://api.themoviedb.org/3/movie/436270/credits?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1

// JaV7mmc9HGw is the key
// https://www.youtube.com/watch?v=JaV7mmc9HGw
