import React from "react";
import ReactPlayer from "react-player/youtube";


const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
    const hidePopup = () => {
        setShow(false);
        setVideoId(null);
    };
    
    return (
        <div className={`'  fixed inset-0 z-40 w-screen h-screen bg-black bg-opacity-30 backdrop-blur-sm flex  ' ${show ? "block" : "hidden"} `}>
            <div className=" flex w-screen h-screen justify-center items-center " onClick={hidePopup}>
            <div className=" flex flex-col justify-center absolute xs:w-[450px]  sm:w-[600px]  aspect-video ">
                <span className=" text-white absolute -inset-y-6  right-0 cursor-pointer" onClick={hidePopup}>
                    Close
                </span>
                
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${videoId}`}
                    controls
                    width="100%"
                    height="100%"
                    playing={true}
                    
                />
                </div>
            </div>
        </div>
    );
};

export default VideoPopup;
