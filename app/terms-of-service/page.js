"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { contactMail, contactNo } from "@/lib/config";

const TermsOfService = () => {
  return (
    <div>
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <div className="mb-12">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-sm mb-6"
          >
            <ArrowLeft size={16} /> Back
          </button>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Terms of Service
          </h1>
          <p className="text-lg border-l-4 pl-6">
            Please read these terms and conditions carefully before using our
            service.
          </p>
          <p className="mt-4 text-sm opacity-70">
            Last Updated: November 24, 2024
          </p>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using this website, you accept and agree to be
              bound by the terms and provision of this agreement. In addition,
              when using these particular services, you shall be subject to any
              posted guidelines or rules applicable to such services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
            <p className="leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the
              materials (information or software) on Powerstruct's website for
              personal, non-commercial transitory viewing only. This is the
              grant of a license, not a transfer of title, and under this
              license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>modify or copy the materials;</li>
              <li>
                use the materials for any commercial purpose, or for any public
                display (commercial or non-commercial);
              </li>
              <li>
                attempt to decompile or reverse engineer any software contained
                on Powerstruct's website;
              </li>
              <li>
                remove any copyright or other proprietary notations from the
                materials; or
              </li>
              <li>
                transfer the materials to another person or "mirror" the
                materials on any other server.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
            <p className="leading-relaxed">
              The materials on Powerstruct's website are provided on an 'as is'
              basis. Powerstruct makes no warranties, expressed or implied, and
              hereby disclaims and negates all other warranties including,
              without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
            <p className="leading-relaxed">
              In no event shall Powerstruct or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the use
              or inability to use the materials on Powerstruct's website, even
              if Powerstruct or a Powerstruct authorized representative has been
              notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Governing Law</h2>
            <p className="leading-relaxed">
              These terms and conditions are governed by and construed in
              accordance with the laws of India and the State of Assam, and you
              irrevocably submit to the exclusive jurisdiction of the courts in
              that State or location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
            <p className="leading-relaxed mb-2">
              If you have any questions about these Terms, please contact us:
            </p>
            <div>
              <strong>By email:</strong> {contactMail}
            </div>
            <div>
              <strong>By phone:</strong> +91 {contactNo}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
