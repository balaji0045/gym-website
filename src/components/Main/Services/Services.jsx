// import React from 'react'
import '../Services/Services.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
const Services = () => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className='services'>
   <div className="service-container">
      <div className="para-container">
        <h3>Services</h3>
        <p>we are committed to helping you achieve your fitness goals with our comprehensive range of services. Our state-of-the-art facility offers diverse workout options, including personalized training sessions, group fitness classes, and cutting-edge strength and cardio equipment. Whether you're a seasoned athlete or just starting your fitness journey, our expert trainers are here to provide guidance and motivation tailored to your individual needs. We also offer wellness programs, including nutrition counseling and recovery sessions, to support your overall health and well-being. Join us today and experience a supportive community dedicated to helping you reach your full potential!</p>
      </div>
      <div className="accordion-container">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                //  sx={{ backgroundColor: 'black', borderBottom: '1px solid #ddd' ,color:'white'}}

       >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" 
                  sx={{ backgroundColor: 'whitesmoke', borderBottom: '1px solid #ddd',color:'#007fff' }}
                  >
          <Typography>Cardiovascular Equipment</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our gym features a top-of-the-line selection of cardiovascular equipment designed to help you achieve your fitness goals effectively and efficiently. From advanced treadmills and ellipticals to stationary bikes and rowing machines, our state-of-the-art machines offer a variety of workouts to suit all fitness levels.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header"                   sx={{ backgroundColor: 'whitesmoke', borderBottom: '1px solid #ddd',color:'#007fff' }}
>
          <Typography>Strength Training Equipment</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Elevate your strength training regimen with our premium selection of strength training equipment. Our gym boasts a variety of free weights, resistance machines, and functional training tools to cater to all levels of fitness enthusiasts. Whether you’re targeting specific muscle groups or aiming for a full-body workout, our equipment is designed to help you build muscle, increase strength, and enhance overall fitness.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header"                   sx={{ backgroundColor: 'whitesmoke', borderBottom: '1px solid #ddd',color:'#007fff' }}
>
          <Typography>Group Fitness Classes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            backgroundColor:'grey'
          }}>
          Join our vibrant community and get motivated with our dynamic group fitness classes. Our diverse class offerings include everything from high-energy cardio sessions and strength-building workouts to relaxing yoga and mindfulness practices. Led by certified and passionate instructors, our group classes are designed to cater to all fitness levels and goals.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
   </div>
    </div>
  )
}

export default Services