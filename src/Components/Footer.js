import React from "react";
import Tools from "./ToolsIcon";

const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <div className="FooterWrap">
      <div className="FooterMain">CREATE SOMETHING</div>
      <div className="FooterSub">©{Year} KORTOAUS PTY LTD</div>
      <div className="FooterIconWrap">
        <Tools color="white" size="svg30px" />
      </div>
    </div>
  );
};

export default Footer;
