/*global chrome*/

import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getMeApi } from "../api/AuthApi";
import { UserContext } from "../context/UserContext";

export const LoginButton = () => {
  const { onRetrieveUserStats } = useContext(UserContext);

  const {
    isAuthenticated,
    loginWithPopup,
    getAccessTokenSilently,
    getIdTokenClaims,
    user,
  } = useAuth0();

  const handleLogin = async () => {
    await loginWithPopup();
    const idToken = (await getIdTokenClaims()).__raw;
    //const result = getMeApi(idToken);

    // console.log(user);
    //console.log("____");
    //const stats = onRetrieveUserStats(user.sub);
    //console.log(stats);
    //console.log(result);
  };

  return (
    !isAuthenticated && (
      <button
        data-testid="login-button"
        onClick={() => {
          handleLogin();
        }}
      >
        Log in
      </button>
    )
  );
};
