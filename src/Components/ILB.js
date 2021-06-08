import React from "react";
import { SVGIcon } from "./svg/svg";

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
        <a
          href="https://www.youtube.com/channel/UCFJtLk8MieFGjymDpKz2MnA"
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <SVGIcon icon="youtube" size="svg150px" color="tt" />
        </a>
      </div>
    </div>
  );
};

export default ILB;
