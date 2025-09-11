const apiKey = import.meta.env.VITE_API_KEY;
// const baseUrl = "https://api.themoviedb.org/3";

const Links = {
  // Trending
  trendingVideos: `/trending/all/week?api_key=${apiKey}&language=en-US`,

  // Movies
  popularMovies: `/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
  nowPlayingMovie: `/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`,
  upComingMovie: `/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
  topRatedMovie: `/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,

  // TV Shows
  popularTvShows: `/tv/popular?api_key=${apiKey}&language=en-US&page=1`,
  onTheAirTvShows: `/tv/on_the_air?api_key=${apiKey}&language=en-US&page=1`,
  topRatedTvShows: `/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`,
  netflixOriginals: `/discover/tv?api_key=${apiKey}&with_networks=213`,

  // Genres
  actionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
  comedyMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
  horrorMovies: `/discover/movie?api_key=${apiKey}&with_genres=27`,
  romanceMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
  documentaries: `/discover/movie?api_key=${apiKey}&with_genres=99`,
};

export default Links;
