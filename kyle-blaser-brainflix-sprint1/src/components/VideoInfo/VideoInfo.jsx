/** @format */

import React from "react";
import ViewIcon from "../../assets/icons/views.svg";
import LikeIcon from "../../assets/icons/likes.svg";
import "./VideoInfo.scss";

function VideoInfo(props) {
  const formatDate = (timestamp) => {
    const date = new Date(Number(timestamp));
    return `${("0" + (date.getMonth() + 1)).slice(-2)}/${(
      "0" + date.getDate()
    ).slice(-2)}/${date.getFullYear()}`;
  };

  return (
    <div className="info">
      <h1 className="info__title">{props.content.title}</h1>
      <div className="info-divider">
        <div className="info-user">
          <p className="info-user__data">By {props.content.channel}</p>
          <p className="info-user__dataDate">
            {formatDate(props.content.timestamp)}
          </p>
        </div>
        <div className="info-social">
          <p className="info-social__viewcount">
            <img
              className="info-social__icon"
              src={ViewIcon}
              alt="View count icon"
            />
            {props.content.views}
          </p>
          <p className="info-social__likecount">
            <img
              className="info-social__icon"
              src={LikeIcon}
              alt="Like count icon"
            />
            {props.content.likes}
          </p>
        </div>
      </div>
      <p className="info__description">{props.content.description}</p>
      <h4 className="info__commentsnum">3 Comments</h4>
    </div>
  );
}

export default VideoInfo;
