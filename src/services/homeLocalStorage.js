const addTrip = (id, destination, duration, departureDate, returnDate) => {
  const tripsFromLocalStorage = JSON.parse(localStorage.getItem("trips")) || [];

  const newTrip = {
    id,
    destination,
    duration,
    departureDate,
    returnDate
  };

  const updatedNewTrips = [newTrip].concat(tripsFromLocalStorage);

  localStorage.setItem("trips", JSON.stringify(updatedNewTrips));
};

const getTrips = () => JSON.parse(localStorage.getItem("trips")) || [];

export { addTrip, getTrips };
