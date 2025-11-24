import React from "react";
import { Target, Zap, ShieldCheck } from "lucide-react";

const ValueCard = ({ icon: Icon, title, subtitle, description, theme }) => {
  const themeStyles = {
    blue: {
      bg: "bg-blue-50 dark:bg-blue-900/10",
      text: "text-blue-600 dark:text-blue-400",
      border: "hover:border-blue-200 dark:hover:border-blue-800",
      shadow: "shadow-blue-100/50 dark:shadow-none",
    },
    orange: {
      bg: "bg-orange-50 dark:bg-orange-900/10",
      text: "text-orange-600 dark:text-orange-400",
      border: "hover:border-orange-200 dark:hover:border-orange-800",
      shadow: "shadow-orange-100/50 dark:shadow-none",
    },
    emerald: {
      bg: "bg-emerald-50 dark:bg-emerald-900/10",
      text: "text-emerald-600 dark:text-emerald-400",
      border: "hover:border-emerald-200 dark:hover:border-emerald-800",
      shadow: "shadow-emerald-100/50 dark:shadow-none",
    },
  };

  const style = themeStyles[theme];

  return (
    <div
      className={`group p-8 bg-white dark:bg-slate-800 rounded-3xl transition-all duration-300 border border-slate-100 dark:border-slate-700 ${style.border} hover:shadow-xl hover:-translate-y-1 relative overflow-hidden`}
    >
      {/* Decorative Blur */}
      <div
        className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${style.bg}`}
      />

      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${style.bg} ${style.text}`}
      >
        <Icon size={28} />
      </div>

      <div className="relative z-10">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500 mb-4">
          {subtitle}
        </p>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

const MissionAndVision = () => {
  return (
    <section
      id="missionandvission"
      className="py-24 px-4 md:px-8 lg:px-[100px] bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
            Our Guiding Principles
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Driven by a clear purpose to shape the nation's landscape through{" "}
            <span className="text-orange-600 font-semibold">sustainable</span>{" "}
            and{" "}
            <span className="text-orange-600 font-semibold">innovative</span>{" "}
            engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard
            icon={Target}
            title="Our Vision"
            subtitle="The Destination"
            description="To emerge as a national leader in power infrastructure, setting new benchmarks in engineering excellence, safety, and environmental responsibility."
            theme="blue"
          />
          <ValueCard
            icon={Zap}
            title="Our Mission"
            subtitle="The Path"
            description="To deliver dependable, high-quality, and value-driven engineering services that exceed client expectations and stand the test of time through continuous innovation."
            theme="orange"
          />
          <ValueCard
            icon={ShieldCheck}
            title="Core Values"
            subtitle="The Foundation"
            description="Our culture is built on a client-focused approach, nurturing long-term partnerships through transparency, reliability, professional expertise, and mutual growth."
            theme="emerald"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;
