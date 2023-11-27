/*global chrome*/

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { isAuthenticated, loginWithPopup, getAccessTokenSilently } =
    useAuth0();

  const handleLogin = async () => {
    loginWithPopup()
      .then((result) => {
        console.log(result);
        const accessToken = getAccessTokenSilently();
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    !isAuthenticated && (
      <button
        onClick={() => {
          handleLogin();
        }}
      >
        Log in
      </button>
    )
  );
};
