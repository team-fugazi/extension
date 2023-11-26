import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RedditProvider } from "./provider/RedditProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RedditProvider>
    <App />
  </RedditProvider>
);
