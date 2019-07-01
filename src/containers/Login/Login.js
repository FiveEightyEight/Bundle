import React from "react";

import firebase from "../../firebase";

class Login extends React.Component {
  state = {
    inputs: {
      email: "",
      password: ""
    },
    firebaseLoginUserError: ""
  };

  handleInputChange = e => {
    // Copying state
    const { inputs } = { ...this.state };
    // Directly modifying the input object from the copied state
    inputs[e.target.name] = e.target.value.trim();

    // Set State the modified copied input object
    this.setState({ inputs });
  };

  handleLoginSubmit = e => {
    e.preventDefault();

    const { closeMenu, openMenu } = this.props;
    const { inputs } = this.state;
    const { email, password } = inputs;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(closeMenu())
      .catch(({ message }) => {
        openMenu();
        this.setState({ firebaseLoginUserError: message });
      });
  };

  render() {
    const { inputs, firebaseLoginUserError } = this.state;
    const inputsArray = Object.entries(inputs);

    return (
      <form onSubmit={this.handleLoginSubmit}>
        {inputsArray.map(([inputName, inputValue], index) => {
          const inputType =
            inputName.toLowerCase() === "password" ? "password" : "text";

          return (
            <div className="form-group" key={index}>
              <label className="c-bundleBlue h4" htmlFor={inputName}>
                {inputName}
              </label>
              <input
                className="form-control c-denimBlue bundleBlue-border-bottom-3"
                onChange={this.handleInputChange}
                type={inputType}
                value={inputValue}
                name={inputName}
                aria-label={`${inputName}`}
                id={inputName}
                required
                min="1"
              />
            </div>
          );
        })}
        <small className="form-text c-bundleBlue">
          {!firebaseLoginUserError ? null : <p>{firebaseLoginUserError}</p>}
        </small>
        <button
          className="bundleBlueButton border-0 p-2 b-radius18 h2"
          type="submit"
        >
          Login
        </button>
      </form>
    );
  }
}

export default Login;
