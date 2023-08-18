/** @format */

import React from "react";
import "./Comments.scss";
import { format } from "date-fns";

function formatDate(timestamp) {
  return format(new Date(Number(timestamp)), "MM/dd/yyyy");
}

function Comment({ id, name, timestamp, comment }) {
  return (
    <div key={id} className="commentsLoaded">
      <div className="commentsLoaded-top">
        <div className="commentsLoaded-top__circle"></div>
        <p className="commentsLoaded-top__account">{name}</p>
        <p className="commentsLoaded-top__date">{formatDate(timestamp)}</p>
      </div>
      <p className="commentsLoaded__bottom">{comment}</p>
    </div>
  );
}

function Comments({ comments }) {
  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </>
  );
}

export default Comments;
