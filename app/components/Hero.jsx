import React, { useEffect, useState } from "react";
import {
  ChevronRight,
  Phone,
  HardHat,
  Zap,
  RadioTower,
  Building2,
} from "lucide-react";
import PowerTower from "./PowerTower";

const contactNo = "+919876543210";

const InfrastructureVisual = () => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center perspective-1000">
      <div className="absolute inset-0 bg-linear-to-tr from-orange-100/50 to-transparent rounded-full blur-3xl animate-pulse" />

      <div className="relative w-72 h-80 transform-style-3d rotate-y-12 rotate-x-6 animate-float">
        <div className="absolute bottom-0 w-full h-36  rounded-2xl shadow-xl border bg-[#ffffff45] border-orange-100 p-5 flex flex-col justify-between transform translate-z-0 transition-transform hover:translate-z-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
              <Building2 size={24} />
            </div>
            <div>
              <span className="font-bold light:text-slate-800 block">
                Civil & Structural
              </span>
              <span className="text-xs light:text-slate-500">
                Infrastructure
              </span>
            </div>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-2">
            <div className="bg-orange-500 w-[85%] h-full rounded-full" />
          </div>
        </div>

        <div className="absolute bottom-28 -right-4 w-60 h-32 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-blue-50 p-5 flex flex-col justify-center transform translate-z-8 animate-float-delayed">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
              <Zap size={24} />
            </div>
            <span className="font-bold text-slate-800">Power Systems</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded">
              Active
            </span>
            <span className="text-xs text-slate-500">Grid Connected</span>
          </div>
        </div>

        <div className="absolute top-0 -left-6 w-52 h-28 bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl shadow-slate-900/20 p-4 text-white transform translate-z-12 animate-float">
          <div className="flex items-center justify-between mb-3">
            <RadioTower size={20} className="text-orange-400" />
            <span className="text-[10px] font-bold tracking-wider uppercase border border-white/20 px-2 py-0.5 rounded">
              EPC Project
            </span>
          </div>
          <div className="text-xs text-slate-300">Transmission Lines</div>
          <div className="text-lg font-bold">Operational</div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-[90vh] overflow-hidden light:bg-slate-50 font-sans px-4 md:px-8 lg:px-[100px]">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-orange-100/30 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-blue-100/30 blur-[80px] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto h-full flex flex-col md:flex-row items-center pt-24 md:pt-12 min-h-[90vh]">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pr-12 mb-16 md:mb-0">
          <div
            className={`
              inline-flex items-center gap-2 bg-white border border-orange-200 shadow-sm text-orange-700 text-xs md:text-sm font-bold tracking-wide uppercase px-4 py-1.5 rounded-full mb-6
              transition-all duration-700 transform
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }
            `}
          >
            <HardHat size={14} className="text-orange-600" />
            Engineering Excellence
          </div>

          <h1
            className={`
              text-4xl md:text-5xl lg:text-6xl font-extrabold light:text-slate-900 leading-tight mb-6
              transition-all duration-700 delay-100 transform
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
            `}
          >
            Empowering Progress, <br />
            Strengthening{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-amber-600">
              Communities
            </span>
          </h1>

          <div
            className={`
              flex flex-col sm:flex-row gap-4 w-full sm:w-auto
              transition-all duration-700 delay-300 transform
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }
            `}
          >
            <a
              href={`tel:${contactNo}`}
              className="group relative overflow-hidden bg-slate-900 text-white rounded-xl shadow-lg shadow-slate-900/30 transition-all duration-300 hover:shadow-slate-900/50 hover:-translate-y-1"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <button className="relative flex items-center justify-center gap-2 py-4 px-8 w-full sm:w-auto font-bold tracking-wide">
                <Phone size={18} />
                <span>Contact Us</span>
              </button>
            </a>

            <a
              href="#services"
              className="flex items-center justify-center gap-2 dark:bg-gray-200 dark:text-slate-700  border border-slate-200 rounded-xl hover:bg-orange-50 hover:text-orange-700 hover:border-orange-200 transition-all duration-300 py-4 px-8 w-full sm:w-auto font-bold group"
            >
              Our Core Services
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>

        <div
          className={` hidden lg:flex
            w-full md:w-1/2 justify-center items-center
            transition-all duration-1000 delay-300 transform
            ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }
          `}
        >
          <InfrastructureVisual />
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotateY(12deg) rotateX(6deg);
          }
          50% {
            transform: translateY(-15px) rotateY(12deg) rotateX(6deg);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateZ(32px) translateY(0px);
          }
          50% {
            transform: translateZ(32px) translateY(-10px);
          }
        }
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default Hero;
