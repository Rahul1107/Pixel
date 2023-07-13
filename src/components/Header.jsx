import React, { useEffect, useState } from 'react'
import ContentWrapper from './ContentWrapper'
import logo from '../assets/logo.png'
import {FaSearch} from 'react-icons/fa'
import {HiMenu} from 'react-icons/hi'
import {RiCloseFill} from 'react-icons/ri'
import { useLocation, useNavigate } from 'react-router-dom'




const Header = () => {
  const [mobileMenu,setMobileMenu] = useState(false)
  const [searchBar,setSearchBar] = useState(false)
  const [query, setQuery] = useState("")
  const [backgrondColor,setBackgroundColor] = useState(" bg-[#1b2330]/30 ")
 

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[location])

  const openMobileMenu = ()=>{
    setMobileMenu(true)
    setSearchBar(false)
  }

  const openSearchBar = ()=>{
    setMobileMenu(false)
    setSearchBar(true)
  }

  const handleNavigation = (type)=>{
    if (type === "movie" ){
      navigate("/explore/movie");
    } else{
      navigate("/explore/tv");
    }

    setMobileMenu(false)
  }

  const searchQueryHandler = (e)=>{
    if(((e.key === "Enter") && query.length > 0)){
        navigate(`/search/${query}`)
        setSearchBar(false)
    }
}

  const controlNavbar = ()=>{
    if(window.scrollY>200){
      setBackgroundColor(' bg-[#1b2330] ')
    }else{
      setBackgroundColor(' bg-[#1b2330]/30 ')
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll", controlNavbar)
    return () => {
      window.removeEventListener("scroll", controlNavbar)
    }
  }, [])
  

  return (
      <header className={`w-full flex flex-col items-center fixed z-40 h-[60px] ${backgrondColor} transform duration-500 backdrop-blur-[1.5px] shadow-xl  ${(mobileMenu || searchBar)&&'bg-[#1b2330]'}`  }>

        <ContentWrapper>

          <div className='flex justify-between items-center '>

            <div className='cursor-pointer' 
            onClick={()=>{navigate('/')}}>
              <img src={logo} alt='LOGO' className='h-[50px]' />
            </div>

            <div >

              <ul className='flex h-[60px] items-center'>

                <li className='text-lg mr-[30px] font-semibold text-white hidden md:block hover:text-pink-500 transform duration-200 cursor-pointer'
                onClick={()=>{
                  handleNavigation('movie')
                }}>Movies</li>

                <li className='text-lg mr-[30px] font-semibold text-white hidden md:block hover:text-pink-500 transform duration-200 cursor-pointer'
                onClick={()=>{
                  handleNavigation('tv')
                }}>TV Shows</li>

                <li className='text-white text-lg mr-[30px] md:mr-0 hover:text-pink-500 transform duration-200 cursor-pointer' 
                  onClick={openSearchBar}><FaSearch /></li>

                <li className='text-white text-lg mr-[30px] md:mr-0 md:hidden hover:text-pink-500 transform duration-200 cursor-pointer'>
                  {mobileMenu ?<RiCloseFill 
                    onClick={()=>{
                      setMobileMenu(false);
                    }}/>:
                    <HiMenu 
                      onClick={openMobileMenu}
                    />}</li>

              </ul>

            </div>

          </div>
          
        </ContentWrapper>
    
        <div className={` bg-[#1b2330]  w-full translate-y-[-140px] ${mobileMenu&&'translate-y-[0px]'} transform duration-300 shadow-xl md:hidden`}> 

          <ContentWrapper>

            <ul className='flex flex-col justify-center mx-auto items-center'>
              
              <li className='text-lg mt-[5px] font-semibold text-white hover:text-pink-500 transform duration-200 cursor-pointer'
              onClick={()=>{
                  handleNavigation('movie')
                }}>Movies</li>

              <li className='text-lg my-[5px] font-semibold text-white  hover:text-pink-500 transform duration-200 cursor-pointer'
              onClick={()=>{
                  handleNavigation('tv')
                }}>TV Shows</li>

            </ul>

          </ContentWrapper>

        </div>
      
        <div  className={`w-full  transform duration-300 shadow-xl h-[60px] bg-slate-100  translate-y-[-200px] md:translate-y-[-120px] ${searchBar&&'translate-y-[-70px] md:translate-y-[0px]'} -z-40  `}>
        
          <ContentWrapper>

            <div className='flex items-center'>

              <input className=' px-4 py-1 w-full text-2xl text-[#1b2330] font-semibold bg-slate-100 outline-none placeholder:text-xl placeholder:font-semibold ' placeholder='Search for a movie or tv show...'
                onChange={(e)=>setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />

              <RiCloseFill className='text-2xl font-semibold text-[#1b2330]'
               onClick={()=>{setSearchBar(false);}}/>

            </div>
  
          </ContentWrapper>

        </div>

      
      </header>
  )
}

export default Header