import React from "react";
import "./PublicHome.css";
import BundleLogo from "../../assets/images/logo/bundle_logo.svg";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import HomeTripCard from "../HomeTripCard/HomeTripCard";
import { getTrips } from "../../services/homeLocalStorage";

const PublicHome = props => {
  const { create_trip_form, loading } = props;
  const savedTripsFromLocalStorage = getTrips();
  const showMbCreateTrip =
    savedTripsFromLocalStorage.length > 0 ? "mb-5" : "createTripForm-mb";
  const changeJustifyTrips =
    savedTripsFromLocalStorage.length > 1
      ? "justify-content-around"
      : "justify-content-between";

  return (
    <div className="bg-bundleBlue">
      <div className="publicHomeBanner m-0 p-5 min-vh-100 min-vw-100">
        {!loading ? null : <LoadingScreen />}

        {savedTripsFromLocalStorage.length === 0 ? (
          <div className="row p-2 m-5 ">
            <div className="col-sm-6 col-md-6 col-lg-6 m-0 p-0 text-center">
              <img
                src={BundleLogo}
                width="70%"
                height="70%"
                className=""
                alt="Bundle"
              />
            </div>

            <div
              className={
                "col-sm-6 col-md-6 col-lg-6 p-5 b-radius9 " + showMbCreateTrip
              }
            >
              <div className="mx-1 mt-0">
                <h2 className="c-white mali900 mb-5 display-3">
                  Let's get packing!
                </h2>
                <p className="h1 mb-5 mali400 c-huate">
                  Bundle takes your destination and travel dates to assemble a
                  customized packing list.
                </p>
              </div>

              {create_trip_form}
            </div>
          </div>
        ) : (
          <>
            <div className="row p-0 m-0 justify-content-center">
              <div className="col-sm-4 col-md-4 col-lg-4 m-0 p-0 text-center">
                <img
                  src={BundleLogo}
                  width="70%"
                  height="70%"
                  className=""
                  alt="Bundle"
                />
              </div>
            </div>

            <div className="row m-2 ">
              <div
                className={"col-12 col-lg-6 p-5 b-radius9 " + showMbCreateTrip}
              >
                <div className="mx-1 mt-0">
                  <h2 className="c-white mali900 mb-5 display-3">
                    Let's get packing!
                  </h2>
                  <p className="h1 mb-5 mali400 c-huate">
                    Bundle takes your destination and travel dates to assemble a
                    customized packing list.
                  </p>
                </div>

                {create_trip_form}
              </div>
              <div className="col-12 col-lg-6 bg-babyBlue b-radius9 ds-lightGrey">
                <div className="bg-babyBlue sticky-top p-0 m-0">
                  <h2 className="c-bundleBlue mali700 display-2 mb-1 p-5 text-center ">
                    Recently Made Trips
                  </h2>
                </div>

                <div className={"row p-5 overflow-auto " + changeJustifyTrips}>
                  <HomeTripCard savedTrips={savedTripsFromLocalStorage} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PublicHome;
