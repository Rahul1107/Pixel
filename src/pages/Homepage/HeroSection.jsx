import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

import useFetch from '../../hooks/useFetch'
                        import { imgUrl } from '../../utils/api'
import Img from '../../components/LazyLoadImg'
import ContentWrapper from '../../components/ContentWrapper'

const HeroSection = () => {
    const [background,setBackground] = useState("")
    const [query, setQuery] = useState("")
    const navigate = useNavigate()

    const {data, loading} = useFetch("/trending/all/day")

    useEffect(()=>{
        const bg = imgUrl+data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path
        setBackground(bg)
    },[data])

    const searchQueryHandler = (e)=>{
        if(((e.key === "Enter" || e ==="searchButton") && query.length > 0)){
            navigate(`/search/${query}`)
        }
    }

  return (
    <div className='h-[450px] md:h-[700px] w-full bg-[#1b2330] flex items-center relative '>
        {!loading && 
        <div  className='h-full w-full  absolute top-0 left-0 opacity-50 overflow-hidden '>
        <Img src={background}  className=' h-[450px] md:h-[750px]  w-screen  object-cover object-center'/>
        </div> }

        <div className='w-full h-[250px] absolute bottom-[-2px] bg-gradient-to-b from-transparent to-[#1b2330]'></div>

        <ContentWrapper>
            
        <div className='flex flex-col m-auto items-center text-center relative max-w-[800px]'>
            <span className=' text-white font-bold text-7xl mt-2 '>Welcome.</span>
            <span className='text-white font-semibold text-3xl mt-1 '>Millions of Movies and TV shows. Explore now.</span>

            <div className='mt-8 w-full flex m-auto items-center justify-center '>
                <input
                    type="text"
                    placeholder="Search for Movies or TV show...."
                    onChange={(e)=>setQuery(e.target.value)}
                    onKeyUp={searchQueryHandler}
                    className='h-16 w-full rounded-l-full px-8 placeholder:text-xl outline-0 text-xl font-bold text-[#1b2330]'
                />
                <button className='h-16 bg-white px-8 rounded-r-full text-white font-semibold text-2xl bg-gradient-to-b from-[#f23aff] to-[#fd8b4a] ' 
                onClick={() =>{ searchQueryHandler("searchButton")
            }}>Search</button>
            </div>

        </div>
        </ContentWrapper>
        
    </div>
  )
}

export default HeroSection