import React from 'react';
import ReactPlayer from 'react-player';
import styels from "./video-player.module.css"

const VideoPlayer = ({video}) => {
    
    const arrayBuffer = new Buffer.from(video.media.data.data).toString("base64");
    return ( 
        <div>
            <ReactPlayer 
            url={`data:video/mp4;base64,${arrayBuffer}`}
            controls
            width="100%"
            height="100vh"
            
            />
        </div>
     );
}
 
export default VideoPlayer;