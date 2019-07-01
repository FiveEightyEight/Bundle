import React from "react";
import "./ListCard.css";

const ListCard = props => {
  const {
    list_type,
    name,
    handleCurrentListDisplay,
    completedTodos,
    incompleteTodos,
    width,
    infoBarHeight,
    currentListDisplay
  } = props;
  const dynamicSize = name => {
    if (width < 500) return `cList--${name}`;
    if (width >= 500 && width < 990) return `cList--${name}-md`;
    if (width >= 990 && width < 1200) return `cList--${name}-lg`;
    if (width >= 1200 && width < 1300) return `cList--${name}-xlg`;
    if (width > 1300) return `cList--${name}-xxlg`;
  };

  const bool = list_type === "To Do List" ? true : false;
  let totalTodos = completedTodos + incompleteTodos;
  let percentage = Math.floor((completedTodos / totalTodos) * 100);
  const height = Math.floor(infoBarHeight / 2);
  const selected =
    currentListDisplay && list_type === "To Do List"
      ? " cList--active "
      : " cList--inactive ";
  return (
    <div className={"  mx-1"}>
      <button
        className={dynamicSize("size") + " cList--button"}
        onClick={() => handleCurrentListDisplay(bool)}
        style={{ height: height }}
      >
        <div className={selected + " p-2 text-left"}>
          <p className="row">
            <span className="col-12">{list_type}</span>
            <span className="col-12">
              {completedTodos ? percentage + "%" : 0 + "%"}
            </span>
          </p>
        </div>
      </button>
    </div>
  );
};

export default ListCard;
