import React, { Component } from "react";
import axios from "axios";

import "./LoginHomepage.css";

import LoginHomepageTripCard from "../LoginHomepageTripCard/LoginHomepageTripCard";
import baseURL from "../../services/backendUrlConnect";
const tripEndpointBase = "/login_homepage/";

class LoginHomepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: {},
      create_new_trip: false
    };
  }

  async componentDidMount() {
    const { user } = this.props;
    const trips = await axios({
      method: "get",
      url: `${tripEndpointBase}${user.uid}`,
      baseURL
    });

    this.setState({ trips: trips.data });
  }

  createNewTripClickHandler = e => {
    this.setState({ create_new_trip: !this.state.create_new_trip });
  };
  render() {
    const { trips, create_new_trip: createNewTrip } = this.state;
    const { upcoming_trips, past_trips } = trips;
    const { create_trip_form: createTripForm } = this.props;
    return (
      <div className="container-fluid login-home-container">
        <div className="container">
          <h1 className="login-home-trips-header">Upcoming Trips</h1>
          <div
            className="col-12 row mt-4 flex-nowrap"
            style={{ overflowX: "scroll" }}
          >
            {upcoming_trips &&
              upcoming_trips.map((e, i) => (
                <LoginHomepageTripCard key={i} trip={e} />
              ))}
          </div>
        </div>
        <div className="lg-screen-space" />
        <div className="container mt-5">
          <h1 className="login-home-trips-header">Past Trips</h1>
          <div
            className="col-12 row mt-4 flex-nowrap"
            style={{ overflowX: "scroll" }}
          >
            {past_trips &&
              past_trips.map((e, i) => (
                <LoginHomepageTripCard key={i} trip={e} index={i} />
              ))}
          </div>
        </div>
        <div className="mt-5">
          <div className="row col-12 justify-content-center">
            {createNewTrip ? (
              <button
                onClick={this.createNewTripClickHandler}
                className="btn btn-danger btn-lg"
              >
                Cancel
              </button>
            ) : (
              <button
                className="btn btn-primary btn-lg"
                onClick={this.createNewTripClickHandler}
              >
                Create a trip
              </button>
            )}
          </div>

          {createNewTrip ? (
            <div className="row justify-content-center m-0 mt-4">
              <div className="col-sm-6 col-md-6 col-lg-6 p-5 bg-denimBlue b-radius9 ds-lightGrey createTripForm-mb">
                {createTripForm}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default LoginHomepage;
