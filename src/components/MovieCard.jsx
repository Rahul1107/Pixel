import React from 'react'
import { useNavigate } from 'react-router-dom'
import { imgUrl } from '../utils/api'
import dayjs from 'dayjs'
import Img from './LazyLoadImg'
import Rating from './Rating'
import Genre from './Genre'

const MovieCard = ({data, loading, fromSearch, mediaType}) => {

    const navigate = useNavigate();
   
    const posterUrl = (data.poster_path? imgUrl+data.poster_path : null)
     
  return (
    <div className='w-[calc(50%-5px)] md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] shrink-0 cursor-pointer '
    onClick={()=>{navigate(`/${data.media_type || mediaType}/${data.id}`)}}>

        <div className=' hover:scale-105 transform duration-300 relative aspect-[1/1.5]  flex justify-between '>
            <Img src={posterUrl} className='rounded-2xl'/>
            {!fromSearch &&(<Rating data={data?.vote_average}/>)}
            
            {!fromSearch &&(<Genre genre={(data?.genre_ids).slice(0,2)} media_type={data?.media_type}/>)}
           
           

        </div>
        
        <div className='flex flex-col my-1'>
            <span className='text-xl md:text-2xl text-white  truncate '>{data.title || data.name}</span>
            <span className='text-base md:text-lg text-white/50'>{dayjs(data.release_date).format('MMM D, YYYY')}</span>
        </div>
    

    
    
    </div>
  )
}

export default MovieCard