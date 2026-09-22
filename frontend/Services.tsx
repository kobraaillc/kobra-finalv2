"use client";

import React from "react";

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
                    <a href="/" className="hover:text-black transition colors">
                    Home
                    </a>
                    <a href="/services" className="text-black font-bold">
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

function HeroAndStatsSection() {
    return (
        <section
         aria-label="Statistics about Kobra AI"
         className="bg-white border-b border-neutral-200"
        >
          {/* Hero Background Image Banner */}
          <div className="relative w-full h-64 md:h-80 overflow-hidden bg-neutral-900">
            <img
             src="/services-bg.png"
             alt="Kobra AI Services Banner"
             className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Stats Counters */}
          <div className="py-16">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                {/* Stat 1 */}
                <div className="space-y-2">
                    <p className="text-5xl font-bold tracking-tight text-black">8+</p>
                    <p className="text-sm font-medium text-neutral-600 uppercase tracking-wide">
                        Years of Experience
                    </p>
                </div>

                {/* Stat 2 */}
                <div className="space-y-2">
                    <p className="text-5xl font-bold tracking-tight text-black">30+</p>
                    <p className="text-sm font-medium text-neutral-600 uppercase tracking-wide">
                        AI Tools & Systems
                    </p>
                </div>

                {/* Stat 3 */}
                <div className="space-y-2">
                    <p className="text-5xl font-bold tracking-tight text-black">12</p>
                    <p className="text-sm font-medium text-neutral-600 uppercase tracking-wide">
                        Partners & Integrations
                    </p>
                </div>
            </div>
          </div>
        </section>
    );
}

function ServiceCard({
    title,
    subtitle,
    items,
}: {
    title: string;
    subtitle: string;
    items: string[];
}) {
  return (
    <div className="border-t border-black/20 pt-6 pb-8 flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div className="md:w-1/3 space-y-1">
          <p className="text-lg font-medium text-black">{title}</p>
          <p className="text-sm text-neutral-500">{subtitle}</p>
        </div>
        <div className="md:w-1/2 space-y-2 text-sm text-neutral-700">
         {items.map((item,idx) => (
            <p key={idx} className="leading-relaxed">
                -{item}
            </p>
         ))}
        </div>
    </div>
  ); 
}

function OurServicesSection() {
    return (
     <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
            {/* Header */}
            <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-black leading-light">
                    Navigating Compled Legal Landscapes? Kobra AI Can Help.
                </h2>
            </div>

            {/* Services List */}
            <div className="space-y-6">
                {/* Service 1 */}
                <ServiceCard
                 title="Corporate & Practice Management"
                 subtitle="Specific areas of business and coroporate law we support"
                 items={[
                    "Case Management & File Indexing",
                    "Template Steps for proceeding with the process",
                    "AI tools to assist with legal document generation",
                 ]}
                />
                {/* Service 2 */}
                <ServiceCard
                 title="Clerical & Litigation Support"
                 subtitle="Specific areas of litigation and dispute resolution"
                 items={[
                    "Email Services & Communication Summaries",
                    "Legal operation guidance and calendaring services",
                    "Legal research across internal & online sources",
                    "Template worfklows and draft gneeration",
                 ]}
                />

                {/*Service 3 */}
                <ServiceCard
                 title="Family Law & Client Itnake"
                 subtitle="Specific areas of family law we streamline"
                 items={[
                    "Basic services & intake questionnaires",
                    "AI-assisted we searches & discovery synthesis",
                    "Microsoft & Google service integrations",
                    "Native reminders and structured note-taking",
                 ]}
                />

                {/* Service 4 */}
                <ServiceCard
                 title="Criminal Defense & SOP Governance"
                 subtitle="Specific areas of criminal defense worfklow"
                 items={[
                    "Company standards & introduction for new hires",
                    "Training services for legal processes",
                    "Work standards guide & compliance tracking",
                    "Process instruction guide & automated execution",
                 ]}
                />
            </div>
        </div>
     </section>
    );
}

function FooterSection() {
    return (
      <footer className="bg-white broder-t border-neutral-200 py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
            {/* Header Branding */}
            <div className="flex flex-col md:flex-row justify between items-start md:items-center gap-4">
                <div className="flex items-center gap-3">
                    <img
                     src="/kobra-logo.png"
                     alt="Kobra AI logo"
                     className="h-8 w-auto object-contain"
                    />
                    <span className="text-2xl font-normal text-black tracking-tight">
                        kobra ai
                    </span>
                </div>
                <p className="text-sm text-neutral-600">
                    Blueprint the workflow. Designing Legal AI.
                </p>
            </div>

            {/* Contact & Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-neutral-600">
                {/* Column 1: Disclaimer */}
                <div className="space-y-2">
                    <p className="leading-relaxed">
                        <span className="font-semibold text-black">DISCLAIMER:</span>We 
                        are <span className="font-bold text-black">not</span>a law firm.
                        Kobra AI is a legal technology company.
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
                         className="hover:text-black transition colors"
                        >
                            Linkedin
                        </a>
                        <a
                         href="https://instagram.com"
                         target="_blank"
                         rel="noreferrer"
                         className="hover:text-black transition colors"
                        >
                            Instagram 
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify between items-center text-xs text-neutral-400 gap-4">
                <p>kobra ai</p>
                <p>&copy{new Date().getFullYear()} All Rights Reserved</p>
            </div>
        </div>
      </footer>
    );
}

export default function Services() {
    return(
        <main className="min-h-screen bg-white text-black pt-20">
            <Navbar />
            <HeroAndStatsSection />
            <OurServicesSection />
            <FooterSection />
        </main>
    );
}