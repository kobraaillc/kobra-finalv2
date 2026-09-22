import React from 'react';

function LeftArrow() {
  return (
    <button
     type="button"
     className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors"
     aria-label="Previous Slide"
     >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M15 18l-6-6 6-6" />
      </svg>
     </button>
  ); 
}

function RightArrow() {
  return (
    <button
     type="button"
     className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors"
     aria-label="Next Slide"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      </svg>
    </button>
  );
}

function SlideshowNavigation() {
  return (
    <div className="flex items-center gap-2">
      <button type="button" className="w-2.5 h-2.5 rounded-full bg-black" aria-label="Slide 1" />
      <button type="button" className="w-2.5 h-2.5 rounded-full bg-black/25 hover:bg-black/50 transition-colors" aria-label="slide 2" />
      <button type="button" className="w-2.5 h-2.5 rounded-full bg-black/25 hover:bg-black/50 transition-colors" aria-label="Slide 3" />
      <button type="button" className="w-2.5 h-2.5 rounded-full bg-black/25 hover:bg-black/50 transition-colors" aria-label="Slide 4" />
    </div>
  );
}

function HeaderSubcontent() {
  return (
    <div className="flex flex-col gap-2 items-start justify-between 2-full">
      <h2 className="text-xl md:text-2xl font-medium text-white tracking-tight">
        Engineered for High-Stakes Legal Operations & Firm Efficiency
      </h2>
      <h3 className="text-sm md: text-base font-normal text-gray-200 tracking-wide">
        AI-driven workflow optimization and litigation intelligence platform.
      </h3>
    </div>
  );
}

function HeaderContent () {
  return (
    <div className="relative z-10 flex flex-col gap-6 items-start max-w-4xl px-8 pb-16">
      <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight">
        Kobra AI
      </h1>
      <HeaderSubcontent />
    </div>
  );
}

function HeaderSection() {
  return (
    <header className="relative w-full h-[700px] md:h-[800px] flex flex-col justify-end overflow-hidden bg-black">
      <img
       src="/hero-bg.png"
       alt="Two women sitting at modern table talking with a city view behind them."
       className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      <HeaderContent />
    </header>
  );
}

function WelcomeSection() {
  return (
    <section className="w-full bg-white py-20 px-6 border-b border-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col gap-8 items-start">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black">
          Welcome to Kobra AI
        </h2>
        <div className="flex flex-col gap-4 text-neutral-800 text-base md:text-lg leading-relaxed tracking-tight max-w-3xl">
          <p>
            <span className="font-semibold">Kobra AI</span> aims to bring expertise in legal operations, workflow, and AI implementation into your everyday tasks and processes, committed to achieving the best possible outcome for our clients.
          </p>
          <p>
            We provide an AI tool with the understanding of hte complexities of legal operations and hte firms utilizing our services. We pride ourselves on our experience in the field We will coverly nearly every aspect of your company, ensuring that whatever your legal operation challenge, we have hte knowledge and tools to guide you. Now serving California, Nevada, and South Florida.
          </p>
        </div>
        <a 
         href="#consult"
         className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-black text-white text-sm font-medium tracking-wide hover:bg-neutral-800 transition-colors mt-2"
        >
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
}

function OfferingSection() {
  const offerings = [
    "Autonomous Contract Drafting & Clause Standardization",
    "Automated Discovery & Deposition Synthesis",
    "M&A Due Diligence & Portfolio Acceleration",
    "Corporate Governance & Intake Standardization",
    "Bar-Compliant AI Governance & Security Frameworks",
    "Custom Firm Model Fine-Tuning & Integration",
    "Non-Billable Drag Reduction & Worfklow Auditing"
  ];

  return (
    <section className="w-full bg-white py-20 px-6 border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h3 className="text-2xl md:text-4xl font-medium text-black tracking-tight leading-snug">
            Core Intelligence & Advisory Capabilities
          </h3>
          <a 
           href="#services"
           className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black text-white text-sm font-medium tracking-wide hover:bg-neutral-800 transition-colors w-fit"
          >
            Services
          </a>
        </div>
        <div className="w-full md:w-1/2">
          <ul className="flex flex-col gap-4 text-black text-lg md:text-xl font-medium tracking-tight">
            {offerings.map((item, index) => (
              <li key={index} className="hover:text-neutral-600 transition-colors cursor-default">
                {item}
              </li>
            ))}
            <li className="text-neutral-400 font-normal text-base capitalize tracking-widest pt-2">
              + More
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function OurClientsSection() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto flext flex-col gap-12 items-center">
        <div className="flex flex-col items-center text-center gap-3 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-medium text-black tracking-tight">
            Hear From Our Clients
          </h2>
          <p className="text-neutral-600 text-sm md:text-base">
            We beleive that our client experiences speaks volumes about the quality of our legal services. Here is what some of them have to say.
          </p>
        </div>

        <div className="w-full bg-[#f5f5f5] rounded-3xl p-8 md:p-12 flex flex-col gap-8 items-center text-center">
          <blockquote className="text-xl md:text-2xl font-normal text-black leading-relaxed max-2-3xl">
            The process was clear and straightforward. Today AI handled my case work with such care and professionalism. I now have complete peace of mind knowing my company's future is secuire.
          </blockquote>
          <cite className="not-italic text-sm font-medium text-neutral-600">
            David L., Business Owner
          </cite>

          <div className="flex items center justify-center gap-6 pt-4">
            <LeftArrow />
            <SlideshowNavigation />
            <RightArrow />
          </div>

          <p className="text-center text-sm text-neutral-500 tracking-tight max-2-md">
            Let us help you navigate your business needs with confidence and peace of mind. Contact Kobra AI today.
          </p>
        </div>
      </div>
    </section>
  );
}

function ConsultTiers() {
  return (
    <section id="consult" className="w-full bg-neutral-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <h2 className="text-3xl md:text-5xl font-medium text-center tracking-tight">
          Consult Tiers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tier 1 */}
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium text-white">AI Audit & Worklow Roadmap</h3>
              <ul className="flex flex-col gap-3 text-sm text-netural-400 space-y-1">
                <li>-Comprehensive audit of exiting law firm SOPs and legalworkflows</li>
                <li>-Identification of automation opportunities</li>
                <li>-Bottlenecks and high-ROI AI integration points</li>
                <li>-custom AI implementation Blueprint and technical architecture guide</li>
              </ul>
            </div>
          </div>

          {/* Tier 2*/}
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium text-white">Custom Legal AI Engineering</h3>
              <ul className="flex flex-col gap-3 text-sm text-neutral-400 space-y-1">
                <li>-Bespoke prompt engineering and custom database schema creation</li>
                <li>-Integration of Kobra AI Core into existing firm case management software</li>
                <li>-Hands on staff training, prompt optimization, and litigation workflow tuning</li>
              </ul>
            </div>
            <p className="text-xs text-neutral-500 font-mono">Fixed-Fee Strategy Engagement / Project-Based Retainer</p>
          </div>

          {/* Tier 3*/}
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium text-white">Strategic AI Executive Retainer</h3>
              <ul className="flex flex-col gap-3 text-sm text-neutral-400 space-y-1">
                <li>-Ongoing advisory on AI governance, legal tech compliance, and risk mitigation</li>
                <li>-Continuous model performance monitoring</li>
                <li>-Quarterly workflow efficiency reviews and priority technical access</li>
              </ul>
            </div>
            <p className="tex-xs text-neutral-500 font-mono">Monthly / Annual Advisory Retainer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImageDividerSection() {
  return(
    <section className="w-full bg-black text-white py-20 px-6 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div className="flex flex-col gap-2">
          <span className="text-5xl md:text-6xl font-semibold tracking-tight text-white">800+</span>
          <span className="text-neutral-400 text-sm">Appointments Scheduled</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-5xl md:text-6xl font-semibold tracking-tight text-white">300+</span>
          <span className="text-neutral-400 textsm">Appointments Scheduled</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-5xl md:text-6xl font-semibold tracking-tight text-white">700+</span>
          <span className="text-neutral-400 text-sm">Emails Sent</span>
        </div>
      </div>
    </section>
  );
}

function FooterHeader() {
  return (
    <div className="flex items-center gap-4">
      <img
       src="/kobra-logo.png"
       alt="Kobra AI Logo"
       className="h-12 w-auto object-contain"
      />
      <span className="text-2xl font-medium tracking-tight text-black">
        kobra ai
      </span>
    </div>
  );
}

function FooterSubhead() {
  return (
    <p className="text-lg text-neutral-700 tracking-tight max-w-xl">
      Blueprint the workflow. Designing legal AI.
    </p>
  );
}

function ContactColumn() {
  return (
    <div className="flex flex-col gap-2 text-xs text-neutral-500 max-w-sm leading-relaxed">
      <p className="font-semibold text-neutral-700">DISCLAIMER:</p>
      <p>
        We are not a law firm; Kobra AI is an legal technology company. 
      </p>
    </div>
  );
}

function SocialsColumn() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-semibold tracking-wide text-black uppercase">
        Socials
      </p>
      <div className="flex flex-col gap-2 text-sm text-neutral-600">
        <a
         href="https://www.facebook.com"
         target="_blank"
         rel="noopener no referrer"
         className="hover:text-black transition-colors"
        >
          Facebook
        </a>
        <a
         href="https://linkedin.com"
         target="_blank"
         rel="noopener no referrer"
         className="hover:text-black transition-colors"
         >
          Linkedin
         </a>
         <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener no referrer"
          className="hover:text-black transition-colors"
          >
            Instagram
          </a>
      </div>
    </div>
  );
}

function FooterContactInformation() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
      <ContactColumn />
      <SocialsColumn />
    </div>
  );
}

function FooterCopyright() {
  return (
    <div className="flex flex-col md:flex-row justify between items-center text-xs text-neutral-500 pt-12 border-t border-neutral-200 gap-4">
      <p className="font-medium text-black">kobra ai</p>
      <p>copy; {new Date().getFullYear()} All rights Reserved</p>
    </div>
  );
}

function FooterSection() {
  return (
    <footer className="w-full bg-white text-black py-16 px-8 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <FooterHeader />
        <FooterSubhead />
        <FooterContactInformation />
        <FooterCopyright />
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white text-black antialiased">
      <HeaderSection />
      <WelcomeSection />
      <OfferingSection />
      <OurClientsSection />
      <ConsultTiers />
      <ImageDividerSection />
      <FooterSection />
    </main>
  );
}