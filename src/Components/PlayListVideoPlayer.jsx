import React, { Fragment } from "react";

const PlayListVideoPlayer = ({ videoUrl }) => {
  return (
    <Fragment>
      <div className="w-[100px]">
        <video controls autoPlay muted>
          <source src={videoUrl} type="video/mp4" controls="1" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Fragment>
  );
};

export default PlayListVideoPlayer;
