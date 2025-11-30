import React from "react";

const TeamSkeleton = () => {
  return (
    <>
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-xl py-6 px-6 shadow-lg text-center flex flex-col space-y-4 animate-pulse"
          style={{ flex: "1 0 calc(25% - 16px)" }}
        >
          <div className="w-full flex items-center justify-center relative">
            <div className="w-32 aspect-square rounded-full bg-gray-300"></div>
            <div className="absolute bottom-0 right-0 bg-gray-400 h-5 w-16 rounded-full"></div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamSkeleton;
