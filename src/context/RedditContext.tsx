import React, { createContext } from "react";
import { subredditModel } from "../types/Types";

interface RedditContext {
  subreddit: null | subredditModel;
  numberOfScannedPosts: number;
  currentUrl: string;
  setSubreddit: React.Dispatch<React.SetStateAction<null | subredditModel>>;
  setCurrentUrl: React.Dispatch<React.SetStateAction<string>>;
  setNumberOfScannedPosts: React.Dispatch<React.SetStateAction<number>>;
  onRetrieveSubreddit: (subreddit: string) => void;
}

export const RedditContext = createContext<RedditContext>({
  subreddit: null,
  currentUrl: null,
  numberOfScannedPosts: null,
  setSubreddit: () => {},
  setNumberOfScannedPosts: () => {},
  setCurrentUrl: () => {},
  onRetrieveSubreddit: (subreddit: string) => {},
});
