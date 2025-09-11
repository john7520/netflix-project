import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NetflixLogo from "../../assets/NetflixLogo.png"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./header.css"
function Header() {
  const [color, setColor] = useState("")
  const [open, setOpen] = useState(false)

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
        <img className='logo' src={NetflixLogo} alt="" width={100}/>
        <ul className={`nav-links ${open && "active"}`}>
          
          <li>Home</li>
          <li>TvShows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>MyList</li>
          <li>Browse My Languages</li>
        </ul>
      </div>
      <div  className='header-right'>
        <SearchIcon  />
        <NotificationsNoneIcon />
        <AccountBoxIcon />
        <ArrowDropDownIcon />
        <div className='menu' onClick={()=>setOpen(!open)}>
          {open ? <CloseIcon /> : <Menu />}
          
        </div>
      </div>
    </div>
  )
}

export default Header