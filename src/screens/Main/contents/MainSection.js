import React from "react";

const MainSection = ({ className, children, bgcolor }) => {
  return (
    <section className={className} style={{ backgroundColor: bgcolor }}>
      {children}
    </section>
  );
};

export default MainSection;
