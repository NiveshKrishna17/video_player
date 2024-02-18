import React, { Fragment } from "react";

const VideoPlayer = ({ videoUrl }) => {
  return (
    <Fragment>
      <div>
        <video controls autoPlay>
          <source src={videoUrl} type="video/mp4" controls="1" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Fragment>
  );
};

export default VideoPlayer;
