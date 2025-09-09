//search movies
//https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=spiderman&page=1
//search tv shows
//https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&query=breaking+bad&page=1
//search people actor
//https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=en-US&query=tom+hanks&page=1

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = "https://api.themoviedb.org/3/";

const Links = {
  tradingVideos:`${baseUrl}/trending/all/week?api_key=${apiKey}%&language=en-US`,
  popularMovies: `${baseUrl}movie/popular?api_key=${apiKey}&language=en-US&page=1`,
  nowPlayingMovie: `${baseUrl}movie/now_playing?api_key=${apiKey}&language=en-US&page=1`,
  upComingMovie: `${baseUrl}movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
  topRelatedMovie: `${baseUrl}movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
  popularTvShows: `${baseUrl}tv/popular?api_key=${apiKey}&language=en-US&page=1`,
  onTheAirTvShows: `${baseUrl}tv/on_the_air?api_key=${apiKey}&language=en-US&page=1`,
  topRelatedTvShows: `${baseUrl}tv/top_rated?api_key=${apiKey}&language=en-US&page=1`,
  netflixOriginals: `${baseUrl}discover/tv?api_key=${apiKey}&with_networks=213`,
  actionMovies: `${baseUrl}movie?api_key=${apiKey}&with_genres=28`,
  comedyMovies: `${baseUrl}movie?api_key=${apiKey}&with_genres=35`,
  horrorMovies: `${baseUrl}movie?api_key=${apiKey}&with_genres=27`,
  romanceMovies: `${baseUrl}movie?api_key=${apiKey}&with_genres=10749`,
  documentaries: `${baseUrl}movie?api_key=${apiKey}&with_genres=99`,
  
}
export default Links;


