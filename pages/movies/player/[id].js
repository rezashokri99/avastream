
import axios from "axios";
import React from "react";
import VideoPlayer from "../../../components/video-player";


const PlayerPage = ({video}) => {
  console.log(video);
  return (
    <div className="">
      <VideoPlayer video={video} />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const videoId = context.params.id;

  const video = (await axios.get("/api/video", { params: { videoId } })).data;

  return {
    props: {
      video,
      customize:true
    },
  };
};

export default PlayerPage;
