import React from "react";

const FirebaseAuthContext = React.createContext({
  user: null,
  logoutUser: () => {}
});

export default FirebaseAuthContext;
