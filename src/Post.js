import React, { useState } from "react";

import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";
function Post({ username, imageUrl, caption, avatarUrl }) {
  const [buttonColor, setButtoncolor] = useState("none");

  return (
    <div className="post">
      {/* avatar + username */}

      <div className="post__header">
        <Avatar className="post__avatar" alt={username} src={imageUrl} />
        <h3>{username}</h3>
      </div>

      {/* image */}
      <img
        className="post__image"
        src={imageUrl}
        alt="post"
        onDoubleClick={() => {
          setButtoncolor("secondary");
        }}
      />

      {/* likes , comments, share */}
      <div className="post__responses">
        <Button
          className="post__likes"
          onClick={() => {
            if (buttonColor === "secondary") {
              setButtoncolor("white");
            } else {
              setButtoncolor("secondary");
            }
          }}
        >
          <FavoriteIcon color={buttonColor} />
        </Button>
        <Button className="post__comments">
          <CommentIcon />
        </Button>
        <Button className="post__share">
          <SendIcon />
        </Button>
      </div>

      {/* username + caption*/}
      <h4 className="post__text">
        <strong>{username}: </strong>
        {caption}
      </h4>
    </div>
  );
}

export default Post;
