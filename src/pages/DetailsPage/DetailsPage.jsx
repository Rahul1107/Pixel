import React from 'react'

import DetailsBanner from './DetailsBanner'
import TopCast from './TopCast'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Video from './Video'
import Similar from './Similar'
import Recommendations from './Recommendations'

const DetailsPage = () => {
  const{id, mediaType} = useParams()
  console.log(mediaType)
  console.log(id)
  const {data, loading} = useFetch(`/${mediaType}/${id}/credits`)
  const {data: videoData, loading: videoDataLoading} =useFetch(`/${mediaType}/${id}/videos`)


  return (
    <div className='bg-[#1b2330]  min-h-[700px] '>
    
      <DetailsBanner  mediaType={mediaType} id={id}/>
      <TopCast data={data?.cast} loading={loading} />
      <Video data={videoData} loading={videoDataLoading} />
      <Similar mediaType={mediaType} id={id}/>
      <Recommendations mediaType={mediaType} id={id} />

    
    </div>
  )
}

export default DetailsPage