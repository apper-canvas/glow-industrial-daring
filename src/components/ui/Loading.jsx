import React from "react";

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="text-center">
        <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
        <div className="shimmer h-4 w-24 rounded mx-auto mb-2"></div>
        <div className="shimmer h-3 w-32 rounded mx-auto"></div>
      </div>
    </div>
  );
};

export default Loading;