import React from 'react'
import Img from './LazyLoadImg'

const CastCard = ({url,name,character}) => {
  return (
    <div className='w-[130px] md:w-[180px] flex flex-col items-center'>
        <Img src={url} className="rounded-full w-[125px] h-[125px] md:h-[175px] md:w-[175px] text-center"/>
        <span className='text-white text-lg font-normal items-center mx-auto'>{name}</span>
        <span className='text-white/50 text-base font-normal items-center mx-auto'> {character}</span>
    </div>
  )
}

export default CastCard

