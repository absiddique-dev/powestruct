"use client";
import React, { useState, useEffect } from "react";
import { AlertTriangle, Timer } from "lucide-react";
import { logo } from "@/lib/config";

const NotFoundPage = () => {
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    if (timeLeft === 0) {
      window.location.href = "/";
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4 font-sans transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[20%] w-72 h-72 bg-orange-200/20 dark:bg-orange-900/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[20%] left-[20%] w-96 h-96 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-md w-full text-center">
        <div className="mb-8 flex justify-center relative">
          <div className="absolute inset-0 bg-orange-100 dark:bg-orange-900/20 rounded-full blur-xl transform scale-150" />
          <div className="relative bg-white  p-2 rounded-full shadow-2xl dark:border-slate-800">
<<<<<<< HEAD
            <img
              src={logo}
              alt="powerstruct-logo"
              className="aspect-square rounded-full w-20"
            />
=======
            <img src={logo} className="aspect-square rounded-full w-20" />
>>>>>>> c075c481394de51cfe1021f60020e062460d96b8
          </div>
        </div>

        <h1 className="text-8xl font-black light:text-slate-200 dark:text-slate-800 mb-2 select-none">
          404
        </h1>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Page Not Found
        </h2>

        <div className="bg-white dark:bg-slate-800 border-l-4 border-orange-500 rounded-r-xl shadow-lg p-5 mb-8 text-left transform transition-all hover:scale-[1.02]">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-orange-50 dark:bg-orange-900/30 rounded-lg shrink-0">
              <AlertTriangle
                size={20}
                className="text-orange-600 dark:text-orange-400"
              />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                Wrong Turn?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Oh, you are in a wrong page URL. Don't worry, I am redirecting
                you to the main page shortly.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="inline-flex items-center justify-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-4 py-2 rounded-full">
            <Timer size={16} className="animate-spin-slow" />
            <span>
              Redirecting in{" "}
              <span className="text-orange-600 dark:text-orange-400 font-bold">
                {timeLeft}
              </span>{" "}
              seconds...
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;
