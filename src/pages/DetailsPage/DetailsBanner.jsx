import React, { useEffect, useState, useContext } from 'react'
import useFetch from '../../hooks/useFetch'
import { imgUrl } from '../../utils/api'
import Img from '../../components/LazyLoadImg'
import ContentWrapper from '../../components/ContentWrapper'
import {BiSolidStar} from 'react-icons/bi'

import { GenreContext } from '../../context/GenreContext'
const DetailsBanner = ({credits, mediaType, id}) => {
    const {allGenre} = useContext(GenreContext)
    
    const [background, setBackground] = useState('')

    const director = credits?.crew?.filter((f) => f?.job === "Director")
    const writer = credits?.crew?.filter((f) => f?.job === "Screenplay" || f?.job === "Story" || f?.job === "Writer" )
    const {data, loading} = useFetch(`/${mediaType}/${id}`)
    console.log(data)

    useEffect(()=>{
        const bg = imgUrl+data?.backdrop_path
        setBackground(bg)
    },[data])

    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
      };

  return (
    <div className='h-[450px] md:h-[700px] w-full bg-[#1b2330] flex items-center relative '>

    {!loading && 
        <div  className='h-full w-full  absolute top-0 left-0 opacity-50 overflow-hidden '>
            <Img src={background}  className=' h-[450px] md:h-[750px]  w-screen  object-cover object-center'/>
        </div> }

        <div className='w-full h-[250px] absolute bottom-[-2px] bg-gradient-to-b from-transparent to-[#1b2330]'></div>

        <ContentWrapper>
        <div className='flex gap-20  '>
            <div className='flex flex-col relative  max-w-[400px] md:max-w-[400px]  lg:max-w-[550px] xl:max-w-[600px]'>
                <span className='text-white font-semibold text-4xl'>{data?.title}</span>
                <span className='text-white/70 font-base text-lg pt-2'>{data?.tagline}</span>
                <div className='flex items-center gap-10 pt-2'>
                    <span className='flex items-center font-semibold text-white gap-1 text-lg'><BiSolidStar/>{(data?.vote_average)?.toFixed(2)}</span>
                    <span className='text-base lg:text-lg font-semibold text-white/60 gap-1'>
                         {toHoursAndMinutes(data?.runtime)} •  {data?.genres[0]?.name} {" , " + data?.genres[1]?.name}  {" , " + data?.genres[2]?.name}  •  {(data?.release_date)?.slice(0,4)}
                    </span>
                </div>
                <span className='pt-4 text-white/90  max-w-[400px] md:max-w-[400px] lg:max-w-[550px] xl:max-w-[600px] text-left'>{data?.overview}</span>
            </div>
            <div className='relative'>
                <span>jhgfj</span>
            </div>
        </div>
        

        </ContentWrapper>
        


    </div>
  )
}

export default DetailsBanner