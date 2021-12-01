import React from "react";

const Preload = ({ isLoading }) => {
  return (
    <>
      {isLoading ? (
        <div className="preload">
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
};

export default Preload;
