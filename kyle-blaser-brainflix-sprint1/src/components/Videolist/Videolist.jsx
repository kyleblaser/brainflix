/** @format */

import React from "react";
import "./Videolist.scss";

function Videolist(props) {
  const renderThumbnailClass = (video) => {
    if (video.title === "Become A Travel Pro In One Easy Lesson") {
      return "videoList__thumbnail--large";
    } else if (video.title === "Les Houches The Hidden Gem Of The Chamonix") {
      return "videoList__thumbnail--rotate";
    }
    return "videoList__thumbnail";
  };

  return (
    <div className="videoList">
      <h5 className="videoList__header">NEXT VIDEO</h5>
      {props.list.map((video) => (
        <div
          key={video.id}
          onClick={() => props.clickHandler(video.id)}
          className="videoList-inner"
        >
          <div className="videoList-wrapper">
            <img
              className={`videoList__thumbnail ${renderThumbnailClass(video)}`}
              src={video.image}
              alt="Thumbnail for the video"
            />
          </div>
          <div className="videoList-inner-block">
            <h4 className="videoList-inner-block__title">{video.title}</h4>
            <p className="videoList-inner-block__channel">{video.channel}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Videolist;
