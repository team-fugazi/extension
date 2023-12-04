import React, { useState } from "react";
import { subredditModel } from "../types/Types";
import { RedditContext } from "../context/RedditContext";
import { subredditInformationApi } from "../api/RedditApi";

type Props = {
  children: React.ReactNode;
};

const RedditProvider = ({ children }: Props) => {
  const [subreddit, setSubreddit] = useState<null | subredditModel>(null);
  const [numberOfScannedPosts, setNumberOfScannedPosts] = useState<number>(0);

  const onRetrieveSubreddit = async (subreddit: string) => {
    const result: subredditModel = await subredditInformationApi(subreddit);
    setSubreddit(result);
  };

  return (
    <RedditContext.Provider
      value={{
        subreddit,
        numberOfScannedPosts,
        setNumberOfScannedPosts,
        setSubreddit,
        onRetrieveSubreddit,
      }}
    >
      {children}
    </RedditContext.Provider>
  );
};

export { RedditProvider };
