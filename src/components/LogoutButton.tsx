import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

export const LogoutButton = () => {
  const { isAuthenticated, logout } = useAuth0();

  const handleLogout = () => {
    console.log(window.location.origin + "/index.html");
    logout({
      logoutParams: {
        returnTo: window.location.origin + "/index.html",
      },
    }).then(() => {
      window.location.reload();
    });
  };

  return isAuthenticated && <button onClick={handleLogout}>Log out</button>;
};
