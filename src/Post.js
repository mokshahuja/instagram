import React from "react";

import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
function Post({ username, imageUrl, caption, avatarUrl }) {
  return (
    <div className="post">
      {/* avatar + username */}

      <div className="post__header">
        <Avatar className="post__avatar" alt={username} src={avatarUrl} />
        <h3>{username}</h3>
      </div>

      {/* image */}
      <img className="post__image" src={imageUrl} alt="post" />
      {/* username + caption*/}
      <h4 className="post__text">
        <strong>{username}: </strong>
        {caption}
      </h4>
    </div>
  );
}

export default Post;
