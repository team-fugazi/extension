import React from "react";

const Loading = () => {
  return (
    <main className="rounded-lg border border-gray-100 text-center w-[320px] flex flex-col items-center h-full">
      <div className="flex flex-row justify-between items-center border-b border-gray-100 px-6 py-5">
        <div className="animate-pulse bg-gray-200 h-9 w-9 rounded-full"></div>
        <div className="animate-pulse bg-gray-200 h-9 w-9 rounded-full"></div>
      </div>
    </main>
  );
};

export default Loading;
