"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { logo } from "@/lib/config";
import { Button } from "@heroui/react";
import ThemeToggle from "./ChangeTheme";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Mission & Vision", href: "/#missionandvission" },
    { name: "Projects", href: "/#projects" },
    { name: "Clients", href: "/#clients" },
    { name: "Team", href: "/team" },
    { name: "Gallary", href: "/gallery" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/#contact-us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-50 transition-all duration-300 sticky top-0 bg-transparent backdrop-blur-xl ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className=" py-2 px-4 md:px-8 lg:px-[100px] border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="shrink-0 flex items-center">
            <img
              src={logo}
              alt="Powerstruct Logo"
              className="hidden lg:block h-8 w-auto mr-2 object-contain rounded-xs"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div className="flex flex-col leading-none ">
              <span className="font-extrabold text-lg lg:text-2xl light:text-[#242424] tracking-tighter poppins">
                POWER<span className="text-[#095C9E]">STRUCT</span>
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex space-x-8 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="py-4 text-sm font-bold hover:text-[#14bcff] transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#14bcff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              ))}
              <div className="block h-10 w-16">
                <ThemeToggle />
              </div>
            </nav>
          </div>

          <div className="md:hidden flex items-center transition-all duration-500 ease-in-out">
            <ThemeToggle />
            <Button
              isIconOnly
              onPress={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X size={25} /> : <Menu size={25} />} hh
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out h-screen  ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 space-y-4 flex flex-col">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="font-medium text-lg border-b border-gray-700 pb-2 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
