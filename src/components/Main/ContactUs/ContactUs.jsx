import React from 'react'
import '../ContactUs/ContactUs.css'
import { Box } from '@mui/material'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Cardio from '../../../assets/cardio.png'
const ContactUs = () => {
  return (
    <div className='contactus'>
     <header>
      <h2>Contact Us</h2>
     </header>

     <div className="form-container">
     <div className="form">

      <div className="form-header">
        <h3>Fill The Form.</h3>
      </div>
   <div className="form-area">
    <Box className={'form'}>
    <TextField id="outlined-basic" label="First Name" variant="outlined" />
    <TextField id="outlined-basic" label="Last Name" variant="outlined" />
    <TextField id="outlined-basic" label="E-Mail" variant="outlined" />
    <TextField id="outlined-basic"  type='number' label="Phone Number" variant="outlined" />
    <TextField
          id="outlined-multiline-flexible"
          label="Enter Message"
          multiline
          maxRows={4}
        />
        <div className="submit">
          <Button type='submit' variant='outlined'>Submit</Button>
        </div>

  
    </Box>
     </div>
   </div>

    <div className="image-area">
      <img src={Cardio} alt="" />
    </div>
     </div>


    </div>
  )
}

export default ContactUs