import React, { createContext } from "react";
import { subredditModel } from "../types/Types";

interface RedditContext {
  subreddit: null | subredditModel;
  setSubreddit: React.Dispatch<React.SetStateAction<null | subredditModel>>;
  onRetrieveSubreddit: (subreddit: string) => void;
}

export const RedditContext = createContext<RedditContext>({
  subreddit: null,
  setSubreddit: () => {},
  onRetrieveSubreddit: (subreddit: string) => {},
});
