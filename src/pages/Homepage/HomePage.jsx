import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import Trending from './Trending'
import Popular from './Popular'
import TopRated from './TopRated'


const HomePage = () => {
 
  return (
    <div className='bg-[#1b2330] shadow-2xl'>
      <HeroSection/>
      <Trending/>
      <TopRated/>
      <Popular/>
    </div>
  )
}

export default HomePage