import React, { useEffect, useState } from 'react'
import "./row.css"
import Links from '../../../VideoDataLinks/VideoDataLinks';
import Axios from '../../../VideoDataLinks/Axois';
function Row(props) {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState([]);
  const { title, movieUrl ,isLarge} = props;
  useEffect(() => {
    
    async function FetchData() {
        try {
          const request = await Axios.get(movieUrl)
          setMovie(request.data.results||[])
        } catch (err) {
      console.log("fetching error....",err)
      }
    
      }
      FetchData()
    
  }, [movieUrl])
  console.log(movie[0]?.poster_path)
  return (
    <div>
      <h1 className="main-title">{title}</h1>
      <div className="movie-images">
        {movie.map((singleMovie) => (
          <img
            key={singleMovie.id}
            className={isLarge ? "large poster-image" : "original poster-image"}
            src={`${baseUrl}${
              isLarge ? singleMovie?.poster_path : singleMovie?.backdrop_path
            }`}
            alt={singleMovie?.name || singleMovie?.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Row