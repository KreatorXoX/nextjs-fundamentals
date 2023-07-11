import React from "react";

type Props = {};

const LoadingSpinner = (props: Props) => {
  return (
    <div
      className="h-36 w-36 rounded-full animate-spin border border-indigo-600
    flex items-center justify-center
    "
    >
      <span className="text-2xl text-gray-500">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
