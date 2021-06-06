import React from "react";

const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <div className="FooterWrap">
      <div className="FooterMain">CREATE SOMETHING</div>
      <div className="FooterSub">©{Year} KORTOAUS PTY LTD</div>
    </div>
  );
};

export default Footer;
