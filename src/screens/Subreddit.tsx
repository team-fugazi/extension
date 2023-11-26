import React, { useContext, useEffect, useState } from "react";

import reddit from "../assets/reddit-logo.png";
import { RedditContext } from "../context/RedditContext";

const Subreddit = () => {
  const { subreddit } = useContext(RedditContext);

  return (
    <div>
      {subreddit ? (
        <a className="relative block overflow-hidden p-4">
          {/* Subreddit Intro */}
          <div className="flex flex-row gap-2">
            <img src={reddit} alt="Subreddit" className="rounded w-8 h-8" />

            <div className="flex flex-col -space-y-1 ">
              <h3 className="font-semibold text-gray-900 text-md">
                {subreddit.title}
              </h3>
              {/* <p className="font-medium text-gray-600 text-xs ">/subreddit</p> */}
              <p className="font-medium text-gray-600 text-xs ">
                {subreddit.display_name}
              </p>
            </div>
          </div>

          {/* Subreddit Description */}
          <div className="mt-4">
            <p className="max-w-[40ch] text-xs text-gray-500 text-left line-clamp-3">
              {subreddit.public_description}
            </p>
          </div>

          {/* Subreddit Meta */}
          <dl className="mt-4 flex gap-4 sm:gap-6 justify-evenly">
            <div className="flex flex-col">
              <dt className="text-sm  text-gray-600">Created</dt>
              <dd className="text-xs text-gray-500">
                {new Date(subreddit.created_utc).toDateString()}
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="text-sm  text-gray-600">Subscribers</dt>
              <dd className="text-xs text-gray-500">{subreddit.subscribers}</dd>
            </div>
          </dl>
        </a>
      ) : (
        <a>you are not in a subreddit</a>
      )}
    </div>
  );
};

export default Subreddit;
