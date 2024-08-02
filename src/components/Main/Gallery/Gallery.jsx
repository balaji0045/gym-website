import React from 'react'
import './Gallery.css'
import Gallery1 from '../../../assets/gallery1.jpg'
import Gallery2 from '../../../assets/gallery2.jpg'
import Gallery3 from '../../../assets/gallery3.jpg'
import Gallery4 from '../../../assets/gallery4.jpg'
import {motion} from 'framer-motion'

const Gallery = () => {
  return (
    <div className='gallery'>
    <div className="header">
      WorkOut Gallery
    </div>
    <div className="images">
   <div className="img"><img src={Gallery1} /></div>
   <div className="img"><img src={Gallery2} alt="" /></div>
   <div className="img"><img src={Gallery3} alt="" /></div>
   <div className="img"><img src={Gallery4} alt="" /></div>
    </div>

    </div>
  )
}

export default Gallery