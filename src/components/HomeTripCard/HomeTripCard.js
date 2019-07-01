import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./HomeTripCard.css";

const HomeTripCard = ({ savedTrips }) => {
  return savedTrips.map((trips, index) => {
    const { id, destination, duration, departureDate, returnDate } = trips;

    const [city, state] = destination.split(",");

    const cityImgUrl = `https://source.unsplash.com/weekly?${city}`;
    const startDate = moment(departureDate).format("MMM Do YY");
    const endDate = moment(returnDate).format("MMM Do YY");
    const dateTimer = moment(departureDate)
      .endOf("day")
      .fromNow();

    return (
      <div
        className="b-radius9 card border-0 mx-1 my-4 col-12 col-md-4 col-lg-5 p-0 ds-lightGrey homeSavedImage-card "
        key={index}
      >
        <div className="card-body p-0">
          <Link to={`/trip/${id}`}>
            <div className="homeSavedImage-container p-0">
              <img
                src={cityImgUrl}
                alt={destination}
                className="homeSavedImage w-100"
              />
              <div className="homeMiddle">
                <div className="c-denimBlue display-4 mali700 text-decoration-none savedHomeTrips-Text">
                  View Trip
                </div>
              </div>
            </div>
            <div className="p-5">
              <h5 className="card-title h1 mali700 c-bundleBlue text-decoration-none savedHomeTrips-Text">
                {city}
              </h5>
              <h6 className="card-text h2 mali700 c-bundleBlue text-decoration-none savedHomeTrips-Text">
                {state}
              </h6>
              <p className="card-text c-bundleBlue mali400 h2 text-decoration-none savedHomeTrips-Text">
                {startDate}-{endDate}
              </p>
              <p
                className="card-text c-denimBlue mali700 h2 pt-3 text-decoration-none savedHomeTrips-Text"
                style={{ textDecoration: "none" }}
              >
                {dateTimer}
              </p>
            </div>
          </Link>
        </div>
      </div>
    );
  });
};

export default HomeTripCard;
