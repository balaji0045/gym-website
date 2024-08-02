import React, { useState, useEffect } from 'react';
import '../ContactUs/ContactUs.css';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Cardio from '../../../assets/cardio.png';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comments: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'service_2nfarv9',
        'template_35vfm94',
        formData,
        'SieDyVrcev-0nUH13'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // Reset form data
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      comments: '',
    });
  };

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
            <Box className={'form'} component={'form'} onSubmit={handleSubmit}>
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                label="E-Mail"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                type="number"
                label="Phone Number"
                variant="outlined"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Enter Message"
                multiline
                maxRows={4}
                name="comments"
                value={formData.comments}
                onChange={handleChange}
              />
              <div className="submit">
                <Button type="submit" variant="outlined">
                  Submit
                </Button>
              </div>
            </Box>
          </div>
        </div>
        <div className="image-area">
          <img src={Cardio} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
