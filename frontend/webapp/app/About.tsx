"use client";

import React from "react";

function NavBar() {
    return( 
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200">
            <div className="max-w-7xl mx-auto px-6 py-4 flex-items-center justify-between">
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
                    <a href="/" className="hosver:text-black transition-colors">
                      Home
                    </a>
                    <a href="/services" className="hover:text-black transition-colors">
                      Services
                    </a>
                    <a href="/about" className="text-black font-bold">
                      About
                    </a>
                    <a
                     href="/schedule-a-consult"
                     className="px-4 py-2 bg-black text-white font-semibold rounded-lg hover:bg-neutral-800 transition-colors"
                    >
                      Schedule a Consult
                    </a>
                </div>
            </div>
        </nav>
    );
}

function AboutHero() { 
    return(
        <section className="bg-white border-b border-neutral-200">
            <div className="relative w-full h-72 md:h-96 overflow-hidden bg-neutral-900">
                <img
                 src="/about-us-hero-bg.png"
                 alt="Kobra AI Leadership Header"
                 className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from black/60 via transaparent to-transparent" />
            </div>
        </section>
    );
}

function AboutContent() {
    return(
        <section className="bg-white py-20 px-6">
            <div className="max-w-5xl mx-auto space-y-24">
                {/* EXECUTIVE 1: RYAN ASSADY */}
                <div className="space-y-8">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-normal tracking-tight text-black">
                            Ryan Assady, J.D.
                        </h1>
                        <p className="text-xl text-neutral-500 font-medium mt-1">
                            Founder & Chief Executive Officer
                        </p>
                        <p className="text-sm font-semibold tracking-wide text-neutral-400 mt-1 uppercase">
                            Kobra AI
                        </p>
                    </div>

                    {/* Section 1: Professional Overview */}
                    <div className="space-y-3">
                        <h2 className="text-xl font-semibold text-black border-b border-neutral-200 pb-2">
                            1. Professional Overview
                        </h2>
                        <p className="text-neutral-700 text-base leading-relaxed">
                            Ryan Assady, J.D., is Founder and Chief Executive Officer of Kobra AI, an intelligent document infrastructure and worfklow automation company engineered specifically for modern civil and commercial litigation. Combining over seven years of hand-on litigation legal operation experience with strategic legal AI implementation, Ryan designed Kobra AI to eliminte high-friction, operational bottlenecks that choke modern law practices, converting unstructured discovery and complex case files into pristine, court-ready deliverables in minutes.
                        </p>
                    </div>

                    {/* Section 2: Domain Expertise */}
                    <div className="space-y-3">
                        <h2 className="text-xl font-semibold text-black border-b border-neutral-200 pb-2">
                            2. Domain Expertise & Operational Command
                        </h2>
                        <ul className="list-disc pl-5 space-y-3 text-neutral-700 text-base leading-relaxed">
                            <li>
                                <span className="font-semibold text-black"> In-the-Trenches Litigation Experience:</span>Direct operational background managing complex civil litigation, product liability, personal injury, and high-volume commercial cases across prominent trial practices.
                            </li>
                            <li>
                                <span className="font-semibold text-black">E-Discovery & Document Production Mastery</span>Deep technical and practical command of the full discovery life cycle, including ingesting massive E-Discovery sets, structuring detailed factual chronologies, and executing complex document production and privelege logs.
                            </li>
                            <li>
                                <span className="font-semibold text-black">Procedural & Legal Architecture:</span>Specialist in state federal procedural frameworks-including California Code of Civil Procedure and Federal Rules of Civil Procedure-ensuring AI automation strictly adheres to court rules, pleading formatting, and jurisdictional standards.
                            </li>
                            <li>
                                <span className="font-semibold text-black">Operational Optimization & Leadership</span>Proven track record of optimzing law firm standard operating procedures, managing cross-functional litigation teams, and implementing high-efficency technology workflows.
                            </li>
                        </ul>
                    </div>

                    {/* Section 3: Education & Credentials */}
                    <div className="space-y-3">
                        <h2 className="text-xl font-semibold text-black border-b border-neutral-200 pb-2">
                            3. Education & Credentials
                        </h2>
                        <p className="text-neutral-700 text-base leading-relaxed">
                            Juris Doctor with specialized focus on civil litigation, prcoedual law, and legal technology systems.
                        </p>
                    </div>

                    {/* Section 4: Vision */}
                    <div className="space-y-3">
                        <h2 className="text-xl font-semibold text-black border-b border-neutral-200 pb-2">
                            4. Vision for Kobra AI
                        </h2>
                        <p className="text-neutral-700 text-base leading-relaxed">
                            Under Ryan's leadership, Kobra AI bridges the gap between first generation AI tools and true legal operation execution. By replacing archaic manual worflows with deterministic neural retrieval and zero-knowledge data pipelines, Kobra AI enables law firm legal operations to eliminate administrative drains, focus on high-level strategy, and deliver unparalleled economic efficency to their clients.
                        </p>
                    </div>
                </div>

                <hr className="border-neutral-200" />

                {/* EXECUTIVE 2: CARLOS ADAME */}
                <div className="space-y-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-8">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0 border border-neutral-200 shadow-sm">
                            <img
                             src="/carlos-bio-photo.png"
                             alt="Carlos Adame"
                             className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-normal tracking-tight text-black">
                                Carlos Adame
                            </h1>
                            <p className="text-xl text-neutral-500 font-medium mt-1">
                                Lead UI/UX Designer & Product Architect
                            </p>
                            <p className="text-sm font-semibold tracking-wide text-neutral-400 mt-1 uppercase">
                                Kobra AI
                            </p>
                        </div>
                    </div>
                    {/* Section 1: Professional Overview */}
                    <div className="space-y-3">
                        <h2 className="text-xl font-semibold text-black border-b border-neutral-200 pb-2">
                            1. Professional Overview
                        </h2>
                        <p className="text-neutral-700 text-base leading-relaxed">
                            Carlos Adame leads the visual strategy, user experince design, and frontend interface architecture for Kobra AI. Bridging high-stakes legal requirements with modern SaaS design, they translate compled legal worfklows into intuitive, minimalist, dark-mode default user interfaces designed specifically for legal practitioners, litigators, and corporate legal departments.
                        </p>
                    </div>

                    {/* Section 2: Core Design Strategy */}
                    <div className="space-y-3">
                        <h2 className="text-xl font-semibold text-black border-b border-neutral-200 pb-2">
                            2. Core Design & Product Strategy
                        </h2>
                        <ul className="list-disc pl-5 space-y-3 text-neutral-700 text-base leading-relaxed">
                            <li>
                                <span className="font-semibold text-black">Minimalist Legal Tech Design Systems:</span>Specialized in building high-focus, enterprise-grade interface design systems optimized for high-density information displays and multi-monitor desktop environments
                            </li>
                            <li>
                                <span className="font-semibold text-black">Interactive Legal Editor Architecture:</span>Designed Kobra Ai's signature split-screen interactive editor, seamlessly mapping original source document viewers with real time AI risk extraction, clause highlighting, and redlining tools.
                            </li>
                            <li>
                                <span className="font-semibold text-black">Workflow & Ingestion:</span>Architected low-friction onboarding and ingestion interfaces, including interactive drag-and-drop file hubs, pipeline selector workflow, and live processing visual indicators.
                            </li>
                            <li>
                                <span className="font-semibold text-black">Design Token Standardization:</span>Maintains strict visual identity guidelines across the application canvas, balancing sleek dark slate and charcoal surface palettes with functional status indicators for legal risk severity.
                            </li>
                        </ul>
                    </div>

                    {/* Section 3: Vision */}
                    <div className="space-y-3">
                        <h2 className="text-xl font-semibold text-black border-b border-neutral-200 pb-2">
                            3. Vision for Kobra AI Interface Strategy
                        </h2>
                        <p className="text-neutral-700 text-base leading-relaxed">
                            By eliminating UI friction and cognitive overload, the design vision at Kobra AI ensures that state-of-the-art legal artifical intelligence feels natural, deterministic, and court-ready. The result is an uncompromising user expereince where complex civil litigation files, contract playbooks, and discovery sets can be reviewed and editted effortlessly in real time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FooterSection() {
    return(
        <footer className="bg-white border-t border-neutral-200 py-16 px-6">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Header Branding */}
                <div className="flex flex-col md:flex-row justify between items-start md:items-center gap-4">
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
                        Blueprint the workflow. Designing legal AI
                    </p>
                </div>

                {/* Contact & Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-neutral-600">
                    {/* Column 1: Disclaimer */}
                    <div className="space-y-2">
                        <p className="leading-relaxed">
                            <span className="font-semibold text-black">DISCLAIMER:</span>We 
                            are <span className="font-bold text-black">not</span>a law firm.
                            Kobra AI is a legal technology and adivsory service firm. 
                        </p>
                    </div>

                    {/* Column 2: Sapce */}
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
                    <p>{new Date().getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default function About() {
    return(
        <main className="min-h-screen bg-white text-black pt-20">
            <NavBar />
            <AboutHero />
            <AboutContent />
            <FooterSection />
        </main>
    );
}