import React from 'react'
import Row from '../singleRow/Row'
import Links from '../../../VideoDataLinks/VideoDataLinks'

function Rows() {
  return (
    <>
      <Row title={"Netflix Originals"}
        movieUrl={Links.netflixOriginals}
        isLarge={true}
      
      />
      <Row title={"Trending Videos"}
        movieUrl={Links.trendingVideos}
        isLarge
      />
      

      <Row title={"Now Playing Movies"}
        movieUrl={Links.nowPlayingMovie}
      />

      <Row title={"Popular Movies"}
        movieUrl={Links.popularMovies}
        isLarge
      />

      <Row title={"Up Coming Movies"}
        movieUrl={Links.upComingMovie}
      />

      <Row title={"Top Related Movies"}
        movieUrl={Links.topRatedMovie}
        isLarge
      />

      <Row title={"Popular Tv Shows"}
        movieUrl={Links.popularTvShows}
        isLarge
      />

      <Row title={"Top Related Tv shows"}
        movieUrl={Links.topRatedTvShows}
        isLarge
      />

      <Row title={"On The Air Tv Shows"}
        movieUrl={Links.onTheAirTvShows}
      />

      <Row title={"Action Movies"}
        movieUrl={Links.actionMovies}
      />

      <Row title={"Comedy Movies"}
        movieUrl={Links.comedyMovies}
      />

      <Row title={"Romance Movies"}
        movieUrl={Links.romanceMovies}
      />

      <Row title={"Horror Movies"}
        movieUrl={Links.horrorMovies}
        isLarge
      />

      <Row title={"Documentaries"}
        movieUrl={Links.documentaries}
        isLarge
      />
    </>
  )
}

export default Rows