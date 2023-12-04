import React, { createContext } from "react";
import { subredditModel } from "../types/Types";

interface RedditContext {
  subreddit: null | subredditModel;
  numberOfScannedPosts: number;
  setSubreddit: React.Dispatch<React.SetStateAction<null | subredditModel>>;
  setNumberOfScannedPosts: React.Dispatch<React.SetStateAction<number>>;
  onRetrieveSubreddit: (subreddit: string) => void;
}

export const RedditContext = createContext<RedditContext>({
  subreddit: null,
  numberOfScannedPosts: null,
  setSubreddit: () => {},
  setNumberOfScannedPosts: () => {},
  onRetrieveSubreddit: (subreddit: string) => {},
});
