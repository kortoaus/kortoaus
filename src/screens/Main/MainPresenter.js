import React from "react";
import { AppContent, WebsiteContent } from "./contents/Contents";

const MainPresenter = () => {
  return (
    <>
      <div className="ServiceWrap">
        <AppContent />
        <WebsiteContent />
      </div>
    </>
  );
};

export default MainPresenter;
