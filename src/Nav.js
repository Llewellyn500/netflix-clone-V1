import React from 'react';
import "./Nav.css";

function Nav() {
  return (
      <div className="nav">
        <img
          className="nav_logo"
          src="https://commons.m.wikimedia.org/wiki/File:Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
        
        <img 
          className="nav__avatar"
          src="https://pbs.twimg.com/profile_images/12401199904155"
          alt="Netflix Logo"
        />
      </div>
  );
}

export default Nav