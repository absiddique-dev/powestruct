"use client";
import React from "react";
import {
  Quote,
  Users,
  Facebook,
  Twitter,
  CheckCircle2,
  TrendingUp,
  Award,
} from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { companyName } from "@/lib/config";

const StatBlock = ({ icon: Icon, value, label }) => (
  <div className="flex items-center gap-4 p-6 light:bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
    <div className="p-3 light:bg-orange-50 dark:bg-orange-900/20 text-orange-600 rounded-xl">
      <Icon size={24} />
    </div>
    <div>
      <div className="text-2xl font-extrabold light:text-slate-900 dark:text-white">
        {value}
      </div>
      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
        {label}
      </div>
    </div>
  </div>
);

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen light:bg-white font-sans light:text-slate-900 transition-colors duration-300 px-4 md:px-8 lg:px-[100px]">
        <main>
          <section className="py-6">
            <div className="max-w-full mx-auto">
              <div className="light:bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/3 flex flex-col items-center text-center">
                  <div className="w-48 h-48 rounded-lg overflow-hidden mb-6 shadow-lg">
                    <img
                      src="https://placehold.co/400x400/334155/ffffff?text=Aminur+Islam"
                      alt="Aminur Islam"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-start flex-col">
                    <h3 className="text-xl font-bold light:text-slate-900 dark:text-white">
                      Aminur Islam
                    </h3>
                    <p className="text-orange-600 font-medium text-sm mb-4">
                      Managing Director & Shareholder
                    </p>
                  </div>

                  <div className="flex gap-3 justify-center">
                    <button className="p-2 light:bg-slate-100 dark:bg-slate-800 light:text-slate-500 hover:text-yellow-600 transition-colors border rounded-full">
                      <Facebook size={16} />
                    </button>
                    <button className="p-2 light:bg-slate-100 dark:bg-slate-800 light:text-slate-500 hover:text-yellow-400 transition-colors border rounded-full">
                      <Twitter size={16} />
                    </button>
                  </div>
                </div>

                <div className="w-full md:w-2/3 relative">
                  <Quote className="absolute -top-6 -left-16 text-orange-200 dark:text-orange-900/20 w-16 h-16 transform -scale-x-100" />
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">
                    From the Founder's Desk
                  </h4>

                  <div className="space-y-4 text-lg light:text-slate-700 dark:text-slate-300 font-medium leading-relaxed font-serif italic">
                    <p>
                      "At Powerstruct, we believe that true engineering
                      excellence lies in the details. Our partnership is built
                      on a foundation of integrity and a relentless commitment
                      to quality."
                    </p>
                    <p>
                      "We aspire to drive India's development through projects
                      that embody technical precision. We aren't just building
                      infrastructure; we are empowering the nation's future, one
                      project at a time."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12  -mt-12 relative z-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <StatBlock
                  icon={Award}
                  value="10+ Years"
                  label="Field Experience"
                />
                <StatBlock
                  icon={CheckCircle2}
                  value="100%"
                  label="Project Completion"
                />
                <StatBlock icon={Users} value="50+" label="Expert Engineers" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl font-bold light:text-slate-900 dark:text-white mb-6">
                    Our Story
                  </h2>
                  <div className="space-y-6 light:text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p>
                      {companyName} stands at the forefront of the region's
                      growing power and construction sectors. What began as a
                      vision to bridge the infrastructure gap has evolved into a
                      comprehensive engineering firm known for technical
                      excellence and an unyielding commitment to quality.
                    </p>
                    <p>
                      Through our strategic partnership with{" "}
                      <strong className="text-slate-900 dark:text-white">
                        M/s Aminur Islam
                      </strong>
                      , we leverage deep local expertise alongside modern
                      project management methodologies. This unique combination
                      allows us to execute complex electrical, civil, and
                      telecom projects with precision and speed.
                    </p>
                    <p>
                      Our foundation is built on three core pillars:{" "}
                      <span className="text-orange-600 font-semibold">
                        Integrity, Innovation, and Trust.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-200">
                    <img
                      src="https://placehold.co/800x600/1e293b/cbd5e1?text=Infrastructure+Site"
                      alt="Powerstruct Site"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-xs hidden md:block">
                    <div className="flex items-start gap-4">
                      <TrendingUp className="text-green-500 w-8 h-8 mt-1" />
                      <div>
                        <div className="font-bold text-black">Rapid Growth</div>
                        <div className="text-xs text-slate-500 mt-1">
                          Consistently expanding our footprint across the North
                          East region since inception.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
