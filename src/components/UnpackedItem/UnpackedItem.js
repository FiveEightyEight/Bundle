import React from "react";
import "./UnpackedItem.css";

export default props => {
  const {
    // flag,
    deleteMode,
    handleClick,
    image,
    name,
    quantity,
    index,
    toBeDeleted,
    width
  } = props;

  const toDelete = toBeDeleted ? " bg-danger text-white" : " ";
  const img = image
    ? image
    : "https://www.jcrew.com/s7-img-facade/L4012_PA6511?fmt=jpeg";

  const rightButton = deleteMode
    ? "uItem--button-rightDelete"
    : "uItem--button-right";

  const dynamicSize = name => {
    if (width < 500) return `uItem--${name}`;
    if (width >= 500 && width < 990) return `uItem--${name}-md`;
    if (width >= 990 && width < 1200) return `uItem--${name}-lg`;
    if (width >= 1200 && width < 1300) return `uItem--${name}-xlg`;
    if (width > 1300) return `uItem--${name}-xxlg`;
  };

  return (
    <div className="col-6 col-sm-6 col-md-4 col-lg-4 my-2 p-2">
      <div
        className="row justify-content-center"
        onClick={handleClick("item", index)}
      >
        <div
          className={
            dynamicSize("unpacked") +
            "  uItem my-2  uItem--content-main row no-gutters b-radius9"
          }
          style={{ backgroundImage: `url(${img})` }}
        >
          <div
            className={
              dynamicSize("header") + " col-12 uItem--head text-center p-0 "
            }
          >
            <span className="uItem--title--font c-denimBlue">{name}</span>
          </div>
          <div className="col-12 uItem--buttons rounded">
            <div className="row px-2 no-gutters">
              <span
                className={
                  dynamicSize("button") + " col uItem--button-left align-center"
                }
              >
                <div
                  className={
                    " row justify-content-center no-gutters align-center"
                  }
                >
                  <div
                    className={
                      dynamicSize("btnrow") + " col text-center align-center"
                    }
                  >
                    <button
                      className="uItem--quantity-button bg-bundleBlue"
                      type="button"
                      aria-label="reduce quantity"
                      onClick={handleClick("decreaseQuantity", index)}
                    >
                      <i className="fas fa-minus c-white" />
                    </button>
                  </div>
                  <div
                    className={
                      dynamicSize("quantity") + " col text-center align-bottom"
                    }
                  >
                    <span className=" uItem--quantity-weight c-white align-bottom">
                      {quantity}
                    </span>
                  </div>
                  <div
                    className={
                      dynamicSize("btnrow") + " col text-center align-center"
                    }
                  >
                    <button
                      className="uItem--quantity-button bg-bundleBlue"
                      type="button"
                      aria-label="incrase quantity"
                      onClick={handleClick("increaseQuantity", index)}
                    >
                      <i className="fas fa-plus c-white" />
                    </button>
                  </div>
                </div>
              </span>
              <button
                type="button"
                className={
                  dynamicSize("button") +
                  " col  mali900 " +
                  rightButton +
                  " " +
                  toDelete
                }
                aria-label={`select ${name}`}
                onClick={handleClick("select", index)}
              >
                <span className={dynamicSize("pack")}>Pack</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
