import React from "react";
import items from "../../../../services/items.json";

const AddItemButton = props => {
  const { itemInput, handleOnChange, handleCreateItem } = props;

  return (
    <>
      <div className="mt-3 ml-6 btn-group dropleft">
        <button
          className="btn btn-info dropdown-toggle"
          type="button"
          data-toggle="dropdown"
        >
          +Add Item
        </button>
        <div className="dropdown-menu">
          <div className="p-2">
            <label htmlFor="item-input">
              Select an item:
              <input
                id="item-input"
                type="text"
                onChange={handleOnChange}
                value={itemInput}
                list="datalist"
                aria-label="Add item"
              />
            </label>
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
            <button
              className="my-3 btn-sm border border-info"
              onClick={handleCreateItem}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItemButton;
