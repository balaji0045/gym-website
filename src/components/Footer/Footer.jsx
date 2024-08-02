import React from 'react'
import '../Footer/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
    <div className='footer'>
     <div className="header">
     <h3>My Gym </h3>
     <div className="logo">
  <div className="icon"><a href="https://www.instagram.com/panther_kidd/"><InstagramIcon sx={{
    fontSize:'42px',
    color:'white'
    
    
  }}/></a></div>
  <div className="icon"><a href="https://github.com/balaji0045"><GitHubIcon sx={{
    fontSize:'42px',
    color:'white'
  }} /></a></div>
  <div className="icon"><TwitterIcon sx={{
    fontSize:'42px'
  }} /></div>
     </div>
     </div>
     <div className="content">
      <p>&copy; 2024 Gym Website @Balajidk100@gmail.com. All Rights Reserved.</p>
     </div>
    </div>
  )
}

export default Footer