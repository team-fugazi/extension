/*global chrome*/

import React, { useContext, useEffect } from "react";
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
    isLoading,
    user,
  } = useAuth0();


  useEffect(() => {
    console.log(user)
  }, [user])

  const handleLogin = async () => {
    const res = await loginWithPopup()

    
    const idToken = (await getIdTokenClaims()).__raw;
    //const result = getMeApi(idToken);
    console.log(isLoading)

    // console.log(user);
    //console.log("____");
     //onRetrieveUserStats(user.sub);
    //console.log(stats);
    //console.log(result);
  };

  return (
    !isAuthenticated && (
      <button
        onClick={() => {
          handleLogin()
        }}
      >
        Log in
      </button>
    )
  );
};
