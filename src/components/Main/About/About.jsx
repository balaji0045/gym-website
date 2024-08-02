import React from 'react'
import '../About/About.css'
import { Card } from '@mui/material'

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import FreeConsultation from '../../../assets/about-page1.jpg'
import BestTraining from '../../../assets/abut-page2.jpg'
import BuildPerfectBody from '../../../assets/about-page3.jpg'
const About = () => {
  return (
    <div className='about'>
      <div className="about-container">
      <div className="sub-card">

      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={FreeConsultation}
          alt="free consultation"
        />
        <CardContent style={{
            backgroundColor:'#0f1214',
            color:'#aab2bc'
          }}>
          <Typography gutterBottom variant="h5" component="div" >
            Free Consultation
          </Typography>
          <Typography variant="body2" >
          Unlock your fitness potential with our free consultation! Our expert trainers will assess your current fitness level, discuss your goals, and provide personalized recommendations to help you get started on your journey. Book your session today and take the first step towards a healthier, happier you!


          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </div>
{/*  */}
<div className="sub-card">

      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={BestTraining}
          alt="free consultation"
        />
        <CardContent style={{
            backgroundColor:'#0f1214',
            color:'#aab2bc'
          }}>
          <Typography gutterBottom variant="h5" component="div">
            Best Training
          </Typography>
          <Typography variant="body2" >
          Experience top-notch training programs tailored to your needs at [Gym Name]. From <br />one-on-one personal training to engaging group classes, our certified trainers are dedicated to helping you achieve your fitness goals. Join us and see the difference that quality training can make!

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </div>

<div className="sub-card">

      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={BuildPerfectBody}
          alt="free consultation"
        />
        <CardContent style={{
            backgroundColor:'#0f1214',
            color:'#aab2bc'
          }}>
          <Typography gutterBottom variant="h5" component="div">
           Build Perfect Body
          </Typography>
          <Typography variant="body2" >
          Achieve your dream physique with [Gym Name]'s balanced approach to fitness. Our customized workout plans, expert nutritional guidance, and regular progress tracking ensure you’re <br />always moving towards your ideal body. Start your transformation today with our dedicated support!

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </div>

      </div>
    </div>
  )
}

export default About