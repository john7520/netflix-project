import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NetflixLogo from "../../assets/NetflixLogo.png"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./header.css"
function Header() {
  const [color, setColor] = useState("")
  
  useEffect(() => {
    const  HandleScroll=()=> {
      let height = window.scrollY;
      if (height >= 50) {
        setColor("#333")
      } else {
        setColor("transparent")
      }
    }
    window.addEventListener("scroll", HandleScroll)
    return () => {
    window.removeEventListener("scroll", HandleScroll);
  };
  },[])

  
  return (
    <div  className='header-outer-container'
      style={{
      backgroundColor : color
    }}>
      <div className='header-left'>
        <ul>
          <li><img className='logo' src={NetflixLogo} alt="" width={100}/></li>
          <li>Home</li>
          <li>TvShows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>MyList</li>
          <li>Browse My Languages</li>
        </ul>
      </div>
      <div  className='header-right'>
        <SearchIcon on style={{marginRight:10}} />
        <NotificationsNoneIcon style={{marginRight:10}}/>
        <AccountBoxIcon style={{marginRight:10}}/>
        <ArrowDropDownIcon />
        
      </div>
    </div>
  )
}

export default Header