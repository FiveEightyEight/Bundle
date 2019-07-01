import React, { Component } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import { toast } from "react-toastify";

// Pages
import Trip from "./containers/Trip/Trip";
import Navbar from "./containers/Navbar/Navbar";
import Home from "./components/Home/Home";
import RemindersPage from "./containers/PackingOverview/RemindersPage/RemindersPage";
import Pack from "./containers/PackingOverview/PackingOverview";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./containers/CreateTripForm/react_dates_overrides.css";

class App extends Component {
  componentDidMount() {
    // Call it once in your app. At the root of your app is the best place
    toast.configure();
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <div id="outer-container">
            <Route path="/" component={Navbar} />
            <main id="page-wrap">
              <div className="vh-100">
                <Switch>
                  <Route path="/pack/:trip_id" exact component={Pack} />
                  <Route path="/trip/:trip_id" exact component={Trip} />
                  <Route path="/" exact component={Home} />
                  <Route path="/reminders" exact component={RemindersPage} />
                </Switch>
              </div>
            </main>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
