import React from "react";
import "./MenuButton.css";

export default ({
  handleOnClick,
  faClass,
  classes,
  iconClasses,
  clickCommand,
  attributes
}) => {
  const attr = attributes ? attributes : {};
  return (
    <button
      className={"mbutton--container rounded-circle shadow " + classes}
      onClick={handleOnClick(clickCommand)}
      {...attr}
    >
      <i className={`px-3 py-3 mbutton--icon ${faClass} ` + iconClasses} />
    </button>
  );
};
