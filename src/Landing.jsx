import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import WhyChooseUs from './components/WhyChooseUs'
import SecurityFeatures from './components/SecurityFeatures'
import AboutUs from './components/AboutUs'
import Carousel from './components/Carousel'



const Landing = () => {
  return (
    <div className='bg-orange-950'>
        <Navbar />
        <Hero />
        <SecurityFeatures/>
        <WhyChooseUs />
        <AboutUs />
        <Carousel/>
        <Footer />
    </div>
  )
}

export default Landing