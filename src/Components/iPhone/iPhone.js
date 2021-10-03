export default function iPhone() {
  return (
    <>
      <div className="center">
        {/* iPhone / iPad */}
        <div className="mobile">
          {/* Home Button */}
          <div className="home"></div>
          <div className="inner"></div>

          {/* Volume */}
          <ul className="volume">
            <li></li>
            <li></li>
          </ul>
          {/* Silent */}
          <ul className="silent">
            <li></li>
          </ul>
          {/* Sleep */}
          <ul className="sleep">
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
}
