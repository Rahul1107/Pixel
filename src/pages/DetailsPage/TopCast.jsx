import React, { useRef } from 'react'
import ContentWrapper from '../../components/ContentWrapper'

import { profileUrl } from '../../utils/api'
import avatar from "../../assets/avatar.png"
import CastCard from '../../components/CastCard';

const TopCast = ({data, loading}) => {
   
    

  return (
    <div className=   "mt-6" >
  <ContentWrapper>
  <div className='text-3xl py-2 text-white font-semibold '>Top Cast</div>
    <div className='flex overflow-y-hidden gap-5 ' >
    
        {!loading ? (data ?(data.map((item)=>{
            let url
                item?.profile_path != null?(url = profileUrl+ item?.profile_path):(url = avatar)
                return(
                    <div>
                        <CastCard url={url} name={item?.name} character={item?.character}/>
                        
                    </div>
                
            
                )
            })): null)
            
        :
        null
        }
        </div>
        </ContentWrapper>
      
        </div>


  )
}

export default TopCast


