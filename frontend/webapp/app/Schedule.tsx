"use client";

import React, { useState } from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/kobra-logo.png"
            alt="Kobra AI Logo"
            className="h-8 w-auto object-contain"
          />
          <span className="text-xl font-bold tracking-wider text-black">
            KOBRA AI
          </span>
        </a>
        <div className="flex items-center gap-8 text-sm text-neutral-700 font-medium">
          <a href="/" className="hover:text-black transition-colors">
            Home
          </a>
          <a href="/services" className="hover:text-black transition-colors">
            Services
          </a>
          <a href="/about" className="hover:text-black transition-colors">
            About
          </a>
          <a
            href="/schedule-a-consult"
            className="px-4 py-2 bg-black text-white font-semibold rounded-lg hover:bg-neutral-800 transition-colors"
          >
            Schedule Consult
          </a>
        </div>
      </div>
    </nav>
  );
}


function HeaderSection() {
  return (
    <header className="relative w-full h-80 md:h-96 flex items-end pb-12 px-6 md:px-16 bg-neutral-900 border-b border-neutral-200 overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img
          alt="Two women and a man talking in a modern office room"
          className="w-full h-full object-cover opacity-60"
          src="schedule-consult-bg.png"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <h1 className="text-5xl md:text-8xl font-normal text-white tracking-tight">
          Take the next step
        </h1>
      </div>
    </header>
  );
}


function NextStepItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: React.ReactNode;
}) {
  return (
    <div className="border-t border-black/20 py-10 flex flex-col md:flex-row items-start justify-between gap-8">
      <p className="text-7xl md:text-9xl font-extralight text-black tracking-tighter leading-none w-32">
        {number}
      </p>
      <div className="flex-1 space-y-4 max-w-2xl">
        <h3 className="text-2xl md:text-3xl font-medium text-black">{title}</h3>
        <div className="text-base md:text-lg text-neutral-800 leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
}

function OurServicesContent() {
  return (
    <div className="space-y-12">
      <div className="border-b border-black/20 pb-6">
        <h2 className="text-3xl md:text-5xl font-normal text-black tracking-tight leading-tight">
          Ready to begin?
          <br />
          <span className="text-neutral-500">Let's Discuss</span>
        </h2>
      </div>

      <div className="space-y-4">
        {/* Step 1 */}
        <NextStepItem
          number="1."
          title="Demo"
          description={
            <p>
              Grab your demo key and test Kobra AI for your processes and workflow.
              During this session, discover how it can assess your situation, provide
              guidance, and outline potential strategies. Additionally, schedule a
              consultation to discuss your legal needs.
            </p>
          }
        />

        {/* Step 2 */}
        <NextStepItem
          number="2."
          title="Kobra AI"
          description={
            <p>
              If you choose to move forward, Kobra AI will always be there for you. This
              includes gathering key documents, outlining your legal options, and
              developing a tailored plan designed to achieve the best possible outcome,
              on and off the court.
            </p>
          }
        />

        {/* Step 3 */}
        <NextStepItem
          number="3."
          title="Professional"
          description={
            <p>
              Ready to take your workflows to the next level? Go pro with Kobra AI
              Professional for additional tools and services including priority customer
              service, priority consult, and even more tools.
            </p>
          }
        />
      </div>
    </div>
  );
}


function IntakeFormSection() {
  const [orgType, setOrgType] = useState("Law Firm");
  const [acceptedDisclaimer, setAcceptedDisclaimer] = useState(false);

  return (
    <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 md:p-12 space-y-12">
      <div>
        <h2 className="text-4xl md:text-6xl font-normal text-black tracking-tight">
          Start Here
        </h2>
        <p className="text-neutral-600 mt-2 text-lg">
          Acquire a key and discover Kobra AI.
        </p>
      </div>

      <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
        {/* Contact Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-neutral-700">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black outline-none text-black"
              placeholder="John"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-neutral-700">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black outline-none text-black"
              placeholder="Doe"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-neutral-700">
              Company <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black outline-none text-black"
              placeholder="Firm / Organization Name"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-neutral-700">
              Current Role <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black outline-none text-black"
              placeholder="Managing Partner, General Counsel, etc."
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-neutral-700">
              Company Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black outline-none text-black"
              placeholder="john@firm.com"
            />
          </div>
        </div>

        {/* Organization Type Selector */}
        <div className="space-y-4 border-t border-neutral-200 pt-8">
          <label className="block text-lg font-medium text-black">
            Organization Type: <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Law Firm",
              "Corporate Legal Department",
              "Legal Tech Startup / Vendor",
              "Other",
            ].map((option) => (
              <label
                key={option}
                className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                  orgType === option
                    ? "bg-black text-white border-black"
                    : "bg-white text-neutral-800 border-neutral-300 hover:border-neutral-400"
                }`}
              >
                <input
                  type="radio"
                  name="orgType"
                  value={option}
                  checked={orgType === option}
                  onChange={() => setOrgType(option)}
                  className="hidden"
                />
                <span
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    orgType === option ? "border-white bg-white" : "border-neutral-400"
                  }`}
                />
                <span className="font-medium text-sm md:text-base">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Advisory Disclaimer Checkbox */}
        <div className="border-t border-neutral-200 pt-8 flex items-start gap-4">
          <input
            type="checkbox"
            id="disclaimer"
            required
            checked={acceptedDisclaimer}
            onChange={(e) => setAcceptedDisclaimer(e.target.checked)}
            className="mt-1 h-5 w-5 rounded border-neutral-300 text-black focus:ring-black cursor-pointer"
          />
          <label htmlFor="disclaimer" className="text-sm text-neutral-600 leading-relaxed cursor-pointer">
            I understand that Kobra AI provides non-legal, strategic, operational,
            and legal technology advisory services only. Kobra AI does not act as legal
            counsel or provide formal legal representation.{" "}
            <span className="text-red-500 font-bold">*</span>
          </label>
        </div>

        {/* CTA Button */}
        <div className="pt-4 flex justify-start">
          <button
            type="submit"
            className="px-8 py-4 bg-black text-white font-semibold text-xl rounded-full hover:bg-neutral-800 transition-all flex items-center gap-3 shadow-md"
          >
            <span>Request a Demo</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}



function NextStepsSection() {
  return (
    <main className="bg-white py-16 px-6 md:px-16 max-w-6xl mx-auto space-y-24">
      <OurServicesContent />
      <IntakeFormSection />
    </main>
  );
}


function FooterSection() {
  return (
    <footer className="bg-white border-t border-neutral-200 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Branding */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/kobra-logo.png"
              alt="Kobra AI Logo"
              className="h-8 w-auto object-contain"
            />
            <span className="text-2xl font-normal text-black tracking-tight">
              kobra ai
            </span>
          </div>
          <p className="text-sm text-neutral-500">
            Blueprint the workflow. Designing legal AI.
          </p>
        </div>

        {/* Contact & Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-neutral-600">
          {/* Column 1: Disclaimer */}
          <div className="space-y-2">
            <p className="leading-relaxed">
              <span className="font-semibold text-black">DISCLAIMER:</span> We
              are <span className="font-bold text-black">not</span> a law firm.
              Kobra AI is a legal AI systems tool.
            </p>
          </div>

          {/* Column 2: Spacer */}
          <div></div>

          {/* Column 3: Socials */}
          <div className="space-y-2">
            <p className="font-medium text-black text-sm mb-2">Socials</p>
            <div className="flex flex-col gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400 gap-4">
          <p>kobra ai</p>
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}


export default function ScheduleConsult() {
  return (
    <div className="min-h-screen bg-white text-black pt-20">
      <Navbar />
      <HeaderSection />
      <NextStepsSection />
      <FooterSection />
    </div>
  );
}
