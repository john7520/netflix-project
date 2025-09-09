import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NetflixLogo from "../../assets/NetflixLogo.png"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./header.css"
function Header() {
  return (
    <div className='header-outer-container'>
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
      <div className='header-right'>
        <SearchIcon />
        <NotificationsNoneIcon />
        <AccountBoxIcon />
        <ArrowDropDownIcon />
        
      </div>
    </div>
  )
}

export default Header