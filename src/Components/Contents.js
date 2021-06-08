import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { Cuberoll } from "../screens/Main/contents/Contents";
import Main from "../screens/Main/index";
import Hero from "./Hero";
import ILB from "./ILB";

const Contents = ({ children }) => {
  return (
    <>
      <HashRouter>
        <Route path="/" exact>
          <Hero></Hero>
        </Route>
      </HashRouter>
      <div className="ContentWrap">
        <div className="CotentInnerWrap">
          {children}
          <HashRouter>
            <Route path="/" exact>
              <Main></Main>
            </Route>
          </HashRouter>
        </div>
      </div>
      <ILB></ILB>
      <div className="ContentWrap">
        <div className="CotentInnerWrap">
          <HashRouter>
            <Route path="/" exact>
              <Cuberoll></Cuberoll>
            </Route>
          </HashRouter>
        </div>
      </div>
    </>
  );
};

export default Contents;
