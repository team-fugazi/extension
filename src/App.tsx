// Path: src/App.tsx
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

// Local Components
import MainScreen from "./pages/Main";
import { useEffect } from "react";

// Environment variables
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

function App() {
  const { isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0();

  // const getToken = async () => {
  //   try {
  //     const token = await getAccessTokenSilently();
  //     setToken(token);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   getToken();
  // }, []);

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <MainScreen />
    </Auth0Provider>
  );
}

export default App;
