import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "../screens/Main/index";

const Contents = ({ children }) => {
  return (
    <div className="ContentWrap">
      <div className="CotentInnerWrap">
        {children}
        <BrowserRouter>
          <Route path="/" exact component={Main} />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Contents;
