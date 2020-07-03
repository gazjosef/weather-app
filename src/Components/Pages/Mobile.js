import React from 'react';

export const Mobile = () => {
  return (
    <div>
      {/* iPhone / iPad */}
      <div className="mobile">
        {/* Screen */}
        <div className={`screen`}>
          search-field
          <div className="weather-display">weather-display</div>
        </div>
        {/* Home Button */}
        <div className="home"></div>
        <div className="inner"></div>
        {/* Volume */}
        <ul className="volume">
          <li></li>
          <li></li>
        </ul>
        <ul className="silent">
          <li></li>
        </ul>
        <ul className="sleep">
          <li></li>
        </ul>
      </div>
    </div>
  );
};
