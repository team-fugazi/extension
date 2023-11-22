import React, { useEffect, useState } from "react";

import reddit from "../assets/reddit-logo.png";

const Subreddit = () => {
  const [subreddit, setSubreddit] = useState<string | null>(null);
  useEffect(() => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let url = tabs[0].url;
      if (url.includes("reddit.com")) {
        if (url.startsWith("https://")) {
          setSubreddit(url.slice(url.indexOf("/r/")));
        }
      } else {
        setSubreddit("Enter Reddit to start scan!");
      }
    });
  });

  return (
    <div>
      <a className="relative block overflow-hidden p-4">
        {/* Subreddit Intro */}
        <div className="flex flex-row gap-2">
          <img src={reddit} alt="Subreddit" className="rounded w-8 h-8" />

          <div className="flex flex-col -space-y-1 ">
            <h3 className="font-semibold text-gray-900 text-md">
              Display name
            </h3>
            {/* <p className="font-medium text-gray-600 text-xs ">/subreddit</p> */}
            <p className="font-medium text-gray-600 text-xs ">{subreddit}</p>
          </div>
        </div>

        {/* Subreddit Description */}
        <div className="mt-4">
          <p className="max-w-[40ch] text-xs text-gray-500 text-left line-clamp-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
            illum provident a, ipsa maiores deleniti consectetur nobis et eaque.
          </p>
        </div>

        {/* Subreddit Meta */}
        <dl className="mt-4 flex gap-4 sm:gap-6 justify-evenly">
          <div className="flex flex-col">
            <dt className="text-sm  text-gray-600">Created</dt>
            <dd className="text-xs text-gray-500">31st June, 2021</dd>
          </div>

          <div className="flex flex-col">
            <dt className="text-sm  text-gray-600">Subscribers</dt>
            <dd className="text-xs text-gray-500">1389</dd>
          </div>
        </dl>
      </a>
    </div>
  );
};

export default Subreddit;
