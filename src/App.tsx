// Path: src/App.tsx
import { Auth0Provider } from "@auth0/auth0-react";

// Local Components
import MainScreen from "./pages/Main";

// Environment variables
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

function App() {
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
