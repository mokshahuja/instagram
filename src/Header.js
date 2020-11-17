import React from "react";

import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import SendIcon from "@material-ui/icons/Send";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Header() {


  return (
    <div className="app__header">
      <img
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt="Instagram"
        className="app__header-image"
      />
      <input className="app__header-input" placeholder="Search" />
      <div className="app__header-icons">
        <div className="app__header-home">
          <HomeIcon />
        </div>
        <div className="app__header-message">
          <SendIcon />
        </div>
        <div className="app__header-explore">
          <ExploreIcon />
        </div>
        <div className="app__header-activity">
          <FavoriteBorderIcon />
        </div>
        <div className="app__header-profile">
          <AccountCircleIcon/>
        </div>
      </div>
    </div>
  );
}

export default Header;
