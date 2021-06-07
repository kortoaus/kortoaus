import React from "react";
// import logo from "../Components/svg/logo_white.svg";
// import ilb from "../Components/svg/icedlongblack.svg";
import { SVGIcon } from "./svg/svg";
import YouTube from "react-youtube";

//
const ILB = () => {
  return (
    <div className="HeroWrap ILBWrap">
      <div className="HeroInnerWrap">
        <div className="HeroTitle">
          <h1>KTD MEDIA LAB</h1>
        </div>
        <div className="HeroContext" style={{ marginBottom: 20 }}>
          WITH ICED LONG BLACK
        </div>
        <YouTube videoId="2ur_Jbq69sQ" containerClassName="HeroVideo"></YouTube>
        {/* <YouTube videoId="Tjpu9I2HL7k" containerClassName="HeroVideo"></YouTube> */}
        <a
          href="https://www.youtube.com/channel/UCFJtLk8MieFGjymDpKz2MnA"
          target="_blank"
          rel="noreferrer"
          className="MobileReplace"
        >
          <SVGIcon icon="youtube" size="svg150px" color="tt" />
        </a>
      </div>
    </div>
  );
};

export default ILB;
