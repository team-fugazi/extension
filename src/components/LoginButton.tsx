/*global chrome*/

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getMeApi } from "../api/AuthApi";

export const LoginButton = () => {
  const {
    isAuthenticated,
    loginWithPopup,
    getAccessTokenSilently,
    getIdTokenClaims,
  } = useAuth0();

  const handleLogin = async () => {
    await loginWithPopup();
    const idToken = (await getIdTokenClaims()).__raw;
    console.log(idToken);
    const result = getMeApi(idToken);

    console.log(result);
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
