import React from "react";
import moment from "moment";
import { withRouter } from "react-router-dom";

import "./LoginHomepageTripCard.css";

const gotToTrip = (tripId, props) => e => {
  props.history.push(`/trip/${tripId}`);
};

const LoginHomepageTripCard = props => {
  const { trip } = props;
  const { id, city, country, departure_date, return_date } = trip;

  return (
    <div
      className={`col-6 col-lg-3 global-card mr-3 p-0`}
      style={{
        backgroundImage: `url(https://source.unsplash.com/weekly?${city})`
      }}
      onClick={gotToTrip(id, props)}
    >
      <div style={{ backgroundColor: "rgba(73, 150, 201, 0.5)" }}>
        <div className="card-body">
          <h1>{city}</h1>
          <h3 className="font-weight-normal">{country}</h3>
          <div className="card-vertical-space" />
          <h5>
            {moment(departure_date).format("l")} -{" "}
            {moment(return_date).format("l")}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LoginHomepageTripCard);
