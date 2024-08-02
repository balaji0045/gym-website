import React from 'react'
import '../Pricing/Pricing.css'
import { Button } from '@mui/material'
const Pricing = ({data}) => {
  return (
    <div className='pricing'>
        <header>
          <h3>Select your Package</h3>
          <p>Unlock your fitness potential with our diverse membership packages <br /> designed to suit every lifestyle and budget. Choose from flexible plans with exclusive perks to help you achieve your health and wellness goals</p>
        </header>
    <div className="price-card-container">
    <div className="cards">

    {data.map((packageData, index) => (
          <div key={index} className="price-card">
            <h3 className='heading'>{packageData.title}</h3>
            <p><strong>Price:</strong> {packageData.price}</p>
            <p><strong>Additional Perks:</strong> {packageData.additionalPerks}</p>
            <p><strong>Conditions:</strong> {packageData.conditions}</p>
            <p><strong>Usage Hours:</strong> {packageData.usageHours}</p>
            <p><strong>Payment Options:</strong> {packageData.paymentOptions}</p>
            <Button variant="contained" color="primary">Join Now</Button>
          </div>
        ))}
    </div>
    </div>

    </div>
  )
}

export default Pricing