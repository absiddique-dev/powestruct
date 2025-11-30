import React from "react";

const ServiceCardSkeleton = ({ num }) => {
  return [...Array(num)].map((_, index) => (
    <div
      key={index}
      className="rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-sm relative"
    >
      <div className="animate-pulse">
        <div className="h-48 bg-slate-200 w-full relative">
          <div className="absolute top-4 right-4 h-9 w-9 bg-slate-300/50 rounded-xl"></div>
        </div>

        <div className="p-4">
          <div className="h-7 bg-slate-200 rounded-md w-3/4 mb-3"></div>

          <div className="space-y-2 mb-4">
            <div className="h-4 bg-slate-200 rounded w-full"></div>
            <div className="h-4 bg-slate-200 rounded w-11/12"></div>
            <div className="h-4 bg-slate-200 rounded w-5/6"></div>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <div className="h-5 bg-slate-200 rounded w-24"></div>
            <div className="h-4 w-4 bg-slate-200 rounded"></div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-slate-100"></div>
      </div>
    </div>
  ));
};

export default ServiceCardSkeleton;
