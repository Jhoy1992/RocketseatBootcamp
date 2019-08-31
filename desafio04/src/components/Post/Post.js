import React, { Component } from "react";

import Comment from "../Comment/Comment";
import "./Post.css";

function Post({ data }) {
  return (
    <li>
      <div id="post">
        <div id="header">
          <img
            src={`http://localhost:8080/images/${data.author.avatar}`}
            alt="Profile image"
          />
          <span>
            <h1>{data.author.name}</h1>
            <p>{data.date}</p>
          </span>
        </div>
        <p id="author-content">{data.content}</p>

        <hr />

        <ul id="comments">
          {data.comments.map(comment => (
            <Comment key={comment.id} data={comment} />
          ))}
        </ul>
      </div>
    </li>
  );
}

export default Post;
