import axios from "axios";
import { randomTripNameGenerator, splitDestination } from "./suggestions";
import BASE_URL from "./backendUrlConnect.js";

const buildBundle = async (
  items,
  destination,
  departureDate,
  returnDate,
  user_uid = null
) => {
  let temp = splitDestination(destination);
  let name = randomTripNameGenerator(temp.city);
  try {
    const {
      data: { trip_id }
    } = await axios({
      method: "post",
      url: BASE_URL + "/trip/",
      data: {
        name,
        city: temp.city,
        country: temp.country,
        departure_date: departureDate,
        return_date: returnDate,
        user_uid,
        items
      }
    });
    return trip_id;
  } catch (err) {
    console.log("ERROR CREATING TRIP");
    return "";
  }
};

export { buildBundle };
