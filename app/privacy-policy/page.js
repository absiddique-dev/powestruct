"use client";
import React from "react";
import { Shield, Lock, Eye, FileText, Mail, ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { companyName, contactMail, officeAddress } from "@/lib/config";

const Section = ({ icon: Icon, title, children }) => (
  <div className="mb-10">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 text-orange-600 rounded-lg">
        <Icon size={20} />
      </div>
      <h2 className="text-xl font-bold  ">{title}</h2>
    </div>
    <div className="pl-12  leading-relaxed text-sm md:text-base space-y-4">
      {children}
    </div>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <div className="mb-16">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-sm  hover:text-orange-600 mb-6 transition-colors"
          >
            <ArrowLeft size={16} /> Back
          </button>

          <h1 className="text-4xl md:text-5xl font-extrabold   mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg  border-l-4 border-orange-500 pl-6">
            At {companyName}, we are committed to protecting your privacy and
            ensuring the security of your personal information. This policy
            outlines how we collect, use, and safeguard your data.
          </p>
          <p className="mt-4 text-sm ">Last Updated: November 24, 2024</p>
        </div>

        <div className="rounded-3xl p-8 md:p-12 border ">
          <Section icon={Eye} title="Information We Collect">
            <p>
              We may collect personal information such as your name, email
              address, phone number, and company details when you fill out forms
              on our website, subscribe to our newsletter, or contact us for
              project inquiries.
            </p>
            <p>
              We also automatically collect non-personal information through
              cookies and analytics tools, including your IP address, browser
              type, and pages visited, to improve our website experience.
            </p>
          </Section>

          <Section icon={FileText} title="How We Use Your Information">
            <p>The information we collect is used to:</p>
            <ul className="list-disc list-inside space-y-2 marker:text-orange-500">
              <li>
                Provide and improve our engineering and infrastructure services.
              </li>
              <li>
                Respond to your inquiries, support requests, and project
                consultations.
              </li>
              <li>
                Send updates, newsletters, and promotional materials (you may
                opt-out at any time).
              </li>
              <li>
                Analyze website traffic and usage patterns to enhance user
                experience.
              </li>
            </ul>
          </Section>

          <Section icon={Lock} title="Data Security">
            <p>
              We implement industry-standard security measures to protect your
              personal data from unauthorized access, alteration, disclosure, or
              destruction. However, please be aware that no method of
              transmission over the internet is 100% secure.
            </p>
          </Section>

          <Section icon={Shield} title="Third-Party Disclosure">
            <p>
              We do not sell, trade, or transfer your personally identifiable
              information to outside parties. This does not include trusted
              third parties who assist us in operating our website or conducting
              our business, so long as those parties agree to keep this
              information confidential.
            </p>
          </Section>

          <Section icon={Mail} title="Contact Us">
            <p>
              If you have any questions regarding this privacy policy or wish to
              exercise your data rights, please contact us at:
            </p>
            <div className="mt-4 p-4 rounded-xl border  inline-block">
              <div className="font-bold  ">Powerstruct Privacy Team</div>
              <a
                href={`mailto:${contactMail}`}
                className="text-blue-500 hover:underline block mt-1"
              >
                {contactMail}
              </a>
              <div className=" text-sm mt-1">{officeAddress}</div>
            </div>
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
