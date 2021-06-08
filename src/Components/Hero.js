import React from "react";
import logo from "../Components/svg/logo_white.svg";
import ilb from "../Components/svg/icedlongblack.svg";
const Hero = () => {
  return (
    <div className="HeroWrap">
      <div className="HeroInnerWrap">
        <div className="HeroLogoWrap">
          <img src={logo} className="HeroLogo" alt="Hero Icons" />
          <img src={ilb} className="HeroLogo" alt="Hero Icons" />
        </div>
        <div className="HeroTitle">
          <h1>Create Something</h1>
        </div>
        {/* <div className="HeroContext">CREATE READ UPDATE DELETE</div> */}
      </div>
    </div>
  );
};

export default Hero;
