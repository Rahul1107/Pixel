import React, { useState } from 'react'
import Img from '../../components/LazyLoadImg';
import ContentWrapper from '../../components/ContentWrapper';
import VideoPopup from '../../components/VideoPopup';
import { AiOutlinePlayCircle } from "react-icons/ai";

const Video = ({data, loading}) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);
   
  return (
        <>
        <div className=''>
        <ContentWrapper>
        <div className='text-3xl py-2 text-white font-semibold'>Videos</div>
            <div className='pt-4 pr-2 gap-3 flex  overflow-y-hidden '>
              
                {data?.results?.map((video)=> (
                    <div key={video?.id}
                        onClick={()=>{
                            setVideoId(video?.key);
                            setShow(true);
                        }}
                        className='flex flex-col scroll-smooth '
                    >
                        <div className=' w-64 relative'>   
                            <Img src={`https://img.youtube.com/vi/${video?.key}/mqdefault.jpg`} className="rounded-2xl "/>
                            <AiOutlinePlayCircle className=' absolute text-pink-600 top-[48px] left-[112px] text-4xl  '/>
                        </div>
                        <div className='text-white text-lg font-normal '> {video?.name}</div>
                        
                    </div>
                )
                
                )}
                
               
            </div>
            </ContentWrapper>
           
            </div>
                        
            <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
                className= ""
            />
            </>
    
  )
}

export default Video