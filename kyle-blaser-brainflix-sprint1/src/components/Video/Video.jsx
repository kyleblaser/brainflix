/** @format */

import React from "react";
import "./Video.scss";

function Video(props) {
  return (
    <div className="video">
      <div className="video-thumbWrapper">
        <video
          className="video__img"
          width="470"
          height="255"
          poster={props.content.image}
          controls
        >
          <source src={props.content.videoSource} type="video/mp4" />
          {}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Video;
