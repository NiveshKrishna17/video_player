import React, { Fragment, useState } from "react";
import { PlayListVideoPlayer } from "../Components";

const PlayList = ({ videos, onSelectVideo }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const handleOpen = (data) => {
    console.log("data: ", data);
    onSelectVideo(data);
  };
  return (
    <Fragment>
      <div className="max-w-screen-md mx-auto p-4 overflow-auto">
        <h2 className="text-3xl text-white mb-4">Playlist</h2>
        <ul className="space-y-4">
          {videos.map((video, index) => (
            <li
              key={index}
              className="flex items-center justify-between border-b border-gray-300 py-2"
              onMouseEnter={() => setSelectedVideo(video.sources[0])}
              onMouseLeave={() => setSelectedVideo(null)}
            >
              <div className="flex items-center">
                {selectedVideo === video.sources[0] ? (
                  <div className="w-24 h-16 mr-4">
                    <PlayListVideoPlayer videoUrl={video.sources[0]} />
                  </div>
                ) : (
                  <PlayListVideoPlayer videoUrl={video.sources[0]} />
                )}
                <span
                  className="text-xl text-white cursor-pointer"
                  onClick={() => handleOpen(video)}
                >
                  {video.title}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default PlayList;
