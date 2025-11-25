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
  Bolt,
  TowerControl,
  Landmark,
  Settings,
  Radio,
  ClipboardCheck,
  FileSearch,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { whatsappNo } from "@/lib/config";

const servicesData = [
  {
    id: 1,
    title: "Electrical Infrastructure Projects",
    description:
      "Expert execution of residential, commercial, and industrial electrical infrastructure projects with a strong focus on safety, compliance, and long-term reliability.",
    icon: <Bolt className="w-6 h-6" />,
    image:
      "https://placehold.co/600x400/1e40af/ffffff?text=Electrical+Infrastructure",
  },
  {
    id: 2,
    title: "Transmission Tower Line & Foundation Construction",
    description:
      "Specialized construction of transmission tower lines, foundations, and structural components ensuring efficient power transmission and grid stability.",
    icon: <TowerControl className="w-6 h-6" />,
    image: "https://placehold.co/600x400/047857/ffffff?text=Transmission+Tower",
  },
  {
    id: 3,
    title: "Civil & Structural Engineering Works",
    description:
      "Comprehensive civil and structural engineering services including site development, RCC works, excavation, foundation design, and structural fabrication.",
    icon: <Landmark className="w-6 h-6" />,
    image:
      "https://placehold.co/600x400/b91c1c/ffffff?text=Civil+%26+Structural",
  },
  {
    id: 4,
    title: "Power System Installation & Maintenance",
    description:
      "End-to-end power system installation, testing, commissioning, and maintenance ensuring uninterrupted and optimized power performance.",
    icon: <Settings className="w-6 h-6" />,
    image: "https://placehold.co/600x400/9333ea/ffffff?text=Power+System",
  },
  {
    id: 5,
    title: "Telecom Infrastructure Development",
    description:
      "Deployment of telecom towers, fiber network setup, and communication infrastructure for modern and scalable connectivity solutions.",
    icon: <Radio className="w-6 h-6" />,
    image: "https://placehold.co/600x400/0f766e/ffffff?text=Telecom",
  },
  {
    id: 6,
    title: "EPC & Turnkey Project Execution",
    description:
      "Complete EPC and turnkey solutions covering engineering, procurement, construction, and end-to-end project management for seamless delivery.",
    icon: <ClipboardCheck className="w-6 h-6" />,
    image: "https://placehold.co/600x400/ea580c/ffffff?text=EPC+Turnkey",
  },
  {
    id: 7,
    title: "Project Consultancy & Technical Support",
    description:
      "Professional project consultancy, planning assistance, and technical support to ensure efficient, safe, and cost-effective project execution.",
    icon: <FileSearch className="w-6 h-6" />,
    image: "https://placehold.co/600x400/374151/ffffff?text=Consultancy",
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

        <Button
          as={Link}
          target="_blank"
          href={`https://wa.me/+91${whatsappNo}?text=${encodeURIComponent(
            `Hello Powerstruct Team,\n I am interested in collaborating with you.\n Service I want to know more about : *${service?.title}*\n\n Please let me know the next steps.`
          )}`}
          className="flex items-center justify-start text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors"
        >
          <span>Learn more</span>
          <ArrowRight
            className={`ml-2 w-4 h-4 transition-transform duration-300 ${
              isHovered ? "translate-x-1" : ""
            }`}
          />
        </Button>
      </div>

      <div
        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r light:from-blue-500 light:to-violet-500 dark:bg-white transition-all duration-500 ease-out ${
          isHovered ? "w-full" : "w-0"
        }`}
      />
    </div>
  );
};

export default function Services({ onlyServices }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      id="services"
      className="min-h-screen light:bg-slate-50 font-sans px-4 md:px-8 lg:px-[100px]"
    >
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

      <section className="py-20 max-w-7xl mx-auto">
        {onlyServices && (
          <div
            className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
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
              We deliver cutting-edge technology services designed to elevate
              your business. From robust infrastructure to stunning interfaces,
              we cover every aspect of your digital journey.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData
            .slice(0, onlyServices ? 6 : servicesData.length)
            .map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
        </div>

        {onlyServices && (
          <div className="mt-20 text-center">
            <Link
              href={"/services"}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-slate-900 rounded-full hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
            >
              View All Services
              <Layers className="ml-2 w-5 h-5" />
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
