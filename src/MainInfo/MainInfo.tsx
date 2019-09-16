import React from "react";
import "./MainInfo.css";

const MainInfo = (props: any) => (
  <div id="main-info">
    {/* {
    <div className="text-left px-3">
      {props.temperature && (
        <h5>
          Temperature: {props.temperature}
          <sup>&deg;</sup>
          <span className="unit">C</span>
        </h5>
      )}
      {props.description && <h5>Conditions: {props.description}</h5>}
    </div>
    } */}
    <div className="text-left px-3">
      {props.temperature && (
        <p className="main-key">
          Temperature:{" "}
          <span className="main-value">
            {props.temperature}
            <sup>&deg;</sup>
            <span className="unit">C</span>
          </span>
        </p>
      )}
      {props.description && (
        <p className="main-key">
          Conditions: <span className="main-value">{props.description}</span>
        </p>
      )}
    </div>
  </div>
);

export default MainInfo;
