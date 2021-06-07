import React from "react";
// import Tools from "./ToolsIcon";

const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <div className="FooterWrap">
      <div className="FooterMain">CREATE SOMETHING</div>
      <div className="FooterSub">©{Year} KORTOAUS PTY LTD</div>
      <div className="FooterContact">dev@kortoaus.com.au</div>
      <div className="FooterIconWrap">
        {/* <Tools color="ot" size="svg30px" /> */}
      </div>
    </div>
  );
};

export default Footer;
