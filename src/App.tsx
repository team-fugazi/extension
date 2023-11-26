// Path: src/App.tsx
import { Auth0Provider } from "@auth0/auth0-react";

// Local Components
import MainScreen from "./pages/Main";
import { useContext, useEffect } from "react";
import { RedditContext } from "./context/RedditContext";
// Environment variables
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

function App() {
  const { setSubreddit, onRetrieveSubreddit } = useContext(RedditContext);

  useEffect(() => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let url = tabs[0].url;
      if (url.includes("reddit.com")) {
        if (url.startsWith("https://")) {
          console.log(url);
          const subredditName = url.replace("https://www.reddit.com/r/", "");

          const name = subredditName.substring(0, subredditName.indexOf("/"));
          onRetrieveSubreddit(name);
        }
      } else {
        setSubreddit(null);
      }
    });
  }, []);

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
