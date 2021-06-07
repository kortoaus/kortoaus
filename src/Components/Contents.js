import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "../screens/Main/index";
import { SVGIcon } from "./svg/svg";

const Contents = ({ children }) => {
  return (
    <div className="ContentWrap">
      {children}
      <BrowserRouter>
        <Route path="/" exact component={Main} />
      </BrowserRouter>
    </div>
  );
};

export default Contents;
