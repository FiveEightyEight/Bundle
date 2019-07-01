import React from "react";
import "./PackedItem.css";

export default props => {
  const {
    // flag,
    deleteMode,
    handleClick,
    image,
    name,
    index,
    toBeDeleted,
    width
  } = props;
  const toDelete = toBeDeleted ? " bg-danger text-white" : " ";
  const img = image
    ? image
    : "https://www.jcrew.com/s7-img-facade/L4012_PA6511?fmt=jpeg";

  const rightButton = deleteMode
    ? "pItem--button-rightDelete"
    : "pItem--button-right";

  const dynamicSize = name => {
    if (width < 500) return `pItem--${name}`;
    if (width >= 500 && width < 990) return `pItem--${name}-md`;
    if (width >= 990 && width < 1200) return `pItem--${name}-lg`;
    if (width >= 1200 && width < 1300) return `pItem--${name}-xlg`;
    if (width > 1300) return `pItem--${name}-xxlg`;
  };

  return (
    <div className="col-6 col-sm-6 col-md-4 col-lg-4 my-2 p-2 ">
      <div
        className="row justify-content-center"
        onClick={handleClick("item", index)}
      >
        <div
          className={
            dynamicSize("unpacked") +
            "  pItem my-2 pItem--content-main row no-gutters b-radius9"
          }
          style={{ backgroundImage: `url(${img})` }}
        >
          <div
            className={
              dynamicSize("header") + " col-12 pItem--head text-center p-0 "
            }
          >
            <span className="pItem--title--font c-denimBlue">{name}</span>
          </div>
          <div className="col-12 pItem--buttons rounded">
            <div className="row px-2 no-gutters">
              <button
                type="button"
                className={
                  dynamicSize("button") +
                  " col  mali900 " +
                  rightButton +
                  " " +
                  toDelete
                }
                aria-label={`unpack ${name}`}
                onClick={handleClick("unpack", index)}
              >
                <span className={dynamicSize("unpack")}>Unpack</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
