"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

const FOOTER_COLUMNS = [
  {
    title: "GET STARTED",
    links: [
      { label: "Pricing", href: "https://wisprflow.ai/pricing" },
      { label: "Privacy & Security", href: "https://wisprflow.ai/privacy" },
      { label: "Web demo", href: "https://wisprflow.ai/try-flow" },
      {
        label: "Why Flow vs. Built-in Dictation",
        href: "https://wisprflow.ai/why-flow",
      },
      { label: "Microphone guide", href: "https://wisprflow.ai/microphones" },
      { label: "Merch store", href: "https://shop.wisprflow.ai/" },
    ],
  },
  {
    title: "PROFESSIONALS",
    links: [
      { label: "Leaders", href: "https://wisprflow.ai/leaders" },
      { label: "Developers", href: "https://wisprflow.ai/vibe-coding" },
      { label: "Marketers", href: "https://wisprflow.ai/marketers" },
      { label: "Creators", href: "https://wisprflow.ai/creators" },
      {
        label: "Customer Support",
        href: "https://wisprflow.ai/customer-support",
      },
      { label: "Students", href: "https://wisprflow.ai/students" },
      { label: "Lawyers", href: "https://wisprflow.ai/lawyers" },
      { label: "Accessibility", href: "https://wisprflow.ai/accessibility" },
      { label: "Sales", href: "https://wisprflow.ai/sales" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Case studies", href: "https://wisprflow.ai/case-studies" },
      { label: "Blog", href: "https://wisprflow.ai/post" },
      {
        label: "Notetaker resources",
        href: "https://wisprflow.ai/notetaker-resources",
      },
      {
        label: "AI prompting guide",
        href: "https://wisprflow.ai/ai-prompting-guide",
      },
      { label: "Workflows", href: "https://wisprflow.ai/workflows" },
      {
        label: "Flow vs Gboard voice typing",
        href: "https://wisprflow.ai/flow-vs-gboard",
      },
      {
        label: "Flow vs Apple Dictation",
        href: "https://wisprflow.ai/flow-vs-apple-dictation",
      },
      { label: "What's new", href: "https://wisprflow.ai/whats-new" },
      { label: "Vibe coding", href: "https://wisprflow.ai/vibe-coding" },
      { label: "Bug bounty", href: "https://wisprflow.ai/bug-bounty" },
      { label: "Talk to support", href: "https://docs.wisprflow.ai/" },
      { label: "Talk to sales", href: "https://wisprflow.ai/contact-sales" },
      { label: "Help center", href: "https://docs.wisprflow.ai/" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About", href: "https://wisprflow.ai/company" },
      { label: "Careers", href: "https://wisprflow.ai/careers" },
      { label: "Trust Center", href: "https://trust.wisprflow.ai/" },
      { label: "Become an affiliate", href: "https://wisprflow.ai/affiliates" },
      {
        label: "Media Kit",
        href: "https://wisprflow.notion.site/Wispr-Flow-Press-Kit-1ac40f78655e8065be14c7fd5bb33f28",
      },
    ],
  },
];

export default function CtaAndFooter() {
  return (
    <>
      {/* Full-bleed Rounded Bottom CTA Section (section_startflowing) */}
      <section className="section_startflowing bg-[#FFFFEB] px-0 pb-12">
        <div className="relative w-full min-h-[680px] md:min-h-[840px] rounded-[40px] md:rounded-[64px] overflow-hidden flex flex-col items-center justify-center text-center px-6 py-24">
          {/* Background Image */}
          <img
            src="/assets/cta-bg.jpg"
            alt="You have a way with words. Now, two."
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/15" />

          {/* Content */}
          <div className="relative z-10 max-w-[980px] mx-auto text-[#FFFFEB]">
            <h2 className="font-garamond text-[56px] sm:text-[84px] md:text-[120px] leading-[0.95] tracking-[-0.036em] mb-8">
              You have a way with
              <br />
              words. Now, <em className="italic font-normal">two.</em>
            </h2>

            <p className="text-[16px] md:text-[18px] text-[#FFFFEB]/90 max-w-[520px] mx-auto leading-[1.5] mb-9 font-normal">
              Talk thoughts into writing with Flow and conversations into
              meeting notes with Notetaker. Both are in one app, free.
            </p>

            <a
              href="https://wisprflow.ai/downloads"
              className="inline-flex items-center gap-2.5 bg-[#EBDCFF] hover:bg-[#e1ccff] text-[#1A1A1A] font-medium text-[15px] px-7 py-4 rounded-[12px] border border-[#1A1A1A] transition-transform active:scale-[0.99] shadow-lg"
            >
              <img src="/assets/windows.svg" alt="" className="w-4 h-4" />
              <span>Get started on Windows</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section (section_footer) */}
      <footer className="section_footer bg-[#FFFFEB] text-[#1A1A1A] pt-12 pb-8 px-4 md:px-12 overflow-hidden">
        <div className="max-w-[1260px] mx-auto">
          {/* PRODUCTS Label & Two Horizontal Product Cards */}
          <div className="mb-16">
            <div className="text-[12px] tracking-[0.16em] uppercase font-medium text-[#1A1A1A]/50 mb-4">
              PRODUCTS
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Product Card 1: Wispr Flow Dictation */}
              <a
                href="https://wisprflow.ai/downloads"
                className="group bg-[#E4E4D0] rounded-[20px] p-4 md:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-5 md:gap-6 hover:bg-[#dcdcc4] transition-colors"
              >
                <div className="w-full sm:w-[160px] h-[140px] sm:h-[148px] rounded-[14px] bg-[#EBDCFF] shrink-0 flex items-center justify-center p-4">
                  <img
                    src="/assets/flowbar.svg"
                    alt="Wispr Flow Dictation"
                    className="w-[110px] h-auto object-contain"
                  />
                </div>
                <div className="flex-1 py-1">
                  <h3 className="text-[19px] md:text-[20px] font-semibold text-[#1A1A1A] mb-2">
                    Wispr Flow Dictation
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-[#1A1A1A]/75 leading-[1.45] mb-4 max-w-[360px]">
                    The voice-to-text AI that turns speech into clear, polished
                    writing in every app.
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#1A1A1A]">
                    <span>Download free</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>

              {/* Product Card 2: Wispr Flow Notetaker */}
              <a
                href="https://wisprflow.ai/notetaker"
                className="group bg-[#E4E4D0] rounded-[20px] p-4 md:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-5 md:gap-6 hover:bg-[#dcdcc4] transition-colors"
              >
                <div className="w-full sm:w-[160px] h-[140px] sm:h-[148px] rounded-[14px] bg-[#034F46] shrink-0 flex items-end justify-center pt-5 px-4 overflow-hidden">
                  <img
                    src="/assets/transcript-new.png"
                    alt="Wispr Flow Notetaker"
                    className="w-full h-auto object-cover object-top rounded-t-[8px]"
                  />
                </div>
                <div className="flex-1 py-1">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-[19px] md:text-[20px] font-semibold text-[#1A1A1A]">
                      Wispr Flow Notetaker
                    </h3>
                    <span className="bg-[#F59E42] text-[#1A1A1A] text-[12px] font-semibold px-2.5 py-0.5 rounded-full">
                      New
                    </span>
                  </div>
                  <p className="text-[14px] md:text-[15px] text-[#1A1A1A]/75 leading-[1.45] mb-4 max-w-[360px]">
                    AI meeting notes accurate enough to act on. Works in all
                    meetings.
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#1A1A1A]">
                    <span>Download free</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* 4 Navigation Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <div className="text-[12px] tracking-[0.16em] uppercase font-medium text-[#1A1A1A]/50 mb-5">
                  {col.title}
                </div>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[14px] md:text-[15px] text-[#1A1A1A] hover:text-[#1A1A1A]/65 transition-colors font-normal"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Giant Full-Width Wispr Flow Wordmark Graphic */}
          <div className="w-full pt-4 pb-8">
            <img
              src="/assets/flow-wordmark.svg"
              alt="Wispr Flow"
              className="w-full h-auto object-contain select-none"
            />
          </div>

          {/* Bottom Legal / Social Bar */}
          <div className="pt-6 border-t border-[#1A1A1A]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[13px] text-[#1A1A1A]/65">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span>© Wispr Flow 2026</span>
              <a
                href="https://wisprflow.ai/terms-of-service"
                className="hover:text-[#1A1A1A] transition-colors"
              >
                Terms
              </a>
              <a
                href="https://wisprflow.ai/privacy-policy"
                className="hover:text-[#1A1A1A] transition-colors"
              >
                Privacy
              </a>
              <a
                href="https://wisprflow.ai/data-controls"
                className="hover:text-[#1A1A1A] transition-colors"
              >
                Data Controls
              </a>
              <a
                href="https://wisprflow.ai/#"
                className="hover:text-[#1A1A1A] transition-colors"
              >
                Do Not Sell or Share My Personal Information
              </a>
              <a
                href="https://wisprflow.ai/#"
                className="hover:text-[#1A1A1A] transition-colors"
              >
                Privacy Settings
              </a>
            </div>

            <div className="flex items-center gap-5">
              <a
                href="https://x.com/wisprflow"
                aria-label="X"
                className="hover:text-[#1A1A1A] transition-colors"
              >
                X (Twitter)
              </a>
              <a
                href="https://www.linkedin.com/company/wisprflow"
                aria-label="LinkedIn"
                className="hover:text-[#1A1A1A] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.youtube.com/@wisprflow"
                aria-label="YouTube"
                className="hover:text-[#1A1A1A] transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://www.instagram.com/wisprflow"
                aria-label="Instagram"
                className="hover:text-[#1A1A1A] transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

