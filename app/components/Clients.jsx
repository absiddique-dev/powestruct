import React from "react";
import {
  Handshake,
  Building2,
  Zap,
  Landmark,
  Globe2,
  RadioTower,
  Leaf,
  Wifi,
  Briefcase,
} from "lucide-react";
import { logo } from "@/lib/config";

const clients = [
  {
    name: "M/s Aminur Islam",
    type: "Strategic Partner",
    icon: Briefcase,
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    name: "Power Grid Corp",
    type: "Energy",
    icon: Zap,
    color: "text-amber-500 dark:text-amber-400",
  },
  {
    name: "Assam State Electricity",
    type: "Government",
    icon: Landmark,
    color: "text-emerald-600 dark:text-emerald-400",
  },
  {
    name: "National Highways",
    type: "Infrastructure",
    icon: Globe2,
    color: "text-slate-700 dark:text-slate-300",
  },
  {
    name: "City Infra Solutions",
    type: "Urban Dev",
    icon: Building2,
    color: "text-indigo-600 dark:text-indigo-400",
  },
  {
    name: "Rural Electrification",
    type: "Development",
    icon: Zap,
    color: "text-orange-500 dark:text-orange-400",
  },
  {
    name: "Telecom Towers Ltd",
    type: "Telecommunications",
    icon: RadioTower,
    color: "text-violet-600 dark:text-violet-400",
  },
  {
    name: "Green Energy Pvt",
    type: "Renewables",
    icon: Leaf,
    color: "text-green-500 dark:text-green-400",
  },
];

const ClientLogo = ({ client }) => {
  return (
    <div className="group relative flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:border-orange-200 dark:hover:border-orange-500/30 hover:-translate-y-1 overflow-hidden border border-slate-200">
      <div className="absolute inset-0 bg-[url('/assets/graphics/01.png')] bg-cover bg-center opacity-[0.2]  pointer-events-none" />

      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 z-10">
        <span className="text-[10px] font-bold tracking-wider text-orange-600 dark:text-orange-300 bg-orange-50 dark:bg-orange-500/10 px-2 py-1 rounded-full uppercase border border-orange-100 dark:border-orange-500/20">
          {client.type}
        </span>
      </div>

      <div className="flex flex-col items-center gap-4 transition-all duration-300 group-hover:scale-105 z-10">
        <div className="p-2 shadow-2xl rounded-full bg-slate-50 dark:bg-slate-700/50 group-hover:bg-white dark:group-hover:bg-slate-700 shadow-sm group-hover:shadow-md transition-all duration-300">
          <div className="w-12 h-12 md:w-16 md:h-16">
            <img src={logo} className="w-full rounded-full" />
          </div>
        </div>

        <span className="text-center font-bold light:text-slate-400 dark:text-slate-500 light:group-hover:text-slate-800 dark:group-hover:text-slate-200 text-sm md:text-base transition-colors duration-300">
          {client.name}
        </span>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300 group-hover:w-1/3 rounded-t-full opacity-0 group-hover:opacity-100 z-10" />
    </div>
  );
};

const Clients = () => {
  return (
    <section
      id="clients"
      className="py-20 light:bg-slate-50 dark:bg-slate-900 transition-colors duration-300 px-4 md:px-8 lg:px-[100px]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wide mb-6 shadow-sm">
            <Handshake size={14} className="text-orange-500" />
            <span>Trusted Partnerships</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold light:text-slate-900 dark:text-white mb-6 leading-tight">
            Building the Future with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400">
              Industry Leaders
            </span>
          </h2>

          <p className="light:text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            We are proud to collaborate with leading organizations and
            government bodies to deliver world-class infrastructure solutions
            across the nation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {clients.map((client, index) => (
            <ClientLogo key={index} client={client} />
          ))}
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t light:border-slate-100 dark:border-slate-400 pt-16">
          {[
            { label: "Years Experience", value: "10+" },
            { label: "Projects Completed", value: "50+" },
            { label: "Safety Record", value: "100%" },
            { label: "Support Available", value: "24/7" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center group cursor-default">
              <div className="text-3xl md:text-4xl font-extrabold light:text-slate-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-semibold light:text-slate-500 dark:text-slate-500 uppercase tracking-widest group-hover:text-slate-400 dark:group-hover:text-slate-400 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
