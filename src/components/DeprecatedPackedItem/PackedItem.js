import React from "react";
import "./PackedItem.css";

export default props => {
  const {
    important,
    flag,
    handleClick,
    image,
    name,
    quantity,
    index,
    toBeDeleted
  } = props;
  const toDelete = toBeDeleted ? " bg-danger " : " ";
  const img = image
    ? image
    : "https://www.jcrew.com/s7-img-facade/L4012_PA6511?fmt=jpeg";
  return (
    <div className="m-1 border border-white rounded">
      <button
        className={"item--packed p-0 rounded" + toDelete}
        onClick={handleClick("unpack", index)}
      >
        <div className="container">
          <div className={"row align-items-center justify-content-center"}>
            <div>
              {/* ITEM IMAGE */}
              <img src={img} className="item--image--size rounded" alt={name} />
            </div>
            <div className="item--icon align-items-center">
              {/* ICONS */}
              <div>
                {important ? (
                  <i
                    className="fas fa-star item--icon--packed"
                    onClick={handleClick("important", index)}
                  />
                ) : (
                  <i
                    className="far fa-star item--icon--packed"
                    onClick={handleClick("important", index)}
                  />
                )}
              </div>
              <div>
                {flag ? (
                  <i className="far fa-question-circle item--icon--packed" />
                ) : (
                  /* needs work */
                  <div className="item--icon-filler"> </div>
                )
                /* needs work */
                }
              </div>
              <div className="item--icon-filler"> </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          {/* Item Name */}
          <div className={"row align-items-center justify-content-center"}>
            <span className="item--title--font">
              <span className="text-white">{name}</span>{" "}
              <i className="fas fa-times item--count--packed" />{" "}
              <span className="text-white">{quantity}</span>
            </span>
          </div>
        </div>
      </button>
    </div>
  );
};
