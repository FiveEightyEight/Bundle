import React from "react";
import MenuButton from "../MenuButton/MenuButton";
import items from "../../services/items.json";
import "./MenuBar.css";

export default props => {
  const {
    deleteMode,
    handleOnClick,
    itemInput,
    handleOnChange,
    handleCreateItem,
    bagName
  } = props;
  if (deleteMode) {
    return (
      <div className="row justify-content-around">
        <MenuButton
          faClass={"fas fa-check"}
          handleOnClick={handleOnClick}
          clickCommand={"endDelete"}
          classes={"bg-danger border-danger "}
          iconClasses={"text-white"}
        />
      </div>
    );
  } else {
    return (
      <>
        <div className="row justify-content-around">
          <MenuButton
            faClass={"fas fa-plus"}
            handleOnClick={handleOnClick}
            attributes={{
              "data-toggle": "modal",
              "data-target": "#addItemToBag"
            }}
          />
          <MenuButton
            faClass={"fas fa-trash-alt"}
            handleOnClick={handleOnClick}
            clickCommand={"startDelete"}
          />
          <MenuButton
            faClass={"fas fa-poo-storm"}
            clickCommand={"packALL"}
            handleOnClick={handleOnClick}
          />
        </div>

        <div
          className="modal fade"
          id="addItemToBag"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="Add Item to bag"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="mBar--modal-content shadow">
              <div className="mBar--modal-header">
                <h5 className="mBar--modal-title" id="exampleModalCenterTitle">
                  Add item to {bagName} bag
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <label className="col-12 text-center mBar--item-label">
                  Select an item:
                </label>
                <div className="row  p-2 no-gutters">
                  <div className="col-4 offset-3">
                    <input
                      className="form-control c-denimBlue bundleBlue-border-bottom-3 mBar--item-input"
                      type="text"
                      onChange={handleOnChange}
                      value={itemInput}
                      list="datalist"
                    />
                    <datalist id="datalist">
                      <option defaultValue>Choose one...</option>
                      {items.general.map((e, i) => {
                        return (
                          <option value={e.name} key={i}>
                            {e.name}
                          </option>
                        );
                      })}
                    </datalist>
                  </div>
                  <div className="col-1">
                    <button
                      type="button"
                      className="mBar--item-add"
                      onClick={handleCreateItem}
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
              <div className="mBar--modal-footer">
                <button
                  type="button"
                  className="mBar--item-cancel"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};
