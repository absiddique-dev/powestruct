"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { logo } from "@/lib/config";
import { Button } from "@heroui/react";
import ThemeToggle from "./ChangeTheme";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navigation Items
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Mission & Vision", href: "/#missionandvission" },
    { name: "Clients", href: "/#clients" },
    { name: "Projects", href: "/#projects" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/#contact-us" },
  ];

  // Handle Scroll for slight shadow effect
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
      <div className=" py-4 px-4 md:px-8 lg:px-[100px] border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="shrink-0 flex items-center">
            <img
              src={logo}
              alt="Powerstruct Logo"
              className="hidden lg:block h-11 w-auto mr-2 object-contain rounded-xs"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div className="flex flex-col leading-none ">
              <span className="font-extrabold text-lg lg:text-2xl light:text-[#242424] tracking-tighter poppins">
                POWER<span className="text-[#095C9E]">STRUCT</span>
              </span>
              <span className="text-xs font-semibold tracking-widest text-[#14bcff] uppercase">
                Engineering Pvt. Ltd.
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="py-4 text-sm font-bold hover:text-[#14bcff] transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#14bcff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              ))}
              <ThemeToggle />
            </nav>
          </div>

          <div className="md:hidden flex items-center transition-all duration-500 ease-in-out">
            <ThemeToggle />
            <Button isIconOnly onPress={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={25} /> : <Menu size={25} />}
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
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="font-medium text-lg border-b border-gray-700 pb-2 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
