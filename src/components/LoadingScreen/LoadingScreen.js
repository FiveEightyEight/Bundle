import React from "react";
import "./LoadingScreen.css";

const LoadingScreen = props => {
  return (
    <div className="loading-fullscreen">
      <div className="loading-InnerBlock">
        <div className="loadingScreen-container">
          <div className="loadBundle-img" />
          <h1 className="c-huate mali700 loadBundle-text display-2">
            loading...
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
