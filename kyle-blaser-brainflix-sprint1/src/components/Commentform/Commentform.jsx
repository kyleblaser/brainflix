/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Commentform.scss";

function Commentform(props) {
  const [commentText, setCommentText] = useState("");

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(commentText);
  };

  return (
    <form className="comments" onSubmit={handleSubmit}>
      <div className="comments__picture"></div>
      <label className="comments__label" htmlFor="text">
        JOIN THE CONVERSATION
      </label>
      <textarea
        className="comments__input"
        id="text"
        placeholder="Write comment here"
        value={commentText}
        onChange={handleCommentChange}
      ></textarea>
      <button className="comments__button">COMMENT</button>
    </form>
  );
}

Commentform.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Commentform;
