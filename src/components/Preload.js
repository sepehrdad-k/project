import React, { useState, useEffect } from "react";

const Preload = React.memo(({ preloadmode }) => {
  useEffect(() => {
    setTimeout(() => {
      setpreLoadFade(true);
    }, 1700);
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, [preloadmode]);
  const [isLoading, setisLoading] = useState(true);
  const [preLoadFade, setpreLoadFade] = useState(false);
  return (
    <>
      {isLoading ? (
        <div className={preLoadFade ? "preload fade" : "preload"}>
          <div className="spinner">
            <div className="spinner-bar"></div>
            <div className="spinner-bar"></div>
            <div className="spinner-bar"></div>
            <div className="spinner-bar"></div>
            <div className="spinner-bar"></div>
            <div className="spinner-bar"></div>
            <div className="spinner-bar"></div>
            <div className="spinner-bar"></div>
            <div className="spinner-bar"></div>
            <div className="spinner-bar"></div>
          </div>
        </div>
      ) : null}
    </>
  );
});

export default Preload;
