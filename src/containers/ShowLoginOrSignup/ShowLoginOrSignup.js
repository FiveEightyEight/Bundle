import React, { useState } from "react";

// Pages
import Signup from "../../containers/Signup/Signup";
import Login from "../../containers/Login/Login";

const ShowLoginOrSignup = props => {
  const { closeMenu, openMenu } = props;
  const [showLoginOrSignup, setLoginOrSignup] = useState(true);

  const loginActiveStyle = showLoginOrSignup ? "mali700" : "mali300";
  const signupActiveStyle = showLoginOrSignup ? "mali300" : "mali700";

  return (
    <div className="bg-white80 b-radius9 ds-lightGrey m-5 p-5">
      <div className="d-flex justify-content-center">
        <button
          className={`c-bundleBlue p-2 border-0 bg-transparent h2 ${loginActiveStyle}`}
          onClick={() => setLoginOrSignup(true)}
        >
          Login
        </button>
        <button
          className={`c-bundleBlue p-2 border-0 bg-transparent h2 ${signupActiveStyle}`}
          onClick={() => setLoginOrSignup(false)}
        >
          Signup
        </button>
      </div>

      <div className="d-flex justify-content-center">
        {showLoginOrSignup ? (
          <Login closeMenu={closeMenu} openMenu={openMenu} />
        ) : (
          <Signup closeMenu={closeMenu} openMenu={openMenu} />
        )}
      </div>
    </div>
  );
};

export default ShowLoginOrSignup;
