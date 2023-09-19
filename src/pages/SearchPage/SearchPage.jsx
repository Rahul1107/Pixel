import React, { useEffect, useState } from 'react'
import ContentWrapper from '../../components/ContentWrapper'
import { useParams } from 'react-router-dom'
import { fetchDataFromApi } from "../../utils/api"
import Spinner from '../../components/Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'
import MovieCard from '../../components/MovieCard'

const SearchPage = () => {
  
  const{query} = useParams()
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);


  const fetchInitialData = () => {
    setLoading(true)
      fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then((res) => {
        setData(res)
        setPageNum(2)
        setLoading(false)
       
      })
    
  }

  const fetchNextPageData = () => {
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then((res) => {
      if(data?.results) {
        setData({
          ...data, results: [...data?.results, ...res.results]
        })
      }else {
        setData(res)
      }
      setPageNum((prev) => prev + 1)
      
    })
  }

  useEffect(() => {
    setPageNum(1)
    fetchInitialData();
  }, [query])


  
  return (
    <div className='bg-[#1b2330] pt-[100px] min-h-[700px]'>
    {loading && (
      <div className='flex items-center justify-center'>
      <Spinner/>
      </div>
    )

    }
    {!loading && (
      <ContentWrapper>
        {data?.results?.length>0 ? (
          <div className='flex flex-col'>
          <div className="text-white text-3xl font-semibold mb-[25px]">
          {`Search results of '${query}'`}
          </div>
          <InfiniteScroll
          className='flex flex-wrap gap-[10px] md:gap-[20px] mb-[50px] pt-2 items-center justify-center'
          dataLength={data?.results?.length || []}
          next={fetchNextPageData}
          hasMore={pageNum < data?.total_pages &&(data?.total_pages != 1)}
          loader={<Spinner/>}
          >
            {data?.results.map((item,index)=>{
              if(item?.media_type === 'person') return;
              return(
                <MovieCard data={item} fromSearch={true} key={index}/>
              )
            })}

          </InfiniteScroll>

          </div>
        ) : 
        (
          <div className='flex h-[450px] items-center justify-center'>
            <span className='text-white text-4xl'>Search result not found!</span>
          </div>
        ) }
        
        
      </ContentWrapper>
    )
      
    }
    </div>
  )
}

export default SearchPage