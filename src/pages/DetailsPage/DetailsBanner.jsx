import React, { useEffect, useState, useContext } from 'react'
import useFetch from '../../hooks/useFetch'
import { imgUrl } from '../../utils/api'
import Img from '../../components/LazyLoadImg'
import ContentWrapper from '../../components/ContentWrapper'
import {BiSolidStar} from 'react-icons/bi'






const DetailsBanner = ({ mediaType, id}) => {
    
    
    const [background, setBackground] = useState('')
    

    
    
    const {data, loading} = useFetch(`/${mediaType}/${id}`)
    const posterUrl = (data?.poster_path? imgUrl+data?.poster_path : null)
    


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
    <>
    <div className='h-[450px] md:h-[700px] w-full bg-[#1b2330] flex items-center relative '>

    {!loading && 
        <div  className='h-full w-full  absolute top-0 left-0 opacity-30 overflow-hidden '>
            <Img src={background}  className=' h-[450px] md:h-[750px]  w-screen  object-cover object-center'/>
        </div> }

        <div className='w-full h-[250px] absolute bottom-[-2px] bg-gradient-to-b from-transparent to-[#1b2330]'></div>

        <ContentWrapper>
        <div className='md:flex gap-20  '>
            <div className='flex flex-col relative top-8 md:top-20  max-w-[800px] md:max-w-[800px]  lg:max-w-[1100px] xl:max-w-[1200px]'>
                <div className='w-[240px] md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] shrink-0 cursor-pointer '>
                <Img src={posterUrl} className='rounded-2xl'/>
                </div>
                
                
                <span className='hidden md:block text-white font-semibold text-4xl'>{data?.title}</span>
                <span className='hidden md:block text-white/70 font-base text-lg pt-2'>{data?.tagline}</span>
                <div className='flex items-center gap-10 pt-2'>
                    <span className='hidden  md:flex items-center font-semibold text-white gap-1 text-lg'><BiSolidStar/>{(data?.vote_average)?.toFixed(2)}</span>
                    <span className='hidden md:block text-base lg:text-lg font-semibold text-white/60 gap-1'>
                         {data?.runtime && toHoursAndMinutes(data?.runtime) +" •  " }{data?.genres[0] !== undefined && data?.genres[0]?.name} {data?.genres[1] !== undefined &&" , " + data?.genres[1]?.name}  {data?.genres[2] !== undefined && " , " + (data?.genres[2]?.name)}{data?.release_date !== undefined && "  •  "+(data?.release_date)?.slice(0,4)}
                    </span>
                </div>
                <span className='hidden md:block pt-4 text-white/90  max-w-[800px] md:max-w-[800px] lg:max-w-[1100px] xl:max-w-[1200px] text-left'>{data?.overview}</span>
                
            </div>

            
            
        </div>
        
       
        </ContentWrapper>
        
        


    </div>
    <ContentWrapper>
    <div className='flex flex-col md:hidden'>
            <span className=' text-white font-semibold text-3xl '>{data?.title}</span>
            <span className=' text-white/70 font-base text-lg pt-2 '>{data?.tagline}</span>
                <div className='flex flex-col  sm:flex-row sm:items-center items-start sm:gap-10 pt-2'>
                    <span className='flex items-center font-semibold text-white gap-1 text-lg'><BiSolidStar/>{(data?.vote_average)?.toFixed(2)}</span>
                    <span className=' text-base lg:text-lg font-semibold text-white/60 gap-1'>
                         {data?.runtime && toHoursAndMinutes(data?.runtime) +" •  " }{data?.genres[0] !== undefined && data?.genres[0]?.name} {data?.genres[1] !== undefined &&" , " + data?.genres[1]?.name}  {data?.genres[2] !== undefined && " , " + (data?.genres[2]?.name)}{data?.release_date !== undefined && "  •  "+(data?.release_date)?.slice(0,4)}
                    </span>
                </div>
                <span className=' pt-4 text-white/90 text-base max-w-[800px] md:max-w-[800px] lg:max-w-[1100px] xl:max-w-[1200px] text-left'>{data?.overview}</span>
                
            </div>
            </ContentWrapper>
    </>
  )
}

export default DetailsBanner