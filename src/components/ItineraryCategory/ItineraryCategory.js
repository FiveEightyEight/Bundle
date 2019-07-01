import React from "react";
import countries from "i18n-iso-countries";
import "./ItineraryCategory.css";
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const ItineraryCategory = props => {
  const { category } = props;

  return (
    <>
      <div className="itinerary-category-card-header">
        <img
          src={require(`../../assets/images/itinerary-categories/${
            category.itinerary_name
          }.svg`)}
          alt=""
          className="itinerary-card-header-img"
        />
        <h4 className="card-header-title font-weight-bold align-self-center">
          {category.name}
        </h4>
      </div>
      <div className="itinerary-card-body">
        <ul className="card-body">
          <p className="card-text">Address: {category.address}</p>
          <p className="card-text">
            Phone:{` ${category.phone_number}`}
            {/*countryCode === "US"
          ? phoneNumber.formatNational()
  : phoneNumber.formatInternational()*/}
          </p>
          <p className="card-text">{category.note}</p>
        </ul>
      </div>
    </>
  );
};

export default ItineraryCategory;
