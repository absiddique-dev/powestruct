"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="tracking-[-1px]">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}
