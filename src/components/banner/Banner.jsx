import React, { useEffect, useState } from 'react'
import Links from '../../VideoDataLinks/VideoDataLinks';
import "./banner.css"
function Banner() {
  const [banner, setBanner] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    fetch(Links.netflixOriginals)
      .then((res) => res.json())
      .then((data) => {
        setBanner[data.results]
        let banners = data.results ? data.results : [];
        
        if (banners.length > 0) {
          setBanner(banners)
        } else {
          console.log("fetching error data.")
        }
      })
      .catch((err) => {
        console.log(err)
        
      })
  
  }, [])
  console.log(banner)
//   console.log(banner[0].poster_path
  // )
  const randomMovie = banner.length > 0 ? banner[Math.floor(Math.random() * banner.length)] : null
  
  randomMovie?console.log(randomMovie.backdrop_path):console.log("error")
  return (
    <div
      style={{
        backgroundImage: randomMovie
          ? `url(${baseUrl}${randomMovie.backdrop_path})`
          : "none",
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        height: `100vh`,
        width: `100%`,
        
        
      }}
    >
      <div className="contents">
        <h1 className='banner-title'>
          {randomMovie?.name}
        </h1>
        <div className="handle-buttons">
          <button className='banner-button '>Play</button>
          <button className='banner-button '>MyList</button>
        </div>
        <h1 className="banner-description">
          {randomMovie?.overview}
        </h1>
      </div>
    </div>
  )
}

export default Banner