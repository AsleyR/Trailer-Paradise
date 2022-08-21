import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/home/Hero'
import Studios from '../components/home/Studios'
import TPFeatures from '../components/home/TPFeatures'

const Home = () => {
  return (
    <div className='pt-[0rem] sm:pt-[5rem]'>
      <Hero />
      {/* <Studios /> */}
      <TPFeatures/>
      <Footer/>
    </div>
  )
}

export default Home