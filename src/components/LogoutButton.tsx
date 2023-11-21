import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { isAuthenticated, logout } = useAuth0();

  return (
    isAuthenticated && (
      <button
        onClick={() => {
          logout({
            logoutParams: {
              returnTo: window.location.origin + "/index.html",
            },
          });
        }}
      >
        Log out
      </button>
    )
  );
};
