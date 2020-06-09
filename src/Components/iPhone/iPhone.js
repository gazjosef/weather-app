import React, { Fragment } from 'react';

const iPhone = () => {
  return (
    <Fragment>
      <div className="mobile">
        {/* Screen */}
        <div className={`screen`}>
          <h1>Screen</h1>
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
    </Fragment>
  );
};

export default iPhone;
