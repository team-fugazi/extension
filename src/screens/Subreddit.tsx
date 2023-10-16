import React from "react";

const Subreddit = () => {
  return (
    <div>
      <a className="relative block overflow-hidden p-4">
        {/* Subreddit Intro */}
        <div className="flex flex-row justify-start gap-2">
          <img
            src="https://via.placeholder.com/150"
            alt="Subreddit"
            className="rounded w-8 h-8"
          />
          <div className="-space-y-1 flex flex-col">
            <h3 className="font-semibold text-gray-900 text-md">
              Display name
            </h3>

            <p className="text-xs font-medium text-gray-600">/subreddit</p>
          </div>
        </div>

        {/* Subreddit Description */}
        <div className="mt-4">
          <p className="max-w-[40ch] text-sm text-gray-500 text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
            illum provident a, ipsa maiores deleniti consectetur nobis et eaque.
          </p>
        </div>
        
        {/* Subreddit Meta */}
        <dl className="mt-6 flex gap-4 sm:gap-6 justify-evenly">
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">Created</dt>
            <dd className="text-xs text-gray-500">31st June, 2021</dd>
          </div>

          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">Subscribers</dt>
            <dd className="text-xs text-gray-500">1389</dd>
          </div>
        </dl>
      </a>
    </div>
  );
};

export default Subreddit;
