import React,{ useState} from 'react'
import useFetch from '../../hooks/useFetch'
import ContentWrapper from '../../components/ContentWrapper'
import MovieCard from '../../components/MovieCard'
import SwitchTab from '../../components/SwitchTab'
import Carousel from '../../components/Carousel'

const Trending = () => {
    const [endpoint , setEndpoint] = useState("day")


    const {data, loading} = useFetch(`/trending/all/${endpoint}`)

    const onTabChange = (tab) =>{
        setEndpoint(tab === "Day"?"day":"week")
    }

  return (

    <div className='mt-16'>
        
        <ContentWrapper>
            <div className='flex items-center justify-between my-2'>
            <span className='text-3xl py-2 text-white font-semibold '>Trending</span>
            <SwitchTab data={['Day','Week']} onTabChange={onTabChange}/>
            </div>
            
            
        </ContentWrapper>
       
       <Carousel data={data?.results} loading={loading} />
    </div>
  )
}

export default Trending