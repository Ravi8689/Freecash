import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-between gap-2 items-center py-5 animate-pulse flex-wrap">
      <div className="h-4 w-16 md:w-36 bg-gray-200 rounded-full dark:bg-gray-800"></div>
      <div className="h-4 w-16 md:w-36 bg-gray-200 rounded-full dark:bg-gray-800"></div>
      <div className="h-4 w-16 md:w-36 bg-gray-200 rounded-full dark:bg-gray-800"></div>
      <div className="h-4 w-16 md:w-36 bg-gray-200 rounded-full dark:bg-gray-800"></div>
    </div>
  );
};

export default Loading;
