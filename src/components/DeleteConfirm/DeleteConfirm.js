import React from "react";

export default ({ deleteMode, handleOnClick }) => {
  return (
    <div>
      {deleteMode ? (
        <button className="btn btn-danger" onClick={handleOnClick("endDelete")}>
          Confirm
        </button>
      ) : (
        <button
          className="btn btn-secondary"
          onClick={handleOnClick("startDelete")}
        >
          Delete
        </button>
      )}
    </div>
  );
};
