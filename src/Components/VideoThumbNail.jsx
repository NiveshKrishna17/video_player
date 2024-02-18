import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoThumbNail = ({ key, src, title, data }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleOpen = (e) => {
    if (e) return navigate("/videoPlayer", { state: e });
  };

  return (
    <Fragment>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
        <div
          className="relative"
          key={key}
          style={{ width: "100%", paddingTop: "56.25%" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <video
            src={src}
            title={title}
            className="absolute inset-0 w-full h-full rounded-lg shadow-md object-cover transition duration-300 ease-in-out transform hover:scale-105"
            muted
            loop
            autoPlay={isHovered}
            onClick={() => handleOpen(data)}
          ></video>

          <div className="absolute bottom-0 left-0 p-2 bg-gray-800 text-white w-full opacity-75 transition duration-300 ease-in-out opacity-0 hover:opacity-100">
            {title}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VideoThumbNail;
