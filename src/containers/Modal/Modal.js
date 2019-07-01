import React from "react";
import "./Modal.css";
import Suggestions from "../../containers/Suggestions/Suggestions";

const Modal = props => {
  return (
    <div
      className="modal fade border-0"
      id="modalScrollable"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modalScrollableTitle"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"
        role="document"
      >
        <div className="modal-content b-radius9 position-relative">
          <Suggestions
            changeLoadStatus={props.changeLoadStatus}
            destination={props.destination}
            duration={props.duration}
            departureDate={props.departureDate}
            returnDate={props.returnDate}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
