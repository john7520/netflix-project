import React, { useEffect, useState } from 'react'
import movieTrailer from "movie-trailer"
import "./row.css"
import Links from '../../../VideoDataLinks/VideoDataLinks';
import Axios from '../../../VideoDataLinks/Axois';
import CloseIcon from '@mui/icons-material/Close';
function Row(props) {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState([]);
  const [open, setOpen] = useState(false)
  const [videoId, setVideoId] = useState("")
  
  
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
  const [Trailer, setTrailer] = useState("");
  function HandleMovie(element) {
    if (Trailer) {
      setTrailer("")
    } else {
      movieTrailer(element?.name || element?.title)
        .then((url) => {
          let watchId = url.split("=")
          let videoId = watchId[1]
          if (videoId) {
            setVideoId(videoId)
          }
          
      })
      
    }
  }
  return (
    <>
      <h1 className="main-title">{title}</h1>
      <div className="movie-images">
        {movie.map((singleMovie) => (
          <img
            onClick={() => {
              setOpen(true)
              HandleMovie(singleMovie)
            }}
            key={singleMovie.id}
            className={isLarge ? "large poster-image" : "original poster-image"}
            src={`${baseUrl}${
              isLarge ? singleMovie?.poster_path : singleMovie?.backdrop_path
            }`}
            alt={singleMovie?.name || singleMovie?.title}
          />
        ))}
      </div>

      <div  className={`modal  ${open? "active":"hidden"}`} id="videoModal">
          <div className="modal-content">
          <span onClick={() => {
            setVideoId("")
            setOpen(false)
          }}
            className="close">
              <CloseIcon/>
          </span>
          
          {videoId&&<iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`}
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>}
          </div>
        </div>
    </>
  );
}

export default Row