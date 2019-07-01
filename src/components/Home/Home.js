import React, { useState, useEffect, useContext } from "react";
import CreateTripForm from "../../containers/CreateTripForm/CreateTripForm";
import Modal from "../../containers/Modal/Modal";
import { getDuration } from "../../services/suggestions";
import FirebaseAuthContext from "../../context/FirebaseAuth";

import PublicHome from "../PublicHome/PublicHome";
import LoginHomepage from "../../components/LoginHomepage/LoginHomepage";

const Home = props => {
  const FirebaseUserAuth = useContext(FirebaseAuthContext);

  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [duration, setDuration] = useState(null);
  const [disabled, setDisable] = useState(true);
  const [loading, setLoadStatus] = useState(false);

  const changeLoadStatus = status => setLoadStatus(status);

  const destinationHandler = e => {
    setDestination(e.target.value);
  };

  const departureDateHandler = startDate => {
    if (startDate === "Invalid date") return;
    setDepartureDate(startDate);
  };

  const returnDateHandler = endDate => {
    if (endDate === "Invalid date") return;
    setReturnDate(endDate);
  };

  const createTripHandler = e => {
    e.preventDefault();
    let tripDuration = getDuration(departureDate, returnDate);
    setDuration(tripDuration);
  };

  useEffect(() => {
    const disabled = destination && returnDate && departureDate ? false : true;
    setDisable(disabled);
  }, [destination, departureDate, returnDate]);

  const createTripForm = (
    <CreateTripForm
      destination={destination}
      startDate={departureDate}
      endDate={returnDate}
      destinationHandler={destinationHandler}
      startDateHandler={departureDateHandler}
      endDateHandler={returnDateHandler}
      duration={duration}
      createTripHandler={createTripHandler}
      disabled={disabled}
    />
  );
  return (
    <>
      <Modal
        changeLoadStatus={changeLoadStatus}
        destination={destination}
        duration={duration}
        departureDate={departureDate}
        returnDate={returnDate}
      />

      {FirebaseUserAuth.user ? (
        <LoginHomepage
          create_trip_form={createTripForm}
          user={FirebaseUserAuth.user}
        />
      ) : (
        <PublicHome create_trip_form={createTripForm} loading={loading} />
      )}
    </>
  );
};

export default Home;
