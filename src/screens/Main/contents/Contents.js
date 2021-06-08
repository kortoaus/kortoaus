import React from "react";
import colors from "../../../colors";
import { SVGIcon } from "../../../Components/svg/svg";
import MainSection from "./MainSection";
import CuberollSVG from "../../../Components/svg/cuberoll.svg";

export const AppContent = () => {
  return (
    <MainSection className="SectionOneColumn" bgcolor={colors.white}>
      <div className="OneContext">
        <h1>Developments</h1>
        <div>웹/네이티브 어플리케이션 제작</div>
      </div>
      <div className="OneIcons">
        <SVGIcon icon="django" size="svg75px" />
        <SVGIcon icon="react" size="svg75px" />
        <SVGIcon icon="wordpress" size="svg75px" />
        <SVGIcon icon="woo" size="svg75px" />
      </div>
    </MainSection>
  );
};

export const WebsiteContent = () => {
  return (
    <MainSection className="SectionOneColumn" bgcolor={colors.white}>
      <div className="OneContext">
        <h1>Branded Contents</h1>
        <div>브랜드 컨텐츠 제작</div>
      </div>
      <div className="OneIcons">
        {/* <SVGIcon icon="youtube" size="svg100px" /> */}
        <SVGIcon icon="ps" size="svg75px" />
        <SVGIcon icon="ai" size="svg75px" />
        <SVGIcon icon="pr" size="svg75px" />
        <SVGIcon icon="ae" size="svg75px" />
      </div>
    </MainSection>
  );
};

export const Cuberoll = () => {
  return (
    <MainSection className="SectionTwoColumn cuberoll" bgcolor={colors.white}>
      <div className="TwoIcons">
        <img src={CuberollSVG} alt="cuberoll" className="svg200px" />
      </div>
      <div className="TwoContext">
        <h1>B2B Marketplace</h1>
        <div>외식업 B2B 주문/배송 시스템(개발중)</div>

        <ul className="cuberollUL">
          <li>Vendor Web App</li>
          <li>Vendor Native App(iOS/Android)</li>
          <li>Customer Web App</li>
          <li>Customer Native App(iOS/Android)</li>
        </ul>

        <div className="DevTools">
          <SVGIcon icon="django" color="tt" size="svg50px" />
          <SVGIcon icon="react" color="tt" size="svg50px" />
        </div>
      </div>
    </MainSection>
  );
};
