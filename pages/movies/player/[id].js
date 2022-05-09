
import React from "react";
import VideoPlayer from "../../../components/video-player";


const PlayerPage = ({id}) => {
  return (
    <div className="">
      <VideoPlayer />
    </div>
  );
};

export const getServerSideProps = (context) => {
  const id = context.params.id;

  return {
    props: {
      id,
      customize:true
    },
  };
};

export default PlayerPage;
