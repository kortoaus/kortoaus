import React from "react";
import logo from "./svg/logo.svg";

const Header = () => {
  return (
    <div className="HeaderWrap">
      <div className="HeaderLeft">
        <img src={logo} className="logo" alt="logo" />
        <div className="MainNav">
          <ul>
            <li>
              <a href="/CUB">CUBEROLL</a>
            </li>
            <li>
              <a href="/KTD">KTD PORTAL</a>
            </li>
            <li>
              <a href="/ICE">ICED LONG BLACK</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="HeaderRight">KORTOAUS PTY LTD</div>
    </div>
  );
};

export default Header;
