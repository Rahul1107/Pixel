import React from 'react'
import ContentWrapper from '../../components/ContentWrapper'
import DetailsBanner from './DetailsBanner'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const DetailsPage = () => {
  const{id, mediaType} = useParams()
  console.log(mediaType)
  console.log(id)
  const {data, loading} = useFetch(`/${mediaType}/${id}/credits`)
  console.log(data)
  return (
    <div className='bg-[#1b2330]  min-h-[700px]'>
    
      <DetailsBanner credits={data} mediaType={mediaType} id={id}/>
    
    </div>
  )
}

export default DetailsPage