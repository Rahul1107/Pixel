import React from 'react'
import {BiSolidStar} from 'react-icons/bi'

const Rating = ({data}) => {
  return (
    <div>
      <span className='text-base md:text-lg text-white w-14  flex items-center justify-center rounded-full bg-gradient-to-b from-[#f23aff] to-[#fd8b4a] font-semibold absolute left-1 bottom-1'><BiSolidStar/>{(data).toFixed(2)}</span>  
    </div>
  )
}

export default Rating