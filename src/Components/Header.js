import React from "react";
import logo from "./logo.svg";

const Header = () => {
  return (
    <div className="HeaderWrap">
      <div className="HeaderLeft">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="HeaderRight">KORTOAUS PTY LTD</div>
    </div>
  );
};

export default Header;
