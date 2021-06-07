import React from "react";
import ae_tt from "./ae_tt.svg";
import ae_ot from "./ae_ot.svg";
import ae_black from "./ae_black.svg";
import ae_white from "./ae_white.svg";
import ai_tt from "./ai_tt.svg";
import ai_ot from "./ai_ot.svg";
import ai_black from "./ai_black.svg";
import ai_white from "./ai_white.svg";
import pr_tt from "./pr_tt.svg";
import pr_ot from "./pr_ot.svg";
import pr_black from "./pr_black.svg";
import pr_white from "./pr_white.svg";
import ps_tt from "./ps_tt.svg";
import ps_ot from "./ps_ot.svg";
import ps_black from "./ps_black.svg";
import ps_white from "./ps_white.svg";
import django_tt from "./django_tt.svg";
import django_ot from "./django_ot.svg";
import django_black from "./django_black.svg";
import django_white from "./django_white.svg";
import react_tt from "./react_tt.svg";
import react_ot from "./react_ot.svg";
import react_black from "./react_black.svg";
import react_white from "./react_white.svg";
import youtube_tt from "./youtube_tt.svg";
import youtube_ot from "./youtube_ot.svg";
import youtube_black from "./youtube_black.svg";
import youtube_white from "./youtube_white.svg";
import wordpress_tt from "./wordpress_tt.svg";
import wordpress_ot from "./wordpress_ot.svg";
import wordpress_black from "./wordpress_black.svg";
import wordpress_white from "./wordpress_white.svg";

export const icons = {
  ae: {
    ot: ae_ot,
    tt: ae_tt,
    black: ae_black,
    white: ae_white,
  },
  ai: {
    ot: ai_ot,
    tt: ai_tt,
    black: ai_black,
    white: ai_white,
  },
  pr: {
    ot: pr_ot,
    tt: pr_tt,
    black: pr_black,
    white: pr_white,
  },
  ps: {
    ot: ps_ot,
    tt: ps_tt,
    black: ps_black,
    white: ps_white,
  },
  django: {
    ot: django_ot,
    tt: django_tt,
    black: django_black,
    white: django_white,
  },
  react: {
    ot: react_ot,
    tt: react_tt,
    black: react_black,
    white: react_white,
  },
  youtube: {
    ot: youtube_ot,
    tt: youtube_tt,
    black: youtube_black,
    white: youtube_white,
  },
  wordpress: {
    ot: wordpress_ot,
    tt: wordpress_tt,
    black: wordpress_black,
    white: wordpress_white,
  },
};

export const SVGIcon = ({ icon = null, color = "ot", size = null }) => {
  return (
    <>
      {icon ? (
        <img
          src={icons[icon][color]}
          className={size}
          alt={icon + "_" + color + "_icon"}
        />
      ) : null}
    </>
  );
};
