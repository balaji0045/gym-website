import React, { useState ,useEffect} from 'react'
import '../Home/Home.css'
import MainGymImage from '../../../assets/main-page-image.png'
import Fab from '@mui/material/Fab';
import CallIcon from '@mui/icons-material/Call';
import { fadeIn } from '../../../variants';
import {motion} from 'framer-motion'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className='home'>
    <div className="home-container">
      <div className="content-area">
       <h2
      
       >It's Gym Time. <span id='content-span'> Let's go</span></h2>
       <h2
       >We Are <span id='content-span'>Ready to Fit You</span></h2>
       <Fab variant="extended" className='joinicon' style={{
        zIndex:0
       }}>
     
        <CallIcon sx={{ mr: 1 }} />
       <span className="join"> Join US</span>
      </Fab>
      </div>
      <div className="image-area">
   <img src={MainGymImage} alt="" width={'700px'}  height={'700px'}/>
      </div>
    </div>

    </div>
  )
}

export default Home