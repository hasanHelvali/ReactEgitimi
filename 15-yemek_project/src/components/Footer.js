import React from 'react'
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <XIcon/>
        <YouTubeIcon/>
        <LinkedInIcon/>
        </div>

        <p></p>
    </div>
  )
}

export default Footer