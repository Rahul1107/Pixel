import React from 'react'
import ContentWrapper from './ContentWrapper'
import {FaLinkedin,FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[#161c26] py-10'>
        <ContentWrapper>
        
        <ul className="flex gap-2  items-center justify-center text-white font-semibold text-base md:text-xl md:gap-4 ">
                    <li className="hover:text-pink-500 transform duration-200 cursor-pointer">Terms Of Use</li>
                    <li className="hover:text-pink-500 transform duration-200 cursor-pointer">Privacy-Policy</li>
                    <li className="hover:text-pink-500 transform duration-200 cursor-pointer">About</li>
                    <li className="hover:text-pink-500 transform duration-200 cursor-pointer">Blog</li>
                    <li className="hover:text-pink-500 transform duration-200 cursor-pointer">FAQ</li>
        </ul>
    
        <div className='my-8  flex items-center justify-center '>
            <span className='max-w-[800px] text-lg text-white/50 text-center'>Pixels is your ultimate online platform for movie lovers. You can explore thousands of movies from various genres and languages. 
            </span>
        </div>
        <div className='flex gap-6 items-center justify-center'>
            <span className='text-4xl text-white hover:text-pink-500 transform duration-200 cursor-pointer'>
             <a href='https://www.linkedin.com/in/rahulverma-1107' target='_blank'><FaLinkedin /></a>
            </span>
            <span className='text-4xl text-white hover:text-pink-500 transform duration-200 cursor-pointer'>
            <a href='https://github.com/Rahul1107/Pixels.git' target='_blank'><FaGithub /></a>
            </span>
        </div>

        </ContentWrapper>
    </div>
  )
}

export default Footer