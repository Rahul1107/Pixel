import React from 'react'
import ContentWrapper from '../components/ContentWrapper'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <div className=' flex   w-screen h-screen bg-[#1b2330]  items-center'>
      <ContentWrapper>
        <div className='flex flex-col items-center justify-center'>
          <span className='text-white font-bold text-6xl'>404 error</span>
          <span className='text-white/80 font-semibold text-3xl max-w-[400px]  lg:max-w-[600px] text-center my-6'>The page you are looking for was moved, removed, renamed or might never existed.</span>
          <button className='text-white text-2xl font-bold bg-gradient-to-b from-[#f23aff]/90 to-[#fd8b4a]/90 py-2 px-2 rounded-full'
          onClick={()=>{navigate('/')}} >Go To HomePage </button>
        </div>
        
      </ContentWrapper>
    </div>
  )
}

export default PageNotFound