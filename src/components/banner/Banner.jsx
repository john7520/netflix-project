import React, { useEffect, useState } from 'react'
import Links from '../../VideoDataLinks/VideoDataLinks';

function Banner() {
  const [banner, setBanner] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    fetch(Links.netflixOriginals)
      .then((res) => res.json())
      .then((data) => {
        let banners = data.results || [];
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
  const randomMovie = banner[Math.floor(Math.random() * banner.length)]
  // console.log(randomMovie.)
  return (
    <div style={{
      backgroundImage: `url(${baseUrl}${randomMovie.backdrop_path})`
    }} >
      
    </div>
  )
}

export default Banner