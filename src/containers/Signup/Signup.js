import React from "react";

import firebase from "../../firebase";
import axios from "axios";
import backendUrlConnect from "../../services/backendUrlConnect";

class Signup extends React.Component {
  state = {
    inputs: {
      username: "",
      email: "",
      password: ""
    },
    firebaseCreateUserError: ""
  };

  handleInputChange = e => {
    const { inputs } = { ...this.state };
    inputs[e.target.name] = e.target.value.trim();

    this.setState({ inputs });
  };

  handleSignupSubmit = e => {
    e.preventDefault();

    const { closeMenu, openMenu } = this.props;
    const { inputs } = this.state;
    const { email, password, username } = inputs;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(
        response => response.user.uid,

        // This is the handling for the Firebase error when creating a user
        ({ message }) => {
          openMenu();
          this.setState({ firebaseCreateUserError: message });
        }
      )
      .then(
        firebaseUid => {
          axios.post(`${backendUrlConnect}/user/`, {
            uid: firebaseUid,
            username,
            email
          });
        },

        // This is the error handling for creating a user in the backend
        err =>
          this.setState({
            firebaseCreateUserError:
              "Trouble creating user. Please try again later!"
          })
      )
      .then(closeMenu())
      .catch(err => console.log("Error", err));
  };

  render() {
    const { inputs, firebaseCreateUserError } = this.state;
    const inputsArray = Object.entries(inputs);

    return (
      <form onSubmit={this.handleSignupSubmit}>
        {inputsArray.map(([inputName, inputValue], index) => {
          const inputType =
            inputName.toLowerCase() === "password" ? "password" : "text";
          const isRequired =
            inputName.toLowerCase() !== "username" ? true : false;

          return (
            <div className="form-group" key={index}>
              <label className="c-bundleBlue h4" htmlFor={inputName}>
                {inputName}
              </label>
              <input
                className="form-control c-denimBlue bundleBlue-border-bottom-3"
                onChange={this.handleInputChange}
                key={index}
                type={inputType}
                value={inputValue}
                name={inputName}
                required={isRequired}
                aria-label={`${inputName}`}
                id={inputName}
                min="1"
              />
            </div>
          );
        })}
        <small className="form-text c-bundleBlue">
          {firebaseCreateUserError ? <p>{firebaseCreateUserError}</p> : null}
        </small>
        <button
          className="bundleBlueButton border-0 p-2 b-radius18 h2"
          type="submit"
        >
          Signup
        </button>
      </form>
    );
  }
}

export default Signup;
