import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RedditProvider } from "./provider/RedditProvider.tsx";
import { UserContext } from "./context/UserContext.tsx";
import { UserProvider } from "./provider/UserProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <UserProvider>
    <RedditProvider>
      <App />
    </RedditProvider>
  </UserProvider>
);
