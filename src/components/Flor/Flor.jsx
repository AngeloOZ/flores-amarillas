import React from "react";
import "./flor.css";

export const Flor = ({ hideLeaf = false, hideLeaf2 = false, ...props }) => {
  return (
    <div {...props} >
      <div className="flower">
        <div className="mid"></div>
        <div className="Petal1 p1"></div>
        <div className="Petal1 p2"></div>
        <div className="Petal1 p3"></div>
        <div className="Petal1 p4"></div>
        <div className="Petal2 p1"></div>
        <div className="Petal2 p2"></div>
        <div className="Petal2 p3"></div>
        <div className="Petal2 p4"></div>
        <div className="Petal3 p1"></div>
        <div className="Petal3 p2"></div>
        <div className="Petal3 p3"></div>
        <div className="Petal3 p4"></div>
        <div className="tallo">
          {!hideLeaf && <div className="hoja"></div>}
          {!hideLeaf2 && <div className="hoja hoja2"></div>}
        </div>
      </div>
    </div>
  );
};
