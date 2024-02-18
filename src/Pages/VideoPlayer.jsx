import React, { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import { PlayList, VideoPlayerComponent } from "../Components";
import videoThumbnails from "../video.json";

const VideoPlayer = () => {
  const location = useLocation();
  const singleData = location?.state;

  const [currentVideo, setCurrentVideo] = useState(singleData?.sources[0]);

  const handleSelectVideo = (data) => {
    console.log("data: ", data);
    setCurrentVideo(data?.sources[0]);
  };

  return (
    <Fragment>
      <div className="bg-indigo-800 h-auto w-auto">
        <h1 className="text-3xl font-[Poppins] text-justify text-white ml-4 mb-4">
          Video Player
        </h1>
        <div className="flex">
          {/* Video player component */}
          <div className="w-3/4 max-w-screen-lg ml-4">
            <VideoPlayerComponent videoUrl={currentVideo} />
            <h4 className="text-3xl text-white flex items-center justify-center">
              {singleData?.title}
            </h4>
          </div>

          {/* Playlist side panel component */}
          <div className="w-1/4">
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
