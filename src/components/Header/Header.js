import React from "react";

import "./Header.css";
import logo from "./img/hox-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav class="nav justify-content-end">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <Link to="/" class="nav-link-1 active" aria-current="page">
              HOX FAMILY
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link-1" href="https://hoxculture.netlify.app/">
              CULTURE
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link-1" href="http://hoxusc.weebly.com/team.html">
              TEAM
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link-1"
              href="http://hoxusc.weebly.com/resources--event.html"
            >
              R&E
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link-1" href="https://www.instagram.com/hox_usc/">
              INSTAGRAM
            </a>
          </li>
          {/* <li class="nav-item">
            <Link class="nav-link-1" to="/Apply">
              APPLY
            </Link>
          </li> */}
        </ul>
      </nav>
      <div className="header__Logo-box">
        <img src={logo} alt="Logo" className="header__logo" />
        <h1 className="u-center-text application-page">Application Page</h1>
      </div>
    </div>
  );
};

export default Header;
