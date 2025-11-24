"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Code2,
  BarChart3,
  Smartphone,
  Globe2,
  ShieldCheck,
  PenTool,
  Layers,
  Zap,
} from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building scalable, high-performance web applications with modern technologies tailored to your business goals.",
    icon: <Code2 className="w-6 h-6" />,
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Web+Dev",
  },
  {
    id: 2,
    title: "Mobile Solutions",
    description:
      "Creating seamless mobile experiences for iOS and Android platforms that engage users on the go.",
    icon: <Smartphone className="w-6 h-6" />,
    image: "https://placehold.co/600x400/7c3aed/ffffff?text=Mobile+App",
  },
  {
    id: 3,
    title: "Data Analytics",
    description:
      "Transforming raw data into actionable insights to drive informed decision-making and strategic growth.",
    icon: <BarChart3 className="w-6 h-6" />,
    image: "https://placehold.co/600x400/059669/ffffff?text=Analytics",
  },
  {
    id: 4,
    title: "Cloud Infrastructure",
    description:
      "Secure and scalable cloud architecture design to ensure your applications are always available and resilient.",
    icon: <Globe2 className="w-6 h-6" />,
    image: "https://placehold.co/600x400/ea580c/ffffff?text=Cloud",
  },
  {
    id: 5,
    title: "Cyber Security",
    description:
      "Comprehensive security assessments and implementation to protect your digital assets from emerging threats.",
    icon: <ShieldCheck className="w-6 h-6" />,
    image: "https://placehold.co/600x400/dc2626/ffffff?text=Security",
  },
  {
    id: 6,
    title: "UI/UX Design",
    description:
      "Crafting intuitive and visually stunning user interfaces that provide exceptional user experiences.",
    icon: <PenTool className="w-6 h-6" />,
    image: "https://placehold.co/600x400/db2777/ffffff?text=Design",
  },
];

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        group relative light:bg-white rounded-2xl overflow-hidden border border-slate-50 cursor-pointer
        transition-all duration-500 ease-out
        ${isHovered ? "shadow-xl -translate-y-2" : "shadow-sm translate-y-0"}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`,
        opacity: 0,
        animation: `fadeInUp 0.6s ease-out forwards ${index * 100}ms`,
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/10 z-10 transition-opacity duration-300 group-hover:opacity-0" />
        <img
          src={service.image}
          alt={service.title}
          className={`
            w-full h-full object-cover transition-transform duration-700
            ${isHovered ? "scale-110" : "scale-100"}
          `}
        />
        <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-sm text-slate-700">
          {service.icon}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold light:text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>
        <p className="light:text-slate-600 leading-relaxed mb-2 text-sm md:text-base">
          {service.description}
        </p>

        <button className="flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
          <span>Learn more</span>
          <ArrowRight
            className={`ml-2 w-4 h-4 transition-transform duration-300 ${
              isHovered ? "translate-x-1" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r light:from-blue-500 light:to-violet-500 dark:bg-white transition-all duration-500 ease-out ${
          isHovered ? "w-full" : "w-0"
        }`}
      />
    </div>
  );
};

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="services" className="min-h-screen light:bg-slate-50 font-sans">
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-4">
            <Zap className="w-3 h-3" />
            <span>Our Expertise</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold light:text-slate-900 mb-6 tracking-tight">
            Digital Solutions for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              Modern Growth
            </span>
          </h2>
          <p className="text-lg  leading-relaxed">
            We deliver cutting-edge technology services designed to elevate your
            business. From robust infrastructure to stunning interfaces, we
            cover every aspect of your digital journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* <div className="mt-20 text-center">
          <button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-slate-900 rounded-full hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900">
            View All Services
            <Layers className="ml-2 w-5 h-5" />
          </button>
        </div> */}
      </section>
    </div>
  );
}
