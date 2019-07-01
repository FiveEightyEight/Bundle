import React from "react";
import "./BagSelectorCard.css";

export default props => {
  const {
    bag_type,
    handleOnClick,
    countAndKey: { count, key },
    displayBag,
    width,
    infoBarHeight
  } = props;

  const dynamicSize = name => {
    if (width < 500) return `cbag--${name}`;
    if (width >= 500 && width < 990) return `cbag--${name}-md`;
    if (width >= 990 && width < 1200) return `cbag--${name}-lg`;
    if (width >= 1200 && width < 1300) return `cbag--${name}-xlg`;
    if (width > 1300) return `cbag--${name}-xxlg`;
  };
  const height = Math.floor(infoBarHeight / 2);
  const selected = key === displayBag ? " cbag--active " : " cbag--inactive ";
  return (
    <div className={"  pack--bag-width mx-1"}>
      <button
        className={dynamicSize("size") + " cbag--button"}
        onClick={handleOnClick("bag", { key, bag_type })}
        style={{ height: height }}
      >
        <div className={selected + " p-2 text-left"}>
          <p className="row">
            <span className="col-12">{bag_type}</span>
            <span className="col-12">{count} %</span>
          </p>
        </div>
      </button>
    </div>
  );
};
