import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  HardHat,
} from "lucide-react";
import {
  companyName,
  contactMail,
  contactNo,
  logo,
  pageDescription,
} from "@/lib/config";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact-us"
      className="light:bg-slate-50 dark:bg-slate-900 pt-16 pb-8 transition-colors duration-300 border-t border-slate-200 dark:border-slate-800 px-4 md:px-8 lg:px-[100px]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2 light:text-slate-900 dark:text-white font-extrabold text-2xl tracking-tight">
              <div className="h-10 aspect-square rounded-md relative bg-orange-500 text-white">
                <img src={logo} className="w-full h-full rounded-md" alt="" />
              </div>
              <div className="flex flex-col leading-5">
                <span className="uppercase montserrat">Powerstruct</span>
                <span className="text-xs tracking-wider">
                  Engineering Pvt Ltd
                </span>
              </div>
            </div>
            <p className="light:text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {pageDescription}
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 rounded-full light:bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm border border-slate-100 dark:border-slate-700"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider light:text-slate-900 dark:text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", url: "/" },

                { name: "Projects", url: "/projects" },
                { name: "Services", url: "/services" },
                { name: "Clients", url: "/#clients" },
                { name: "About Us", url: "/about" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    className="group flex items-center text-sm light:text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-orange-500"
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider light:text-slate-900 dark:text-white mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "Electrical Infrastructure",
                "Civil Engineering",
                "Telecom Towers",
                "Power Systems",
                "EPC Projects",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group flex items-center text-sm light:text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full light:bg-slate-300 dark:bg-slate-600 mr-3 group-hover:bg-orange-500 transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider light:text-slate-900 dark:text-white mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm light:text-slate-600 dark:text-slate-400">
                <MapPin size={18} className="text-orange-500 shrink-0 mt-0.5" />
                <span>
                  Powerstruct Engineering Pvt. Ltd.
                  <br />
                  Kharupetia, Darrang, Assam
                  <br />
                  India - 784115
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm light:text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                <Phone size={18} className="text-orange-500 shrink-0" />
                <a href={"tel:+91" + contactNo}>+91 {contactNo}</a>
              </li>
              <li className="flex items-center gap-3 text-sm light:text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                <Mail size={18} className="text-orange-500 shrink-0" />
                <a href={`mailto:${contactMail}`}>{contactMail}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t light:border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm light:text-slate-500 dark:text-slate-500">
            &copy; {currentYear} {companyName} All rights reserved.
          </p>
          <div className="flex gap-6 text-sm light:text-slate-500 dark:text-slate-500">
            <a
              href="/privacy-policy"
              className="hover:text-slate-400 dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="hover:text-slate-400 dark:hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/sitemap.xml"
              className="hover:text-slate-400 dark:hover:text-white transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
