import React from 'react';
import ReactPlayer from 'react-player';
import styels from "./video-player.module.css"

const VideoPlayer = () => {
    return ( 
        <div>
            <ReactPlayer 
            url="/assets/player/film.mp4"
            controls
            width="100%"
            height="100vh"
            
            />
        </div>
     );
}
 
export default VideoPlayer;