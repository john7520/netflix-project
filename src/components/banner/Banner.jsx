import React, { useEffect, useState } from 'react'
import axios from '../../VideoDataLinks/Axois';
import Links from '../../VideoDataLinks/VideoDataLinks';
import "./banner.css"
function Banner() {
  const [banner, setBanner] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original";
  
  useEffect(() => {
    
    async function fetchData() {
        try {
          const request = await axios.get(Links.netflixOriginals);
          setBanner(request?.data?.results || [])
        } catch (error) {
          console.log("fetching data error...",error)
      
        }
      }
      fetchData()
    
    
  }, [])
  console.log(banner)
//   console.log(banner[0].poster_path
  // )
  const randomMovie = banner.length > 0 ? banner[Math.floor(Math.random() * banner.length)] : null;
  function MinimizeDescription(str, n) {
    return str?.length > n ? str.slice(0, n - 1) + "..." : str;
    
  }
  return (
    <div
      style={{
        backgroundImage: randomMovie
          ? `url(${baseUrl}${randomMovie.backdrop_path})`
          : "none",
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        height: `120vh`,
        width: `100%`,
        color :'white'
      }}
      className='banner-outer-container'
    >
      <div className="contents">
        <h1 className='banner-title'>
          {randomMovie?.title || randomMovie?.name || randomMovie?.original_name}
        </h1>
        <div className="handle-buttons">
          <button className='banner-button play'>Play</button>
          <button className='banner-button '>MyList</button>
        </div>
        <h3 className="banner-description">
          {MinimizeDescription(randomMovie?.overview,135)}
        </h3>
      </div>
    </div>
  )
}

export default Banner