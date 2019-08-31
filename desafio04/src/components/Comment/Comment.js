import React, { Component } from "react";

import "./Comment.css";

function Comment({ data }) {
  return (
    <li className="comment">
      <img
        src={`http://localhost:8080/images/${data.author.avatar}`}
        alt="Profile image"
      />

      <p>
        <strong>{data.author.name}</strong>
        {` ${data.content}`}
      </p>
    </li>
  );
}

export default Comment;
