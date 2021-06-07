import React from "react";
import colors from "../../../colors";
import { SVGIcon } from "../../../Components/svg/svg";
// import { AppContext, WebContext } from "./context";
import MainSection from "./MainSection";

// export const EcommerceContent = () => {
//   return (
//     <MainSection className="SectionTwoColumn" bgcolor={colors.white}>
//       <div className="TwoIcons">
//         <SVGIcon icon="wordpress" color="black" size="svg100px" />
//         <SVGIcon icon="woo" size="svg100px" />
//       </div>
//       <div className="TwoContext">
//         <h1>Website</h1>
//         {/* <div>{AppContext}</div> */}
//       </div>
//     </MainSection>
//   );
// };

export const AppContent = () => {
  return (
    <MainSection className="SectionOneColumn" bgcolor={colors.white}>
      <div className="OneContext">
        <h1>Developments</h1>
        <div>웹/네이티브 어플리케이션 제작</div>
      </div>
      <div className="OneIcons">
        <SVGIcon icon="django" size="svg100px" />
        <SVGIcon icon="react" size="svg100px" />
        <SVGIcon icon="wordpress" size="svg100px" />
        <SVGIcon icon="woo" size="svg100px" />
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
        <SVGIcon icon="ps" size="svg100px" />
        <SVGIcon icon="ai" size="svg100px" />
        <SVGIcon icon="pr" size="svg100px" />
        <SVGIcon icon="ae" size="svg100px" />
      </div>
    </MainSection>
  );
};
