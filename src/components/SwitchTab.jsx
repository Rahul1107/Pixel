import React, { useState } from 'react'

const SwitchTab = ({data , onTabChange}) => {
    
    const [selectedTab, setSelectedTab] = useState(0)
    const activeTab = (tab,index)=>{
        // onTabChange(selectedTab)
        setSelectedTab(index)
        onTabChange(tab,index)
    }
    

  return (
    <div className='flex  h-[35px]  items-center justify-center p-1 rounded-full bg-white'>

        {data.map((tab,index)=>{
            return(
            <button key={index}className={`px-2 rounded-full font-semibold  text-lg mx-0.5 ${selectedTab==index?' bg-gradient-to-b from-[#f23aff]/90 to-[#fd8b4a]/90 text-white':' bg-white text-[#1b2330]' } transform duration-500`}
            onClick={()=>activeTab(tab,index)}
            >{tab}</button>)
        })}

       
    </div>
  )
}

export default SwitchTab