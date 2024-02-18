import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PlayList, VideoPlayerComponent } from "../Components";
import videoThumbnails from "../video.json";

const VideoPlayer = () => {
  const location = useLocation();
  const singleData = location?.state;

  const [currentVideo, setCurrentVideo] = useState(singleData?.sources[0]);
  const [newVideo, setnewVideo] = useState();

  useEffect(() => {
    setCurrentVideo(singleData?.sources[0]);
  }, [singleData]);

  const handleSelectVideo = (data) => {
    console.log("data: ", data);
    setCurrentVideo(data?.sources[0]);
    setnewVideo(data?.title);
  };

  return (
    <Fragment>
      <div className="bg-indigo-800 h-auto w-auto p-4">
        <h1 className="text-3xl font-Poppins text-justify text-white mb-4">
          Video Player
        </h1>
        <div className="flex flex-col md:flex-row">
          {/* Video player component */}
          <div className="w-full md:w-3/4 max-w-screen-lg md:ml-4 mb-4 md:mb-0">
            <VideoPlayerComponent key={currentVideo} videoUrl={currentVideo} />
            <h4 className="text-2xl md:text-3xl text-white text-center md:text-left">
              {newVideo ? newVideo : singleData?.title}
            </h4>
          </div>

          {/* Playlist side panel component */}
          <div className="w-full md:w-1/4 md:ml-4">
            <PlayList
              videos={videoThumbnails}
              onSelectVideo={handleSelectVideo}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VideoPlayer;
