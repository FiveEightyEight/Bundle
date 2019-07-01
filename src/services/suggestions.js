import items_original from "./items.json";
// const moment = require('moment');
// const items = require('./items.json');

// returns a number between two date strings
// format YYYY-MM-DD
const getDuration = (departureDate, returnDate) => {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(departureDate);
  const secondDate = new Date(returnDate);
  return Math.round(
    Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay)
  );
};
// example: getDuration("2019-05-28", "2019-06-22") // returns 25

const getSuggestions = (duration = 4, condition) => {
  // this function calls buildSuggestions based on the duration
  if (typeof duration !== "number") duration = parseInt(duration);
  if (isNaN(duration)) return buildSuggestions(4);
  // const conditions = ['rain', 'cold', 'hot'];
  if (duration < 3) return buildSuggestions(2);
  else if (duration < 5) return buildSuggestions(4);
  else if (duration < 8) return buildSuggestions(7);
  else if (duration < 11) return buildSuggestions(10);
  else if (duration < 15) return buildSuggestions(14);
  else return buildSuggestions(14);
};

const buildSuggestions = actualTripDuration => {
  let items = JSON.parse(JSON.stringify(items_original));
  const suggested = {};
  // loop through general items
  for (let item of items.general) {
    // based on actualTripDuration length of stay
    // determine if the item should be brought
    if (item.quantity[actualTripDuration] < 1) continue;
    // if the quanity for the actualTripDuration length is at least 1
    // add it to the list
    /* ----- */

    // make a copy of the current item
    const temp = item;

    // change its quantity to the recommendetion based on length of stay
    temp.quantity = item.quantity[actualTripDuration];

    // added a boolean property to be used in the suggestion page
    temp.pack = true;

    // added image key with default url
    temp.image = item.image || "http://clipart-library.com/img/2104580.jpg";

    // if the category list does not exist in the suggestions object, create it
    if (!suggested[item.category]) suggested[item.category] = [];

    // add the item to its category
    suggested[item.category].push(temp);
  }
  return suggested;
};

const randomTripNameGenerator = cityName =>
  cityName +
  "-" +
  Math.floor(Math.random() * 10) +
  "" +
  Math.floor(Math.random() * 10) +
  "" +
  Math.floor(Math.random() * 10);

const splitDestination = destination => {
  let obj = null;
  if (destination.includes(",")) {
    obj = destination.split(",").map(e => e.trim());
  } else {
    obj = destination.trim().split(" ");
  }
  return { city: obj[0], country: obj[obj.length - 1] };
};

export {
  getDuration,
  getSuggestions,
  randomTripNameGenerator,
  splitDestination
};
