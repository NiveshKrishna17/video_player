import React, { Fragment } from "react";
import { VideoThumb } from "../Components";
import videoThumbnails from "../video.json";

const Home = () => {
  return (
    <Fragment>
      <div className="container mx-auto w-auto py-8 bg-indigo-800 md:h-screen sm:h-auto">
        <h1 className="text-3xl font-bold mb-4 mx-2 text-white">
          Task - Video Player
        </h1>
        <div className="flex flex-wrap mx-2">
          {videoThumbnails.map((thumbnail, index) => (
            <VideoThumb
              key={index}
              src={thumbnail.sources[0]}
              title={thumbnail.title}
              data={thumbnail}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
