import React from "react";
import logo from "./logo.svg";

const Header = () => {
  return (
    <div className="HeaderWrap">
      <div className="HeaderLeft">
        <img src={logo} className="logo" alt="logo" />
        <div className="MainNav">
          <ul>
            <li>
              <a href="#">CUBEROLL</a>
            </li>
            <li>
              <a href="#">KTD PORTAL</a>
            </li>
            <li>
              <a href="#">ICED LONG BLACK</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="HeaderRight">KORTOAUS PTY LTD</div>
    </div>
  );
};

export default Header;
