/*global chrome*/

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    !isAuthenticated && (
      <button
        onClick={() => {
          loginWithRedirect({
            async openUrl(url) {
              await chrome.tabs.create({ url: url }); // todo: ignore chrome object in ts config
            },
          });
        }}
      >
        Log in
      </button>
    )
  );
};
