/*global chrome*/

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect, loginWithPopup } = useAuth0();

  return (
    !isAuthenticated && (
      <button
        onClick={() => {
          loginWithPopup();
        }}
      >
        Log in
      </button>
    )
  );
};
