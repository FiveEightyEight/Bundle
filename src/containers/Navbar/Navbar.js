import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { pushRotate as Menu } from "react-burger-menu";
import "./Navbar.css";
import BundleLogo from "../../assets/images/logo/bundle_logo.svg";

// Pages
import ShowLoginOrSignup from "../ShowLoginOrSignup/ShowLoginOrSignup";

// Context
import FirebaseAuthContext from "../../context/FirebaseAuth";

const Navbar = props => {
  const [menuOpen, setMenuOpen] = useState(false);

  const FirebaseUserAuth = useContext(FirebaseAuthContext);

  const UserLogout = () => {
    FirebaseUserAuth.logoutUser();
    props.history.push("/");
    closeMenu();
  };

  // This can is used to close the menu, e.g. when a user clicks a menu item
  const closeMenu = () => setMenuOpen(false);

  const openMenu = () => setMenuOpen(true);

  // This keeps state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  const handleStateChange = state => setMenuOpen(state.isOpen);

  return (
    <Menu
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      isOpen={menuOpen}
      onStateChange={state => handleStateChange(state)}
    >
      <div className="m-5 mt-4 p-5 d-flex flex-column ">
        <Link onClick={closeMenu} className="mb-5" to="/">
          <img src={BundleLogo} width="100" height="100" alt="Bundle" />
        </Link>
        <Link className="bm-item mali700 h2" onClick={closeMenu} to="/">
          Home
        </Link>
        <Link className="bm-item mali700 h2" onClick={closeMenu} to="packHacks">
          Pack Hacks
        </Link>
        <Link
          className="bm-item mali700 h2"
          onClick={closeMenu}
          to="/tsaGuides"
        >
          TSA Guides
        </Link>
        <Link className="bm-item mali700 h2" onClick={closeMenu} to="/about">
          About
        </Link>
      </div>

      {!FirebaseUserAuth.user ? (
        <ShowLoginOrSignup closeMenu={closeMenu} openMenu={openMenu} />
      ) : (
        <button
          className="bundleBlueButton logout-Button border-0 p-2 b-radius18 h2"
          onClick={UserLogout}
        >
          Logout
        </button>
      )}
    </Menu>
  );
};

export default Navbar;
