import React from "react";
import { SVGIcon } from "./svg/svg";

const Tools = ({ color, size }) => {
  return (
    <>
      <SVGIcon icon="django" color={color} size={size}></SVGIcon>
      <SVGIcon icon="react" color={color} size={size}></SVGIcon>
      <SVGIcon icon="wordpress" color={color} size={size}></SVGIcon>
      <SVGIcon icon="ai" color={color} size={size}></SVGIcon>
      <SVGIcon icon="ps" color={color} size={size}></SVGIcon>
      <SVGIcon icon="pr" color={color} size={size}></SVGIcon>
      <SVGIcon icon="ae" color={color} size={size}></SVGIcon>
      <SVGIcon icon="youtube" color={color} size={size}></SVGIcon>
      <SVGIcon icon="woo" color={color} size={size}></SVGIcon>
    </>
  );
};

export default Tools;
