import React, { useState, useEffect } from 'react';
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);
    
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
        } else handleShow(false);
      });
      return () => {
        window.removeEventListener("scroll");
      };
    }, []);
    
  return (
      <div className={`nav ${show && "nav__black"}`}>
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
          alt="Netflix Logo"
        />
        
        <img 
          className="nav__avatar"
          src="./iconfinder_7_avatar_2754582.png"
          alt="Netflix Logo"
        />
      </div>
  );
}

export default Nav