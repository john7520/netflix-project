import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NetflixLogo from "../../assets/NetflixLogo.png"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header() {
  return (
    <div className='header-outer-container'>
      <div className='header-left'>
        <ul>
          <li><img src={NetflixLogo} alt="" /></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
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