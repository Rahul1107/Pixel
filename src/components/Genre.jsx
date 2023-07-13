import React, { useContext } from 'react'

import { GenreContext } from '../context/GenreContext'

const Genre = ({genre, media_type}) => {
  
  const {allGenre} = useContext(GenreContext)
  

  
  return (
    <div className='absolute right-1 bottom-1 flex flex-col '>
    {!allGenre ?null :
   
    genre.map((g)=>{
      return(

      <span className='text-sm  text-white  m-0.5 p-1 flex items-center justify-center rounded-full bg-gradient-to-b from-[#f23aff]/90 to-[#fd8b4a]/90 font-semibold ' 
      key={g}>{ allGenre[g]?.name}
      
      
      </span>
      
    )
    })}

        
    </div>
  )
}

export default Genre