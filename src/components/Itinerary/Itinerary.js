import React, { useState } from "react";

import ItineraryCategory from "../ItineraryCategory/ItineraryCategory";
import AddItineraryForm from "../AddItineraryForm/AddItineraryForm";

import "./Itinerary.css";

const Itinerary = props => {
  const [itineraryFormDisplay, setItineraryFormDisplay] = useState(false);
  const itineraryDisplayHandler = e => {
    setItineraryFormDisplay(prevState => !prevState);
  };
  return (
    <div className="itinerary-container">
      <div className="row">
        <h3 className="mt-4 text-white itinerary-title">Itinerary</h3>
        {!itineraryFormDisplay ? (
          <button
            className="itinerary-add-btn btn ml-3 mt-4 col-2 col-lg-1"
            onClick={itineraryDisplayHandler}
          >
            add
          </button>
        ) : (
          <button
            className="itinerary-cancel-btn btn ml-3 mt-4 col-2 col-lg-1"
            onClick={itineraryDisplayHandler}
          >
            cancel
          </button>
        )}
      </div>
      <div className="row">
        {itineraryFormDisplay ? (
          <AddItineraryForm
            trip_id={props.trip_id}
            setTripItinerary={props.setTripItinerary}
          />
        ) : null}
        {props.info.length === 0 ? (
          <div
            className="col-12 row justify-content-center"
            style={{ color: "white" }}
          >
            {" "}
            <h1 style={{ fontSize: "5rem" }}>No itineraries yet</h1>{" "}
          </div>
        ) : (
          props.info.map((e, i) => {
            return (
              <div key={i} className="global-card itinerary-card-container">
                <ItineraryCategory category={e} trip={props.trip} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Itinerary;
