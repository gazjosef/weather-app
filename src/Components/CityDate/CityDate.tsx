import React from "react";
import "./CityDate.css";

const CityDate = (props: any) => (
  <div id="cityAndDate" className="text-center">
    <div className="city">
      {props.city && props.country && (
        <p>
          {props.city}, {props.country}
        </p>
      )}
    </div>
    <div className="date">{props.time && <p>{props.time}</p>}</div>
  </div>
);

export default CityDate;
