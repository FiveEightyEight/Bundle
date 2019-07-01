import React, { useEffect, useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import { getSuggestions } from "../../services/suggestions";
import axios from "axios";
import { buildBundle } from "../../services/backendCalls";
import "./Suggestions.css";
import FirebaseAuthContext from "../../context/FirebaseAuth";
import Baseurl from "../../services/backendUrlConnect";
import { addTrip } from "../../services/homeLocalStorage";

export default withRouter(props => {
  const {
    destination,
    duration,
    departureDate,
    returnDate,
    changeLoadStatus
  } = props;

  const FirebaseUserAuth = useContext(FirebaseAuthContext);

  const [categories, setCategories] = useState(null);
  const [items, setItems] = useState(null);
  const [displayItems, setDisplayItems] = useState(null);
  const [currCategory, setCurrCategory] = useState(null);
  const [newDisplay, setNewDisplay] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const allTheItems = getSuggestions(duration);
    setItems(allTheItems);

    const categoryObj = [
      { name: "clothing", id: 1 },
      { name: "accessories", id: 2 },
      { name: "electronics", id: 3 },
      { name: "personals", id: 4 },
      { name: "documents", id: 5 },
      { name: "first-aid", id: 6 },
      { name: "essentials", id: 7 },
      { name: "children", id: 8 },
      { name: "misc", id: 9 }
    ];
    setCategories(categoryObj);
  }, [duration]);

  useEffect(() => {
    if (!items) return;
    if (!currCategory) setDisplayItems(items.clothing);
  }, [items, currCategory]);

  useEffect(() => {
    if (FirebaseUserAuth.user !== null) {
      setUser(FirebaseUserAuth.user.uid);
    }
  }, [FirebaseUserAuth, user]);

  useEffect(() => {
    if (newDisplay) {
      if (newDisplay.update) {
        setDisplayItems(newDisplay.items);
        setNewDisplay({ items: {}, update: false });
      }
      return;
    }
  }, [newDisplay]);

  const handleCategoryClick = category => e => {
    setCurrCategory(category);
    setDisplayItems(items[category]);
  };

  const handleItemClick = (itemName, i) => e => {
    const currentItem = displayItems[i];
    items[currentItem.category][i].pack = !items[currentItem.category][i].pack;
    setItems(items);
    setNewDisplay({ items: items[currentItem.category], update: true });
  };

  const handleBundle = () => {
    changeLoadStatus(true);
    buildBundle(items, destination, departureDate, returnDate, user)
      .then(tripId => {
        changeLoadStatus(false);
        if (tripId && destination && duration && departureDate && returnDate) {
          addTrip(tripId, destination, duration, departureDate, returnDate);
        }
        props.history.push("/pack/" + tripId);
      })
      .catch(err => {
        console.log(err);
        changeLoadStatus(true);
      });
  };

  return (
    <>
      <div className="modal-header bg-bundleBlue border-0">
        <div className="container-fluid">
          <h2 className="c-white display-4">Remove items you don't need.</h2>
        </div>

        <button
          type="button"
          className="close c-white"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div className="modal-body m-0 p-0">
        <div className="container-fluid bg-huate">
          <div className="row sticky-top bg-bundleBlue p-3">
            {categories ? (
              <div className="suggestions-categories d-flex justify-content-between align-items-center overflow-auto pb-5">
                {categories.map(e => {
                  const activeCatergoryStyle =
                    "c-bundleBlue ds-lightGrey b-radius9 bg-white";
                  const inactiveCategoryStyle =
                    "c-huate bg-transparent inactiveCategory-item";

                  if (e.name === "misc") return null;
                  if (e.name === "children") return null;
                  if (e.name === "essentials") return null;

                  let activeCatergoryClassname = null;
                  if (!currCategory) {
                    activeCatergoryClassname =
                      e.name.toLowerCase() === "clothing"
                        ? activeCatergoryStyle
                        : inactiveCategoryStyle;
                  } else {
                    activeCatergoryClassname =
                      e.name.toLowerCase() === currCategory.toLowerCase()
                        ? activeCatergoryStyle
                        : inactiveCategoryStyle;
                  }

                  return (
                    <button
                      key={e.id}
                      onClick={handleCategoryClick(e.name)}
                      className={
                        "mx-3 p-4 h1 capitalizeText border-0 " +
                        activeCatergoryClassname
                      }
                    >
                      {e.name}
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>
          <div className="row bg-babyBlue p-5 justify-content-center">
            {displayItems
              ? displayItems.map((e, i) => {
                  const activeCardBorder = e.pack
                    ? "ds-lightGrey activeSuggestedItem-border"
                    : "border-0";
                  const activeCardText = e.pack ? "c-denimBlue" : "c-smokeGrey";
                  return (
                    <div
                      key={i}
                      onClick={handleItemClick(e.name, i)}
                      className="col-5 col-m-4 col-lg-3 b-radius9 my-3 mx-2 p-0"
                    >
                      <div
                        className={
                          "bg-white h-100 w-100 b-radius9 " + activeCardBorder
                        }
                      >
                        <div
                          className={
                            "pt-3 bg-white text-center mali700 b-radius9 h2 border-0" +
                            activeCardText
                          }
                        >
                          {e.name}
                        </div>
                        <div className="card-body b-radius9">
                          <div className="container-fluid p-0">
                            <div className="row p-0">
                              <img
                                src={e.image}
                                alt={e.name}
                                className="col-12 p-0 m-0"
                                height="80%"
                              />
                            </div>
                            <div className="row justify-content-center pt-1 pb-2">
                              {e.pack ? (
                                <i className="far fa-check-circle fa-3x activeSuggestedItem-color " />
                              ) : (
                                <i className="far fa-times-circle fa-3x c-smokeGrey " />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <button
          type="button"
          className="b-radius9 c-bundleBlue bundeBlue-border-1 p-3 h1 cancelBundleButton bg-transparent"
          data-dismiss="modal"
        >
          Cancel
        </button>
        <button
          className="bundleBlueButton border-0 p-3 h1 bundleItSubmitButton "
          data-dismiss="modal"
          onClick={handleBundle}
        >
          Bundle It!
        </button>
      </div>
    </>
  );
});
