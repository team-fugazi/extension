// Path: src/App.tsx
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

// Local Components
import MainScreen from "./pages/Main";
import { useContext, useEffect } from "react";
import { RedditContext } from "./context/RedditContext";
import { UserContext } from "./context/UserContext";
import Loading from "./screens/Loading";
// Environment variables
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

function App() {
  const { setSubreddit, onRetrieveSubreddit, setNumberOfScannedPosts, setCurrentUrl } =
    useContext(RedditContext);
  const { onRetrieveUserStats, userStats } = useContext(UserContext);

  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {

    if (isAuthenticated) {
      onRetrieveUserStats(user.sub);
    }

    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let url = tabs[0].url;
      if (url.includes("reddit.com")) {
        if (url.startsWith("https://")) {
          console.log(url)
          setCurrentUrl(url)
          const subredditName = url.replace("https://www.reddit.com/r/", "");
          if (subredditName !== "https://www.reddit.com/") {
            const name = subredditName.substring(0, subredditName.indexOf("/"));
            onRetrieveSubreddit(name);
          }
        }
      } else {
        setSubreddit(null);
      }

    });

    // todo: load statistics everytime user enter a new subreddit
    chrome.storage.local.get("numberOfAnalysedPosts", function (data) {
      if (typeof data.numberOfAnalysedPosts == "undefined") {
        setNumberOfScannedPosts(0);
      } else {
        console.log(data.numberOfAnalysedPosts);
        setNumberOfScannedPosts(data.numberOfAnalysedPosts);
      }
    });
  }, [userStats]);

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
