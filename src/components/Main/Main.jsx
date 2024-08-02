import React from 'react';
import NavBar from '../Navbar/NavBar';
import About from './About/About';
import Home from './Home/Home';
import Pricing from './Pricing/Pricing';
import Gallery from './Gallery/Gallery';
import ContactUs from './ContactUs/ContactUs';
import Services from './Services/Services';
import Footer from '../Footer/Footer';
import '../Main/Main.css';

const Main = () => {
  const data = [
    {
      title: 'Basic Membership',
      price: '$20/month',
      additionalPerks: 'Complimentary fitness assessment upon joining',
      conditions: 'No access to group fitness classes or pool',
      usageHours: 'Access during non-peak hours (9 AM - 5 PM)',
      paymentOptions: 'Monthly payment via credit/debit card or bank transfer'
    },
    {
      title: 'Standard Membership',
      price: '$75/month',
      additionalPerks: '1 free personal training session per month',
      conditions: '10% discount on additional personal training sessions',
      usageHours: 'Access during all operating hours (5 AM - 11 PM)',
      paymentOptions: 'Quarterly payment via credit/debit card or bank transfer'
    },
    {
      title: 'Premium Membership',
      price: '$150/month',
      additionalPerks: 'All facilities, including gym equipment, cardio machines, group fitness classes, and swimming pool',
      conditions: 'Free guest pass for a friend once a month, Priority booking for classes and personal training',
      usageHours: 'Unlimited access during all operating hours',
      paymentOptions: 'Bi-annual payment via credit/debit card or bank transfer'
    }
  ];

  return (
    <div className='main-container'>
      <NavBar />
      <div className="home">
        <Home />
      </div>
      <div className="about">
        <About />
      </div>
      <div className="services">
        <Services />
      </div>
      <div className="pricing">
        <Pricing data={data} />
      </div>
      <div className="gallery">
        <Gallery />
      </div>
      <div className="contact">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
