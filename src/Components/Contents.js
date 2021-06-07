import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Main from "../screens/Main/index";

const Contents = ({ children }) => {
  return (
    <div className="ContentWrap">
      <div className="CotentInnerWrap">
        {children}
        <HashRouter>
          <Route path="/" exact component={Main} />
        </HashRouter>
      </div>
    </div>
  );
};

export default Contents;
