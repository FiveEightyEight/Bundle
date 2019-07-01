import React, { useState } from "react";
import UnpackedItem from "../UnpackedItem/UnpackedItem";
import PackedItem from "../PackedItem/PackedItem";
import "./Bag.css";

export default props => {
  const {
    items,
    handleOnClick,
    handleChange,
    onKeyPress,
    deleteMode,
    width
  } = props;
  const [unpacked, setUnpacked] = useState(true);
  const [packedBag, setPackedBag] = useState(false);

  if (!items) {
    return <p>EMPTY</p>;
  } else {
    let packedCount = 0;
    const packed = items.map((e, i) => {
      if (e.packed) {
        packedCount += 1;
        return (
          <PackedItem
            {...e}
            index={i}
            key={i}
            deleteMode={deleteMode}
            handleClick={handleOnClick}
            handleChange={handleChange}
            onKeyPress={onKeyPress}
            width={width}
          />
        );
      } else return null;
    });

    const unPacked = items.map((e, i) => {
      if (!e.packed) {
        return (
          <UnpackedItem
            {...e}
            index={i}
            key={i}
            deleteMode={deleteMode}
            handleClick={handleOnClick}
            handleChange={handleChange}
            onKeyPress={onKeyPress}
            width={width}
          />
        );
      } else return null;
    });
    if (packedCount === 0)
      packed.push(<div style={{ height: "5rem" }} key={"packedEmptyBox"} />);
    if (items.length - packedCount === 0)
      unPacked.push(
        <div style={{ height: "5rem" }} key={"unpackedEmptyBox"} />
      );

    const packedCollapse = packedBag ? " show" : "";
    const unpackedCollapse = unpacked ? " show" : "";
    const handleShow = call => {
      if (call === "packed") {
        if (unpacked) {
          setTimeout(function() {
            setUnpacked(!unpacked);
          }, 282);
          setPackedBag(!packedBag);
        } else {
          setPackedBag(!packedBag);
        }
      } else if (call === "unpacked") {
        if (packedBag) {
          setTimeout(function() {
            setPackedBag(!packedBag);
          }, 282);
          setUnpacked(!unpacked);
        } else {
          setUnpacked(!unpacked);
        }
      }
    };
    const unpackedClass = unpacked ? "" : "bag--button-bottom";
    const packedClass = packedBag ? "" : "bag--button-bottom";

    return (
      <div>
        <div className="mb-2">
          <button
            className={"col-12 bag--packed-button " + packedClass}
            type="button"
            data-toggle="collapse"
            data-target="#packed"
            aria-expanded="false"
            aria-controls="packed item expand"
            onClick={() =>
              packedBag
                ? setTimeout(function() {
                    setPackedBag(!packedBag);
                  }, 282)
                : handleShow("packed")
            }
          >
            <div className="row justify-content-between mx-3">
              <span className="bag--packed-title">Packed Items</span>
              <span className="bag--packed-count pt-2">
                {packedCount + " of " + items.length}
              </span>
            </div>
          </button>
          <div className={"col-12 collapse " + packedCollapse} id="packed">
            <div className="row bag--packed-container  ">{packed}</div>
          </div>
        </div>
        <div className="mt-2">
          <button
            className={"col-12 bag--unpacked-button " + unpackedClass}
            type="button"
            data-toggle="collapse"
            data-target="#unpacked"
            aria-expanded="false"
            aria-controls="unpacked item expand"
            onClick={() =>
              unpacked
                ? setTimeout(function() {
                    setUnpacked(!unpacked);
                  }, 282)
                : handleShow("unpacked")
            }
          >
            <div className="row justify-content-between mx-3">
              <span className="bag--unpacked-title">Unpacked Items</span>
              <span className="bag--unpacked-count pt-2">
                {items.length - packedCount + " items left"}
              </span>
            </div>
          </button>
          <div className={"col-12 collapse " + unpackedCollapse} id="unpacked">
            <div className="row bag--unpacked-container pb-5 ">{unPacked}</div>
          </div>
        </div>
      </div>
    );
  }
};
