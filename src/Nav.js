import React, { useState, useEffect } from "react";
import "./Nav.css";

import netflixlogo from "./img/netflixlogo.png";
import { useHistory } from "react-router-dom";

function Nav() {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={` nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          onClick={() => history.push("/")}
          className="nav_logo"
          src={netflixlogo}
          alt=""
        />

        <img
          onClick={() => history.push("/profile")}
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
