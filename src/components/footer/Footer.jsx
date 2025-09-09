import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./footer.css"
function Footer() {
  return (
    <div className='footer-outer-container'>
      <div className='footer-data'>
        <div>
          <div className="social-media-icons">
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <ul>
            <li>Audio Description</li>
            <li>Invective Relations</li>
            <li>Legal Notice</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookies Preferences</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Gift Card</li>
            <li>Term of use</li>
            <li>Corporation Information</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Media center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <div className='copy-right'>
        <ul>
          <li><button>service code</button></li>
          <li>&copy; 2025 netflix.inc</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer