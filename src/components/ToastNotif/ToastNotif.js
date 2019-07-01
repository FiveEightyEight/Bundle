import React from "react";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./ToastNotif.css";

const ToastNotif = (image, text) => {
  const ToastNotifContent = (
    <div className=" p-0 m-0">
      <div className="row no-gutters">
        <div className="col-2 p-0">
          <img src={image} className="card-img" alt={text} />
        </div>
        <div className="col-10">
          <div className="card-body">
            <h5 className="card-title h4 toast-text-color">{text}</h5>
          </div>
        </div>
      </div>
    </div>
  );

  return toast(ToastNotifContent, {
    autoClose: 1800,
    transition: Bounce,
    progressClassName: "fancy-progress-bar",
    className: "toastDropShadow",
    pauseOnHover: false
  });
};

export default ToastNotif;
