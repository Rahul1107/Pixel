import React, { useRef } from 'react'
import MovieCard from './MovieCard'
import ContentWrapper from './ContentWrapper'
import {BiRightArrowCircle} from 'react-icons/bi'
import {BiLeftArrowCircle} from 'react-icons/bi'
import Shimmer from './Shimmer'


const Carousel = ({data,loading}) => {

    const carouselContainer = useRef()

    const navigation = (dir)=>{
        const container = carouselContainer.current
        const scrollAmount = (dir =='left')? container.scrollLeft -(container.offsetWidth + 20) : container.scrollLeft +(container.offsetWidth + 20)

        container.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        })
        
    }

  return (
    <div >
    <ContentWrapper >
    <div className='relative'>
        <BiLeftArrowCircle 
            className='absolute top-[35%] left-0 text-4xl cursor-pointer text-white/70 hover:text-white
         z-20 hidden md:block'
            onClick={()=>navigation('left')}
         />
        <BiRightArrowCircle 
            className='absolute top-[35%]  right-0 text-4xl cursor-pointer text-white/70 hover:text-white z-20 '
            onClick={()=>navigation('right')}
            />

    <div className='flex gap-[10px] overflow-y-hidden my-[-20px] py-[20px] md:gap-[20px] ' ref={carouselContainer}>
        {!loading ? (data ?(data.map((d)=>{
                return(
              
                <MovieCard data={d} key={d.id} />
            
                )
            })): null)
            
        :
        <div className='flex w-screen'>
           <Shimmer/>
           
        </div>
        }
        </div>
        </div>
    </ContentWrapper>
    </div>
  )
}

export default Carousel