import React from "react";
import "./NoLists.css";

export default props => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid p-6 bg-babyBlue mali700 no-lists">
        <div className="container">
          <h1 className="display-4 align-baseline">
            Looks like you have no todos!
            <span className="align-top">
              <i className="fas fa-clipboard-list fa-sm ml-3 " />
            </span>
          </h1>
          <br />
          <h3 className="mb-4 jumbo-subtext">
            Get started by creating a list!
          </h3>
        </div>
      </div>
    </>
  );
};
