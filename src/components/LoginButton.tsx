import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    !isAuthenticated && (
      <button
        onClick={() => {
          console.log("debug");
          loginWithRedirect();
        }}
      >
        Log in
      </button>
    )
  );
};
