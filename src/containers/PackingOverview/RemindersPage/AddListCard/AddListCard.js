import React from "react";
import "./AddListCard.css";

const AddListButton = props => {
  const {
    createList,
    handleSelectList,
    alertDisplay,
    infoBarHeight,
    width
  } = props;
  const height = Math.floor(infoBarHeight / 2);
  const dynamicSize = name => {
    if (width < 500) return `cList--${name}`;
    if (width >= 500 && width < 990) return `cList--${name}-md`;
    if (width >= 990 && width < 1200) return `cList--${name}-lg`;
    if (width >= 1200 && width < 1300) return `cList--${name}-xlg`;
    if (width > 1300) return `cList--${name}-xxlg`;
  };

  const alert = (
    <div className="alert alert-warning" role="alert">
      Whoops! That list already exists!
    </div>
  );
  return (
    <>
      <div className={"  mx-1"}>
        <button
          className={dynamicSize("size") + " cList--button"}
          type="button"
          data-toggle="modal"
          data-target="#exampleModal"
          style={{ height: height }}
        >
          <div className={"cList--inactive p-0 text-left"}>
            <p className="row">
              <span className="col-12 text-nowrap">
                <i className="fas fa-plus-circle fa-sm m-1 align-baseline" />
                Add List
              </span>
            </p>
          </div>
        </button>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLabel">
                Create A List
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" className="addlist--modal-close">
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body">
              {/*     ///////////      /////////////  */}
              <div className="input-group mb-3">
                <select
                  onChange={handleSelectList}
                  className="custom-select"
                  id="inputGroupSelect01"
                >
                  <option defaultValue>Choose one...</option>
                  <option value="To Do List">To Do List</option>
                  <option value="Shopping List">Shopping List</option>
                </select>
                <button
                  className="addlist--modal-button"
                  data-dismiss="modal"
                  onClick={createList}
                >
                  Create
                </button>
              </div>
              {alertDisplay ? alert : null}
              {/*  /////////////         /////////////////// */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddListButton;
