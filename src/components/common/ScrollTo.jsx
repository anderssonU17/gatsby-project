import React from "react";
import { scrollTo } from "../utils";

const ScrollTo = ({ to, onScroll, children }) => {
  let appContainer
  const isSSR = typeof window === "undefined";
  if(isSSR){
  console.log("undefinnide")

  }else{
   appContainer = document.querySelector(".scrollable-content");
    if (!appContainer) appContainer = window;
  }


  return (
    <a
      href={`#${to}`}
      onClick={(e) => {
        scrollTo(appContainer, to);
        if (onScroll) {
          e.preventDefault();
          onScroll(e);
        }
      }}
    >
      {children}
    </a>
  );
};

export default ScrollTo;
