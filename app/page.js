"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import MissionAndVision from "./components/MissionAndVision";

export default function Home() {
  return (
    <div className="tracking-[-1px]">
      <Navbar />
      <Hero />
      <Services onlyServices={true} />
      <MissionAndVision />
      <Clients />
      <Projects />
      <Footer />
    </div>
  );
}
