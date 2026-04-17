import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[400px] w-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>

        <p className="text-gray-500 font-medium animate-pulse">
          Loading friends...
        </p>
      </div>
    </div>
  );
};

export default Loading;
